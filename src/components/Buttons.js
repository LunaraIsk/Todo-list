import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles} from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



const style = {
  marginRight: 20
}

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: red,
  },
});

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export const AppButtons = () => {
  const classes = useStyles();
  //const theme = useTheme();
  //const [value, setValue] = React.useState(0);
  const [value] = React.useState(0);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  /*const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };*/

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: 'primary',
      className: classes.fab,
      icon: <AddIcon />,
      label: 'Add',
    },
  ];

  return (
    <div style={ {marginBottom: 40}}>
    <Button variant="contained" color="primary" style={style}>
       Поиск
    </Button>
    <Button variant="contained" color="secondary" style={style}
    disabled={false}>
       Удалить выбранные элементы
    </Button>
    {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
          }}
          //onTouchTap={ () => fab.openModal()}
          unmountOnExit
          onClick={handleClickOpen}
        >
          <Fab aria-label={fab.label} className={fab.className} color={fab.color}>
            {fab.icon}
          </Fab>

        </Zoom>

      ))}
      <Dialog open={open} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Добававить заметку</DialogTitle>
          <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Введите заголовок"
            type="text"
            fullWidth
          />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Текст заметки"
              type="text"
              fullWidth
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
              Создать
            </Button>
            <Button onClick={handleClose} color="primary">
              Закрыть
            </Button>
          </DialogActions>
        </Dialog>


    </div>
  );
}
