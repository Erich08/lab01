import React from 'react';
import Hornedbeast from './HornedBeast';

class Main extends React.Component {
    render () {
        return (
            <div>
                <Hornedbeast title={'Satyr'} imgurl={'https://cdn.shopify.com/s/files/1/2281/5369/products/satyr-464865.jpg?v=1581105026'} description={'Satyr'}/>
                <Hornedbeast title={'Scimitar-Horned Oryx'} imgurl={'https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/MA_00561288_ohjto2.jpg'} description={'Scimitar-Horned Onyx'}/>
            </div>
        )
    }
}

export default Main;
