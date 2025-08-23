import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p>
          Contact us:{" "}
          <a href="mailto:support@taskflow.com" className="underline hover:no-underline">
            support@taskflow.com
          </a>
        </p>
        <div className="flex gap-4">
          <a
            href="#"
            className="hover:text-white transition text-xl"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="#"
            className="hover:text-white transition text-xl"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="#"
            className="hover:text-white transition text-xl"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      <p className="text-center mt-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} TaskFlow. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
