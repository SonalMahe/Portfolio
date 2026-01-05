import "../assets/images/Web.svg";

const Services = () => {
  return (
    <section id="services">
      <h2>Services</h2>
      <div className="cards">
        <div className="card">Web Development HTML/CSS/JS
          <br />
          Solid understanding of site layout and the importance of semantic HTML for proper class naming.
          Proficient in using CSS for styling and JavaScript for creating interactive pages.
        </div>

        <div className="card">UI/UX Design
          <br></br>
          Good understanding of UI/UX design principles, including layout, color theory, typography, and user-centered design.
          ,Familiar with designing simple, intuitive interfaces,wireframes focused on usability and accessibility.
        </div>
        <div className="card">React Applications
          <br />
          Solid understanding of React and its methods.Proficient in creating reusable components,
          managing state with hooks, and using React Router for navigation.
        </div>
      </div>
    </section>
  );
};

export default Services;
