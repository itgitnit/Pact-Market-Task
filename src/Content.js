import React from 'react'
import './Content.css';

function Content() {
    return (
        <>
            <div className="content">
                <div className="wrapper">
                    <div className="title-text">
                        <div className="title login">Business</div>
                        <div className="title signup">Signup Form</div>
                    </div>
                    <div className="form-container">
                        <div className="slide-controls">
                            <input type="radio" name="slider" id="login" checked />
                            <input type="radio" name="slider" id="signup" />
                            <label for="login" className="slide login">Business</label>
                            <label for="signup" className="slide signup">Freelancer</label>
                            <div className="slide-tab"></div>
                        </div>
                        <div className="form-inner">
                            <form className="login">
                                <div className="field">
                                    <input type="text" placeholder="Industry" required />
                                </div>
                                <div className="field">
                                    <input type="text" placeholder="Username" required />
                                </div>
                                <div className="field">
                                    <input type="password" placeholder="Password" required />
                                </div>

                                <div className="signup-link">Already a Pact Member? <a href="#">Login</a></div>
                                <div className="field">
                                    <input type="submit" value="Next Step" />
                                </div>

                                <div className="signup-link">By registering you confirm that you accept the <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a></div>

                            </form>

                            <form className="signup">
                                <div className="field">
                                    <input type="text" placeholder="Email Address" required />
                                </div>
                                <div className="field">
                                    <input type="password" placeholder="Password" required />
                                </div>
                                <div className="pass-link"><a href="#">Forgot Password?</a></div>
                                <div className="field">
                                    <input type="submit" value="Next Step" />
                                </div>
                                <div className="signup-link">Not a member?<a href="#">Signup Now</a></div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content;