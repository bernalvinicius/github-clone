import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  container: {
    padding: '16px 24px',
    overflow: 'hidden',
  },
  main: {
    margin: '0 auto',
    maxWidth: '1280px',
  },
  leftSide: {},
  rightSide: {},
  repos: {
    marginTop: '16px',
  },
  reposTitle: {
    fontSize: '16px',
    fontWeight: 'normal',
    margin: '10px 0',
  },
  spanMap: {
    fontSize: '16px',
    margin: '36px 0 9px',
    display: 'inline-flex',
  },
  icon: {
    width: '16px',
    height: '16px',
    marginRight: '4px',
  },
  tab: {
    background: '#fff',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    width: 'min-content',
    padding: '14px 16px',
    borderBottom: '2px solid #f9826c',
  },
  label: {
    fontSize: '14px',
    padding: '0 7px',
    fontWeight: 600,
  },
  qtde: {
    fontSize: '14px',
    background: 'rgba(209,213,218,.5)',
    padding: '2px 6px',
    borderRadius: '24px',
  },
  line: {
    display: 'flex',
    width: '200vw',
    borderBottom: '1px solid #e1e4e8',
    marginLeft: '-50vw',
  },
});
