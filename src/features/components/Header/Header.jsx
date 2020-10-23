import GitHubIcon from '@material-ui/icons/GitHub';
import React from 'react';

import { useStyles } from './styles';

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <GitHubIcon className={classes.logoIcon} />
      <div className={classes.searchForm}>
        <input
          className={classes.inputForm}
          placeholder="Search or jump to..."
        />
      </div>
    </div>
  );
};

export default Header;
