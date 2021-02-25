import React from "react";
import styles from "./styles/style.module.css";
import { Link } from "react-router-dom";

import { REGISTER } from "src/constants";
const Login = ({ props, children }) => {
  return <div className={styles.login}>{children}</div>;
};

Login.infoSection = ({ props, children }) => {
  return (
    <div className={styles.login_fc_item_1}>
      <div className={styles.login_fc_it_1_ch_1}>
        <i className="fab fa-facebook "></i>
        <i className="fab fa-instagram "></i>
        <i className="fab fa-twitter"></i>
      </div>
      <div className={styles.login_fc_it_1_ch_2}>
        <h1>MATCHA</h1>
        <p className={styles.custom_para}>Welcome Back!</p>
        <a href="#">
          <i className="fab fa-facebook "></i>
          <span>Sign Up With Facebook</span>
          <span></span>
        </a>
      </div>
      <div className={styles.login_fc_it_1_ch_3}>
        <h1>1,000,000,000</h1>
        <p>Conversation on Matcha</p>
      </div>
    </div>
  );
};

Login.formSection = ({ props, children }) => {
  return (
    <div className={styles.login_fc_item_2}>
      <Link to={REGISTER} className={styles.login_btn}>
        Sign up
      </Link>
      <div className={styles.login_form_ct}>
        <h4>
          <span>OR LOG IN WITH E-MAIL</span>
        </h4>
        <form className={styles.login_form_flex}>
          <div className={styles.login_form_row}>
            <div className={styles.login_form_col}>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="e.g example@example.com"
              />
            </div>
          </div>
          <div className={styles.login_form_row}>
            <div className={styles.login_form_col}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="At least 8 characters"
              />
            </div>
          </div>
          <div className={styles.login_form_row}>
            <div className={styles.login_form_col_btn}>
              <input type="submit" value="LOG IN" />
            </div>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default Login;
