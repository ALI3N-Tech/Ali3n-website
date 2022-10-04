import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import "./Newsletter.css";
import Label from "./Label";
import axios from "axios";
import { SubscribeUser } from "./apiCallls";

const Newsletter = () => {
  const submitForm = async (values) => {
    console.log(values);
    const { firstName, lastName, email } = values;
    try {
      const payload = {
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
        email_address: email,
      };
      await axios.post("/netlify/function/test", payload);
      alert("Contact details were added successfully");
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "Too Short")
      .max(20, "Too Long")
      .required("Required!"),
    lastName: Yup.string().min(3, "Too Short"),
    email: Yup.string().email("Invalid email").required("Required!"),
  });
  return (
    <div>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        validationSchema={SignupSchema}
        onSubmit={submitForm}
      >
        {(formik) => (
          <Form className="formik">
            <h2>Sign up for our newsletter</h2>

            <div className="inputFlex">
              <Label htmlFor="firstName" text="First Name" required={true} />
              <Field
                id="firstName"
                name="firstName"
                className="inputNewsletter"
              />
              <ErrorMessage
                className="errorMessage-Newsletter"
                component="div"
                name="firstName"
              />
            </div>

            <div className="inputFlex">
              <Label htmlFor="lastName" text="Last Name" required={false} />
              <Field
                id="lastName"
                name="lastName"
                className="inputNewsletter"
              />
              <ErrorMessage
                className="errorMessage-Newsletter"
                component="div"
                name="lastName"
              />
            </div>

            <div className="inputFlex">
              <Label htmlFor="email" text="Email" required={true} />
              <Field id="email" name="email" className="inputNewsletter" />
              <ErrorMessage
                className="errorMessage-Newsletter"
                component="div"
                name="email"
              />
            </div>

            <button
              //   disabled={!formik.isValid || !formik.dirty}
              type="submit"
              className={
                !formik.isValid || !formik.dirty
                  ? "NewsletterBtn disabled"
                  : "NewsletterBtn"
              }
            >
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Newsletter;
