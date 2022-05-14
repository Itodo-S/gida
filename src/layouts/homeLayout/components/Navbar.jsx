import {Fragment} from 'react';
import {Link} from "react-router-dom";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
    useTheme,
    useMediaQuery,
    Button,
    Avatar,
    Box
  } from "@material-ui/core";
  import DrawerComponent from './Drawer';
  import homeLogo from "../assets/img/home-logo.svg"

  const useStyles = makeStyles((theme) => ({
 
      navItems: {
          marginLeft: "200px",
          zIndex: 2
      },
      navbar:{
          backgroundColor: "#fff",
          
      },
      navlinks: {
          marginLeft: theme.spacing(10),
          display: "flex",
      },
      active: {
        borderBottom: "solid rgb(255, 195, 16);"
      },
      logo: {
          flexGrow: "1",
          cursor: "pointer",
          color:  "#464646",

      },
      logoImg: {
        width: "206px",
        height: "181px",
        top: "5px",
        left: "19px",
    },
      link: {
          textDecoration: "none",
          color:  "#464646",
          fontSize: "25px",
          marginLeft: theme.spacing(5),
          marginTop: "10px",
          "&:hover": {
              color: "yellow",
              borderBottom: "1px solid white"
          }
      },
      btn: {
          fontSize: "20px",
          marginLeft: "20px",
          borderRadius: "10px",
          paddingRight: "35px",
          paddingLeft: "35px",
          backgroundColor: "rgb(255, 195, 16);",
          fontfamily: "Arial,Helvetica",
          "&:hover": {
              backgroundColor: "rgb(255, 195, 0);"
          }
      }
  }))

function Navbar() {
    const classes = useStyles();
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));


  return (
    <Fragment style={{zIndex: -1000}}>
        <Box className={classes.navBox}>
        <AppBar position='static' elevation={0}>
            <CssBaseline />
            <Toolbar className={classes.navbar} >
            {/* <Typography variant='h4' className={classes.logo} >
                    GIDA
            </Typography> */}
                <Avatar src={homeLogo}  className={classes.logoImg} />
                {isMobile ? (
                    <DrawerComponent />
                ) : (
                    <Box className={classes.navItems} >
                    <div className={classes.navlinks} >
                        <Link to="/"className={classes.link || classes.active} >Home</Link>
                        <Link to="/about" className={classes.link} >About</Link>
                        <Link to="/service" className={classes.link} >Servies</Link>
                        <Link to="/testimony" className={classes.link}>Testimonies</Link>
                        <Link to="/contact" className={classes.link} >Contact</Link>
                        <Button href='/login' className={classes.btn}  variant="contained" color='secondary'>Login</Button>
                    </div>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
        </Box>
        
    </Fragment>
  )
}

export default Navbar