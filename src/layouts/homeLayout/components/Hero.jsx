import React from 'react';
import { Grid, Typography, Box,Avatar,Container } from '@mui/material';
import soldIcon from "../assets/img/soldIcon.svg";
import connectIcon from "../assets/img/connectIcon.svg";
import userIcon from "../assets/img/userIcon.svg"
import useStyles from './styles';

const Hero = () => {
  const classes = useStyles();


  return (
    <Box className={classes.statisticBox} bgcolor={"text.secondary"} sx={{ flexGrow: 1, minHeight: '400px' }}>
      <Grid container justifyContent="center">
        <Typography variant="h2" className={classes.statisticTitle}>
            Statistics
            <Box className={classes.statisticUnderline}></Box>
        </Typography>
      </Grid>

      <Box  
      //  position="fixed" width={"100%"} bottom={0}
          px={{xs: 3,sm: 10}}
          py={{xs: 5,sm: 10}}
         color="white" >
          <Container maxWidth="lg" >
            <Grid  pl={5} container spacing={50} justifyContent="center">
                <Grid className={classes.heroGridItem} item xs={12} sm={4}>
                    <Avatar src={userIcon} className={classes.heroAvatar} />
                    <Typography >1000+ USERS</Typography>

                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <Avatar src={soldIcon} />  
                      <Typography >PROPERTIES SOLD</Typography>
                  </Grid>

                  <Grid className={classes.heroGridItem} item xs={12} sm={4}>
                    <Avatar src={connectIcon} />   
                    <Typography >1k SUCCESSFULL CONNECTIONS</Typography>                
                  </Grid>
                
            </Grid>
           
          </Container>
        </Box>


    </Box>
  );
};


export default Hero