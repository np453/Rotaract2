import React, { Component } from 'react'
import img from '../../assets/works_old.jpg'
import logo from '../../assets/logo.png'
export default class Cube extends Component {
    state = {
        classVal: "cube"
    }
    render() {
        return (                
            <div className="container d-flex justify-content-center">
                <div class="scene justify-content-center">
                    <div class={this.state.classVal}>
                        <div class="cube__face cube__face--front d-flex align-items-center justify-content-center"><img src={logo} className="img img-fluid" alt=""/></div>
                        <div class="cube__face d-flex align-items-center justify-content-center cube__face--back"><span>Before</span></div>
                        <div class="cube__face d-flex align-items-center justify-content-center cube__face--right"><span>Service</span></div>
                        <div class="cube__face d-flex align-items-center justify-content-center cube__face--left"><span>Self</span></div>
                        <div class="cube__face cube__face--top"> </div>
                        <div class="cube__face cube__face--bottom"> </div>
                    </div>
                </div>
            </div> 
        )
    }
}
