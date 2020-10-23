import BookIcon from '@material-ui/icons/Book';
import GitHubIcon from '@material-ui/icons/GitHub';
import ShareIcon from '@material-ui/icons/Share';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useStyles } from './styles';

const Repo = () => {
  const classes = useStyles();
  const { username, reponame } = useParams();
  const [data, setData] = useState({
    repoAPI: [],
    error: null,
  });

  useEffect(() => {
    fetch(`https://api.github.com/repos/${username}/${reponame}`).then(
      async (response) => {
        setData(
          response.status === 404
            ? { error: 'Repository not found!' }
            : { repo: await response.json() }
        );
      }
    );
  }, [reponame, username]);

  if (data?.error) {
    return <h1>{data.error}</h1>;
  }

  // if (!data?.repoAPI) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <div className={classes.container}>
      <div className={classes.breadCrumb}>
        <BookIcon className={classes.icon} />
        <Link className={classes.username} to={`/${username}`}>
          {username}
        </Link>
        <span className={classes.spanLink}>/</span>
        <Link className={classes.reponame} to={`/${username}/${reponame}`}>
          {reponame}
        </Link>
      </div>
      <p className={classes.description}>{data.repoAPI?.description}</p>
      <div>
        <div className={classes.botCard}>
          <div className={classes.botItem}>
            <StarBorderIcon className={classes.iconBot} />
            <span className={classes.spanBot}>
              {data.repoAPI?.stargazers_count}
            </span>
            <span className={classes.spanBot}>stars</span>
          </div>
          <div className={classes.botItem}>
            <ShareIcon className={classes.iconBot} />
            <span className={classes.spanBot}>{data.repoAPI?.forks}</span>
            <span className={classes.spanBot}>forks</span>
          </div>
        </div>
        <Link className={classes.button} to={'/'}>
          <GitHubIcon className={classes.iconBtn} />
          <span className={classes.spanbutton}>View on GitHub</span>
        </Link>
      </div>
    </div>
  );
};

export default Repo;
