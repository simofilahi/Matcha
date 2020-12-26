import React from 'react';
import styles from './css/style.module.css';

const Register = ({ props, children }) => {
    console.log(styles);
    return (
        <div className={styles.login}>
            {children}
        </div>
    );
}

Register.infoSection = ({ props, children }) => {
    return (
        <div className={styles.login_fc_item_1 }>
            <div className={styles.login_fc_it_1_ch_1}>
                <i className="fab fa-facebook "></i>
                <i className="fab fa-instagram "></i>
                <i className="fab fa-twitter"></i>
            </div>
            <div className={styles.login_fc_it_1_ch_2}>
                <h1>MATCHA</h1>
                <p className={styles.custom_para}>Chat with new people<br /> around the world.</p>
                <p>Meet millions of new people from all over the world, wherever you are. Have a good
                chat, make new friends or even find the love of your
                life. Because life is all about the people you meet.</p>
                <a href="#"><i className="fab fa-facebook "></i><span>Sign Up With Facebook</span><span></span></a>
            </div>
            <div className={styles.login_fc_it_1_ch_3}>
                <h1>1,000,000,000</h1>
                <p>Conversation on Matcha</p>
            </div>
        </div >
    );
}

Register.formSection = ({ props, children }) => {
    return (
        <div className={styles.login_fc_item_2}>
            <a href="" className={styles.login_btn}>Log in</a>
            <div className={styles.login_form_ct}>
                <h4><span>OR SIGN UP WITH EMAIL</span></h4>
                <form action="" className={styles.login_form_flex}>
                    <div className={styles.login_form_row}>
                        <div className={styles.login_form_col}>
                            <label htmlFor="fname">First name</label>
                            <input type="text" id="fname" name="firstname" placeholder="e.g Kim" />
                        </div>
                        <div className={styles.login_form_col}>
                            <label htmlFor="gender">Gender</label>
                            <select>
                                <option>You are...</option>
                                <option>a man</option>
                                <option>a woman</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.login_form_row}>
                        <div className={styles.login_form_col_birth}>
                            <label htmlFor="birth">Birthday</label>
                            <div className={styles.login_form_row_birth}>
                                <select>
                                    <option>Day</option>
                                    <option>a man</option>
                                    <option>a woman</option>
                                </select>
                                <select>
                                    <option>Month</option>
                                    <option>a man</option>
                                    <option>a woman</option>
                                </select>
                                <select>
                                    <option>Year</option>
                                    <option>a man</option>
                                    <option>a woman</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className={styles.login_form_row}>
                        <div className={styles.login_form_col}>
                            <label htmlFor="City">City</label>
                            <input type="text" id="city" name="city" placeholder="e.g London" />
                        </div>
                        <div className={styles.login_form_col}>
                            <label htmlFor="type">You're here to...</label>
                            <select>
                                <option>Select</option>
                                <option>Chat</option>
                                <option>Make new friends</option>
                                <option>Date</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.login_form_row}>
                        <div className={styles.login_form_col}>
                            <label htmlFor="email">Email address</label>
                            <input type="email" id="email" name="email" placeholder="e.g example@example.com" />
                        </div>
                    </div>
                    <div className={styles.login_form_row}>
                        <div className={styles.login_form_col}>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="At least 8 characters" />
                        </div>
                    </div>
                    <div className={styles.login_form_row}>
                        <div className={styles.login_form_col_btn}>
                            <input type="submit" value="SIGN UP" />
                        </div>
                    </div>
                </form>
            </div>
            <div></div>
        </div>
    );
}

export default Register;