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
    };
  }

  showBeast = () => {
    this.setState({ show: true });
  };

  onHide = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className='App'>
        <Header />
        <Main info={this.state.data} test={this.showBeast} />
        <Footer />
        <SelectedBeast show={this.state.show} onHide={this.onHide} />
      </div>
    );
  }
}

export default App;
