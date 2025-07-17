const ContactUs = () => {
  return (
    <>
      <div className="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-box">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Subject</label>
          <input type="text" placeholder="Enter a subject" />

          <label>Message</label>
          <textarea placeholder="Message" />

          <button>Submit</button>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
