import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Settings from '@material-ui/icons/Settings';
import Navbar from '../Navbar';
import Grid from '../Grid';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Widgets from '@material-ui/icons/Widgets';
import Home from '@material-ui/icons/Home';

export default class SideBar extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Navbar />
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{ paper: classes.drawerPaper, }}>

          <div className={classes.toolbar} />
          <List style={{ paddingTop: 0, }}>
            <div className={classes.userinfo}>
              <ListItem className={classes.image}>
              </ListItem>
            </div>

            <div className={classes.menu}>
              <ListItem className={classes.main}>
                <ListItemText>MAIN NAVIGATION</ListItemText>
              </ListItem>

              <ListItem button>
                <ListItemIcon><Home /></ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItem>

              <ListItem button onClick={this.handleClick}>
                <ListItemIcon><Widgets /></ListItemIcon>
                <ListItemText inset primary="Perijinan" />
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button>
                    <ListItemText inset secondary="Pendirian Sekolah Baru" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText inset secondary="Perpanjangan Ijin Sekolah" />
                  </ListItem>
                  <ListItem button className={classes.ppk}>
                    <ListItemText inset secondary="Penambahan Program Keahlian" />
                  </ListItem>
                  <ListItem button className={classes.ppk}>
                    <ListItemText inset secondary="Pengubahan Program Keahlian" />
                  </ListItem>
                </List>
              </Collapse>
              <ListItem button>
                <ListItemIcon><Settings /></ListItemIcon>
                <ListItemText>Pengaturan</ListItemText>
              </ListItem>
            </div>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Grid />
        </main>
      </div>
    );
  }
  }

  SideBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
