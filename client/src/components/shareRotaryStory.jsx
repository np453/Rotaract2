import React, { Component } from 'react'
import ShareStoryImg from '../assets/shareStory_img.png';
import axios from '../axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default class ShareRotaryStory extends Component {
    state = {
        data : {
            name:"",
            email:"",
            title:"",
            story:"",
            file: null
        },
        
    }
    
    handleChange = ({currentTarget:input}) => {
        const data = {...this.state.data};   
        data[input.name] = input.value;
        if(input.name === 'file')data[input.name] = input.files[0]
        this.setState({ data });
    };

    handleSubmit = async(e) => {
        e.preventDefault();
        const data = this.state.data;    
        // console.log(data)    

        // const config = {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // };

        //to add files uncomment below code. Data will be sent in form of formData, which requires use of multer to be parsed on server side
        // const payload = new FormData() 
        // payload.append('name', data.name)
        // payload.append('email', data.email)
        // payload.append('title', data.title)
        // payload.append('story', data.story)
        // payload.append('file', data.file)
        // for (let [key, value] of payload.entries()) { 
        //     console.log(key, value);
        //   }
        const payload = {
            name  : data.name,
            email : data.email,
            title : data.title,
            story : data.story
        }
        // console.log(payload.entries())
        const res = await axios.post('/rotary_story',payload); // pass config as 3rd argument for passing files
        if(res.status === 200) {
            this.setState({
                data : {
                    name:"",
                    email:"",
                    title:"",
                    story:"",
                    file: null
                }
            }, () => {toast.success("Response received! Your works are valuable to mankind keep helping :)")})
        }
        // this.setState({
        //     data:{
        //         name:"",
        //         email:"",
        //         title:"",
        //         story:"",
        //         file:null
        //     }
        // })
    }
        removeSelectedFile = () => {
            this.setState({data : {file : null} })
        }
    render() {
        // console.log(this.state.data.file)
        const data = this.state.data
        const removeFile = data.file === null ? "" : <i className="fa pl-2 fa-times" onClick={this.removeSelectedFile} aria-hidden="true"></i>
        return (
            <div className="container-fluid full__wrapper p-3 pt-5">
                <div className="story_container mt-5 mb-5">
                    <div className="share_story_container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row m-0 form__row">
                                    <div className="col-md-4 form_heading">
                                        <h1>Share your<br/>Rotary Story<br/>with us</h1>
                                        <h4>tell us about your experiences 
                                            <br/>Don’t think much just post<br/>your thoughts :)
                                        </h4>
                                        <img src={ShareStoryImg} style={{ pointerEvents : "none" }} className="form_image img img-fluid float-right mt-5" alt=""/>
                                    </div>
                                    <div className="col-md-1">
                                        <span className="middle_line"></span>
                                    </div>
                                    <div className="col-md-7">
                                        <form onSubmit={this.handleSubmit} className="share_story_form_container">
                                            <div className="wrapper mb-5">
                                                <input name="name" onChange={this.handleChange} id="name" required="true" type="text"/>
                                                <div className="placeholder">Your Name</div>
                                            </div>
                                            <div className="wrapper mb-5">
                                                <input name="email" onChange={this.handleChange}  id="email" required="true" type="text"/>
                                                <div className="placeholder">Your email</div>
                                            </div> 
                                            <div className="col-md-10 p-0 wrapper"><label htmlFor="title">Your rotary story</label></div>
                                            <div className="col-md-10 p-0 story_title_input">
                                                <input name="title" onChange={this.handleChange} id="title" className="w-100 m-0 p-0" type="text" placeholder="story title"/>
                                                    <i className="circle_" aria-hidden="true"></i>
                                                    <svg className="pin_" width="20" height="52" viewBox="0 0 20 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7704 3.54132C17.6789 1.36002 14.7373 0 11.4841 0C5.15181 0 0.000509153 5.15232 0 11.4838L0 13.1066L0 21.6183L0 41.5978C0 46.8343 4.25988 51.0945 9.49641 51.0945C14.3347 51.0945 18.3324 47.4554 18.9139 42.7721C18.9657 42.6529 18.9945 42.5223 18.9945 42.3833V41.5978V25.0306V16.1841C18.9945 12.3926 15.9093 9.3069 12.1173 9.3069C8.32536 9.3069 5.2401 12.3926 5.2401 16.1841V38.2559C5.2401 38.7982 5.67939 39.2382 6.22235 39.2382C6.76552 39.2382 7.20492 38.7982 7.20492 38.2559V16.184C7.20492 13.4752 9.40761 11.2717 12.1173 11.2717C14.8258 11.2717 17.0294 13.4751 17.0294 16.184V25.0305V41.5977C17.0294 45.752 13.6509 49.1305 9.49692 49.1305C5.34417 49.1305 1.96543 45.7507 1.96543 41.5977L1.96543 21.6189L1.96543 13.1072L1.96543 11.4844C1.96543 6.23569 6.23529 1.96523 11.4841 1.96523C13.4191 1.96523 15.221 2.54554 16.725 3.54132H19.7704Z" fill="#0ca7ea"/>
                                                    </svg>
                                            </div>
                                            <div className="col-md-10 p-0 story__section">      
                                                <textarea spellCheck="true" rows="15" onChange={this.handleChange} className="w-100 m-0 p-0" name="story" id="story" type="text" placeholder="Be clear with your words and elaborate your story "/>
                                                {/* <input name="file" id="file" type="file" className="form-control input__file" onChange={this.handleChange}/>
                                                <label htmlFor="file">
                                                    <svg className="file_upload_button" width="34" height="27" viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M27.9218 8.71697C26.373 2.54679 20.1156 -1.19951 13.9454 0.34935C9.12353 1.55979 5.62233 5.72723 5.26159 10.6855C1.83788 11.2501 -0.479912 14.4833 0.0846966 17.907C0.586607 20.9507 3.22398 23.1798 6.30874 23.1675H11.5445V21.0732H6.30874C3.99546 21.0732 2.12015 19.1979 2.12015 16.8846C2.12015 14.5714 3.99546 12.6961 6.30874 12.6961C6.88709 12.6961 7.35588 12.2273 7.35588 11.6489C7.35065 6.444 11.5659 2.22034 16.7708 2.21517C21.2764 2.21065 25.155 5.39594 26.0265 9.8164C26.1126 10.2578 26.4708 10.595 26.9166 10.6541C29.7793 11.0618 31.7695 13.713 31.3619 16.5757C30.9959 19.1463 28.8011 21.0603 26.2045 21.0732H22.0159V23.1675H26.2045C30.2528 23.1553 33.5246 19.8636 33.5123 15.8153C33.5021 12.4455 31.1955 9.51666 27.9218 8.71697Z" fill="#686868"/>
                                                        <path d="M16.0362 12.9998L11.8477 17.1884L13.3241 18.6649L15.7326 16.2669V26.3091H17.8269V16.2669L20.2248 18.6649L21.7013 17.1884L17.5127 12.9998C17.1043 12.5938 16.4447 12.5938 16.0362 12.9998Z" fill="#686868"/>
                                                    </svg>
                                                    <span>upload image</span>
                                                    
                                                </label> */}
                                                    {/* <div className="chosenFile">{this.state.data.file === null ? "" : this.state.data.file.name}{removeFile}</div> */}
                                            </div> 
                                            
                                            <button className="btn_ btn_post_story ml-0 mt-3">
                                                Post story
                                                <span>please recheck your story before posting</span>
                                            </button>
                                        </form>
                                        
                                    </div>
                                </div>                               
                            </div>                           
                        </div>                       
                    </div>
                    <ToastContainer autoClose={3000}/>
                    <div className="contact__details">
                        <div className="container">
                            <div className="row m-0 d-flex justify-content-center">
                                <div className="col-md-4">
                                    <h3>Get in touch</h3>
                                    <h5>email</h5>
                                    <a href="mailto:rotaractmnnit4@gmail.com"><p>rotaractmnnit@gmail.com</p></a>
                                </div>
                                <div className="col-md-3">
                                    <h3>social media</h3>
                                    <a target="_blank"  href="https://www.facebook.com/rotaractmnnit"><h5>facebook</h5></a>
                                    {/* <Link to=""><h5>instagram</h5></Link> */}
                                </div>
                                <div className="col-md-3">
                                    <h3>Where we are</h3>
                                    <h5>Address</h5>
                                    <a target="_blank" href="https://www.google.com/maps/place/Motilal+Nehru+National+Institute+of+Technology,+Allahabad/@25.4920102,81.8639163,15z/data=!4m5!3m4!1s0x0:0x6690dd2de3a1415b!8m2!3d25.4920102!4d81.8639163"><p>MNNIT Allahabad</p></a> 
                                </div>
                            </div>
                            {/* <div className="row m-0 d-flex justify-content-around">
                            <div className="mt-5 foot__er">
                            <div className="contact_form_container p-5">
                                    <h2 className="">Contact us</h2>
                                    <div className="wrapper mb-5">
                                        <input spellcheck="false" name="name"  id="name" required="true" type="text"/>
                                        <div className="placeholder">Your Name</div>
                                    </div>
                                    <div className="wrapper mb-5">
                                        <input spellcheck="false" name="email"  id="email" required="true" type="text"/>
                                        <div className="placeholder">Your email</div>
                                    </div>
                                    <div className="wrapper mb-5">
                                        <input spellcheck="false" name="contact"  id="contact" type="text"/>
                                        <div className="placeholder">Where we can contact you</div>
                                    </div>
                                    <button className="btn_ ml-0">Submit</button>
                                </div>
                            </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center developed_by">
                        Maintained by &nbsp;<span><a target="_blank" href="https://thedevang.com/">Devang</a></span>&nbsp;n&nbsp; <span><a target="_blank" href="https://naman.today/">Naman</a></span>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
