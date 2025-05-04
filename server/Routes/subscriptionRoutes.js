import { Router } from "express";
import { Subscription } from "../Models/subscription.js";
import authenticate from "../Middleware/auth.js";
import adminCheck from "../Middleware/adminCheck.js";
import User from "../Models/user.js";

const subscriptionRoutes = Router();

// Add a new subscription plan
subscriptionRoutes.post("/addPlan", authenticate, adminCheck, async (req, res) => {
    try {
        const { planId, planName, validity, description, price, offerPrice, bookLimit } = req.body;

        const existingPlan = await Subscription.findOne({ planId });
        if (existingPlan) {
            return res.status(400).json({ message: "Plan with this ID already exists" });
        }

        const newPlan = new Subscription({
            planId,
            planName,
            validity,
            description,
            price,
            offerPrice,
            bookLimit
        });

        await newPlan.save();
        res.status(201).json({ message: "Subscription plan added successfully", plan: newPlan });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Update a subscription plan
subscriptionRoutes.put("/updatePlan/:planId", authenticate, adminCheck, async (req, res) => {
    try {
        const { planId } = req.params;
        const updateData = req.body;

        const plan = await Subscription.findOne({ planId });
        if (!plan) {
            return res.status(404).json({ message: "Plan not found" });
        }

        if (updateData.planName) plan.planName = updateData.planName;
        if (updateData.validity) plan.validity = updateData.validity;
        if (updateData.description) plan.description = updateData.description;
        if (updateData.price) plan.price = updateData.price;
        if (updateData.offerPrice) plan.offerPrice = updateData.offerPrice;
        if (updateData.bookLimit) plan.bookLimit = updateData.bookLimit;

        await plan.save();
        res.status(200).json({ message: "Subscription plan updated successfully", plan });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Delete a subscription plan
subscriptionRoutes.delete("/deletePlan/:planId", authenticate, adminCheck, async (req, res) => {
    try {
        const { planId } = req.params;

        const plan = await Subscription.findOneAndDelete({ planId });
        if (!plan) {
            return res.status(404).json({ message: "Plan not found" });
        }

        res.status(200).json({ message: "Subscription plan deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// View all subscription plans
subscriptionRoutes.get("/viewPlans",async (req, res) => {
    try {
        const plans = await Subscription.find();
        res.status(200).json({ plans });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


// Buy a subscription plan
subscriptionRoutes.post("/buyPlan", authenticate, async (req, res) => {
    try {
        const { planId } = req.body;
        const userId = req.user.id;  

         const plan = await Subscription.findOne({ planId });
        if (!plan) {
            return res.status(404).json({ message: "Plan not found" });
        }

         const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

         const currentDate = new Date();
        if (user.subscriptionPlan.planId && user.subscriptionPlan.endDate > currentDate) {
            return res.status(400).json({ message: "You already have an active subscription" });
        }

         const startDate = new Date();
        const endDate = new Date();
        if (plan.validity.includes("month")) {
            const months = parseInt(plan.validity);  
            endDate.setMonth(endDate.getMonth() + months);
        } else if (plan.validity.includes("year")) {
            const years = parseInt(plan.validity);
            endDate.setFullYear(endDate.getFullYear() + years);
        } else {
            return res.status(400).json({ message: "Invalid plan validity format" });
        }

         user.subscriptionPlan = {
            planId: plan._id,
            startDate,
            endDate
        };

        await user.save();

        res.status(200).json({
            message: "Subscription purchased successfully",
            plan: {
                planId: plan.planId,
                planName: plan.planName,
                validity: plan.validity,
                startDate,
                endDate
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

 

 subscriptionRoutes.post("/checkout", authenticate, async (req, res) => {
    try {
        const { planId, paymentDetails } = req.body;
        const userId = req.user.id;  

         const plan = await Subscription.findOne({ planId });
        if (!plan) {
            return res.status(404).json({ message: "Plan not found" });
        }

         const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

         const currentDate = new Date();
        if (user.subscriptionPlan.planId && user.subscriptionPlan.endDate > currentDate) {
            return res.status(400).json({ message: "You already have an active subscription" });
        }

         if (!paymentDetails || !paymentDetails.transactionId) {
            return res.status(400).json({ message: "Invalid payment details" });
        }

         const startDate = new Date();
        const endDate = new Date();
        if (plan.validity.includes("month")) {
            const months = parseInt(plan.validity);
            endDate.setMonth(endDate.getMonth() + months);
        } else if (plan.validity.includes("year")) {
            const years = parseInt(plan.validity);
            endDate.setFullYear(endDate.getFullYear() + years);
        } else {
            return res.status(400).json({ message: "Invalid plan validity format" });
        }

         user.subscriptionPlan = {
            planId: plan._id,
            startDate,
            endDate
        };
        await user.save();

        res.status(200).json({
            message: "Subscription checkout successful",
            subscription: {
                planId: plan.planId,
                planName: plan.planName,
                validity: plan.validity,
                startDate,
                endDate
            },
            payment: {
                transactionId: paymentDetails.transactionId,
                status: "Success"
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


export default subscriptionRoutes;
