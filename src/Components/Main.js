import React from 'react';
import HornedBeast from './HornedBeast';
import Button from 'react-bootstrap/Button';

class Main extends React.Component {
  render() {
    return (
      <div className='flexbox-container'>
        {this.props.info.map((hornedbeasts, ind) => (
          <HornedBeast
            key={ind}
            title={hornedbeasts.title}
            imgurl={hornedbeasts.image_url}
            description={hornedbeasts.description}
            favorites={hornedbeasts.favorites}
            button={<Button onClick={this.props.test}>Click Me</Button>}
          />
        ))}
      </div>
    );
  }
}

export default Main;
