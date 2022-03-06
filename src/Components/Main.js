import React from 'react';
import HornedBeast from './HornedBeast';

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
            showBeast={this.props.showBeast}
            beastDescription={this.props.beastDescription}
            beastImg={this.props.beastImg}
          />
        ))}
      </div>
    );
  }
}

export default Main;
