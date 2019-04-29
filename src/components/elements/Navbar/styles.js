const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  notif: {
    fontFamily: 'roboto',
    padding: 0,
  },
  isi: {
    borderTop: '2px solid #d6d6d6',
    padding: 0,
  },
  head: {
    paddingLeft: '10px',
    fontSize: '18px',
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing.unit * 2}px`,
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing.unit * 9}px`,
  },
  
});

export default styles;