import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ListDrawer from './ListDrawer';
import VRContent from './VRContent';
import $ from 'jquery';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin(test);

// var addPellet = function(text) {
  // console.log('in add pellet', JSON.stringify({text:text}));

  // // Fetch doesn't work properly for POST requests.
  // var myHeaders = new Headers();
  // myHeaders.append('Content-Type', 'application/json');
  // myHeaders.append('access-control-allow-origin', '*');
  // myHeaders.append('access-control-allow-methods', 'GET, POST, PUT, DELETE, OPTIONS');
  // myHeaders.append('access-control-allow-headers', 'content-type, accept');
  // myHeaders.append('access-control-max-age', 10); // Seconds.

  // fetch('http://localhost:3000/pellets', {
  //   method: 'POST',
  //   headers: myHeaders,
  //   mode: 'no-cors',
  //   cache: 'default',
  //   body: JSON.stringify({ text: text })
  // })
  // .then((response) => console.log('yay, created pellet', response))
  // .catch((error) => console.log('error in posting Pellets', error));
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pellets: []
    };

    // Do all the initial binding here to guarantee proper this contexts
    this.getPellets = this.getPellets.bind(this);
    this.update = this.update.bind(this);
    this.addPellet = this.addPellet.bind(this);
    this.newItem = this.newItem.bind(this);
  }

  componentDidMount() {
    // Fetch any initial ajax data in this method, as per Facebook's advice:
    // https://facebook.github.io/react/tips/initial-ajax.html
    this.update();
  }

  getPellets() {
    return fetch('http://localhost:8080/pellets')
    .then((response) => response.json())
    .catch((error) => console.log('error in getting Pellets', error));
  }

  addPellet(text) {
    $.ajax({
      url: 'http://localhost:8080/pellets',
      type: 'POST',
      data: {text: text},
      success: function (data) {
        console.log('yay!');
      },
      error: function (error) {
        console.error('Pellets Server: Failed to add pellet', error);
      }
    });
  }

  update() {
    this.getPellets()
    .then((pellets) => {
      this.setState({
        pellets: pellets
      });
    });
  }

  newItem(text) {
    this.addPellet(text);
    this.update();
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div>
            <ListDrawer list={this.state.pellets} newItem={this.newItem}/>
          </div>
          <div>
            <VRContent list={this.state.pellets}/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
