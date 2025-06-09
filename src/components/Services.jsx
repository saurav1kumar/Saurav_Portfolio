import React from "react";
import "../index.css";

const servicesData = [
  {
    title: "Full Stack Web Development",
    description: "End-to-end web application development using React, Node.js, Express, MongoDB/MySQL with modern UI frameworks like Tailwind CSS.",
    category: "Development"
  },
  {
    title: "Enterprise CRM & Management Systems",
    description: "Custom CRM platforms with real-time analytics, user management, and advanced data visualization using Chart.js and Socket.io.",
    category: "Enterprise"
  },
  {
    title: "React Native Mobile App Development",
    description: "Cross-platform mobile applications for iOS and Android using React Native, Expo, and native device integrations.",
    category: "Mobile"
  },
  {
    title: "Team Leadership & Project Management",
    description: "Leading development teams, mentoring junior developers, conducting code reviews, and managing multiple concurrent projects.",
    category: "Leadership"
  },
  {
    title: "Technical Interviews & Recruitment",
    description: "Conducting technical interviews, evaluating candidates on full-stack development skills, and building high-performing development teams.",
    category: "Leadership"
  },
  {
    title: "E-commerce Platform Development",
    description: "Complete e-commerce solutions with payment gateway integration (Stripe, Coinbase), product catalogs, and inventory management.",
    category: "Development"
  },
  {
    title: "Hospital & Healthcare Management Systems",
    description: "Comprehensive healthcare platforms with appointment booking, patient tracking, prescription management, and billing systems.",
    category: "Healthcare"
  },
  {
    title: "Corporate Website Development",
    description: "Professional corporate websites with SEO optimization, performance tuning, and modern animations using Framer Motion and AOS.",
    category: "Corporate"
  },
  {
    title: "Real-time Communication Systems",
    description: "Implementation of real-time features using Socket.io for chat systems, notifications, and collaborative platforms.",
    category: "Development"
  },
  {
    title: "Database Design & Optimization",
    description: "MongoDB and MySQL database architecture, indexing strategies, and performance optimization for scalable applications.",
    category: "Database"
  },
  {
    title: "API Development & Integration",
    description: "RESTful API development, third-party integrations (EmailJS, payment gateways), and secure authentication systems using JWT.",
    category: "Backend"
  },
  {
    title: "Performance Optimization & SEO",
    description: "Website performance tuning, achieving 95+ Lighthouse scores, SEO implementation, and Core Web Vitals optimization.",
    category: "Optimization"
  },
  {
    title: "Code Review & Quality Assurance",
    description: "Establishing coding standards, conducting thorough code reviews, and implementing best practices for maintainable codebases.",
    category: "Quality"
  },
  {
    title: "Mentorship & Training Programs",
    description: "Structured mentorship for junior developers, technical workshops, and skill development programs with proven success rates.",
    category: "Education"
  },
  {
    title: "DevOps & Deployment Solutions",
    description: "CI/CD pipeline setup, Docker containerization, cloud deployment, and hosting solutions for scalable applications.",
    category: "DevOps"
  },
  {
    title: "Technical Consulting & Architecture",
    description: "Technology stack selection, system architecture design, and strategic technical guidance for optimal project outcomes.",
    category: "Consulting"
  }
];

const categoryColors = {
  Development: "bg-blue-100 text-blue-800",
  Enterprise: "bg-purple-100 text-purple-800",
  Mobile: "bg-green-100 text-green-800",
  Leadership: "bg-orange-100 text-orange-800",
  Healthcare: "bg-red-100 text-red-800",
  Corporate: "bg-indigo-100 text-indigo-800",
  Database: "bg-yellow-100 text-yellow-800",
  Backend: "bg-gray-100 text-gray-800",
  Optimization: "bg-pink-100 text-pink-800",
  Quality: "bg-teal-100 text-teal-800",
  Education: "bg-cyan-100 text-cyan-800",
  DevOps: "bg-lime-100 text-lime-800",
  Consulting: "bg-amber-100 text-amber-800"
};

