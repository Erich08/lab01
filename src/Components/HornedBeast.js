import React from 'react';

class Hornedbeast extends React.Component {
    render () {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.imgurl} alt='Test' title={this.props.description}/>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default Hornedbeast;
