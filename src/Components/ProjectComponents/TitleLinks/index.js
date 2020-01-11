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

            <div className="row">
                
                <div className="col-md-6">
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
                </div>

                <div className="col-md-6 text-right">

                    <div id="techUsedDiv">
                        <i title="Built with HTML5" style={{display: currentProject.techUsed.indexOf("html") !== -1 ? "inline" : "none"}} class="techUsed fab fa-html5"></i>
                        <i title="Built with ReactJS" style={{display: currentProject.techUsed.indexOf("react") !== -1 ? "inline" : "none"}} class="techUsed fab fa-react"></i>
                        <i title="Built with JavaScript" style={{display: currentProject.techUsed.indexOf("js") !== -1 ? "inline" : "none"}} class="techUsed fab fa-js-square"></i>
                        <i title="Built with NodeJS" style={{display: currentProject.techUsed.indexOf("node") !== -1 ? "inline" : "none"}} class="techUsed fab fa-node-js"></i>
                        <i title="Built with Bootstrap" style={{display: currentProject.techUsed.indexOf("bootstrap") !== -1 ? "inline" : "none"}} class="techUsed fab fa-bootstrap"></i>
                    </div>

                </div>

            </div>

            <hr/>
        </div>
    )
}

export default TitleLinks;