const drawerWidth = 300;
const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  ppk: {
    paddingRight: 0,
  },
  main: {
    paddingTop: '5px',
    paddingBottom: '5px',
    marginBottom: '10px',
    background : '#efefef',
  },
  image:{
    position: 'relative',
    height: '135px',
    padding:'13px 15px 12px 15px',
    backgroundImage: "url('../../../assets/schoolvector.jpg')",
  },
  toolbar: theme.mixins.toolbar,
});

export default styles;