import './App.css';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import json from './Components/data.json';
import SelectedBeast from './Components/SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: json,
      show: false,
      beastName: '',
      beastDescription: '',
      img: '',
    };
  }
  // beastName param allows state to be altered in HornedBeast and lifted into app.js and then sent to SelectedBeast modal
  showBeast = (beastName) => {
    this.setState({
      show: true,
      beastName: beastName,
    });
  };

  // beastDescription param allows state to be altered in HornedBeast and lifted into app.js and then sent to SelectedBeast modal
  beastDescription = (beastDescription) => {
    this.setState({
      beastDescription: beastDescription,
    });
  };
  // beastImg param allows state to be altered in HornedBeast and lifted into app.js and then sent to SelectedBeast modal
  beastImg = (beastImg) => {
    this.setState({
      beastImg: beastImg,
    });
  };

  onHide = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className='App'>
        <Header />
        <Main
          info={this.state.data}
          showBeast={this.showBeast}
          beastDescription={this.beastDescription}
          beastImg={this.beastImg}
        />
        <Footer />
        <SelectedBeast
          show={this.state.show}
          onHide={this.onHide}
          beastName={this.state.beastName}
          beastDescription={this.state.beastDescription}
          beastImg={this.state.beastImg}
        />
      </div>
    );
  }
}

export default App;
