import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faClock, faTasks } from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Why Choose TaskFlow?</h2>
        <div className="grid md:grid-cols-3 gap-8">

          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <FontAwesomeIcon icon={faCheckCircle} size="3x" className="text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mt-4">Easy Task Management</h3>
            <p className="text-gray-600 mt-2">
              Organize your daily tasks in one place with ease and clarity.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <FontAwesomeIcon icon={faClock} size="3x" className="text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mt-4">Stay On Track</h3>
            <p className="text-gray-600 mt-2">
              Get reminders and never miss deadlines.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <FontAwesomeIcon icon={faTasks} size="3x" className="text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mt-4">Collaborate Easily</h3>
            <p className="text-gray-600 mt-2">
              Share tasks and work together with your team effortlessly.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
