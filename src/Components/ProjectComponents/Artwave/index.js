import React from "react";

import "./style.css";

export default function Artwave() {
    return (
        <div id="artwave">

            <div id="artwaveContent">

                <div id="artwaveCarousel" class="carousel slide" data-ride="carousel">

                    <ol class="carousel-indicators">
                        <li data-target="#artwaveCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#artwaveCarousel" data-slide-to="1"></li>
                        <li data-target="#artwaveCarousel" data-slide-to="2"></li>
                        <li data-target="#artwaveCarousel" data-slide-to="3"></li>
                        <li data-target="#artwaveCarousel" data-slide-to="4"></li>
                        <li data-target="#artwaveCarousel" data-slide-to="5"></li>
                        <li data-target="#artwaveCarousel" data-slide-to="6"></li>
                    </ol>

                    <div class="carousel-inner text-center">

                        <div className="carousel-item active">
                            <img src={require("../../../Images/Artwave/Artwave_Login.png")} alt="artwave login" />
                        </div>

                        <div className="carousel-item">
                            <img src={require("../../../Images/Artwave/Artwave_Register_Error.png")} alt="artwave registration with error" />
                        </div>

                        <div className="carousel-item">
                            <img src={require("../../../Images/Artwave/AW_Cinema_Home.png")} alt="artwave login" />
                        </div>

                        <div className="carousel-item">
                            <img src={require("../../../Images/Artwave/AW_Home_w_Rec.png")} alt="artwave registration with error" />
                        </div>

                        <div className="carousel-item">
                            <img src={require("../../../Images/Artwave/AW_Create_List.png")} alt="artwave login" />
                        </div>

                        <div className="carousel-item">
                            <img src={require("../../../Images/Artwave/AW_Add_List.png")} alt="artwave registration with error" />
                        </div>

                        <div className="carousel-item">
                            <img src={require("../../../Images/Artwave/AW_List_View.png")} alt="artwave registration with error" />
                        </div>

                        <a class="carousel-control-prev" href="#artwaveCarousel" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#artwaveCarousel" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>

                    </div>
                </div>

                <hr id="underCarouselRule"/>
                
                <h6>Background</h6>
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

            </div>

        </div>
    );
}
