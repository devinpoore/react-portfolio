import React from 'react';



function Carousel(props) {
    return (
        <div>
            <div id="artwaveCarousel" class="carousel slide" data-ride="carousel">

                <ol class="carousel-indicators">

                    {/* Map over the length of the image array */}

                    {props.imageLinkArray.map(index => {
                        return <li data-target="#artwaveCarousel" data-slide-to="0" class="active"></li>
                    })}


                    <li data-target="#artwaveCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#artwaveCarousel" data-slide-to="1"></li>
                    <li data-target="#artwaveCarousel" data-slide-to="2"></li>
                    <li data-target="#artwaveCarousel" data-slide-to="3"></li>
                    <li data-target="#artwaveCarousel" data-slide-to="4"></li>
                    <li data-target="#artwaveCarousel" data-slide-to="5"></li>
                    <li data-target="#artwaveCarousel" data-slide-to="6"></li>
                </ol>

                <div class="carousel-inner text-center">

                    {/* map over the image array content */}
                    <div className="carousel-item active">
                        <img src={require("../../../Images/Artwave/Artwave_Login.png")} alt="artwave login" />
                    </div>

                    {props.imageLinkArray.map()}

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

            <hr id="underCarouselRule" />
        </div>
    )
}

export default Carousel;
