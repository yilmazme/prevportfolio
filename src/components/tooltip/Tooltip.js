import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
Yaptığım bir siteden alınmış bu klip, sadece yerli firmaların taptığı ve hepsinin birbirinin kopyası şeklinde görünmesine neden olan "reveal on scroll" efektini ben de yapabiliyorum ama
her site böyle olmak zorunda değil demek amaçlıdır.
`;

export default function Tool() {
  const classes = useStyles();

  return (
    <div>
      {/* <Tooltip title={longText}>
        <Button className={classes.button}>Warning</Button>
      </Tooltip> */}
      <Tooltip title={longText} classes={{ tooltip: classes.customWidth }}>
        <Button className={classes.button}>Warning</Button>
      </Tooltip>
      {/* <Tooltip title={longText} classes={{ tooltip: classes.noMaxWidth }}>
        <Button className={classes.button}>No wrapping</Button>
      </Tooltip> */}
    </div>
  );
}
