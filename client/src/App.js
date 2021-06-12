import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/homepage';
import ShareRotaryStory from './components/shareRotaryStory';
import Gallery from './components/gallery'
import Image from './image'
import Blog from './components/blogs';
import TestPage from './components/testpage';


function App() {
  return (
    <div>
      <Router>
        <switch>
          <Route path="/" exact component={Home} />
          <Route path="/gallery" component={Gallery} />
          {/* <Route path="/story" component={ShareRotaryStory} /> */}
          {/* <Route path="/upload_image_admin_luffy_6972" component={Image} /> */}
          {/* <Route path="/blog" component={Blog} /> */}
          {/* <Route path="/test" component={TestPage} /> */}
        </switch>
      </Router>
      
    </div>
  );
}

export default App;
