"use client"
import React, { useState, useEffect } from 'react';

const pricingPlans = [
  {
    name: 'Basic',
    cost: '$4/month/user',
    features: ['Up to 10 graphs', 'Up to 500 chatbot queries'],
  },
  {
    name: 'Pro',
    cost: '$8/month/user',
    features: ['Up to 50 graphs', 'Up to 1000 chatbot queries', 'Email + live chat support'],
  },
  {
    name: 'Enterprise',
    cost: 'Contact for price',
    features: ['Unlimited graphs', 'Ability to upload custom PDFs', '24/7 phone + email support'],
  },
];

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    // You can perform any side effect here when the selected plan changes
    console.log('Selected Plan:', selectedPlan);
  }, [selectedPlan]);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32">
          <h2 className="mb-12 text-center text-3xl font-bold">Pricing</h2>

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-x-12">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`mb-6 lg:mb-0 ${
                  selectedPlan === plan ? 'ring-2 ring-primary' : ''
                }`}
              >
                <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                    <p className="mb-4 text-sm uppercase">
                      <strong>{plan.name}</strong>
                    </p>
                    <h3 className="mb-6 text-3xl">
                      <strong>{plan.name} Plan</strong>
                    </h3>
                  </div>
                  <div className="p-6">
                    <ol className="list-inside">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="mb-4 flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="p-4">
                    <button
                      type="button"
                      className="inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      onClick={() => handleSelectPlan(plan)}
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {selectedPlan && (
          <div className="p-4 bg-primary text-white rounded-md">
            <h3 className="text-lg font-semibold">Selected Plan: {selectedPlan.name}</h3>
            <p>Cost: {selectedPlan.cost}</p>
            <p>Features:</p>
            <ul className="list-inside">
              {selectedPlan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
