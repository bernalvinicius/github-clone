import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  avatarProfile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '60px',

    '@media (max-width: 960px)': {
      flexDirection: 'row',
      marginTop: 0,
    },
  },
  avatar: {
    width: '100%',
    borderRadius: '50%',

    '@media (max-width: 960px)': {
      width: '16%',
    },
  },
  userData: {
    width: '100%',
    marginTop: '16px',

    '@media (max-width: 960px)': {
      marginLeft: '24px',
    },
  },
  dataName: {
    fontSize: '26px',
    lineHeight: 1.25,
    color: '#24292e',
    fontWeight: 600,
  },
  dataUser: {
    fontSize: '20px',
    color: '#666',
    fontWeight: 300,
  },
  avatarFollow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: '20px 0',
  },
  followers: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  spanTitle: {
    marginLeft: '5px',
  },
  span: {
    fontSize: '14px',
    color: '#586069',
    margin: '0 5px',
  },
  userInfos: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    // margin: '20px 0',
  },
  infos: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '3px 0',
  },
  spanInfos: {
    fontSize: '14px',
    color: '#586069',
    margin: '0 5px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  icon: {
    width: '16px',
    height: '16px',
    color: '#6a737d',
    flexShrink: 0,
  },
});
