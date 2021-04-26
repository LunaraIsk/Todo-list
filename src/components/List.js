import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function AppList(props) {
  const classes = useStyles();

  /*const handleChange = (event) => {
    setState({item, [event.target.name]: event.target.checked });
  }


  const error = [item].filter((v) => v).length !== 2;*/


  return (
    <div className={classes.root}>
    <List component="nav" aria-label="secondary mailbox folders">
    { props.items.map((item, index) => {
      return <div key={index}><ListItem button>
        {<Checkbox
          //checked={item.checked}
          //onChange={(event, isInputChecked) => props.onCheck(isInputChecked, index)}
          //onChange={(handleChange)}


          />}
        <ListItemText primary={item.name}
        secondary={item.decription} />
      </ListItem>
      <Divider /></div>
    })}
      </List>
      </div>
  );
}
