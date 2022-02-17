import React, { useState } from "react";
import "./Contact.css";
import { addDoc } from "firebase/firestore";
import { colRef } from "../../Firebase";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import errorimg from "../../assets/error-1.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Fade from "react-reveal/Fade";
import Shake from "react-reveal/Shake";

export default function Contact() {
  //  STATES
  const [input, setInput] = useState({
    firstname: "",
    secondname: "",
    email: "",
    number: "",
    message: "",
  });
  const [firstnameError, setFirstnameError] = useState({});
  const [secondnameError, setSecondnameError] = useState({});
  const [numberError, setNumberError] = useState({});
  const [emailError, setEmailError] = useState({});
  const [messageError, setMessageError] = useState({});

  //HANDLING INPUT
  let name, value;
  function handleInput(e) {
    e.preventDefault();
    name = e.target.name;
    value = e.target.value;

    setInput({ ...input, [name]: value });
  }

  //VALIDATION
  function validation() {
    const { firstname, secondname, email, number, message } = input;

    //LOGIC
    const firstnameError = {};
    const secondnameError = {};
    const numberError = {};
    const emailError = {};
    const messageError = {};
    let isValid = true;

    //Firstname validation
    if (firstname.length === 0) {
      firstnameError.empty = "Name is required";
      isValid = false;
    }
    if (firstname.trim().length > 25) {
      firstnameError.toolong = "Name is too long";
      isValid = false;
    }

    //Secondname validation
    if (secondname.length === 0) {
      secondnameError.empty = "Name is required";
      isValid = false;
    }
    if (secondname.trim().length > 25) {
      secondnameError.toolong = "Name is too long";
      isValid = false;
    }

    //Number validation
    if (number.length === 0) {
      numberError.empty = "Mobile number is required";
      isValid = false;
    } else if (number.length < 10) {
      numberError.tooshort = "Mobile number must be 10 digits";
      isValid = false;
    } else if (number.length > 10) {
      numberError.toolong = "Mobile number must be 10 digits";
      isValid = false;
    }

    //Email validation
    if (email.length === 0) {
      emailError.empty = "Email is required";
      isValid = false;
    } else if (!email.includes("@")) {
      emailError.nothave1 = "Email is invalid";
      isValid = false;
    } else if (!email.includes(".")) {
      emailError.nothave2 = "Email is invalid";
      isValid = false;
    } else if (email.indexOf("@") <= 0) {
      emailError.nothave3 = "Email is invalid";
      isValid = false;
    } else if (
      email.charAt(email.length - 4) !== "." &&
      email.charAt(email.length - 3) !== "."
    ) {
      emailError.nothave4 = "Email is invalid";
      isValid = false;
    }

    //Message validation
    if (!message) {
      messageError.empty = "Message is required";
      isValid = false;
    }
    if (message.trim().length > 150) {
      messageError.toolong = "Message is too long";
      isValid = false;
    }

    setFirstnameError(firstnameError);
    setSecondnameError(secondnameError);
    setNumberError(numberError);
    setEmailError(emailError);
    setMessageError(messageError);
    return isValid;
  }

  // SUBMIT LOGIC
  function handleSubmit(e) {
    e.preventDefault();
    const { firstname, secondname, email, number, message } = input;

    const isValid = validation();
    if (isValid === true) {
      addDoc(colRef, {
        firstname: firstname,
        secondname: secondname,
        email: email,
        number: number,
        message: message,
      })
        .then((doc) => {
          console.log("Document written with ID: ", doc.id);

          //alert
          toast.success("Submitted", {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          //

          // EMAILJS
          var service_id = process.env.REACT_APP_SERVICE_ID;
          var template_id = process.env.REACT_APP_TEMPLATE_ID;
          var user_id = process.env.REACT_APP_USER_ID;

          var params = {
            to_email: email,
            to_name: firstname,
          };

          // automated email
          emailjs.send(service_id, template_id, params, user_id).then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
          //
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });

      setInput({
        firstname: "",
        secondname: "",
        email: "",
        number: "",
        message: "",
      });
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="contact-div container">
        <Fade left duration={1500}>
          <h1 className="contact-div-heading">Hello! Let's work together.</h1>
        </Fade>

        <Fade bottom duration={1500}>
          <div className="contact-div-form-div">
            <form method="post">
              <div className="row contact-div-form-div-subdiv">
                <div className="contact-subdiv-1 col-sm-12 col-md-12 col-lg-6 ">
                  <input
                    type="text"
                    id="exampleInputFirstName"
                    name="firstname"
                    placeholder="First name"
                    autoComplete="new-password"
                    value={input.firstname}
                    onChange={handleInput}
                    required={true}
                    className="form-control contact-input-1 "
                  />
                  {Object.keys(firstnameError).map((x) => {
                    return (
                      <Shake>
                        <div className="contact-input-1-error-div">
                          <img
                            src={errorimg}
                            alt="errorimage"
                            className="error-validation-image"
                          />
                          <div key={x} className="contact-input-1-error">
                            {firstnameError[x]}
                          </div>
                        </div>
                      </Shake>
                    );
                  })}
                </div>

                <div className="contact-subdiv-2 col-sm-12 col-md-12 col-lg-6 ">
                  <input
                    type="text"
                    name="secondname"
                    id="exampleInputSecondName"
                    placeholder="Last name"
                    autoComplete="new-password"
                    value={input.secondname}
                    onChange={handleInput}
                    className="form-control contact-input-2 "
                  />
                  {Object.keys(secondnameError).map((x) => {
                    return (
                      <Shake>
                        <div className="contact-input-1-error-div">
                          <img
                            src={errorimg}
                            alt="errorimage"
                            className="error-validation-image"
                          />
                          <div key={x} className="contact-input-2-error">
                            {secondnameError[x]}
                          </div>
                        </div>
                      </Shake>
                    );
                  })}
                </div>

                <div className="contact-subdiv-3 col-sm-12 col-md-12 col-lg-6 ">
                  <input
                    type="email"
                    id="exampleInputEmail"
                    name="email"
                    placeholder="Email address"
                    autoComplete="new-password"
                    value={input.email}
                    onChange={handleInput}
                    required={true}
                    className="form-control contact-input-3"
                  />
                  {Object.keys(emailError).map((x) => {
                    return (
                      <Shake>
                        <div className="contact-input-1-error-div">
                          <img
                            src={errorimg}
                            alt="errorimage"
                            className="error-validation-image"
                          />
                          <div key={x} className="contact-input-3-error">
                            {emailError[x]}
                          </div>
                        </div>
                      </Shake>
                    );
                  })}
                </div>

                <div className="contact-subdiv-4 col-sm-12 col-md-12 col-lg-6">
                  <input
                    type="number"
                    id="exampleInputNumber"
                    name="number"
                    placeholder="Phone number"
                    autoComplete="new-password"
                    value={input.number}
                    onChange={handleInput}
                    required={true}
                    className="form-control contact-input-4"
                  />
                  {Object.keys(numberError).map((x) => {
                    return (
                      <Shake>
                        <div className="contact-input-1-error-div">
                          <img
                            src={errorimg}
                            alt="errorimage"
                            className="error-validation-image"
                          />
                          <div key={x} className="contact-input-4-error">
                            {numberError[x]}
                          </div>
                        </div>
                      </Shake>
                    );
                  })}
                </div>

                <div className="contact-subdiv-5 col-sm-12 col-md-12 col-lg-12 ">
                  <textarea
                    name="message"
                    id="exampleFormControlTextarea"
                    rows="8"
                    cols="8"
                    placeholder="Type your message here.."
                    value={input.message}
                    onChange={handleInput}
                    required={true}
                    className="form-control contact-input-5"
                  ></textarea>
                  {Object.keys(messageError).map((x) => {
                    return (
                      <Shake>
                        <div className="contact-input-1-error-div">
                          <img
                            src={errorimg}
                            alt="errorimage"
                            className="error-validation-image"
                          />
                          <div key={x} className="contact-input-5-error">
                            {messageError[x]}
                          </div>
                        </div>
                      </Shake>
                    );
                  })}
                </div>
              </div>

              <button
                type="submit"
                className="contact-sendButton"
                onClick={handleSubmit}
              >
                Submit
              </button>

              <ToastContainer
                toastStyle={{ backgroundColor: "#000000", color: "#FFFFFF" }}
                position="top-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </form>
          </div>
        </Fade>
      </div>
    </motion.div>
  );
}
