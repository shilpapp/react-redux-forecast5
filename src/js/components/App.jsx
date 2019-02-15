
import React from "react";
import Form from "./Form.jsx";
import Post from "./Posts.jsx";
const App = () => (
<div>
 <div className="hero" >
        <div className="container">
      <Form />
    </div>
</div>
      <div className="forecast-table">
  <div className="container" >
    
          <div className="forecast-container row">
 <Post />   
 </div>
      </div>      
    </div>
    </div>
);
export default App;

