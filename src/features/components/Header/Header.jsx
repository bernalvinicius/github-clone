import GitHubIcon from '@material-ui/icons/GitHub';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useStyles } from './styles';

const Header = () => {
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const history = useHistory();

  const keyboardEvents = (event) => {
    event.persist();
    history.push(`/${search.toLowerCase().trim()}`);
    if (event.keyCode === 13) {
      setSearch('');
    }
  };

  return (
    <div className={classes.container}>
      <GitHubIcon className={classes.logoIcon} />
      <div className={classes.searchForm} onKeyPress={keyboardEvents}>
        <input
          className={classes.inputForm}
          placeholder="Search or jump to..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Header;
