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
import Footer from '../footer/Footer';  
import './Home.css';
import image1 from '../../assets/energymanagement.jpg';
import image2 from '../../assets/energystorage.jpg';
import image3 from '../../assets/energystorage2.jpg';
export default function HomePage() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const navigate = useNavigate(); 

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
    navigate("/auth"); 
  };

  return (
    <div className="hbody">
      <div className={`container ${darkMode ? "dark-mode" : ""}`}>
        <section id="hero" className="hero">
          <div className="card">
            <div className="hero-content">
              <h3>Empower Your Future with Renewable Energy</h3>
              <p>
                Join the renewable energy revolution! Our platform helps you monitor your energy consumption, 
                earn tokens, and trade surplus energy with peers. Access solar, wind, hydropower, and geothermal 
                solutions, track your energy usage, and get personalized savings recommendations. 
                Together, let's create a greener, more sustainable world.
              </p>
              <div className="hero-actions">
                <Link to={"/coursePage"} className="btn-secondary">Explore Renewable Solutions</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image Section */}
        <section id="hero-image" className="hero-image-section">
          <div className="overlay">
            <h2>Leading the Way to a Sustainable Future</h2>
            <p>Harness the power of renewable energy with cutting-edge technology and smart solutions.</p>
          </div>
        </section>

        <section id="benefits" className="section-title">
          <div className="benefits1">
            <h4>Our platform empowers individuals and businesses to make sustainable energy choices.</h4>
          </div>

          <div className="benefits">
            <div className="benefit-card">
              <h4>Comprehensive Renewable Energy Solutions</h4>
              <p>
                Access a wide range of renewable energy systems such as solar, wind, hydropower, and geothermal 
                solutions tailored for your home or business.
              </p>
            </div>

            <div className="benefit-card">
              <h4>P2P Energy Trading</h4>
              <p>
                Sell your excess energy to peers or purchase renewable energy directly from others in our secure, decentralized marketplace.
              </p>
            </div>

            <div className="benefit-card">
              <h4>Token Management</h4>
              <p>
                Earn tokens through energy generation, trading, and saving. Manage your balance and track your progress in real-time.
              </p>
            </div>

            <div className="benefit-card">
              <h4>Energy Consumption & Savings Tracking</h4>
              <p>
                Monitor your energy usage with smart devices and receive personalized recommendations to reduce costs and optimize efficiency.
              </p>
            </div>

            <div className="benefit-card">
              <h4>Automated Energy Audits</h4>
              <p>
                Get personalized audits and automated recommendations to improve your energy efficiency and save on utility costs.
              </p>
            </div>

            <div className="benefit-card">
              <h4>Surplus Energy Tracking</h4>
              <p>
                Track surplus energy generation from any renewable source and easily trade it with peers through our platform.
              </p>
            </div>
          </div>
        </section>

        {/* New Section: Alternating Images and Text */}
        <section id="image-text-section" className="image-text-section">
          <div className="image-text-item">
            <img src={image1} alt="Image 1" className="image" />
            <div className="text">
            <p>Manage your energy seamlessly.</p>
            <p>Manage your energy seamlessly.</p>
            <p>Manage your energy seamlessly.</p>
            <p>Manage your energy seamlessly.</p>
            </div>
          </div>

          <div className="image-text-item reverse">
            <img src={image2} alt="Image 2" className="image" />
            <div className="text">
            <p>Manage your energy seamlessly.</p>
            <p>Manage your energy seamlessly.</p>
            <p>Manage your energy seamlessly.</p>
            <p>Manage your energy seamlessly.</p>
            </div>
          </div>

          <div className="image-text-item">
            <img src={image3} alt="Image 3" className="image" />
            <div className="text">
            <p>Manage your energy seamlessly.</p>
            <p>Manage your energy seamlessly.</p>
            <p>Manage your energy seamlessly.</p>
            <p>Manage your energy seamlessly.</p>
            </div>
          </div>
        </section>

        <section id="cta" className="cta">
          <h2>Ready to Transition to Clean Energy?</h2>
          <p>Take the first step towards a sustainable future with solar, wind, hydro, and geothermal energy.</p>
          <Link to={"/coursePage"} className="btn-primary">Explore Renewable Solutions</Link>
        </section>

        

        <Footer /> {/* Render the Footer component */}
      </div>
    </div>
  );
}
