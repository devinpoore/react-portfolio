import React from "react";

import "./style.css";

// Import Interior Modal Components
import CommTypeSelect from "../InteriorModalComponents/CommTypeSelect";
import EmailForm from "../InteriorModalComponents/EmailForm";
import SmsForm from "../InteriorModalComponents/SmsForm";

class ContactModal extends React.Component {
    state = {
        modalContent: "commTypeSelect"
    }

    commSelection = (btnClicked) => {
        if (btnClicked === "email") {
            this.setState({ modalContent: "emailForm" });
        } else if (btnClicked === "text") {
            this.setState({ modalContent: "smsForm" });
        }
    }
    
    reset = () => {
        this.setState({ modalContent: "commTypeSelect" });
    }

    determineModalContent = () => {
        if (this.state.modalContent === "commTypeSelect") {
            return <CommTypeSelect clickAction={this.commSelection}/>
        } else if (this.state.modalContent === "emailForm") {
            return <EmailForm back={this.reset}/>
        } else if (this.state.modalContent === "smsForm") {
            return <SmsForm back={this.reset}/>
        }
    }
    
    render() {
        return (
            <div>
                <div class="modal fade" id="contactModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">    
    
                            <div className="modal-body">
                                <div className="container-fluid">
                                    
                                    {this.determineModalContent()}                                    
    
                                </div>
                            </div>
    
                            <div className="modal-footer text-center">
                                <button id="closeBtn" className="btn btn-md btn-dark" data-toggle="modal" data-target="#contactModal">Close</button>
                            </div>
    
                        </div>
                    </div>
                </div>
            </div>
        )
    } 
}

export default ContactModal;
