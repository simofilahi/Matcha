import React from 'react';
import './css/style.css'

const Register = ({ props, children }) => {
    return (
        <div className="login-fc">
            {children}
        </div>
    );
}

Register.infoSection = ({ props, children }) => {
    return (
        <div className="login-fc-item-1 ">
            <div className="login-fc-it-1-ch-1">
                <i class="fab fa-facebook "></i>
                <i class="fab fa-instagram "></i>
                <i class="fab fa-twitter"></i>
            </div>
            <div className="login-fc-it-1-ch-2">
                <h1>MATCHA</h1>
                <p className="custom-para">Chat with new people<br /> around the world.</p>
                <p>Meet millions of new people from all over the world, wherever you are. Have a good
                chat, make new friends or even find the love of your
                life. Because life is all about the people you meet.</p>
                <a href="#"><i class="fab fa-facebook "></i><span>Sign Up With Facebook</span><span></span></a>
            </div>
            <div className="login-fc-it-1-ch-3">
                <h1>1,000,000,000</h1>
                <p>Conversation on Matcha</p>
            </div>
        </div >
    );
}

Register.formSection = ({ props, children }) => {
    return (
        <div className="login-fc-item-2">
            <a href="" className="login-btn">Log in</a>
            <div className="login-form-ct">
                <h4><span>OR SIGN UP WITH EMAIL</span></h4>
                <form action="" className="login-form-flex">
                    <div className="login-form-row">
                        <div className="login-form-col">
                            <label for="fname">First name</label>
                            <input type="text" id="fname" name="firstname" placeholder="e.g Kim" />
                        </div>
                        <div className="login-form-col">
                            <label for="gender">Gender</label>
                            <select>
                                <option>You are...</option>
                                <option>a man</option>
                                <option>a woman</option>
                            </select>
                        </div>
                    </div>
                    <div className="login-form-row">
                        <div className="login-form-col-birth">
                            <label for="birth">Birthday</label>
                            <div className="login-form-row-birth">
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
                    <div className="login-form-row">
                        <div className="login-form-col">
                            <label for="City">City</label>
                            <input type="text" id="city" name="city" placeholder="e.g London" />
                        </div>
                        <div className="login-form-col">
                            <label for="type">You're here to...</label>
                            <select>
                                <option>Select</option>
                                <option>Chat</option>
                                <option>Make new friends</option>
                                <option>Date</option>
                            </select>
                        </div>
                    </div>
                    <div className="login-form-row">
                        <div className="login-form-col">
                            <label for="email">Email address</label>
                            <input type="email" id="email" name="email" placeholder="e.g example@example.com" />
                        </div>
                    </div>
                    <div className="login-form-row">
                        <div className="login-form-col">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="At least 8 characters" />
                        </div>
                    </div>
                    <div className="login-form-row">
                        <div className="login-form-col-btn">
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