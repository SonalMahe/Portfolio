const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Us</h2>

      <div className="contact-form">
        <form action="https://formspree.io/f/xpwrakyk" method="POST">
          
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Message"
              required
            />
          </div>

          <button type="submit" className="button-primary">
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;
