import React from 'react';
import { Helmet } from "react-helmet";

class Home extends React.Component {
  render() {
    return <div>
            <Helmet><title>Home</title></Helmet>
            Hello Home
          </div>;
  }
}

export default Home;
