import { Box, Button, Container, Grid, Paper, Typography, } from '@material-ui/core'
import { Fragment } from 'react'
import useStyles from "./styles";
import HeroLogo from "../assets/img/HERO-IMAGE.svg"
function Header() {

    const classes = useStyles();

    return (
        <Fragment>
            <Box className={classes.heroBox}>
                <Grid container spacing={2} className={classes.gridContainer}>
                    <Grid style={{flex: 1}} item xs={12} md={7}>
                        <Typography variant="h2" className={classes.title}>
                            Discover your desired landed properties
                        </Typography>
                        <Typography variant="h6" className={classes.subtitle}>
                            We make it easy for clients and property owners to connect and to business with seamlessly.
                        </Typography>
                        <Button
                            className={classes.button}
                            color="primary"
                            variant="contained"
                            sx={{ width: '250px', fontSize: '20px' }}
                        >
                            Get Started
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={5} style={{marginTop: -550, zIndex:1, flex: 1}}>
                        <img src={HeroLogo} alt="" className={classes.largeImage} />
                    </Grid>
                </Grid>
            </Box>
        </Fragment>
    )
}

export default Header