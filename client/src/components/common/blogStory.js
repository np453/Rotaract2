import React from 'react'
import { Timeline, Divider } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';


const BlogStory = props => {
    return (
        <div className="container_blog_story">
            <Timeline>
                <Timeline.Item>
                <h1>{props.title}</h1>
                <h6>Published On {props.moment}</h6>
                <h6>{props.name}</h6>
                <div className="row">
                    <div className="col blog_story_section">
                    {props.story}
                    </div>
                </div>
                </Timeline.Item>
                <Timeline.Item></Timeline.Item>
            </Timeline>
        </div>
    );
}

export default BlogStory