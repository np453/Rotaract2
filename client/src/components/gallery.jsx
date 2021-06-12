import React, { Component } from 'react';
import axios from '../axios';
import ScrollReveal from 'scrollreveal';
import {Link} from 'react-router-dom'
class Gallery extends Component {
    state = {
        galleryImg : [],
        loading : true
    }
    componentDidMount = async() => {
        const {data:Img} = await axios.get("/upload/img")
        this.setState({ galleryImg:Img, loading : false })
        ScrollReveal().reveal('.img__gallery',{scale:0.85, reset:false }  );

    }
    
    render() {
        const el = this.state.loading ?
          <div style={{ height:"60vh", color:"white" }} className="d-flex justify-content-center align-items-center"><h3>Loading...</h3></div>
        : 
        <div className="row m-0 p-1">
                        {this.state.galleryImg.map(m => 
                            <div className="col-md-4 p-1">
                                <img className="img img-fluid img__gallery" src={`data:${m.contentType};base64,`+m.buffer} alt=""/>
                            </div>
                        )}  
                     </div>
        return (
            <div className="container-fluid gallery-main-wrapper p-0">
                 <div className="container img_gallery_container p-0">          
                 <nav className="navbar  navbar-expand-lg m-0 p-0">
                    <Link to="/"><span className="navbar-brand p-2">Rotaract Club MNNIT</span></Link>
                    <div className="collapse navbar-collapse d-flex justify-content-start" id="landingPageNavbar">
                        <div className="navbar-nav img_gallery_navbar align-items-center">
                            <span className="mr-3 p-2 nav__link">
                                <a target="_blank" href="https://www.facebook.com/rotaractmnnit">
                                    {/* <span className="img_gallery_link pr-2">check out more images at</span>  */}
                                    <svg className="" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0H18C19.1046 0 20 0.89543 20 2V18C20 19.1046 19.1046 20 18 20H2C0.89543 20 0 19.1046 0 18V2C0 0.89543 0.89543 0 2 0ZM2 2V18H18V2H2ZM9.13306 10.0044H11V16H13V10.0044H14.9824V8.00439H13V7C13 6.44772 13.4477 6 14 6H15V4H14C12.3431 4 11 5.34315 11 7V8.00439H9.13306V10.0044Z" fill="#66A5C9"/>
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </div>
                </nav>
                    <div className="gallery-heading">
                        <h3>Glimpse</h3>
                    </div>
                     {el}
                 </div>
            </div>
        );
    }
}

export default Gallery;