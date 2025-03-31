import React from 'react'
import SubscriptionCard from './SubscriptionCard'

const SubscriptionGrid = () => {
  return (
    <div className='container mx-auto px-4 py-6'>
        <h2>Subscription plans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {SubscriptionCard.map((sub)=>(
                <SubscriptionCard key={sub._id} subscription={sub} onSubscribe={handleSubscribe} />
            ))
            }
        </div>
    </div>
  )
}

export default SubscriptionGrid