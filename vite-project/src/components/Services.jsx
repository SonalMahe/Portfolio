import "../assets/images/Web.svg";

const Services = () => {
  return (
    <section id="services">
      <h2>Services</h2>
      <div className="cards">
        <article className="services__item">
        <div>
          <img src="../src/assets/images/web.svg" alt="web"></img>
        </div>
        <div className="services__title">Web Development HTML/CSS/JS </div>
          <br />
          <div>
          Solid understanding of site layout and the importance of semantic HTML for proper class naming.
          Proficient in using CSS for styling and JavaScript for creating interactive pages.
        </div>
        </article>

         <article className="services__item">
        <div>
          <img src="../src/assets/images/web.svg" alt="web"></img>
        </div>
        <div className="services__title">UI/UX Design </div>
          <br />
          <div>
           Good understanding of UI/UX design principles, including layout, color theory, typography, and user-centered design.
          ,Familiar with designing simple, intuitive interfaces,wireframes focused on usability and accessibility.
     </div>
        </article>

<article className="services__item">
        <div>
          <img src="../src/assets/images/web.svg" alt="web"></img>
        </div>
        <div className="services__title">React Applications </div>
          <br />
          <div>
           Solid understanding of React and its methods.Proficient in creating reusable components,
          managing state with hooks, and using React Router for navigation.
        </div>
        </article>
      
       
      </div>
    </section>
  );
};

export default Services;
