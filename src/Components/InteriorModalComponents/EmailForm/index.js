import React from "react";

import api from "../../../api/api.js";

import "./style.css";

export default function EmailForm(props) {
    return (
        <div>
            <button id="emailBackBtn" className="btn btn-sm" onClick={() => props.back()}><i id="emailArrow" class="fas fa-arrow-left"></i></button>
            <h4 id="emailHeader">Email Form</h4>
            <hr />

            <form>
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-6">
                            <label for="nameInput">Name</label>
                            <input id="nameInput" placeholder="Legolas"/>
                        </div>
                        
                        <div className="col-md-6">
                            <label for="emailInput">Email Address</label>
                            <input id="emailInput" placeholder="shieldsurfer@mirkwood.com"/>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="They're taking the hobbits to Isengard!"></textarea>
                </div>

                <button className="btn btn-sm">Send</button>
            </form>
        </div>
    )
}
