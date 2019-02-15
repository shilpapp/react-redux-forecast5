// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";
function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

handleSubmit(event){
    event.preventDefault();
    const {title} = this.state;
    const id= uuidv1();
    this.props.addArticle({title,id});
    this.setState({title:""});
}

  render() {
    const { title } = this.state;
    return (

     <form onSubmit={this.handleSubmit} className="find-location">
            <input type="text"  onChange={this.handleChange} placeholder="Find your location...(Under Construction...)"/>
            <input type="submit" value="Find" />
          </form>
   
    );
  }
}

const Form = connect(null,mapDispatchToProps)(ConnectedForm);
export default Form;