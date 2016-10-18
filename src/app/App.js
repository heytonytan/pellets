import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ListDrawer from './ListDrawer';
import VRContent from './VRContent';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin(test);

var addPellet = function() {
  fetch('localhost:3000/pellets', {
    method: 'POST',
    body: { text: text }
  });
};

var getPellets = function() {
  return fetch('localhost:3000/pellets')
  .then(response => response);
};

var data = {
  list: [{
    text: 'Buy Oreos',
    position: '' + (Math.random() * -10 + 5) + ' ' + (Math.random() * -10 + 5) + ' -10'
  }, {
    text:  'Eat Tu Lan', 
    position: '' + (Math.random() * -10 + 5) + ' ' + (Math.random() * -10 + 5) + ' -10'
  },{
    text: 'Go to the Gym',
    position: '' + (Math.random() * -10 + 5) + ' ' + (Math.random() * -10 + 5) + ' -10'
  }]
};

class App extends React.Component {
  constructor(props) {
    super(props);
    var context = this;
    getPellets()
    .then((response) => {
      console.log('data from a server', response.body);
      // this.state = {
      //   data: response.body
      // };
    });
  }

  newItem(text) {
    console.log('adding', value);
    var newPosition = '' + (Math.random() * -10 + 5) + ' ' + (Math.random() * -10 + 5) + ' -10';
    data.list.push({
      text: text,
      position: newPosition
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div>
            <ListDrawer list={this.props.data.list} newItem={this.newItem}/>
          </div>
          <div>
            <VRContent list={this.props.data.list}/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(
  <App data={data} />,
  document.getElementById('app')
);