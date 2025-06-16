import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="shadow-sm py-6 text-center text-sm text-gray-600 space-y-3 font-quicksand">
      <p>Lean Canvas | Start Planning Your Startup — the Right Way</p>

      <div className="flex justify-center gap-6 text-xl text-gray-600">
        <a
          href="mailto:happyphiri.dev@gmail.com"
          aria-label="Email"
          className="hover:text-blue-600 transition-colors">
          <FaEnvelope className="text-xl" />
          <span className="sr-only">Email</span>
        </a>
        <a
          href="https://github.com/happy-phiri"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-blue-600 transition-colors">
          <FaGithub className="text-xl" />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/happy-phiri-91b0991b5"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-600 transition-colors">
          <FaLinkedin className="text-xl" />
          <span className="sr-only">LinkedIn</span>
        </a>
      </div>

      <p className="text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Happy Phiri. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
