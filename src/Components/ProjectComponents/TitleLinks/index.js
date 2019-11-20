import React from 'react'

import "./style.css"

// const projectInfo = require("../projectInfo.json");

const TitleLinks = (props) => {
    // const currentProject = projectInfo[props.projectName];
    const currentProject = props.projectObj;
    const color = {
        color: currentProject.hexCode
    }
    return (
        <div className="titleDiv">
            <span id="title" style={color}>{currentProject.title}</span>
            <div className="linkIcons text-center">
                
                <div style={{display: currentProject.frontGithubLink ? "inline" : "none"}}>
                    <a href={currentProject.frontGithubLink} title="Frontend Github Link" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github" style={color}></i>                
                    </a>
                </div>

                <div style={{display: currentProject.backGithubLink ? "inline" : "none"}}>
                    <a href={currentProject.backGithubLink} title="Backend Github Link" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github" style={color}></i>                
                    </a>
                </div>
                
                <div style={{display: currentProject.deployedProjectLink ? "inline" : "none"}}>
                    <a href={currentProject.deployedProjectLink} title="Deployed Project Link" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-external-link-alt" style={color}></i>
                    </a>
                </div>
            </div>

            <hr/>
        </div>
    )
}

export default TitleLinks;