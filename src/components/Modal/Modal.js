import React from "react";
import "./index.css"

function Modal() {
    return (
        <div className="whole">
            <div className="modal fade" id="aboutModal" tabindex="-1" aria-labelledby="aboutModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="Bio">A little bit about myself</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    <div className="modal-body bio-text">
                    <div className="bio">
                        <div className="profile-pic">
                            <img className="profile-pic" alt="Profile of Teresa Maldonado" src="./images/profile-pic.jpeg"/>
                        </div>
                        <div>
                            <p>Hello, I am Teresa! I am web developer based in Los Angeles. I have only recently starting learning web development and will finish the UCLA 
                        Full-Stack Flex Coding Bootcamp in December 2020. Additionally, I have a Bachelor's degree in Politcal Science from UCLA and have customer
                        service experience both through retail and e-commerce. <br/> My goal with web development is to find new and novel ways to improve user interactions and
                        to create a more personal and captivating experience for the user. I believe the best way to achieve this is through collaboration and testing. A web 
                        developer depends upon collaboration and clean, detailed code in order to create an application that is both aesthetically pleasing and easy to navigate 
                        for a wide variety of people. <br/> Apart from coding, I like to read books, play with my dog - Bean - and watch new and interesting tv shows. 
                            </p>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
{/* <!-- Contact Modal --> */}
            <div className="modal fade" id="contactModal" tabindex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">So you want to chat?</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <div className="form-group">
                                        <label for="inputName">Name</label>
                                        <input type="name" className="form-control" id="inputName"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputName">Company</label>
                                        <input type="name" className="form-control" id="inputName"/>
                                    </div>
                                    <div>
                                        <label for="inputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="inputEmail1" aria-describedby="emailHelp"/>
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputarea">Let's connect!</label>
                                        <textarea className="form-control" id="inputarea" rows="3"></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Modal;