import React from 'react';
import { connect } from 'react-redux'
import { postLaptop, uploadImage } from '../store/actions/laptopActions';
import { Container, Jumbotron, Form } from 'react-bootstrap';
import PreviewPicture from './previewPicture';

class PostLaptop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      brandname:'',
      condition:'',
      memory:'',
      price: 0,
      processor:'',
      ram: '',
      screensize: '',
      uid: null,
      basketID: null,
      image:null,
      imageURL:null
    }   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }   
  
  handleChange(e) {
    this.setState({ [e.target.id] : e.target.value }); 
  }

  handleSubmit(e) {
    e.preventDefault();
    // postLaptop will be called from uploadImage after async action
    // is complete
    this.props.uploadImage(this.state);
  }

  displayPicture(event) {
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        image: file,
        imageURL: reader.result
      });
    };
    reader.readAsDataURL(file);
  }

  render() {
    const {auth} = this.props;
    // set uid in firestore db to acitve uid 
    {this.state.uid = auth.uid}
    return (
      <Container>
        <Jumbotron style={{backgroundImage:'none'}}>
          <Form onSubmit={this.handleSubmit} style={{marginTop:'0em'}}>
          
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
              <input onChange={this.handleChange}
                     value={this.state.condition}
                     type="text" id="condition"></input>
            </div>

            {/* need to upload image to firebase storage
            possible solution - https://www.youtube.com/watch?v=7UF7x5yLh44 */}

            <div className="input-field">
              <label htmlFor="image">Image</label> <br/><br/>
              <input type="file" id="image"
               onChange={(event) => {
                this.displayPicture(event);
             }}></input>
             <PreviewPicture imageURL={this.state.imageURL}/>
            </div> 
              
            <div>
              <button className="btn blue lighten-1 z-depth-0" type="submit">Post</button>
            </div>
          </Form>
        </Jumbotron>

      </Container>     
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // calls dipatch to postLaptop method in laptopActions.js
        // providing laptop from current state 
        uploadImage: (laptop) => dispatch(uploadImage(laptop)),
        postLaptop: (laptop) => dispatch(postLaptop(laptop)) 
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        // access authentication status 
        auth: state.firebase.auth,
        imageName: state.laptop.imagePath
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostLaptop);