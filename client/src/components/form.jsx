import React, { Component } from 'react'
import axios from '../axios';
export default class Form extends Component {

    state = {
        data : {
            name:"",
            description:"",
            source:"",
            email:""
        }
    }
    componentDidMount = async() => {
        // ScrollReveal().reveal('.form__container',{ scale: 0.85,reset:true, viewFactor: 0.3 }  );
    }
    handleChange = ({currentTarget:input}) => {
        const data = {...this.state.data};
        data[input.id] = input.value;
        this.setState({data});
    };
    handleSubmit = async(e) => {
        e.preventDefault();
        const data = this.state.data;
        const payload = {
            name:data.name, 
            email:data.email, 
            description:data.description, 
            source:data.source
        }
        const {data:formData} =  await axios.post('/contact',payload);
        // console.log(formData);
        this.setState({
            name:"",
            description:"",
            email:"",
            source:""
        })
    }
    render() {
        let data = this.state.data;
        // console.log(data);
        return (
            <div className="container mt-5 rounded-lg form__container">
                <h1>Build up your presence in our Initiative</h1>
                <h3>Want to contribute to the society and become a part of the initiative.</h3>
                <form className="mt-5 p-4" onSubmit={this.handleSubmit}>
                        <div className="row form-group m-0">
                            <label className="mr-3 form-labels" htmlFor="">Hello my name is</label>
                            <input id="name" name="name" value={data.name} onChange={this.handleChange} placeholder="Full name" className="mb-5" type="text"/>
                        </div>
                        {/* <textarea id="description" name="description" value={data.description} onChange={this.handleChange} className="mb-3" type="text" placeholder="describe your beautiful experiences" cols="30" rows="10" /> */}
                        <div className="row form-group m-0">
                            <label className="mr-3 form-labels" htmlFor="">We/I heard about you from</label>
                            <input id="source" name="source" value={data.source} onChange={this.handleChange} placeholder="source" className="mb-5" type="text"/>
                        </div>
                        <div className="row form-group m-0">
                            <label className="mr-3 form-labels" htmlFor="">and you can reach me at</label>
                            <input id="email" name="email" value={data.email} onChange={this.handleChange} placeholder="Email Address" className="mb-5" type="text"/>
                        </div>
                        <button className="btn_ ">Let’s Do it</button>
                    </form>
            </div>
        )
    }
}
