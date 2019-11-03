import React from "react";

import "./style.css";

import TitleLinks from "../TitleLinks";

export default function Artwave() {
    return (
        <div>
            <header>
                {/* <h3>artwave</h3>
                <div className="linkIcons">
                    <i class="fab fa-github"></i>
                    <i class="fas fa-external-link-alt"></i>
                </div> */}
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
                <div className="row text-center">
                    <div className="col-md-6">
                        <img src="../../Images/Artwave_Login.png"/>
                    </div>
                    <div className="col-md-6">
                        <img src="../../Images/Artwave Login.png"/>
                    </div>
                </div>
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
