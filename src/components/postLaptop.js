import React , {Component} from 'react';
import {connect} from 'react-redux'
import {postLaptop} from '../store/actions/laptopActions';

class PostLaptop extends React.Component {

    state = {
        brandname:'',
        condition:'',
        memory:'',
        price:200,
        processor:'Intel Core i5',
        prodID:9898,
        ram:8,
        screensize:14
    }   
  

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.postLaptop(this.state)
  }

  render() {
    return (
      // Login page
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">

          <h5 className="grey-text text-darken-3">Enter details below:</h5>
          <div className="input-field">
            <label htmlFor="brandname">Brand</label>
            <input onChange={this.handleChange} value={this.state.brandname} type="text" id="brandname"></input>
          </div>
 
          <div className="input-field">
            <label htmlFor="memory">Memory</label>
            <input onChange={this.handleChange} value={this.state.memory} type="text" id="memory"></input>
          </div>

          <div className="input-field">
            <label htmlFor="condition">Condition</label>
            <input onChange={this.handleChange} value={this.state.condition} type="text" id="condition"></input>
          </div>
            
          <div>
            <button className="btn blue lighten-1 z-depth-0" type="submit">Post</button>
          </div>
        </form>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // calls dipatch to postLaptop method in laptopActions.js
        // providing laptop from current state 
        postLaptop: (laptop) => dispatch(postLaptop(laptop))
    }
}

export default connect(null, mapDispatchToProps)(PostLaptop);