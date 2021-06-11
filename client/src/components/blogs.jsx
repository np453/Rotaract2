import React, { Component } from 'react'
import { Timeline, Divider } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import axios from '../axios';
import { Link } from 'react-router-dom';
import BlogStory from '../components/common/blogStory'

export default class Blog extends Component {
    state = {
        blogs : []
    }

    componentDidMount = async() => {
        const {data:blogs} = await axios.get('/addstory')
        this.setState({blogs})
    }
    

    render() {
        const blogs = this.state.blogs === undefined ? [] : this.state.blogs
        const blogStories = []
        for (let i=0;i<blogs.length;i++) {
            blogs[i].story.map(m => {
                blogStories.push(
                    <BlogStory name={m.name} title={m.title} story={m.story}/>
                )
            })
        }

        return (
            <div className="container-fluid p-0">
                <div className="row m-0">
                    <div className="blog__left_section col-md-3 fixed-top one">
                        <div className="ml-4 blog_left_content">
                        <h1 className="blog__main_heading">
                            Welcome to<br/>Rotary blogs
                        </h1>
                        <h4 className="blog__club_name">Rotary Club MNNIT</h4>
                        <div className="blog__social_media_links mb-3">
                            <span>
                                <svg className="blog__facebook_icon mr-4" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0H18C19.1046 0 20 0.89543 20 2V18C20 19.1046 19.1046 20 18 20H2C0.89543 20 0 19.1046 0 18V2C0 0.89543 0.89543 0 2 0ZM2 2V18H18V2H2ZM9.13306 10.0044H11V16H13V10.0044H14.9824V8.00439H13V7C13 6.44772 13.4477 6 14 6H15V4H14C12.3431 4 11 5.34315 11 7V8.00439H9.13306V10.0044Z" fill="#E1E1E1"/>
                                </svg>
                            </span>
                            <span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 0H6C2.68629 0 0 2.68629 0 6V14C0 17.3137 2.68629 20 6 20H14C17.3137 20 20 17.3137 20 14V6C20 2.68629 17.3137 0 14 0ZM2 6C2 3.79086 3.79086 2 6 2H14C16.2091 2 18 3.79086 18 6V14C18 16.2091 16.2091 18 14 18H6C3.79086 18 2 16.2091 2 14V6ZM10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 12.7614 12.7614 15 10 15ZM10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13ZM16 5C16 5.55228 15.5523 6 15 6C14.4477 6 14 5.55228 14 5C14 4.44772 14.4477 4 15 4C15.5523 4 16 4.44772 16 5Z" fill="#E1E1E1"/>
                                </svg>
                            </span>
                        </div>
                        <h4 className="blog__write_your_story">
                            <Link to="/story">Write your story</Link>
                            <i className="fa fa-arrow-right"></i>
                        </h4>
                        <h4 className="blog__view_recent_blog">View recent blogs</h4>
                        <h4 className="blog__back_to_home">
                            <i className="fa fa-arrow-left"></i>
                            <Link to="/">Back to home</Link>
                        </h4>
                        </div>
                    </div>
                    <div className="col-md-9 p-5 offset-md-3 two">
                        {blogStories.map(m => m)}
                        
                    </div>
                </div>

            </div>
        )
    }
}



