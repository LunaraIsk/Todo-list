import React, {Component} from 'react';
import { AppButtons } from './components/Buttons';
import AppList from './components/List';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      itemsList: [
        {name: 'Заголовок 1', decription: 'Текст заметки 1', checked: false},
        {name: 'Заголовок 2', decription: 'Текст заметки 2', checked: false},
        {name: 'Заголовок 3', decription: 'Текст заметки 3', checked: false},
        {name: 'Заголовок 4', decription: 'Текст заметки 4', checked: false},
      ]
  }
  //this.handleInput = this.handleInput.bind(this);

}

/*handleCheck = (idx) =>{
    const items = this.state.items;
    items.map(item=>{
      if(item.idx === idx) {
        item.checked = !item.checked;
      }
    })
    this.setState({
      items: items
    })
  }*/
render() {
  return (
    <div className="container">
    <AppButtons

    />

    <AppList
      items={this.state.itemsList}
      //handleCheck={this.handleCheck}
      //}}
    />


    
    </div>
  );
}

}

//export default App;
