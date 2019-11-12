import React from "react";

import "./style.css";

import TitleLinks from "../TitleLinks";

export default function Artwave() {
    return (
        <div id="artwave">

            <header>
                <TitleLinks projectName="artwave"/>
            </header>

            <hr/>

            {/* this could be rendered by an array of strings, representing paragraphs?? */}
            <div id="artwaveContent">

                <p>
                    In the fall of 2017, I had the idea for a lightweight social media application that would focus, in particular, upon
                    the ability of people to catalogue their favorite kinds of art - from all mediums - and to recommend certain pieces
                    of art - movies, books, songs, albums, tv shows, video games, etc - directly to their friends and track that friends
                    progress experiencing whatever you had recommended to them.
                </p>
                <p>
                    I dubbed this idea 'artwave'.
                </p>
                <p>
                    At the time, I lacked sufficient application development knowledge to start building anything in earnest. However, as the final
                    project loomed in the bootcamp I took this past summer, I mentioned the idea to the my partners for the project as we were
                    brainstorming what we wanted to make. They liked it and we agreed to take a stab at building it. And so, the first version of
                    ArtWave was born.
                </p>
                <hr/>

                <div className="row text-center">
                    <div className="col-md-5">
                        <img id="artwaveLogin" src={require("../../Images/Artwave_Login.png")} alt="artwave login"/>
                    </div>
                    <div className="col-md-7">
                        <img id="artwaveReg" src={require("../../Images/Artwave_Register_Error.png")} alt="artwave registration with error"/>
                    </div>
                </div>
                <hr />
                <p>
                    In the fall of 2017, I had the idea for a lightweight social media application that would focus, in particular, upon
                    the ability of people to catalogue their favorite kinds of art - from all mediums - and to recommend certain pieces
                    of art - movies, books, songs, albums, tv shows, video games, etc - directly to their friends and track that friends
                    progress experiencing whatever you had recommended to them.
                </p>
                <p>
                    In the fall of 2017, I had the idea for a lightweight social media application that would focus, in particular, upon
                    the ability of people to catalogue their favorite kinds of art - from all mediums - and to recommend certain pieces
                    of art - movies, books, songs, albums, tv shows, video games, etc - directly to their friends and track that friends
                    progress experiencing whatever you had recommended to them.
                </p>
                <p>
                    In the fall of 2017, I had the idea for a lightweight social media application that would focus, in particular, upon
                    the ability of people to catalogue their favorite kinds of art - from all mediums - and to recommend certain pieces
                    of art - movies, books, songs, albums, tv shows, video games, etc - directly to their friends and track that friends
                    progress experiencing whatever you had recommended to them.
                </p>

            </div>
            
        </div>
    )
}
