import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";
import "./style.css";

export const ContactUs = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* Success message after redirect to /success (optional) */}
        {showAlert && (
          <Row className="mb-3">
            <Col>
              <Alert
                variant="success"
                onClose={() => setShowAlert(false)}
                dismissible
              >
                Thanks for your message! I’ll be in touch soon.
              </Alert>
            </Col>
          </Row>
        )}

        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href="mailto:ogden87@gmail.com">ogden87@gmail.com</a><br></br>
              <strong>Phone:</strong>{" "}<a href="tel:720.254.5354">720.254.5354</a>
            </address>
            <p>If you have any questions about my resume or my experience, please reach out. I’d love to hear from you! I'd also love to speak about any opportunities for which I may be a good fit.</p>
          </Col>

          <Col lg="7" className="d-flex align-items-center">
          <form
              name="contact"
              method="POST"
              action="/success"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="contact__form w-100"
            >
              {/* Netlify hidden fields */}
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human:{" "}
                  <input name="bot-field" />
                </label>
              </p>
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    required
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </Col>
              </Row>

              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                required
              ></textarea>

              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit">
                    Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
