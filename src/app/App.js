import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ListDrawer from './ListDrawer';
import VRContent from './VRContent';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

var data = {
  list: [{
    note: 'Buy Oreos',
    position: '' + (Math.random() * -10 + 5) + ' ' + (Math.random() * -10 + 5) + ' -10'
  }, {
    note:  'Eat Tu Lan', 
    position: '' + (Math.random() * -10 + 5) + ' ' + (Math.random() * -10 + 5) + ' -10'
  },{
    note: 'Go to the Gym',
    position: '' + (Math.random() * -10 + 5) + ' ' + (Math.random() * -10 + 5) + ' -10'
  }]
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  newItem(value) {
    console.log('adding', value);
    var newPosition = '' + (Math.random() * -10 + 5) + ' ' + (Math.random() * -10 + 5) + ' -10';
    data.list.push({
      note: value,
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