import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from 'js/components/App';

const Application = () => (
  <MuiThemeProvider>
      <App />
  </MuiThemeProvider>
);

const mount = document.getElementById('application-mount');
ReactDOM.render(<Application />, mount);
