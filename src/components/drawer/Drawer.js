import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
  list: {
    width: 250,
    backgroundColor:"rgb(144, 19, 247) ",
    marginTop:"30%",
    color:"white",
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem>
            <ListItemIcon> <GitHubIcon className="text-warning"/></ListItemIcon>
            <a href="https://github.com/yilmazme" target="_#">Go to GitHub</a>
          </ListItem>
          <br/>
          <ListItem>
            <ListItemIcon> <LanguageIcon className="text-warning"/></ListItemIcon>
            <a href="https://my-old-portfolio.netlify.app/" target="_#">Go to Old Site</a>
          </ListItem>
      </List>
    </div>
  );

  return (
    
     <div className="drawerBtn">
         <button onClick={toggleDrawer("right", true)}>More</button>
          <Drawer anchor="right" open={state["right"]} onClose={toggleDrawer("right", false)}>
            {list("right")}
          </Drawer>
     </div>
        
         
        
  
  );
}
