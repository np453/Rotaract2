import React, { Component } from 'react'
import axios from '../axios';
export default class Admin extends Component { 
    state = {
            file:null
    }
    uploadFile = e => {
        const file = e.target.files
        // console.log(file)
        this.setState({file})
    }
    handleSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        const {data} = await axios.post("/upload",formData,config)
        console.log(data)
    }
    render() {
        // console.log(this.state.file)
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <label htmlFor="file">Browse file</label>
                    <input onChange={e => this.uploadFile(e)} type="file" name="file" id="file"/>
                    <button className="btn_">Upload file</button>
                </form>
            </div>
        )
    }
}
