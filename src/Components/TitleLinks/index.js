import React from 'react'

import "./style.css"

const TitleLinks = (props) => {
    return (
        <div className="titleDiv">
            <span id="title">{props.projectName}</span>
            <div className="linkIcons text-center">
                {/* use props.github, props.deployed, etc. for a tag srcs */}
                <i class="fab fa-github"></i>
                <i class="fas fa-external-link-alt"></i>
            </div>
        </div>
    )
}

export default TitleLinks;
