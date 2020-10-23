import BookIcon from '@material-ui/icons/Book';
import ShareIcon from '@material-ui/icons/Share';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import React from 'react';
import { Link } from 'react-router-dom';

import { useStyles } from './styles';

const RepoCard = (props) => {
  const { username, reponame, description, language, stars, forks } = props;
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.topSide}>
        <header className={classes.header}>
          <BookIcon className={classes.icon} />
          <Link className={classes.link} to={`${username}/${reponame}`}>
            {reponame}
          </Link>
        </header>
        <p className={classes.description}>{description}</p>
      </div>
      <div className={classes.botSide}>
        <div className={classes.botContainer}>
          <div className={classes.botCard}>
            <div className={classes.language} />
            <span className={classes.span}>{language}</span>
          </div>
          <div className={classes.botCard}>
            <StarBorderIcon className={classes.icon} />
            <span className={classes.span}>{stars}</span>
          </div>
          <div className={classes.botCard}>
            <ShareIcon className={classes.icon} />
            <span className={classes.span}>{forks}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
