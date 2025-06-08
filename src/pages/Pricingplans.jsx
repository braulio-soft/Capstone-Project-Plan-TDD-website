// PricingPlans.jsx
import React from 'react';

const plans = [
  {
    name: 'Standard',
    price: '$11.99',
    features: ['Basic access', 'Limited support'],
    isRecommended: false,
  },
  {
    name: 'Level 1',
    price: '$12.99',
    features: ['All Standard features', 'Priority support'],
    isRecommended: true,
  },
  {
    name: 'Level 2',
    price: '$13.99',
    features: ['Everything in Level 1', 'Premium services'],
    isRecommended: false,
  },
];

const Pricingplans = () => {
  return (
    <div className="flex flex-col items-center px-4 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8">Choose Your Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-lg shadow-md p-6 border ${
              plan.isRecommended ? 'border-blue-500' : 'border-gray-200'
            } bg-white relative`}
          >
            {plan.isRecommended && (
              <div className="absolute top-0 right-0 bg-yellow-400 text-black px-3 py-1 text-xs font-bold rounded-bl-lg">
                Most Popular
              </div>
            )}
            <h3 className="text-xl font-semibold text-center mb-4">{plan.name}</h3>
            <p className="text-2xl font-bold text-center mb-4">{plan.price}/mo</p>
            <ul className="mb-6 space-y-2 text-gray-700">
              {plan.features.map((feature, index) => (
                <li key={index}>✔️ {feature}</li>
              ))}
            </ul>
            <button
              className={`w-full py-2 rounded ${
                plan.isRecommended
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 hover:bg-gray-300'
              } transition`}
            >
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricingplans;
