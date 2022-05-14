import React from 'react';
import { Grid, Typography, Box, Avatar, Container } from '@mui/material';
import soldIcon from "../assets/img/soldIcon.svg";
import connectIcon from "../assets/img/connectIcon.svg";
import userIcon from "../assets/img/userIcon.svg"
import useStyles from './styles';


function Statistic() {
  const classes = useStyles();



  return (
    <Box className={classes.statisticBox} sx={{ flexGrow: 1, minHeight: '400px', background: '#fff' }}>
      <Grid container justifyContent="center">
        <Typography variant="h2" className={classes.statisticTitle}>
          Statistics
          <Box className={classes.statisticUnderline}></Box>
        </Typography>
      </Grid>

      <Box
        //  position="fixed" width={"100%"} bottom={0}
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        color="white"
      >
        <Container>
          <Grid p={5} container spacing={50} justifyContent="space-around">
            <Grid className={classes.heroGridItem} style={ {flex: 1} } item xs={12} sm={4}>
              <Avatar src={userIcon} className={classes.heroAvatar} style={{width: 150, height:150}} />
              <Typography style={{color: '#000', fontWeight: 'bold', textAlign: 'center'}}>1000+ USERS</Typography>

            </Grid>

            <Grid item xs={12} sm={4}>
              <Avatar src={soldIcon} style={{width: 150, height:150}} />
              <Typography style={{color: '#000', textAlign: 'center', fontWeight:'bold'}}>2k PROPERTIES SOLD</Typography>
            </Grid>

            <Grid className={classes.heroGridItem} item xs={12} sm={4}>
              <Avatar src={connectIcon} style={{width: 150, height:150}} />
              <Typography style={{color: '#000', textAlign:'center', fontWeight: 'bold'}} >1k SUCCESSFULL CONNECTIONS</Typography>
            </Grid>

          </Grid>
        </Container>

      </Box>


    </Box>
  );
}

export default Statistic