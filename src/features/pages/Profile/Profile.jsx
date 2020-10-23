import Grid from '@material-ui/core/Grid';
import BookIcon from '@material-ui/icons/Book';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProfileData from '../../components/ProfileData';
import RandomCalendar from '../../components/RandomCalendar';
import RepoCard from '../../components/RepoCard';
import { useStyles } from './styles';

const Profile = () => {
  const classes = useStyles();
  const { username = 'bernalvinicius' } = useParams();

  const [data, setData] = useState({
    userAPI: [],
    repoAPI: [],
    error: null,
  });

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),
    ]).then(async (responses) => {
      const [userResponse, reposResponse] = responses;

      if (userResponse.status === 404) {
        setData((prev) => ({
          ...prev,
          error: 'User not found!',
        }));
        return;
      }

      const userAPI = await userResponse.json();
      const repos = await reposResponse.json();

      const shuffledRepos = repos.sort(() => 0.5 - Math.random());
      const repoAPI = shuffledRepos.slice(0, 6);

      setData((prev) => ({
        ...prev,
        userAPI,
        repoAPI,
      }));
    });
  }, [username]);

  if (data?.error) {
    return <h1>{data.error}</h1>;
  }

  if (!data?.userAPI || !data?.repoAPI) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <div className={classes.leftSide}>
              <ProfileData
                username={data.userAPI.login}
                name={data.userAPI.name}
                avatarUrl={data.userAPI.avatar_url}
                followers={data.userAPI.followers}
                following={data.userAPI.following}
                company={data.userAPI.company}
                location={data.userAPI.location}
                email={data.userAPI.email}
                blog={data.userAPI.blog}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={9}>
            <div className={classes.rightSide}>
              <div className={classes.tab}>
                <div className={classes.content}>
                  <BookIcon className={classes.icon} />
                  <span className={classes.label}>Repositories</span>
                  <span className={classes.qtde}>
                    {data.userAPI?.public_repos}
                  </span>
                </div>
                <span className={classes.line} />
              </div>
              <div className={classes.repos}>
                <h2 className={classes.reposTitle}>Popular repositories</h2>
                <Grid container spacing={3}>
                  {data.repoAPI.map((item) => (
                    <Grid item sm={12} md={6}>
                      <RepoCard
                        key={item.name}
                        username={item.owner.login}
                        reponame={item.name}
                        description={item.description}
                        language={item.language}
                        stars={item.stargazers_count}
                        forks={item.forks}
                      />
                    </Grid>
                  ))}
                </Grid>
              </div>
              <div>
                <div>
                  <span className={classes.spanMap}>
                    contributions in the last year
                  </span>
                </div>
                <RandomCalendar />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Profile;
