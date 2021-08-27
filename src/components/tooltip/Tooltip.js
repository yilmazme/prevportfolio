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
Yaptığım başka bir siteden alınmış bu klip, yerli firmalara "reveal on scroll" efektini yapabiliyorum demek amacıyla buraya konulmuştur.
Yapabiliyorum ama bu sürekli, her projede kulanmam gerekiyor anlamına gelmiyor. Mesela bu site sorunlarınıza kurumsal çözümler sunmak için değil :)
`;

export default function Tool() {
  const classes = useStyles();

  return (
    <div>
      <Tooltip title={longText} classes={{ tooltip: classes.customWidth }}>
        <button className={classes.button}>Warning!</button>
      </Tooltip>
    </div>
  );
}
