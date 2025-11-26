import { useState } from "react";
import ContactImg from "../../assets/contact.png";

const Cta = () => {
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/myzarjop", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    setButtonText("Send");

    if (response.ok) {
      setStatus({ success: true, message: "Message sent successfully!" });
      e.target.reset();
    } else {
      setStatus({
        success: false,
        message: "An error occurred. Please try again.",
      });
    }
  };

  return (
    <section className="cta flex justify-center" id="connect">
      <div className="contact">
        <div className="image">
          <img src={ContactImg} alt="Contact Us" />
        </div>

        <div className="form-input">
          <h2>Get In Touch</h2>

          <form onSubmit={handleSubmit}>
            <div className="name">
              <input
                type="text"
                name="FirstName"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="LastName"
                placeholder="Last Name"
                required
              />
            </div>

            <div className="contact-info">
              <input
                type="email"
                name="Email"
                placeholder="Email Address"
                required
              />
              <input
                type="tel"
                name="Phone"
                placeholder="Phone Number"
                required
              />
            </div>

            <textarea
              name="message"
              rows="6"
              placeholder="Message"
              required
            ></textarea>

            <button type="submit">{buttonText}</button>

            {status.message && (
              <p className={`status ${status.success ? "success" : "error"}`}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Cta;
