import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '25px 32px',
  },
  line: {
    maxWidth: '1280px',
    width: '100%',
    borderTop: '1px solid #e1e4e8',
  },
  logoIcon: {
    marginTop: '25px',
    fill: '#e1e4e8',
    height: '24px',
    flexShrink: 0,
  },
});
