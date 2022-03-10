import './App.css';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import json from './Components/data.json';
import SelectedBeast from './Components/SelectedBeast';
import FilteredBeast from './Components/FilteredBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: json,
      show: false,
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

  handleChange = (event) => {
    event.preventDefault();
    const selection = parseInt(event.target.value);
    let hornAmount;
    if (selection === 1) {
      //Filter creates a new array that meets the criteria within each if statement and that data is passed into main and rendered.
      hornAmount = json.filter((amount) => amount.horns === 1);
      this.setState({ data: hornAmount });
    } else if (selection === 2) {
      hornAmount = json.filter((amount) => amount.horns === 2);
      this.setState({ data: hornAmount });
    } else if (selection === 3) {
      hornAmount = json.filter((amount) => amount.horns === 3);
      this.setState({ data: hornAmount });
    } else if (selection === 100) {
      hornAmount = json.filter((amount) => amount.horns === 100);
      this.setState({ data: hornAmount });
    } else {
      this.setState({ data: json });
    }
  };

  render() {
    return (
      <div className='App'>
        <Header />
        <FilteredBeast handleChange={this.handleChange} />
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
