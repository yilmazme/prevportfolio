import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  
  },
  customWidth: {
    maxWidth: 500,
  },
  noMaxWidth: {
    maxWidth: 'none',
  },
}));

const longText = `
A fullstack project with NodeJS and MongoDB
`;

export default function Tool() {
  const classes = useStyles();

  return (
    <div>
      <Tooltip title={longText} classes={{ tooltip: classes.customWidth }}>
        <button className={classes.button}>Must see</button>
      </Tooltip>
    </div>
  );
}
