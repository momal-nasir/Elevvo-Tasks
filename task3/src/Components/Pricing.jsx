import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      features: ["Unlimited personal lists", "Basic reminders", "1 device sync"],
      highlight: false,
    },
    {
      name: "Pro",
      price: "$9",
      features: [
        "Advanced filters & tags",
        "Calendar integrations",
        "Unlimited devices",
      ],
      highlight: true,
    },
    {
      name: "Team",
      price: "$29",
      features: [
        "Shared workspaces",
        "Permissions & roles",
        "Priority support",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-6 rounded-2xl shadow hover:shadow-lg transition border ${
                plan.highlight ? "border-blue-500 ring-2 ring-blue-300" : "border-gray-200"
              }`}
            >
              {plan.highlight && (
                <div className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full inline-block mb-4 shadow">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-4xl font-extrabold mb-4">
                {plan.price}
                <span className="text-sm font-medium text-gray-500">/mo</span>
              </p>
              <ul className="mb-6 text-gray-700 space-y-2 text-left">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 rounded-xl font-semibold transition shadow-sm ${
                  plan.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-white text-gray-800 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {plan.highlight ? "Choose Pro" : plan.name === "Free" ? "Get Free" : "Start Team"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
