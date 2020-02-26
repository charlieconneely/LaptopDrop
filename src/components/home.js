import React from 'react';
import { Helmet } from 'react-helmet';
import '../App.css';

class Home extends React.Component {

  render() {
    return (
      // Home page
      <div>
        <h1>Welcome to the home page</h1>
        
        {/* Implement carousel */}

        <Helmet>
          <style>{'body { background-color: #DAD9D8; }'}</style>        
        </Helmet>
      </div>
    );
  }
}

export default Home;