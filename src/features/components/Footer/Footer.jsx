import React from 'react';
import { useStyles } from './styles';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.line} />
      <GitHubIcon className={classes.logoIcon} />
    </div>
  );
};

export default Footer;
