import React from 'react';
import {connect} from 'react-redux'
import {postLaptop} from '../store/actions/laptopActions';

class PostLaptop extends React.Component {

  state = {
      brandname:'',
      condition:'',
      memory:'',
      price: null,
      processor:'',
      ram: null,
      screensize: null,
      uid: null,
      basketID: null
  }    
  
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.postLaptop(this.state)
  }

  render() {
    const {auth} = this.props;
    // set uid in firestore db to acitve uid 
    {this.state.uid = auth.uid}
    return (
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
            <label htmlFor="processor">Processor</label>
            <input onChange={this.handleChange} value={this.state.processor} type="text" id="processor"></input>
          </div>

          <div className="input-field">
            <label htmlFor="ram">RAM</label>
            <input onChange={this.handleChange} value={this.state.ram} type="number" id="ram"></input>
          </div>

          <div className="input-field">
            <label htmlFor="ram">Screensize</label>
            <input onChange={this.handleChange} value={this.state.screensize} type="number" id="screensize"></input>
          </div>

          <div className="input-field">
            <label htmlFor="price">Price</label>
            <input onChange={this.handleChange} value={this.state.price} type="number" id="price"></input>
          </div>

          <div className="input-field">
            <label htmlFor="condition">Condition</label>
            <input onChange={this.handleChange} value={this.state.condition} type="text" id="condition"></input>
          </div>

          {/* need to upload image to firebase storage
          possible solution - https://www.youtube.com/watch?v=7UF7x5yLh44 */}
            
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

const mapStateToProps = (state) => {
    return {
        // access authentication status 
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostLaptop);