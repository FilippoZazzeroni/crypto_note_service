import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Button from "@material-ui/core/Button"
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

class Text extends React.Component {
  render() {
    return (
      <h1>Sono zazza</h1>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <BottomNavigation
      showLabels="true">
      (
        <BottomNavigationAction label="Recents" title='fauvorites'/>
        <BottomNavigationAction label="Favorites" />
        <BottomNavigationAction label="Nearby" />
      )
    </BottomNavigation>
    <Text></Text>
    <Button 
    color="secondary"
    fullWidth="true">Bottone a caso</Button>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
