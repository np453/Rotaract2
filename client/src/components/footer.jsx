import React from 'react';
import { Link } from 'react-router-dom';

const Footer = props => {
    return (
        <div className="foot__er">
                    <div className="container-fluid p-0">
                        <div className="row m-0">
                            <div className="col-md-7 p-5">
                                <div className="row">
                                <div className="col-md-4">
                                    <h3>Follow us on</h3>
                                    <h6>Facebook</h6>
                                    <h6>Instagram</h6>
                                </div>
                                <div className="col-md-4">
                                    <h3>Important links</h3>
                                    <h6>Home</h6>
                                    <h6>Share your story</h6>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="container contact_form_container p-5">
                                    <h2 className="">Contact us</h2>
                                    <div className="wrapper mb-5">
                                        <input spellcheck="false" name="name"  id="name" required="true" type="text"/>
                                        <div className="placeholder">Your Name</div>
                                    </div>
                                    <div className="wrapper mb-5">
                                        <input spellcheck="false" name="email"  id="email" required="true" type="text"/>
                                        <div className="placeholder">Your email</div>
                                    </div>
                                    {/* <div className="wrapper mb-5">
                                        <input spellcheck="false" name="contact"  id="contact" type="text"/>
                                        <div className="placeholder">Where we can contact you</div>
                                    </div> */}
                                    <button className="btn_ ml-0">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* <Footer /> */}
                </div>
    );
}
export default Footer;