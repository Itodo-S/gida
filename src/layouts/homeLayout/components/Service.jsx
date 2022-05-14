import React from 'react';
import { Grid, Typography, Box,Avatar,Container } from '@mui/material';
import soldIcon from "../assets/img/soldIcon.svg";
import connectIcon from "../assets/img/connectIcon.svg";
import userIcon from "../assets/img/userIcon.svg"
import useStyles from './styles';

function Service() {

    const classes = useStyles();

    return (
      <Box className={classes.statisticBox} sx={{ flexGrow: 1, padding: 5, minHeight: '400px', background: '#fff', marginTop: 30 }}>
        <Grid container justifyContent="center">
          <Typography variant="h2" className={classes.statisticTitle}>
              Services
              <Box className={classes.statisticUnderline}></Box>

              {/* <Box> Providing our customers with quality is our top priority. Our services are listed below.</Box> */}
          </Typography>
        </Grid>
  
        <Box  
        //  position="fixed" width={"100%"} bottom={0}
            px={{xs: 3,sm: 10}}
            py={{xs: 5,sm: 10}}
           color="white" >
            <Container>
              <Grid  container spacing={7} justifyContent='space-around'>
                  <Grid className={classes.heroGridItem} item xs={12} sm={3}>
                      <Avatar src={userIcon} className={classes.heroAvatar} style={{width: 100, height:100}} />
                      <Typography style={{color: '#000', fontWeight: 'bold', textAlign: 'center'}} >Connect Property owners to clients</Typography>
  
                    </Grid>
  
                    <Grid item xs={12} sm={3}>
                      <Avatar src={soldIcon} style={{width: 100, height:100}} />  
                        <Typography style={{color: '#000', fontWeight: 'bold', textAlign: 'center'}} >Providing mulitple leaseable properties around the city for clients</Typography>
                    </Grid>
  
                    <Grid className={classes.heroGridItem} item xs={12} sm={3}>
                      <Avatar src={connectIcon} style={{width: 100, height:100}}/>   
                      <Typography style={{color: '#000', fontWeight: 'bold', textAlign: 'center'}} >Providing agents roles and consultancy</Typography>                
                    </Grid>
                  
                    <Grid className={classes.heroGridItem} item xs={12} sm={3}>
                      <Avatar src={connectIcon} style={{width: 100, height:100}} />   
                      <Typography style={{color: '#000', fontWeight: 'bold', textAlign: 'center'}} >Connect agents with clients</Typography>                
                    </Grid>

              </Grid>
             
            </Container>
          </Box>
  
  
      </Box>
    );
}

export default Service