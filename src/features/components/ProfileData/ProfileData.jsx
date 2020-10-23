import BusinessIcon from '@material-ui/icons/Business';
import EmailIcon from '@material-ui/icons/Email';
import LinkIcon from '@material-ui/icons/Link';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import React from 'react';

import { useStyles } from './styles';

const ProfileData = (props) => {
  const {
    username,
    name,
    avatarUrl,
    followers,
    following,
    company,
    location,
    email,
    blog,
  } = props;

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.avatarProfile}>
        <img className={classes.avatar} src={avatarUrl} alt={username} />
        <div className={classes.userData}>
          <h1 className={classes.dataName}>{name}</h1>
          <h2 className={classes.dataUser}>{username}</h2>
        </div>
      </div>
      <div className={classes.avatarFollow}>
        <div className={classes.followers}>
          <PeopleAltIcon className={classes.icon} />
          <b className={classes.spanTitle}>{followers}</b>
          <span className={classes.span}>followers</span>
          <span>·</span>
        </div>
        <div>
          <b className={classes.spanTitle}>{following}</b>
          <span className={classes.span}>following</span>
        </div>
      </div>
      <div className={classes.userInfos}>
        <div className={classes.infos}>
          {company && <BusinessIcon className={classes.icon} />}
          <span className={classes.spanInfos}>{company}</span>
        </div>
        <div className={classes.infos}>
          {location && <LocationOnIcon className={classes.icon} />}
          <span className={classes.spanInfos}>{location}</span>
        </div>
        <div className={classes.infos}>
          {email && <EmailIcon className={classes.icon} />}
          <span className={classes.spanInfos}>{email}</span>
        </div>
        <div className={classes.infos}>
          {blog && <LinkIcon className={classes.icon} />}
          <span className={classes.spanInfos}>{blog}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileData;
