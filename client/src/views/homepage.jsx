import React, { Component,Suspense } from 'react'
import { Link } from 'react-router-dom';
import '../sass/main.scss';
import Typist from 'react-typist';
import ScrollReveal from 'scrollreveal';
import shareExpimg from '../assets/topSectionImg.jpg';
import shareSectionImg from '../assets/shareSectionImg.jpg';
import Cube from '../components/common/cube';
import ShareRotaryStory from '../components/shareRotaryStory';
import Logo from '../assets/logo.png'
import shareExpimg3 from '../assets/shareExp3.jpg'


const Workcomponent = React.lazy(()=>import('../components/our_works'));

export default class Homepage extends Component {
    state={
        scrollTop:0,
        animate1:0,
        show:true
    }

    form = React.createRef();
    gallery = React.createRef();
    storyForm = React.createRef();
    topSection = React.createRef();
    executeFormScroll = () => this.form.current.scrollIntoView()
    executeGalleryScroll = () => this.gallery.current.scrollIntoView()
    executeStoryFormScroll = () => this.storyForm.current.scrollIntoView()
    executeStoryTopScroll = () => this.topSection.current.scrollIntoView()
    
    componentDidMount() {
        // ScrollReveal().reveal('.our__works__section',{origin:'bottom', distance: '130px', viewFactor: 0.5, reset:false }  );
        // ScrollReveal().reveal('.share__experience__section',{origin:'left', distance: '130px', viewFactor: 0.5, reset:false }  );
        // ScrollReveal().reveal('.main__heading, .section__para',{origin:'left', distance: '130px', viewFactor: 0.5, reset:false }  );
        // ScrollReveal().reveal('.our_vision_background_wrapper',{origin:'top', distance: '130px', viewFactor: 0.5, reset:false }  );
        // ScrollReveal().reveal('.our__works_',{origin:'left', distance: '130px', viewFactor: 0.6 }  );
        ScrollReveal().reveal('.s__b__s', { afterReveal:this.renderTypwriter, viewFactor:0.6, reset:false } );
    }
    renderTypwriter = () => {
        this.setState({animate1 :1, show:false})
        return (
            <Typist>
                <h1>Service before self</h1>
            </Typist>
        );
    }
    render() {
        const titleHead = (this.state.animate1 === 1) ?  <Typist cursor={{show:false}}><h1 className="type__heading_1">Service<br/>before self</h1></Typist> : null
        return (
            <div ref={this.topSection} className="container-fluid p-0">
                <div className="blob__container__section">
                <div className="container-fluid mt-3">
                <div className="container-lg  p-0">
                <nav className="navbar  navbar-expand-lg m-0 p-0">
                    <span className="navbar-brand brand">Rotaract Club MNNIT</span>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#landingPageNavbar" aria-controls="landingPageNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar top-bar"></span>
                        <span className="icon-bar middle-bar"></span>
                        <span className="icon-bar bottom-bar"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="landingPageNavbar">
                        <div className="navbar-nav ml-auto align-items-center">
                            {/* <Link onClick={this.executeFormScroll}><span className="mr-3 nav__link">Join us</span></Link> */}
                            <Link to="/gallery"><span className="nav__link">View gallery</span></Link>
                        </div>
                    </div>
                </nav>
                <div className="rotaract-logo-wrapper">
                    <img src={Logo} className="rotaract-logo" alt="" />
                </div>
                </div>   
            </div>
            
            {/*intro section*/}
            <div className="container intro__section d-flex justify-content-center">
                <div className="row">
                    {/* <Typist cursor={{show:false}} avgTypingDelay={50} >
                        <span className="col-md-12 d-flex justify-content-center intro__section__heading">Rotaractives: Spreading smiles</span>
                    </Typist> */}
                    <div className="container-fluid mt-5 mb-5 p-0 share__experience__section">
                <div className="row m-0 d-flex justify-content-center">
                    <img style={{ pointerEvents:"none" }} src={shareExpimg} className="img img-fluid top_img" alt=""/>
                    <img src={shareExpimg3} className="share-exp-img-mobile img2 img img-fluid w-100" alt=""/>
                </div>
                    <h3 className="about-us"><span>About Us</span></h3>
                    <span className="col-md-12 d-flex justify-content-center intro__section__para">
                        About the club
                        Rotaract Club of MNNIT is an  international service organization  under the Rotary International,
                        for  all who wish to create a difference  in the society today.<br/>
                        We were established on 28  May,2015 under the club  sponsorship of Rotary Club of  Allahabad Elite,
                        Uttar Pradesh, India.  From a humble 15 members team  size we have grown to a 60+ member  team.
                    </span>
            </div>
                </div>
            </div>
                </div>

            {/*our vision*/}
            <div className="container our_vision_background_wrapper">
                <div className="container our__vision__section">
                    <h1 className="main__heading"><span>Our vision</span></h1>
                    <div className="">
                    <span className="section__para text-center section__para__ourVision">
                    The motto of the club is service before self. We aim not only to serve
                    society in any possible way but create a feeling of care,
                    responsibility and duty among the students of the college.
                    
                    </span>
                    </div>
                </div>
            </div>


            {/*Our Works*/}
            <div className="our__works_">
            <Suspense fallback={
            <div>Loading...</div>
            }>
                <Workcomponent />
            </Suspense>
            </div>

            {/*share your rotary experience section*/}
            <div className="container-fluid p-0 share__experience__section">
                <div className="row m-0">
                    <div className="col-md-6 p-0">
                        <img style={{ pointerEvents:"none" }} src={shareSectionImg} className="img img-fluid w-100" alt=""/>
                    </div>
                    <div className="col-md-6 shareExpSection d-flex justify-content-center align-items-center">
                        <div className="row m-0">
                            <div className="col-md-12">
                                <h1>Glipmse of Memorable Moments</h1>
                            </div>
                            <div className="col-md-12">
                                <Link to="/gallery"><button className="btn_" >view gallery</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid s__b__s">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center">
                        {titleHead}
                    </div>
                    <div className="col-md-6">
                        <Cube/>
                    </div>
                </div>
            </div>
            {/* <div ref={this.gallery}>
                    <Gallery />
            </div> */}
                
                <div onClick={this.executeStoryTopScroll} className="d-flex justify-content-end p-2 arrow_to_top"><i className="fa fa-2x fa-arrow-up"></i></div>
                <div ref={this.storyForm} className=""><ShareRotaryStory /></div>
                {/* <Footer /> */}
            </div>
        )
    }
}