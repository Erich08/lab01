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
    this.props.showBeast(this.props.title);
    this.props.beastDescription(this.props.description);
    this.props.beastImg(this.props.imgurl);
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
            <Card.Text>{this.props.title}</Card.Text>
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Hornedbeast;
