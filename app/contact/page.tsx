"use client";

import Container from "@/components/Container";
import PageContainer from "@/components/PageContainer";
import headingStyling from "@/hooks/headerStyling";
import { isEmpty, trim } from "lodash";
import Image from "next/image";
import { FC, createElement, useEffect, useState } from "react";
import toast, { ToastOptions } from "react-hot-toast";
import { VscError, VscCheck } from "react-icons/vsc";

const Contact: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendingEmail, setSendingEmail] = useState(false);

  const { headerStyle, topLeftStyle } = headingStyling();

  useEffect(() => {
    headerStyle("#fff", "#dc0038", "#0E0E0E;");
    topLeftStyle("#fff");
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const toastOptions: ToastOptions = {
      duration: 2500,
      icon: createElement(VscError),
      style: {
        border: "2px solid red",
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    };

    setSendingEmail(true);

    if (isEmpty(trim(e.target.message.value))) {
      setSendingEmail(false);
      toast.error("Please fill the message field", toastOptions);
      return;
    }

    if (isEmpty(trim(e.target.name.value))) {
      setSendingEmail(false);
      toast.error("Please fill the name field", toastOptions);
      return;
    }

    const data = {
      email: e.target.email.value,
      name: e.target.name.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/sendEmail";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    if (response.status === 200) {
      setSendingEmail(false);
      setEmail("");
      setMessage("");
      setName("");
      toast.success("Successfully Sent Email!", {
        duration: 2500,
        icon: createElement(VscCheck),
        style: {
          border: "2px solid red",
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      toast.error("Oops something went wrong!", toastOptions);
    }
  };

  return (
    <PageContainer pageTitle="contact">
      <Container>
        <div className="contact-container">
          <div className="content">
            <div className="description">
              <h2>
                Have a project in mind? Let's work <span>together</span>
              </h2>
              <p>
                Have a project in mind? Looking to partner or work together?
                Reach out through the form and I'll get back to you in the next
                48 hours.
              </p>
            </div>
            <div className="form-container">
              <h3>FILL THE FORM BELOW*</h3>
              <form onSubmit={handleSubmit}>
                <div className="input-container">
                  <Image
                    src="/assets/contact/person.png"
                    width="30"
                    height="30"
                    alt="image"
                  />
                  <div>
                    <label htmlFor="name"></label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Your Name*"
                    />
                  </div>
                </div>

                <div className="input-container">
                  <Image
                    src="/assets/contact/mail.png"
                    width="30"
                    height="30"
                    alt="image"
                  />
                  <div>
                    <label htmlFor="email"></label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Your Email*"
                    />
                  </div>
                </div>

                <div className="input-container">
                  <Image
                    src="/assets/contact/message.png"
                    width="30"
                    height="30"
                    alt="image"
                  />
                  <div>
                    <label htmlFor="message"></label>
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Type Your Message*"
                      value={message}
                      required
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>
                <button type="submit" disabled={sendingEmail}>
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </PageContainer>
  );
};

export default Contact;
