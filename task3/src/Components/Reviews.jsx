import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      review: "TaskFlow changed how I manage my work. Simple and super effective!",
    },
    {
      name: "David K.",
      review: "I love how easy it is to organize tasks and stay productive.",
    },
    {
      name: "Emma L.",
      review: "Perfect for my team. Collaboration has never been this smooth.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition relative"
            >
              <FontAwesomeIcon
                icon={faQuoteLeft}
                size="2x"
                className="text-blue-500 absolute -top-4 left-4"
              />
              <p className="text-gray-700 italic mt-4">{t.review}</p>
              <h3 className="mt-6 font-semibold text-blue-600">- {t.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
