import React, {useEffect} from 'react'
import ScrollReveal from 'scrollreveal';

const OurWorks = props => {
    useEffect(() => {
        ScrollReveal().reveal('.works_wrapper',{scale:0.85, reset:true, viewFactor:0.5 }  );
    })
    return (
        <div className="col-md-4 p-0 m-0">
            <div className="works_wrapper">
                <img className="img img-fluid " src={`data:${props.contentType};base64,`+props.buffer} alt=""/>
                <h5 className="text-center">{props.title}</h5>
            </div>
        </div>
    );
}


export default OurWorks