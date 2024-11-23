// // import React from 'react';

// // const Home = () => {
// //   return (
// //     <div className="page-container">
// //       <h2>Welcome to Sandile Energies!</h2>
// //       <p>Your energy solutions provider.</p>
// //     </div>
// //   );
// // };

// // export default Home;

// import React from 'react';
// import './Home.css'; // Import the CSS for Home styles

// const Home = () => {
//   return (
//     <div className="page-container">
//       {/* Welcome message and description */}
//       <div className="welcome-section">
//         <h2>Welcome to Sandile Energies!</h2>
//         <p>Your energy solutions provider.</p>
//       </div>

//       {/* Flexbox container for the cards */}
//       <div className="card-container">
//         <div className="info-card">
          // <h3>Empowering Your Energy Choices</h3>
          // <p>
          //   Our platform empowers individuals and businesses to take control of their energy usage with real-time tracking, peer-to-peer energy trading, and personalized savings recommendations. Optimize your energy consumption, buy and sell excess energy, and receive tailored insights to reduce costs and improve sustainability. With features like energy audits, transaction history tracking, and token management, we make it easy to monitor your progress and contribute to a greener future.
          // </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa"; 
import { Link, useNavigate } from "react-router-dom";
import { IoSunnyOutline } from "react-icons/io5";
import Footer from '../footer/Footer';  // Import the Footer component
import './Home.css';

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu toggle
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginClick = () => {
    navigate("/auth"); // Redirect to the authentication page
  };

  const [faqOpen, setFaqOpen] = useState([false, false, false, false]);

  const toggleFaq = (index) => {
    const newFaqOpen = faqOpen.map((item, i) => (i === index ? !item : false));
    setFaqOpen(newFaqOpen);
  };

  // Scroll to a section smoothly
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hbody">
      <div className={`container ${darkMode ? "dark-mode" : ""}`}>
        <section id="hero" className="hero">
          <div className="card">
            <div className="hero-content">
              <h3>Empowering Your Energy Choices</h3>
              <p>
                Our platform empowers individuals and businesses to take control of their energy usage with real-time tracking, peer-to-peer energy trading, and personalized savings recommendations. Optimize your energy consumption, buy and sell excess energy, and receive tailored insights to reduce costs and improve sustainability. With features like energy audits, transaction history tracking, and token management, we make it easy to monitor your progress and contribute to a greener future.
              </p>
              <div className="hero-actions">
                <Link to={"/coursePage"} className="btn-secondary">See Courses</Link>
                <a href="https://github.com/UNKORRUPT/UNKORRUPT" className="btn-link">
                  View on Github
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="section-title">
          <div className="benefits1">
            <h2>About Our Energy Platform</h2>
            <h3>Our Energy Platform: Empowering You</h3>
            <p>
              Our energy platform empowers users to take control of their energy consumption, savings, and trading in a seamless, intuitive way. Key features include:
            </p>
          </div>

          <div className="benefits">
            <div className="benefit-card">
              <h4>Energy Consumption & Savings Tracking</h4>
              <p>
                View real-time data on your energy usage and track savings, helping you make informed decisions to optimize efficiency.
              </p>
            </div>

            <div className="benefit-card">
              <h4>P2P Energy Trading</h4>
              <p>
                Participate in a dynamic marketplace where you can sell excess energy or purchase energy directly from other users, creating a decentralized energy ecosystem.
              </p>
            </div>

            <div className="benefit-card">
              <h4>Energy Audit & Recommendations</h4>
              <p>
                Get personalized insights into your energy habits, including automated recommendations to reduce consumption and lower costs.
              </p>
            </div>

            <div className="benefit-card">
              <h4>Input Energy Data</h4>
              <p>
                Easily input or automatically track your energy usage, making it simple to monitor your consumption over time.
              </p>
            </div>

            <div className="benefit-card">
              <h4>Automated Savings Recommendations</h4>
              <p>
                Based on your energy data, receive tailored suggestions to help you save more energy and money.
              </p>
            </div>

            <div className="benefit-card">
              <h4>Transaction History & Token Management</h4>
              <p>
                Keep track of your energy transactions and manage your energy tokens. Whether you’re buying, selling, or earning tokens from rewards, you can easily view your balance and transaction history.
              </p>
            </div>
          </div>
        </section>

        <section id="cta" className="cta">
          <h2>Ready for your first course?</h2>
          <p>Get started on your patriot journey.</p>
          <Link to={"/coursePage"} className="btn-primary">See Courses</Link>
        </section>

        <Footer /> {/* Render the Footer component */}
      </div>
    </div>
  );
}

function getFaqAnswer(index) {
  const answers = [
    "Yes, PatriotAi is completely free to use.",
    "No, all you need is Internet Identity!",
    "Our data is open to policy makers, educators and patriots. Commercialization plans are not established yet.",
    "Yes, we offer technical support.",
  ];
  return answers[index];
}
