import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '16px',
  },
  breadCrumb: {
    marginBottom: '16px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap',
    whiteSpace: 'nowrap',
    fontSize: '18px',
  },
  description: {
    fontSize: '16px',
  },
  icon: {
    width: '16px',
    height: '16px',
    color: '#6a737d',
    flexShrink: 0,
  },
  username: {
    color: '#0366d6',
    textDecoration: 'none',
    marginLeft: '8px',

    '&::hover': {
      textDecoration: 'underline',
    },
  },
  reponame: {
    color: '#0366d6',
    textDecoration: 'none',
    fontWeight: 600,

    '&::hover': {
      textDecoration: 'underline',
    },
  },
  spanLink: {
    padding: '0 5px',
  },
  botCard: {
    marginTop: '16px',
    display: 'flex',
    alignItems: 'center',
  },
  botItem: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '9px',
  },
  icoiconBotn: {
    width: '16px',
    height: '16px',
    color: '#586069',
    flexShrink: 0,
    marginRight: '7px',
  },
  spanBot: {
    margin: ' 0 7px',
    color: '#586069',
  },
  button: {
    marginTop: '24px',
    background: '#24292e',
    borderRadius: '24px',
    padding: '12px 17px',
    width: 'max-content',
    display: 'flex',
    alignItems: 'center',
  },
  spanbutton: {
    color: '#fff',
  },
  iconBtn: {
    fill: '#fff',
    marginRight: '10px',
  },
});
