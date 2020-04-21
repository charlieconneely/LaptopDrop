import React from 'react';
import { connect } from 'react-redux'
import { postLaptop, uploadImage, changeDisplayDuringAsyncAction } from '../store/actions/laptopActions';
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
      storage: '',
      screensize: '',
      uid: null,
      basketID: null,
      image:null,
      imageURL:null
    }   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayPicture = this.displayPicture.bind(this);
  }   
  
  handleChange(e) {
    this.setState({ [e.target.id] : e.target.value }); 
  }

  handleSubmit(e) {
    e.preventDefault();
    // turn on waiting screen 
    this.props.changeDisplayDuringAsyncAction(); 
    // postLaptop will be called from uploadImage after async action
    // is complete
    this.props.uploadImage(this.state);
    // redirect to market 
    this.props.history.push('/market/');
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
            
            <Form.Group controlId="brandname" id="brandname" value={this.state.brandname}>
              <Form.Label>Brand</Form.Label>  
              <Form.Control as="select" onChange={this.handleChange}>
                <option defaultValue= " "> </option>
                <option>Asus</option>
                <option>Apple</option>
                <option>Acer</option>
                <option>Alienware</option>
                <option>Dell</option>
                <option>HP</option>
                <option>Lenovo</option>
                <option>Razer</option>
                <option>Toshiba</option>
              </Form.Control>
            </Form.Group>
  
            <Form.Group controlId="memory" id="memory" value={this.state.memory}>
              <Form.Label>Memory</Form.Label>  
              <Form.Control as="select" onChange={this.handleChange}>
                <option defaultValue= " "> </option>>
                <option>32 GB</option>
                <option>16 GB</option>
                <option>12 GB</option>
                <option>8 GB</option>
                <option>4 GB</option>
                <option>2 GB</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="processor" id="processor" value={this.state.processor}>
              <Form.Label>Processor</Form.Label>  
              <Form.Control as="select" onChange={this.handleChange}>
                <option defaultValue= " "> </option>
                <option>Intel Core i9</option>
                <option>Intel Core i7</option>
                <option>Intel Core i5</option>
                <option>Intel Core i3</option>
                <option>Intel Pentium</option>
                <option>Intel Celeron</option>
                <option>AMD Ryzen 7</option>
                <option>AMD Ryzen 5</option>
                <option>AMD Ryzen 3</option>     
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="storage" id="storage" value={this.state.storage}>
              <Form.Label>Storage</Form.Label>  
              <Form.Control as="select" onChange={this.handleChange}>
                <option defaultValue= " "> </option>
                <option>2 TB</option> 
                <option>1 TB</option> 
                <option>512 GB</option> 
                <option>256 GB</option> 
                <option>124 GB</option>
                <option>64 GB</option>  
                <option>32 GB</option> 
                <option>16 GB</option>   
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="screensize" id="screensize" value={this.state.screensize}>
              <Form.Label>Screensize</Form.Label>  
              <Form.Control as="select" onChange={this.handleChange}>
                <option defaultValue= " "> </option>
                <option>15.6</option> 
                <option>15</option> 
                <option>14</option> 
                <option>13.3</option> 
                <option>13</option>
                <option>12.3</option>  
                <option>12</option> 
                <option>11.6</option>
                <option>10</option>   
              </Form.Control>
            </Form.Group>

            <div className="input-field">
              <label htmlFor="price">Price</label>
              <input onChange={this.handleChange} value={this.state.price} type="number" id="price"></input> 
            </div>

            <Form.Group controlId="condition" id="condition" value={this.state.condition}>
              <Form.Label>Condition</Form.Label>  
              <Form.Control as="select" onChange={this.handleChange}>
                <option defaultValue= " "> </option>
                <option>Perfect</option> 
                <option>Good</option> 
                <option>Bad</option> 
                <option>Non-functional</option>
              </Form.Control>
            </Form.Group>

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
        postLaptop: (laptop) => dispatch(postLaptop(laptop)),
        changeDisplayDuringAsyncAction: () => dispatch(changeDisplayDuringAsyncAction())
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