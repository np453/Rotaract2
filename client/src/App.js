import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/homepage';
import ShareRotaryStory from './components/shareRotaryStory';
import Image from './image'
import Blog from './components/blogs';


function App() {
  return (
    <div>
      <Router>
        <switch>
          <Route path="/" exact component={Home} />
          <Route path="/story" component={ShareRotaryStory} />
          <Route path="/upload_image_admin_luffy_6972" component={Image} />
          <Route path="/blog" component={Blog} />
        </switch>
      </Router>
      
    </div>
  );
}

export default App;
