import React from 'react'

export default function EmailForm(props) {
    return (
        <div>
            <button id="backBtn" className="btn btn-sm" onClick={() => props.back()}><i class="fas fa-arrow-left"></i></button>
            <h4>Email Form</h4>
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
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="They're takeing the hobbits to Isengard"></textarea>
                </div>
            </form>
        </div>
    )
}
