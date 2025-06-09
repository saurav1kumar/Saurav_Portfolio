import React from "react";
import { FaRocket, FaFire, FaClock, FaUsers, FaLightbulb, FaCode, FaMobile, FaChartLine } from "react-icons/fa";
import "./About.css";
import profileImage from "../assets/saurav.png"; // Make sure this path is correct

const About = () => {
  return (

      <main className="about-main">
        {/* Photo Section */}
        <div className="about-photo-section">
          <img src={profileImage} alt="Saurav Kumar" className="about-photo" />
        </div>

        {/* Text Section */}
        <div className="about-text-section">
          <h2>About Me</h2>
          <p>
            Hey there! I'm <span className="highlight">Saurav Kumar</span>, a dynamic Full Stack Developer and Team Lead at <strong>Traincape Technology</strong> since September 2024. With a passion for crafting immersive web experiences and leading high-performing development teams, I bring both technical excellence and leadership expertise to every project.
          </p>

          <h3>Current Role & Responsibilities</h3>
          <ul className="about-list">
            <li>
              <FaUsers className="icon" />
              <strong>Team Leadership:</strong> Leading and mentoring 5-7 interns regularly, conducting technical interviews, and managing multiple concurrent projects with cross-functional teams at Traincape Technology.
            </li>
            <li>
              <FaChartLine className="icon" />
              <strong>Project Management:</strong> Successfully delivering enterprise-level applications including CRM systems, corporate websites, and e-commerce platforms while ensuring timely delivery and quality outcomes.
            </li>
          </ul>

          <h3>Why Choose Me?</h3>
          <ul className="about-list">
            <li>
              <FaRocket className="icon" />
              <strong>Full Stack Expertise:</strong> Proficient in modern technologies including HTML5, CSS3, Tailwind CSS, JavaScript, Java, Node.js, Express, MongoDB, MySQL, and React ecosystem with hands-on experience in production environments.
            </li>
            <li>
              <FaMobile className="icon" />
              <strong>Mobile Development:</strong> Currently developing cross-platform mobile applications using React Native, expanding my expertise to deliver comprehensive solutions across web and mobile platforms.
            </li>
            <li>
              <FaFire className="icon" />
              <strong>Project Highlights:</strong> Explore my portfolio featuring enterprise-grade applications like the Traincape CRM system, hospital management platforms, and e-commerce solutions. Each project demonstrates my commitment to scalable, secure, and user-centric development.
            </li>
            <li>
              <FaCode className="icon" />
              <strong>Code Quality & Mentorship:</strong> Established coding standards and review processes that improved team productivity by 35%. Successfully transitioned 4 interns to full-time positions through structured mentorship and skill development programs.
            </li>
            <li>
              <FaClock className="icon" />
              <strong>Performance Optimization:</strong> Specialized in creating high-performance applications with 95+ Lighthouse scores, implementing advanced optimization techniques including lazy loading, code splitting, and efficient database indexing.
            </li>
            <li>
              <FaLightbulb className="icon" />
              <strong>Innovation-Driven:</strong> Continuously exploring cutting-edge technologies and implementing innovative solutions. From real-time communication systems using Socket.io to advanced data visualization with Chart.js, I stay ahead of industry trends.
            </li>
          </ul>

          <h3>Technical Expertise</h3>
          <div className="tech-stack">
            <div className="tech-category">
              <h4>Frontend:</h4>
              <p>HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), React, Redux Toolkit, Framer Motion, AOS</p>
            </div>
            <div className="tech-category">
              <h4>Backend:</h4>
              <p>Node.js, Express.js, Java, RESTful APIs, Socket.io, JWT Authentication</p>
            </div>
            <div className="tech-category">
              <h4>Databases:</h4>
              <p>MongoDB, MySQL, Mongoose ODM, Database Optimization</p>
            </div>
            <div className="tech-category">
              <h4>Mobile:</h4>
              <p>React Native, Expo, Cross-platform Development</p>
            </div>
            <div className="tech-category">
              <h4>Tools & Others:</h4>
              <p>Git, Docker, CI/CD, Vite, Webpack, ESLint, Chart.js, EmailJS, Stripe Integration</p>
            </div>
          </div>

          <h3>Let's Connect:</h3>
          <p>
            Whether you're a recruiter looking for a skilled Full Stack Developer with leadership experience, or a client seeking comprehensive web and mobile solutions, I'm here to exceed your expectations. With proven experience in team management, enterprise application development, and cutting-edge technology implementation, I'm ready to drive your next project to success.
          </p>
          <p>
            <strong>Available for:</strong> Full-time opportunities, freelance projects, technical consulting, and team leadership roles.
          </p>
        </div>
      </main>
    
  );
};

export default About;
 