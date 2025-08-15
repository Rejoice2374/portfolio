import { useState } from "react";

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

  return (
    <>
      <section className="contact" id="connect">
        <div className="flex items-center">
          <div className="image">
            <img src={} alt="Contact Us" />
          </div>
          <div className="right">
            <h2>Get In Touch</h2>
            <form>
               
            </form>
          </div>
        </div>
      </section>
    </>
  )
};

export default Cta;
