import { Box, Button, Container, Grid, Paper, Typography ,} from '@material-ui/core'
import {Fragment} from 'react'
import useStyles from "./styles";
import aboutImg from "../assets/img/aboutImg.png";

function About() {
    const classes = useStyles();

  return (
    <Fragment>
        <Box className={classes.aboutBox}>
            <Grid container spacing={6} className={classes.gridContainer}>
                <Grid item xs={12} sm={6} className={classes.aboutSection}>
                <Box>
                <Typography variant="h3" className={classes.aboutTitle}>
                    About Us
                    <Box className={classes.underline}></Box>
                </Typography>
                <Typography variant="h6" className={classes.aboutSubtitle}>
                    As a service, we help clients get connected to agents and help aquire their desired properties with ease.
                    As a service, we help clients get connected t agents and help acquire their desired properties with ease.
                    As a service, we help clients get connected t agents and help acquire their desired properties with ease.
                </Typography>
                </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                <img src={aboutImg} alt="" className={classes.aboutImg} />
                </Grid>
            </Grid>
        </Box>
    </Fragment>  )
}

export default About