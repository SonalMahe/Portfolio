

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
      <div className="herosize">
      
        <h1>Sonal Maheshwari</h1>
        <p>Full Stack Developer</p>
        <p>
          I’m a full stack developer who enjoys building visually engaging, user-friendly digital experiences backed by solid, well-tested APIs.</p>
        <ul>
          <li>🎓 Background in MBA & SAP(FICO) bringing strong management and problem-solving skills.</li>
          <li>💻 Building responsive UIs with React, JavaScript, and modern CSS.</li>
          <li>⚙️ Building REST APIs with Node.js, Express, MongoDB & Prisma, with authentication and testing.</li>
          <li>🌍 Fluent in English | Intermediate Swedish.</li>
          <li>🚀 Motivated to grow through real-world projects.</li>
          📫 Open to full stack developer roles and freelance projects.
        </ul>
</div>
        {/* Profile Image */}
        <img 
          src="/profile.JPG" 
          alt="Sonal Maheshwari" 
          className="hero-profile-pic" 
        />
      </div>
    </section>
  );
};

export default Hero;
