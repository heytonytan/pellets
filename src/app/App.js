import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ListBar from './ListBar';
import Content from './Content';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <div>
      <ListBar />
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);