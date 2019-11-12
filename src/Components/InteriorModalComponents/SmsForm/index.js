import React from 'react'

import "./style.css";

function SmsForm(props) {
    return (
        <div>


            <button id="backBtn" className="btn btn-sm" onClick={() => props.back()}><i class="fas fa-arrow-left"></i></button>
            <h4>SMS Form</h4>
            <hr />

            <form>
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-6">
                            <label for="nameInput">Name</label>
                            <input id="nameInput" placeholder="Aragorn II, son of Arathorn"/>
                        </div>
                        
                        <div className="col-md-6">
                            <label for="smsInput">Phone #</label>
                            <input id="smsInput" placeholder="800-FOR-RNGR"/>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="It is but a shadow and a thought that you love. I cannot give you what you seek."></textarea>
                </div>
            </form>

        </div>
    )
}

export default SmsForm;
