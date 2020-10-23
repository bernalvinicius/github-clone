import Grid from '@material-ui/core/Grid';
import React from 'react';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';
import { useStyles } from './styles';
import BookIcon from '@material-ui/icons/Book';

const Profile = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <div className={classes.leftSide}>
              <ProfileData
                username="viniciusbernal"
                name="vinicius bernal"
                avatarUrl="https://avatars1.githubusercontent.com/u/30478051?v=4"
                followers={881}
                following={12}
                company="Vinicius Apto"
                location="Apto location"
                email="vinicius.teste@gmail.com"
                blog="linkedin.com"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={9}>
            <div className={classes.rightSide}>
              <div className={classes.tab}>
                <div className={classes.content}>
                  <BookIcon className={classes.icon} />
                  <span className={classes.label}>Repositories</span>
                  <span className={classes.qtde}>14</span>
                </div>
                <span className={classes.line} />
              </div>
              <div className={classes.repos}>
                <h2 className={classes.reposTitle}>Popular repositories</h2>
                <Grid container spacing={3}>
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <Grid item sm={12} md={6}>
                      <RepoCard
                        key={n}
                        username="viniciusbernal"
                        reponame="vinicius bernal"
                        description="description description description "
                        language="JavaScript"
                        stars={8}
                        forks={4}
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
