import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '16px',
    border: '1px solid #e1e4e8',
    borderRadius: '6px',
  },
  topSide: {},
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  link: {
    marginLeft: '8px',
    fontSize: '14px',
    fontWeight: 600,
    color: '#0366d6',
    textDecoration: 'none',

    '&::hover': {
      textDecoration: 'underline',
    },
  },
  description: {
    margin: '8px 0 16px',
    fontSize: '12px',
    color: '#586069',
    letterSpacing: '0.1px',
  },
  botSide: {},
  language: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    flexShrink: 0,
    background: '#f1e05a',
  },
  botContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  botCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '16px',
  },
  span: {
    marginLeft: '5px',
    fontSize: '12px',
    color: '#586069',
  },
  icon: {
    fill: '#6a737d',
    width: '16px',
    height: '16px',
    flexShrink: 0,
  },
});
