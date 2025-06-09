import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import profileImage from "../assets/saurav.png";
import "../App.css";

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-content">
        <motion.div
          className="home-image"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={profileImage} alt="Saurav Kumar" className="hover-image" />
        </motion.div>

        <motion.div
          className="home-text"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="gradient-text">
            <span>Hello, I'm</span> <strong>Saurav Kumar</strong>
            <span className="animated-underline"></span>
          </h1>
          <p>Full Stack Developer & Team Lead 💻 | React Native Developer 📱 | Problem Solver 🚀</p>
          <div className="home-buttons">
            <a href="/Saurav_Portfolio/Saurav_Kumar_Resume.pdf" className="btn glass" target="_blank" rel="noreferrer">
              Resume
            </a>
            <a href="https://github.com/saurav1kumar" target="_blank" rel="noreferrer" className="btn solid">
              GitHub
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="social-icons"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        <a href="https://github.com/saurav1kumar" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/saurav-kumar-31223b260/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/sauravkumar2441?igsh=MTVsdnBhdTQ4bm55OA==" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      </motion.div>

      <section className="work-flow-chart">
  <h2>Professional Journey & Achievements</h2>

  <div className="arrow">↓</div>

  <div className="level level-1">
    <div className="box">
      <h3>Full Stack Developer & Team Lead - Traincape Technology (Sep 2024 - Present)</h3>
      <p><strong>Leadership:</strong> Leading 5-7 interns, conducting technical interviews, managing multiple projects</p>
      <p><strong>Development:</strong> React, Node.js, Express, MongoDB, MySQL, React Native</p>
      <p><strong>Projects:</strong> Enterprise CRM systems, Hospital Management platforms, E-commerce solutions</p>
      <p><strong>Achievements:</strong> 95+ Lighthouse scores, 35% team productivity improvement, 4 interns promoted to full-time</p>
      <p><strong>Technologies:</strong> HTML5, CSS3, Tailwind CSS, JavaScript, Java, Socket.io, Chart.js, JWT</p>
    </div>
  </div>

  <div className="arrow">↓</div>

  <div className="level level-2">
    <div className="box">
      <h3>Full Stack Development Expertise (2022 - 2024)</h3>
      <p><strong>Frontend:</strong> React, Redux Toolkit, Tailwind CSS, Framer Motion, AOS animations</p>
      <p><strong>Backend:</strong> Node.js, Express.js, RESTful APIs, JWT Authentication, Socket.io</p>
      <p><strong>Databases:</strong> MongoDB with Mongoose, MySQL, Database optimization & indexing</p>
      <p><strong>Mobile:</strong> React Native, Expo, Cross-platform development</p>
      <p><strong>DevOps:</strong> Docker, CI/CD pipelines, Performance optimization</p>
    </div>

    <div className="box">
      <h3>Key Project Achievements</h3>
      <p><strong>Hospital Management System:</strong> Full-stack platform with payment integration (Stripe, Coinbase)</p>
      <p><strong>Traincape CRM:</strong> Real-time analytics, data visualization, team collaboration features</p>
      <p><strong>Corporate Websites:</strong> SEO-optimized, 60% search visibility improvement</p>
      <p><strong>E-commerce Platform:</strong> 98% mobile responsiveness, 40% faster load times</p>
      <p><strong>Mobile App:</strong> React Native development (launching Q2 2025)</p>
    </div>
  </div>

  <div className="arrow">↓</div>

  <div className="level level-3">
    <div className="box">
      <h3>Technical Skills & Certifications</h3>
      <p><strong>Programming:</strong> JavaScript (ES6+), Java, HTML5, CSS3</p>
      <p><strong>Frameworks:</strong> React.js, React Native, Node.js, Express.js, Redux</p>
      <p><strong>Databases:</strong> MongoDB, MySQL, Database Design & Optimization</p>
      <p><strong>Tools:</strong> Git, Docker, Vite, Webpack, ESLint, Postman</p>
      <p><strong>Certifications:</strong> Java Full Stack - Jspiders</p>
    </div>

    <div className="box">
      <h3>Education & Foundation</h3>
      <p><strong>Bachelor's Degree:</strong> Agricultural Engineering, Integral University (2018-2022)</p>
      <p><strong>Intermediate:</strong> PCM, Sri Chaitanya (2016-2018)</p>
      <p><strong>High School:</strong> Sri Viswasanthi EM High School (2014-2016)</p>
      <p><strong>Continuous Learning:</strong> Staying updated with latest tech trends, React Native, AI/ML integration</p>
    </div>
  </div>
</section>

    </section>
  );
};

export default Home;