const Services = () => {
  return (
    <div className="services-section">
      <div className="services-container">
        {/* Work Experience Section */}
        <div style={{ marginBottom: '60px', padding: '30px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '20px', border: '1px solid rgba(0, 209, 255, 0.2)' }}>
          <h2 className="services-heading" style={{ fontSize: '2rem', marginBottom: '20px' }}>Current Experience</h2>
          <div style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: '25px', padding: '20px', background: 'rgba(0, 209, 255, 0.1)', borderRadius: '15px', border: '1px solid rgba(0, 209, 255, 0.3)' }}>
              <h3 style={{ color: '#00d1ff', fontSize: '1.4rem', marginBottom: '10px', fontWeight: '600' }}>
                Full Stack Developer & Team Lead
              </h3>
              <p style={{ color: '#00d1ff', fontSize: '1.1rem', marginBottom: '8px', fontWeight: '500' }}>
                Traincape Technology | September 2024 - Present
              </p>
              <ul style={{ color: '#d4e5f5', fontSize: '0.95rem', lineHeight: '1.6', listStyle: 'none', padding: '0' }}>
                <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '0', color: '#00d1ff' }}>•</span>
                  Leading and mentoring 5-7 interns regularly, providing guidance on full-stack development best practices
                </li>
                <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '0', color: '#00d1ff' }}>•</span>
                  Conducting technical interviews for intern positions and evaluating candidates on JavaScript, React, and problem-solving skills
                </li>
                <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '0', color: '#00d1ff' }}>•</span>
                  Developing enterprise-level applications including CRM systems, corporate websites, and e-commerce platforms
                </li>
                <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '0', color: '#00d1ff' }}>•</span>
                  Managing multiple concurrent projects with cross-functional teams, ensuring timely delivery and quality outcomes
                </li>
                <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '0', color: '#00d1ff' }}>•</span>
                  Successfully transitioned 4 interns to full-time positions through structured mentorship and skill development
                </li>
              </ul>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <p style={{ color: '#c0d3df', fontSize: '1rem', marginBottom: '15px' }}>
                <strong style={{ color: '#00d1ff' }}>Technologies:</strong> HTML5, CSS3, Tailwind CSS, JavaScript, Java, Node.js, Express, MongoDB, MySQL, React, React Native
              </p>
              <p style={{ color: '#00d1ff', fontSize: '1.1rem', fontWeight: '600' }}>
                Available for Freelance Projects & Technical Consulting
              </p>
            </div>
          </div>
        </div>

        <h2 className="services-heading">Professional Services</h2>
        <p className="services-subtitle">Comprehensive Full Stack Development & Leadership Solutions</p>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div style={{ marginTop: '60px', padding: '30px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '20px', border: '1px solid rgba(0, 209, 255, 0.2)' }}>
          <h3 style={{ color: '#00d1ff', fontSize: '1.5rem', marginBottom: '20px', textShadow: '0 0 8px rgba(0, 209, 255, 0.3)' }}>
            Why Choose My Services?
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <h4 style={{ color: '#00d1ff', fontSize: '1.2rem', marginBottom: '10px' }}>⚡ Fast Delivery</h4>
              <p style={{ color: '#d4e5f5', fontSize: '0.9rem' }}>Proven track record of delivering projects 2+ weeks ahead of schedule</p>
            </div>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <h4 style={{ color: '#00d1ff', fontSize: '1.2rem', marginBottom: '10px' }}>✅ Quality Assured</h4>
              <p style={{ color: '#d4e5f5', fontSize: '0.9rem' }}>95+ Lighthouse scores and enterprise-grade code quality standards</p>
            </div>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <h4 style={{ color: '#00d1ff', fontSize: '1.2rem', marginBottom: '10px' }}>👥 Team Leadership</h4>
              <p style={{ color: '#d4e5f5', fontSize: '0.9rem' }}>Experience leading teams of 5-7 developers with 35% productivity improvement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
