"use client";

import Container from "@/components/Container";
import PageContainer from "@/components/PageContainer";
import Image from "next/image";
import { FC, useState } from "react";

const Contact: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e: any) => {};

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
                <button type="submit">Submit Now</button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </PageContainer>
  );
};

export default Contact;
