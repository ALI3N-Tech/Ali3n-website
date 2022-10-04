import React, { useState } from "react";
import { FaRocket } from "react-icons/fa";
import "./Form.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";

function Forming() {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3zss1ai",
        "template_0add7e9",
        form.current,
        "fvBPvquDy52CrMTP4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setMessage("Your message has been sent successfully!");
    setTimeout(() => {
      setMessage("");
    }, 3000);
    e.target.reset();
  };

  const messageSchema = Yup.object().shape({
    user_name: Yup.string()
      .min(3, "Too Short")
      .max(25, "Too Long")
      .required("Required!"),
    subject: Yup.string().min(3, "Too Short").required("Required!"),
    user_email: Yup.string().email("Invalid email").required("Required!"),
  });

  return (
    <div className="formSession">
      <Formik
        initialValues={{ user_name: "", subject: "", user_email: "" }}
        validationSchema={messageSchema}
      >
        {(formik) => (
          <Form className="form-control" ref={form} onSubmit={sendEmail}>
            <h2>Send us a message</h2>
            <Field
              className="inputed"
              type="text"
              placeholder="Name*"
              name="user_name"
              id="user_name"
              required
            />
            <ErrorMessage
              className="errorMessage-Message"
              component="div"
              name="user_name"
            />
            <Field
              className="inputed"
              type="email"
              placeholder="Email*"
              name="user_email"
              id="user_email"
              required
            />
            <ErrorMessage
              className="errorMessage-Message"
              component="div"
              name="user_email"
            />
            <Field
              className="inputed"
              type="text"
              placeholder="Subject*"
              name="subject"
              id="subject"
              required
            />
            <ErrorMessage
              className="errorMessage-Message"
              component="div"
              name="subject"
            />
            <textarea
              name="message"
              cols="30"
              rows="8"
              placeholder="Your message..."
            ></textarea>
            <div
              className={
                !formik.isValid || !formik.dirty
                  ? "takeOff-Btn disabled"
                  : "takeOff-Btn "
              }
            >
              <button type="submit" className="btn--submit">
                Take Off
              </button>
              <div className="rocket">
                <FaRocket />
              </div>
            </div>
            {message && <span>{message}</span>}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Forming;
