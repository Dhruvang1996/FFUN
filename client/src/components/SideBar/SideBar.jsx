import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    maxWidth: '12vw',
    height: '100vh',
    backgroundColor: 'lightGray',
  },
  label: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    width: '5vw',
    height: 'maxContent',
  },
  label1: {
    cursor: 'pointer',
  },
  listItemText: {
    fontSize: '1.3em',
    color: 'black',
  },
}));

export default function SideBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem className={classes.label1}>
          <ListItemText className={classes.label} classes={{ primary: classes.listItemText }} primary="Inventory" />
        </ListItem>
        <Divider />
      </List>
    </div>
  );
}
