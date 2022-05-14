import './styles.css';


const Carousel = () => {
    return (

        <div id="carouselId" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselId" data-slide-to="0" className="active"></li>
                <li data-target="#carouselId" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active" style={{ backgroundImage: "url(images/bestTeams.jpg)" }}>
                    {/* <img src="url(images/img/bestTeams.jpg)" alt="First slide"/> */}
                </div>
                <div className="carousel-item" style={{ backgroundImage: "url(images/aboutImg.png)" }}>
                    {/* <img src="url(images/bestTeams.jpg)" alt="Second slide"/> */}
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>

    );
} 

export default Carousel;