import {Fragment,useState} from 'react'
import {
    Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";



const useStyles = makeStyles(() => ({
    link: {
        textDecoration: "none",
        color: "#464646",
        fontSize: "20px"
    },
    icon: {
        color: "rgb(255, 195, 16);"
    }
}));

function DrawerComponent() {
    const classes = useStyles();
    const [openDrawer,setOpenDrawer] = useState(false);
  return (
    <Fragment>
        <Drawer 
          open={openDrawer}
            onClose={() => setOpenDrawer(false)}
        >
            <List>
                <ListItem onClick={() => setOpenDrawer(false)} >
                    <ListItemText>
                        <Link to="/" className={classes.link}>Home</Link>
                    </ListItemText>
                </ListItem>

                <Divider />
                <ListItem onClick={() => setOpenDrawer(false)} >
                    <ListItemText>
                        <Link to="/about" className={classes.link}>About</Link>
                    </ListItemText>
                </ListItem>

                <Divider />
                <ListItem onClick={() => setOpenDrawer(false)} >
                    <ListItemText>
                        <Link to="/services" className={classes.link}>Services</Link>
                    </ListItemText>
                </ListItem>

                <Divider />
                <ListItem onClick={() => setOpenDrawer(false)} >
                    <ListItemText>
                        <Link to="/testimony" className={classes.link}>Testimonies</Link>
                    </ListItemText>
                </ListItem>

                <Divider />
                <ListItem onClick={() => setOpenDrawer(false)} >
                    <ListItemText>
                        <Link to="/contact" className={classes.link} >Contact</Link>
                    </ListItemText>
                </ListItem>

                <Divider />
                <ListItem onClick={() => setOpenDrawer(false)} >
                    <ListItemText>
                        <Link to="/login" className={classes.link} >Login</Link>
                    </ListItemText>
                </ListItem>
            </List>
        </Drawer>

        <IconButton className={classes.icon} onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuIcon />
        </IconButton>
    </Fragment>
  )
}

export default DrawerComponent