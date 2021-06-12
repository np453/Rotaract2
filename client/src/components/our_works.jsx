import React, { Component } from 'react';
import axios from '../axios';
import ScrollReveal from 'scrollreveal';

class Ourworks extends Component {
    state = {
        works: []
    }

    componentDidMount = async() => {
        const {data:works} = await axios.get("/ourworks/")
        this.setState({works})
        // ScrollReveal().reveal('.our_works_',{scale:0.85, reset:true }  );
        ScrollReveal().reveal('.main__works__heading',{origin:"top", distance:"130px", scale:0.85, reset:true }  );
        ScrollReveal().reveal('.works__wrapper',{origin:"bottom", distance:"130px", scale:0.85, reset:true }  );
    }
    
    render() {
        return (
        <div>
            <div className="container our__works__section pb-4">
                <h1 className="main__works__heading p-2">Our Works</h1>
                <div className="col-md-12 works__wrapper">
                  <div className="row m-0">
                      
                        {this.state.works.map(m => 
                        <div className="col-md-4 p-0 m-0">
                            <div className="works_wrapper">
                                <img className="img img-fluid " src={`data:${m.contentType};base64,`+m.buffer} alt=""/>
                                <h5 className="text-center">{m.title}</h5>
                            </div>
                        </div>
                            // <OurWorks title={m.title} buffer={m.buffer} contentType={m.contentType} className="our_works_"/>
                        )}
                  </div>
                </div>
            </div>
        </div>
            
                  
        );
    }
}

export default Ourworks;