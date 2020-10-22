import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    background: '#24292e',
    padding: '11px 16px',
  },
  logoIcon: {
    fill: '#fff',
    width: '32px',
    height: '32px',
    flexShrink: 0,
  },
  searchForm: {
    paddingLeft: '16px',
    width: '100%',
  },
  inputForm: {
    background: 'rgba(255, 255, 255, 0.13)',
    'search-placeholder': 'hsla(0,0%,100%,.75)',
    outline: 0,
    borderRadius: '6px',
    padding: '7px 12px',
    width: '100%',

    '&:focus': {
      width: '318px',
    },

    transition: 'width .2s ease-out, color .2s ease-out',
  },
});
