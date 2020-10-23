import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    padding: '16px 20px 0 10px',
    border: '1px solid #e1e4e8',
    borderRadius: '6px',
  },
  span: {
    fontSize: '11px',
    color: '#0366d6',
    marginTop: '-25px',
    marginLeft: '7px',
    marginBottom: '16px',
    alignSelf: 'flex-start',
  },
});
