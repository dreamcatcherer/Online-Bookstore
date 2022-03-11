import React from 'react';
import css from "./ContactUs.module.css";

const ContactUs = () => {
    return (
        <div className={css.allDiv}>
          <div className={css.titleDiv}>
            <h1>Contact Information - Online Bookstore</h1>
          </div>
          <div className={css.textDiv}>
            <h2>Address</h2>
            <p>1455 Lakeshore Cir,San Jose, CA, 95131</p>
            <h2>Call At</h2>
            <p><a href="tel:+11234567890">+1 123-456-7890</a></p>
            <h2>Fax</h2>
            <p><a href="fax:+17894561230">+1 123-456-7890</a></p>
            <h2>Email</h2>
            <p><a href="mailto:cui.qiu@northeastern.edu">cui.qiu@northeastern.edu</a></p>

          </div>

        </div>
    )
}

export default ContactUs