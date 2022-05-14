import { Avatar,Box,Grid,Typography } from '@material-ui/core'
import {Fragment} from 'react';
import soldIcon from "../assets/img/Sold-Icon.svg";
import connectIcon from "../assets/img/Connect-Icon.svg";
import userIcon from "../assets/img/USERS-ICON.svg"
import useStyles from "./styles";

function Hero() {

    const classes = useStyles();

  return (
    <Fragment>
           <Box className={classes.heroBox}>
           <Box >
           <Typography variant="h3" className={classes.heroTitle} >
                    Statistics
            </Typography>
           </Box>
               
            <Grid container spacing={7} className={classes.gridContainer}>
                <Grid item xs={12} sm={4}>
                <Box className={classes.iconBox}>
                    <Avatar src={userIcon} className={classes.icon} />
                    <Box className={classes.iconSubitle} >
                    <Typography className={classes.iconTitle} >1000+ </Typography>
                    <Typography className={classes.iconTitle} >USERS</Typography>
                    </Box>
                </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                <Box className={classes.iconBox} >
                    <Avatar src={soldIcon} className={classes.icon} />
                    <Box >
                    <Typography >2k </Typography>
                    <Typography >Properties Sold</Typography>
                    </Box> 
                </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                <Box className={classes.iconBox} >
                    <Avatar src={connectIcon} className={classes.icon} />
                    <Typography>1k Successful Connections</Typography>
                </Box>
                </Grid>
            </Grid>
            </Box>
    </Fragment>
  )
}

export default Hero



{/* <Box
//  position="fixed" width={"100%"} bottom={0}
    px={{xs: 3,sm: 10}}
    py={{xs: 5,sm: 10}}
   color="white" >
    <Container maxWidth="lg" >
      <Grid container spacing={7} justifyContent="center">
          <Grid className={classes.heroGridItem} item xs={12} sm={4}>
              <Box pb={2}>Social</Box>
              <Avatar src={userIcon} className={classes.heroAvatar} />
            </Grid>

            <Grid className={classes.heroGridItem} item xs={12} sm={4}>
              <Box pb={2}>Language</Box> 
              <Avatar src={soldIcon} />          
            </Grid>



            <Grid className={classes.heroGridItem} item xs={12} sm={4}>
              <Box pb={2} >Sponsors</Box>
              <Avatar src={connectIcon} />                   
            </Grid>
          
      </Grid>
     
    </Container>
  </Box> */}



       {/* <Grid container justifyContent="center">
        <Typography variant="h2" className={classes.statisticTitle}>
            Statistics
            <Box className={classes.statisticUnderline}></Box>
        </Typography>
      </Grid> */}
      {/* <Grid container spacing={7} className={classes.gridContainer} >
            <Grid item xs={12} sm={4} className={classes.gridItem}>
                  <Avatar src={userIcon} />
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Avatar src={soldIcon} />
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Avatar src={connectIcon} />
            </Grid>
              
      </Grid> */}

    //   <Grid container spacing={7} justifyContent="center">
    //             <Grid item xs={12} sm={4}>
    //                 <Box pb={2}>Social</Box>
    //                 <Avatar src={userIcon} className={classes.heroAvatar} />

    //               </Grid>

    //               <Grid className={classes.heroGridItem} item xs={12} sm={4}>
    //                 <Box pb={2}>Language</Box> 
    //                 <Avatar src={soldIcon} />          
    //               </Grid>



    //               <Grid className={classes.heroGridItem} item xs={12} sm={4}>
    //                 <Box pb={2} >Sponsors</Box>
    //                 <Avatar src={connectIcon} />                   
    //               </Grid>
                
    //     </Grid>