import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';


const HomePage2 = () =>{
  return (
    <div>
      <h1>HOME PAGE 2</h1>
    </div>
  );
};

const TopicsList = () => {
  return (
    <div>
      <h1>Topic List Page</h1>
    </div>
  );
};

const TopicDetail = () =>{
  return (
    <div>
      <h1>TOPIC DETAIL PAGE</h1>
    </div>
  );
};


function App() {
  return (
    <div >
      <Route exact path ='/home2' component={HomePage2}/>
      <Route exact path='/topics' component={TopicsList} />
      <Route path='/topics/:topicId' component={TopicDetail} />
      <Route exact path ='/' component={HomePage}/>
      
    </div>
  );
}

export default App;
