import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// import Navbar from "./components/navbar/navbar";

import AboutMe from "./pages/aboutMe/AboutMe";
import Contacts from "./pages/contacts/Contacts";
import Paintings from "./pages/paintings/Paintings";
import MakeUp from "./pages/makeUp/MakeUp";
import Gallery from "./pages/gallery/Gallery";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={AboutMe} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/gallery/paintings" component={Paintings} />
          <Route path="/gallery/make-up" component={MakeUp} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
