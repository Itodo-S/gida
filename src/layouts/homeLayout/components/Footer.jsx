import {Fragment} from 'react';
// import {Link} from "react-router-dom";
import {Grid,Box,Link,Container,makeStyles} from "@material-ui/core"
// import {BottomNavigation,BottomNavigationAction,ListItem,ListItemText} from "@mui/material"
// import {RestoreIcon,FavoriteIcon,LocationOnIcon} from "@material-ui/icons"


const useStyles = makeStyles({
  linkItem: {
    paddingBottom: "10px",
    fontSize: "20px"
  },
  linkItemLink:{
    fontSize: "25px"
  }
})
function Footer() {

  const classes = useStyles();

  return (
    <Fragment>
    <Box 
    postion="absolute"
    width={"100%"}>
    <Box
      //  position="fixed" width={"100%"} bottom={0}
          px={{xs: 3,sm: 10}}
          py={{xs: 5,sm: 10}}
         bgcolor={"rgba(5, 61, 126, 0.95)"} color="white" >
          <Container maxWidth="lg" >
            <Grid container spacing={5}>
                <Grid fontSize="30px" item xs={12} sm={3}>
                  <Box pb={2} >Site Map</Box>
                  <Box className={classes.linkItem} >
                    <Link href="/" color="inherit" >Home</Link>
                  </Box>
                  <Box className={classes.linkItem}>
                    <Link href="/about" color="inherit" >About</Link>
                  </Box>
                  <Box className={classes.linkItem}>
                    <Link href="/servics" color="inherit" >Services</Link>
                  </Box>
                  <Box paddingBottom="10px" className={classes.linkItem}>
                    <Link color="inherit" >Testimonies</Link>
                  </Box>
                  <Box paddingBottom="10px" className={classes.linkItem}>
                    <Link href="/contact" color="inherit" >Contact</Link>
                  </Box>
                </Grid>

   
                <Grid item xs={12} sm={3}>
                    <Box pb={2}>Social</Box>
                    <Box className={classes.linkItem}>
                      <Link href="#" color="inherit">Facebook</Link>
                    </Box>
                    <Box className={classes.linkItem}>
                      <Link href="#" color="inherit">Instagram</Link>
                    </Box>
                    <Box paddingBottom={"10px"} className={classes.linkItem}>
                      <Link href="#" color="inherit">Twitter</Link>
                    </Box>
                    <Box>
                      <Link href="/testimonies" color="inherit" className={classes.linkItem}>Gmail</Link>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <Box pb={2}>Language</Box>
                    <Box paddingBottom={"10px"}>
                      <Link href="#" color="inherit" className={classes.linkItem}>En-Us</Link>
                    </Box>
                    <Box paddingBottom={"10px"}>
                      <Link href="#" color="inherit" className={classes.linkItem} >Hausa</Link>
                    </Box>
                    <Box paddingBottom={"10px"} className={classes.linkItem}>
                      <Link href="#" color="inherit" className={classes.linkItem}>French</Link>
                    </Box>
                  
                  </Grid>



                  <Grid item xs={12} sm={3}>
                    <Box pb={2} >Sponsors</Box>
                    <Box className={classes.linkItem}>
                      <Link href="#" color="inherit">TCLI</Link>
                    </Box>
                    <Box className={classes.linkItem}>
                      <Link href="#" color="inherit">MODIB</Link>
                    </Box>
                    <Box className={classes.linkItem}>
                      <Link href="#" color="inherit">LINDO</Link>
                    </Box>
                   
                  </Grid>
                
            </Grid>
           
          </Container>
        </Box>

        <Box
             bgcolor={"#053D7E"} fontSize="25px" paddingBottom={"30px"} textAlign="center" color="white" pt={{xs: 5, sm: 10}} pb={{xs: 5, sm: 0, lg: 10}} >
                Gida &copy; {new Date().getFullYear()}
              </Box>
    </Box>
       
    </Fragment>
  )
}

export default Footer