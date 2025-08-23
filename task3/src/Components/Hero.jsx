import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">TaskFlow</h1>
      <p className="text-lg md:text-xl mb-8">
        Organize your tasks and boost your productivity.
      </p>
      <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition flex items-center justify-center gap-2 mx-auto">
        Get Started
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </section>
  );
}
