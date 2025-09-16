import React, { useState, useEffect } from 'react';
import './App.css';
import MyVideo from './videos/myvideo.mp4';

function App() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'project': return <ProjectPage />;
      case 'team': return <TeamPage />;
      case 'gallery': return <GalleryPage />;
      default: return <HomePage />;
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="app-container">
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="page-content">{renderPage()}</div>
      <Footer />
    </div>
  );
}

const NavBar = ({ currentPage, setCurrentPage }) => (
  <nav className="navbar">
    <div className="nav-container">
      <div className="nav-logo">
        <i className="fas fa-leaf"></i>
        <span>Class 4/1 PBL</span>
      </div>
      <ul className="nav-menu">
        {['home', 'project', 'team', 'gallery'].map(page => (
          <li key={page} className={`nav-item ${currentPage === page ? 'active' : ''}`}>
            <button onClick={() => setCurrentPage(page)}>
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

// Loading screen
const Loader = () => (
  <div className="loader-overlay">
    <div className="loader-window">
      <div className="emoji-circle">
        <span className="emoji">🍌</span>
        <span className="emoji">🌶️</span>
        <span className="emoji">🍇</span>
      </div>
      <p>Loading Project...</p>
    </div>
  </div>
);

// Pages

const HomePage = () => (
  <div className="page home-page">
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="animate-fade-in">Fruit & Vegetable Dryer</h1>
        <p className="animate-fade-in-delay">A sustainable solution for food preservation by Class 4/1</p>
        <button className="cta-button animate-fade-in-delay-2">Learn More</button>
      </div>
      <div className="hero-image animate-slide-in">
        <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Fresh vegetables" />
      </div>
    </div>
    <div className="features-section">
      <h2>Why Our Dryer?</h2>
      <div className="features-grid">
        <div className="feature-card animate-card">
          <i className="fas fa-bolt"></i>
          <h3>Energy Efficient</h3>
          <p>Uses solar power to reduce electricity consumption</p>
        </div>
        <div className="feature-card animate-card">
          <i className="fas fa-recycle"></i>
          <h3>Eco-Friendly</h3>
          <p>Made from sustainable and recycled materials</p>
        </div>
        <div className="feature-card animate-card">
          <i className="fas fa-users"></i>
          <h3>Community Focused</h3>
          <p>Designed to help local farmers preserve their produce</p>
        </div>
      </div>
    </div>
  </div>
);

const ProjectPage = () => (
  <div className="page project-page">
    <div className="project-header">
      <h1>Our Project</h1>
      <p>Learn about our innovative fruit and vegetable dryer</p>
    </div>
    <div className="project-details">
      <div className="project-description">
        <h2>How It Works</h2>
        <p>Our dryer uses a combination of solar energy and innovative airflow design to efficiently dry fruits and vegetables while preserving their nutritional value.</p>
        <div className="specs">
          <h3>Specifications</h3>
          <ul>
            <li><strong>Dimensions:</strong> 2m x 1.5m x 1.2m</li>
            <li><strong>Capacity:</strong> Up to 6kg of product</li>
            <li><strong>Drying Time:</strong> 12-48 hours depending on product and heat</li>
            <li><strong>Power Source:</strong> Solar with battery backup</li>
          </ul>
        </div>
      </div>
      <div className="project-video">
        <h2>Project Video</h2>
        <div className="video-container">
          <video
            width="100%"
            height="315"
            controls
            loop
            autoPlay
            muted
          >
            <source src={MyVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </div>
);

const TeamPage = () => {
  const teamMembers = [
    { name: "Mister Thathan Janehattakarnkij", role: "Project Lead", avatar: "👩‍🔬" },
    { name: "Miss Wassaporn Untalad", role: "Design Engineer", avatar: "👨‍🔧" },
    { name: "Miss Wassaporn Untalad", role: "Materials Specialist", avatar: "👩‍🔬" },
    { name: "Mister Thathan Janehattakarnkij", role: "Documentation", avatar: "👨‍💻" },
    { name: "Mister Chaiyapat lew", role: "Testing Coordinator", avatar: "👩‍🏫" }
  ];

  return (
    <div className="page team-page">
      <div className="team-header">
        <h1>Our Team</h1>
        <p>Meet the brilliant minds behind the project</p>
      </div>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card animate-team-card">
            <div className="team-avatar">{member.avatar}</div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <div className="social-links">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const GalleryPage = () => {
  const galleryItems = [
    { id: 1, type: 'image', url: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Design Sketch' },
    { id: 2, type: 'image', url: 'https://images.unsplash.com/photo-1566842600175-97dca3dfc3c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Prototype Building' },
    { id: 3, type: 'image', url: 'https://images.unsplash.com/photo-1565307528294-f70f3c7094e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Testing Phase' }
  ];

  return (
    <div className="page gallery-page">
      <div className="gallery-header">
        <h1>Project Gallery</h1>
        <p>See our project from concept to completion</p>
      </div>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div key={item.id} className={`gallery-item animate-gallery-item delay-${index}`}>
            {item.type === 'image' ? (
              <div className="image-item">
                <img src={item.url} alt={item.title} />
                <div className="image-overlay"><h3>{item.title}</h3></div>
              </div>
            ) : (
              <div className="video-item">
                <video
                  width="100%"
                  height="100%"
                  controls
                  loop
                  autoPlay
                  muted
                >
                  <source src={item.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="video-overlay"><h3>{item.title}</h3></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h3>Class 4/1 PBL Project</h3>
        <p>Innovative solutions for sustainable food preservation</p>
      </div>
      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>Email: thathan.jane@gmail.com</p>
        <p>Phone: (+66)969600051</p>
      </div>
      <div className="footer-section">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2023 Class 4/1 PBL Project. All rights reserved.</p>
    </div>
  </footer>
);

export default App;