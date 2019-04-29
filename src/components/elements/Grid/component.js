import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ListItem, Divider } from '@material-ui/core';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import Settings from '@material-ui/icons/Settings';
import FormatList from '@material-ui/icons/FormatListBulletedOutlined';
import ListItemText from '@material-ui/core/ListItemText';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 1,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  pp: {
    paddingRight: 0,
  },
  linearColorPrimary1: {
    backgroundColor: '#efefef',
  },
  linearBarColorPrimary1: {
    backgroundColor: '#03A9F4',
  },
  linearColorPrimary2: {
    backgroundColor: 'efefef',
  },
  linearBarColorPrimary2: {
    backgroundColor: '#4CAF50'
  },
  linearColorPrimary3: {
    backgroundColor: 'efefef',
  },
  linearBarColorPrimary3: {
    backgroundColor: '#FF9800',
  },
  Header:{
    padding:10,
  },
  icon:{
    backgroundColor:'#E91E63',
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography className={classes.judul}>Dashboard</Typography>
      <Grid container spacing={24}>
        <Grid item xs={3}>
          <Paper>
            <List>
              <ListItem>
                <Avatar>
                  <FormatList />
                </Avatar>
                <ListItemText primary="Total Perijinan" secondary="50" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <List>
              <ListItem>
                <Avatar>
                  <Settings />
                </Avatar>
                <ListItemText primary="Perijinan Baru" secondary="02" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <List>
              <ListItem className={classes.pp}>
                <Avatar>
                  <Settings />
                </Avatar>
                <ListItemText primary="Proses Perijinan" secondary="15" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <List>
              <ListItem className={classes.pp}>
                <Avatar>
                  <Settings />
                </Avatar>
                <ListItemText primary="Perijinan Selesai" secondary="37" />
              </ListItem>
            </List>
          </Paper>
        </Grid>


        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>


        <Grid item xs={8}>
          <Paper style={{padding:'20px'}} className={classes.paper}>
          <Typography className={classes.Header} align="Left">DAFTAR PROGRES PERIJINAN</Typography>
          <Divider/>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell style={{ padding: 10, }}>#</TableCell>
                  <TableCell style={{ padding: 10, minWidth: 120, }} align="right">Nama Perijinan</TableCell>
                  <TableCell style={{ padding: 10, }} align="right">Jenis Perijinan</TableCell>
                  <TableCell style={{ padding: 10, minWidth: 120, }} align="right">Status</TableCell>
                  <TableCell style={{ padding: 10, }} align="right">Update Terakhir</TableCell>
                  <TableCell style={{ padding: 10, }} align="right">Progress</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <TableCell style={{ padding: 10, }} component="th" scope="row">1</TableCell>
                  <TableCell style={{ padding: 10, }} align="right">Pendirian SMK Telkom Sidoarjo</TableCell>
                  <TableCell style={{ padding: 10, }} align="right">Pendirian Sekolah Baru</TableCell>
                  <TableCell style={{ padding: 10, }} >
                    <span style={{ backgroundColor: '#03A9F4', color: '#FFFFFF', padding: '.2em .6em .3em', fontSize: '75%' }}>
                      Diterima Cabdin
                </span>
                  </TableCell>
                  <TableCell style={{ padding: 10, }} align="right">21 Jan 2018</TableCell>
                  <TableCell style={{ padding: 10, }} align="right">
                    <LinearProgress
                      classes={{
                        colorPrimary: classes.linearColorPrimary1,
                        barColorPrimary: classes.linearBarColorPrimary1,
                      }}
                      style={{ height: '8px', }} variant="determinate" value='10' />
                  </TableCell>
                </TableRow>
              </TableBody>

              <TableBody>
                <TableRow>
                  <TableCell style={{ padding: 10, }} component="th" scope="row">2</TableCell>
                  <TableCell style={{ padding: 10, }} align="right">Perpanjangan Ijin SMK Telkom Malang</TableCell>
                  <TableCell style={{ padding: 10, }} align="right">Perpanjangan Ijin</TableCell>
                  <TableCell style={{ padding: 10, }} >
                    <span style={{ backgroundColor: '#03A9F4', color: '#FFFFFF', padding: '.2em .6em .3em', fontSize: '75%' }}>
                      Diterima Cabdin
                </span>
                  </TableCell>
                  <TableCell style={{ padding: 10, }} align="right">20 Jan 2018</TableCell>
                  <TableCell style={{ padding: 10, }} align="right">
                    <LinearProgress
                      classes={{
                        colorPrimary: classes.linearColorPrimary1,
                        barColorPrimary: classes.linearBarColorPrimary1,
                      }}
                      style={{ height: '8px', }} variant="determinate" value='10' />
                  </TableCell>
                </TableRow>
              </TableBody>

              <TableBody>
                <TableRow>
                  <TableCell style={{ padding: 10, }} component="th" scope="row">3</TableCell>
                  <TableCell style={{ padding: 10, }} align="right">Penambahan Proli RPL di SMK Telkom Malang</TableCell>
                  <TableCell style={{ padding: 10, }} align="right">Penambahan Program Keahlian</TableCell>
                  <TableCell style={{ padding: 10, }} >
                    <span style={{ backgroundColor: '#4CAF50', color: '#FFFFFF', padding: '.2em .6em .3em', fontSize: '75%' }}>
                      Proses kirim ke P2T
                </span>
                  </TableCell>
                  <TableCell style={{ padding: 10, }} align="right">30 Jan 2018</TableCell>
                  <TableCell style={{ padding: 10, }} align="right">
                    <LinearProgress
                      classes={{
                        colorPrimary: classes.linearColorPrimary2,
                        barColorPrimary: classes.linearBarColorPrimary2,
                      }}
                      style={{ height: '8px', }} variant="determinate" value='40' />
                  </TableCell>
                </TableRow>
              </TableBody>

              <TableBody>
                <TableRow>
                  <TableCell style={{ padding: 10, }} component="th" scope="row">3</TableCell>
                  <TableCell style={{ padding: 10, }} align="right">Pengubahan Proli TKJ ke TJA SMK Telkom Malang</TableCell>
                  <TableCell style={{ padding: 10, }} align="right">Pengubahan Program Keahlian</TableCell>
                  <TableCell style={{ padding: 10, }}>
                    <span style={{ backgroundColor: '#4CAF50', color: '#FFFFFF', padding: '.2em .6em .3em', fontSize: '75%' }}>
                      Verifikasi Disdik
                </span>
                  </TableCell>
                  <TableCell style={{ padding: 10, }} align="right">3 Feb 2018</TableCell>
                  <TableCell style={{ padding: 10, }} align="right">
                    <LinearProgress
                      classes={{
                        colorPrimary: classes.linearColorPrimary2,
                        barColorPrimary: classes.linearBarColorPrimary2,
                      }}
                      style={{ height: '8px', }} variant="determinate" value='70' />
                  </TableCell>
                </TableRow>
              </TableBody>

              <TableBody>
                <TableRow>
                  <TableCell style={{ padding: 10, }} component="th" scope="row">3</TableCell>
                  <TableCell style={{ padding: 10, }} align="right">Penambahan Proli Multimedia di SMK Telkom Malang</TableCell>
                  <TableCell style={{ padding: 10, }} align="right">Penambahan Program Keahlian</TableCell>
                  <TableCell style={{ padding: 10, }}>
                    <span style={{ backgroundColor: '#FF9800', color: '#FFFFFF', padding: '.2em .6em .3em', fontSize: '75%' }}>
                      Penerbitan Sertifikat
                </span>
                  </TableCell>
                  <TableCell style={{ padding: 10, }} align="right">31 Jan 2018</TableCell>
                  <TableCell style={{ padding: 10, }} align="right">
                    <LinearProgress
                      classes={{
                        colorPrimary: classes.linearColorPrimary3,
                        barColorPrimary: classes.linearBarColorPrimary3,
                      }}
                      style={{ height: '8px', }} variant="determinate" value='100' />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Grid>


        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
