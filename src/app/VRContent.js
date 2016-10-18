// Ref: https://github.com/ngokevin/aframe-react-boilerplate
import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import 'babel-polyfill';
import {Animation, Entity, Scene} from 'aframe-react';
import React from 'react';

import Camera from './components/Camera';
import Text from './components/Text';
import Sky from './components/Sky';

class VRContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
    };
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  render() {
    return (
      <Scene>
        <Camera>
          <a-cursor></a-cursor>
        </Camera>

        <Sky src="url(http://images.akamai.steamusercontent.com/ugc/530670181250983741/6B809546E63C3435C2C5FCF4EADECAF7CDC04E23/)"/>

        <Entity light={{type: 'ambient', color: '#888'}}/>
        <Entity light={{type: 'directional', intensity: 0.5}} position='-1 1 0'/>
        <Entity light={{type: 'directional', intensity: 1}} position='1 1 0'/>

        {this.props.list.map((item) => {
          return(
          <Entity
            animation__rot={{property: 'rotation', dur: 20000, loop: true, to: '90 90 90'}}
            animation__sca={{property: 'scale', dir: 'alternate', dur: 1000, loop: true, to: '1.1 1.1 1.1'}}
            geometry='primitive: box'
            material={{color: this.state.color, opacity: 0.6}}
            position={item.position}
            onClick={this.changeColor.bind(this)}>
            <Entity
              animation__sca={{property: 'scale', dir: 'alternate', dur: 1000, loop: true, to: '2 2 2'}}
              geometry='primitive: box; depth: 0.2; height: 0.2; width: 0.2'
              material={{color: '#24CAFF'}}/>
            <Text
              text={item.text}
              color='#FFFFFF'
              position='-2 1 0'/>
          </Entity>);
        })}

      </Scene>
    );
  }
}


// <Text
//   text='Pellets'
//   color='#FFFFFF'
//   position='-1 3.5 -3'/>


// <Entity
//   animation__rot={{property: 'rotation', dur: 20000, loop: true, to: '360 360 360'}}
//   animation__sca={{property: 'scale', dir: 'alternate', dur: 1000, loop: true, to: '1.1 1.1 1.1'}}
//   geometry='primitive: box'
//   material={{color: this.state.color, opacity: 0.6}}
//   position='1.5 0 -3'
//   onClick={this.changeColor.bind(this)}>
//   <Entity
//     animation__sca={{property: 'scale', dir: 'alternate', dur: 1000, loop: true, to: '2 2 2'}}
//     geometry='primitive: box; depth: 0.2; height: 0.2; width: 0.2'
//     material={{color: '#24CAFF'}}/>
// </Entity>

// <Entity
//   animation__rot={{property: 'rotation', dur: 20000, loop: true, to: '360 360 360'}}
//   animation__sca={{property: 'scale', dir: 'alternate', dur: 1000, loop: true, to: '1.1 1.1 1.1'}}
//   geometry='primitive: box'
//   material={{color: this.state.color, opacity: 0.6}}
//   position='-1.5 0 -3'
//   onClick={this.changeColor.bind(this)}>
//   <Entity
//     animation__sca={{property: 'scale', dir: 'alternate', dur: 1000, loop: true, to: '2 2 2'}}
//     geometry='primitive: box; depth: 0.2; height: 0.2; width: 0.2'
//     material={{color: '#24CAFF'}}/>
// </Entity>

export default VRContent;