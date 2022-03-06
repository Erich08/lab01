import React from 'react';
import Card from 'react-bootstrap/Card';

class Hornedbeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    };
  }

  favorited = () => {
    this.setState({
      favorites: this.state.favorites + 1,
    });
  };

  render() {
    return (
      <div>
        <Card className='beastCards' style={{ width: '18rem' }}>
          <Card.Img
            variant='top'
            src={this.props.imgurl}
            onClick={this.favorited}
          />
          <Card.Body>
            <Card.Text> ❤️ {this.state.favorites} ❤️</Card.Text>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>{this.props.button}</Card.Text>
          </Card.Body>
        </Card>
      </div>

      //   <div>
      //     <h2>{this.props.title}</h2>
      //     <img
      //       src={this.props.imgurl}
      //       alt='Test'
      //       title={this.props.description}
      //     />
      //     <p>{this.props.description}</p>
      //   </div>
    );
  }
}

export default Hornedbeast;
