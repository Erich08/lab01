import React from 'react';
import HornedBeast from './HornedBeast';
import beastinfo from '../beastinfo';

class Main extends React.Component {
  render() {
    return (
      <div>
        {beastinfo.map((hornedbeasts) => (
          <HornedBeast
            key={hornedbeasts.id}
            title={hornedbeasts.title}
            imgurl={hornedbeasts.image_url}
            description={hornedbeasts.description}
            favorites={hornedbeasts.favorites}
          />
        ))}
      </div>
    );
  }
}

export default Main;
