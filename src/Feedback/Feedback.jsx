import React, { useState } from "react";
import styles from "./Feedback.module.css";
import feedbackImage from "../images/feedback.png";
import { Link } from "react-router-dom";

const Feedback = () => {
  const [submittedForm, setSubmittedForm] = useState();
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedForm(data);
  }

  return (
    <div>
      {submittedForm ? (
        <div>
          <p>
            Thank you for filling the form, here are the details that you filled
            in:
          </p>
          <div className={styles.submittedDetails}>
            Full name: <i>{submittedForm.get("name")}</i> <br />
            Email address: <i>{submittedForm.get("email")}</i> <br />
            Phone number: <i>{submittedForm.get("phoneNumber")}</i> <br />
            Gender: <i>{submittedForm.get("gender")}</i> <br />
            How would you rate us?: <i>{submittedForm.get("rate")}</i> <br />
            Would you recommend us to your family and friends?:{" "}
            <i>{submittedForm.get("recommend")}</i> <br />
            How did you hear about us?:{" "}
            <i>{submittedForm.get("hearAboutUs")}</i> <br />
            Feedback: <i>{submittedForm.get("feedback")}</i> <br />
          </div>
          <div>
            <Link to="/thankyou">
              <button type="button" className={styles.okButton}>
                OK
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit}>
          <div className={styles.feedbackForm}>
            <div className={styles.imageSection}>
              <img
                src={feedbackImage}
                alt="Feedback form"
                className={styles.image}
              />
            </div>
            <div className={styles.actualForm}>
              <div className={styles.formHeadingSection}>
                <h1>Write to Us</h1>
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  id="nameId"
                  placeholder="Full name (required)"
                  className={styles.inputField}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="emailId"
                  placeholder="Email address, example: xyz@test.com (required)"
                  className={styles.inputField}
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneId"
                  placeholder="Phone number, example: 987-654-3210 (required)"
                  className={styles.inputField}
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  required
                />
              </div>

              <div>
                <label htmlFor="genderDropdown" className={styles.Elements}>
                  Gender:
                </label>
                <div>
                  <select
                    name="gender"
                    id="genderDropdown"
                    className={styles.genderDropdown}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Don't Want To Answer">
                      Don't want to answer
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="hearAboutUsDropdown"
                  className={styles.Elements}
                >
                  How did you hear about us?
                </label>
                <div>
                  <select
                    name="hearAboutUs"
                    id="hearAboutUsDropdown"
                    className={styles.genderDropdown}
                  >
                    <option disabled selected value>
                      Select
                    </option>
                    <option value="Newsletter">Newsletter</option>
                    <option value="Friend">Friend</option>
                    <option value="Employee at Travelers">
                      Employee at Travelers
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className={styles.Elements}>
                How would you rate us? <br />
                <input type="radio" id="1" name="rate" value="Horrible" />
                <label htmlFor="Worse"> Horrible </label>
                <input type="radio" id="2" name="rate" value="Bad" />
                <label htmlFor="2"> Bad </label>
                <input type="radio" id="3" name="rate" value="Neutral" />
                <label htmlFor="3"> Neutral </label>
                <input type="radio" id="4" name="rate" value="Good" />
                <label htmlFor="4"> Good </label>
                <input type="radio" id="5" name="rate" value="Best" />
                <label htmlFor="5"> Best </label>
              </div>

              <div className={styles.Elements}>
                Would you recommend us to your family and friends? <br />
                <input
                  type="radio"
                  id="1"
                  name="recommend"
                  value="Strongly No"
                />
                <label htmlFor="Worse"> Strongly No </label>
                <input type="radio" id="2" name="recommend" value="No" />
                <label htmlFor="2"> No </label>
                <input type="radio" id="3" name="recommend" value="May be" />
                <label htmlFor="3"> May be </label>
                <input type="radio" id="4" name="recommend" value="Yes" />
                <label htmlFor="4"> Yes </label>
                <input
                  type="radio"
                  id="5"
                  name="recommend"
                  value="Strongly Yes"
                />
                <label htmlFor="5"> Strongly Yes </label>
              </div>
              <div>
                <textarea
                  name="feedback"
                  id="messageId"
                  placeholder="Your feedback here.. (required)"
                  className={styles.messageTextField}
                  maxLength="1000"
                  required
                />
              </div>
              <div>
                <input type="submit" value="Submit" className={styles.submit} />
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Feedback;
