import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';

import Header from './components/Header';
import Profile from './pages/Profile';
import Repo from './pages/Repo';

const GitHub = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route exact path="/:username" component={Profile} />
        <Route path="/:username/:reponame" component={Repo} />
      </Switch>
      <Footer />
    </div>
  );
};

export default GitHub;
