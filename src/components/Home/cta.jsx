import { useState } from "react";
import ContactImg from "../../assets/contact.png";

const Cta = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [category]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("https://localhost/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: "Message sent successfully!" });
    } else {
      setStatus({
        success: false,
        message: "An error occurred. Please try again.",
      });
    }
  };

  return (
    <>
      <section className="contact" id="connect">
        <div className="flex items-center">
          <div className="image">
            <img src={ContactImg} alt="Contact Us" />
          </div>
          <div className="right">
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="name">
                <input
                  type="text"
                  placeholder="First Name"
                  value={formDetails.firstName}
                  onChange={(e) => onFormUpdate("firstName", e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={formDetails.lastName}
                  onChange={(e) => onFormUpdate("lastName", e.target.value)}
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                value={formDetails.email}
                onChange={(e) => onFormUpdate("email", e.target.value)}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formDetails.phone}
                onChange={(e) => onFormUpdate("phone", e.target.value)}
              />
              <textarea
                rows="6"
                placeholder="Message"
                value={formDetails.message}
                onChange={(e) => onFormUpdate("message", e.target.value)}
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
    </>
  );
};

export default Cta;
