import {Fragment,useEffect,useState} from 'react'
import {Grid,Paper,Box,Link,Container} from "@material-ui/core";

function Home() {
  return (
    <Fragment>
        <Box px={{xs: 3, sm: 10}}
              py={{xs: 5, sm: 10}}
             bgcolor={"text.secondary"} color="white" 
            //  position="fixed" width={"100%"} bottom={0}
              >
          <Container maxWidth="lg">
              <Grid container spacing={5}>
                  <Grid item xs={12} sm={3}>
                    <Box pb={2}>Site Map</Box>
                    <Box paddingBottom={"10px"}>
                      <Link href="/home" color="inherit">Home</Link>
                    </Box>
                    <Box paddingBottom={"10px"}>
                      <Link href="/about" color="inherit">About</Link>
                    </Box>
                    <Box paddingBottom={"10px"}>
                      <Link href="/servics" color="inherit">Services</Link>
                    </Box>
                    <Box paddingBottom={"10px"}>
                      <Link href="/testimonies" color="inherit">Testimonies</Link>
                    </Box>
                    <Box>
                      <Link href="/contact" color="inherit">Contact</Link>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <Box pb={2}>Social</Box>
                    <Box paddingBottom={"10px"}>
                      <Link href="#" color="inherit">Facebook</Link>
                    </Box>
                    <Box paddingBottom={"10px"}>
                      <Link href="#" color="inherit">Instagram</Link>
                    </Box>
                    <Box paddingBottom={"10px"}>
                      <Link href="#" color="inherit">Twitter</Link>
                    </Box>
                    <Box>
                      <Link href="/testimonies" color="inherit">Gmail</Link>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <Box pb={2}>Language</Box>
                    <Box paddingBottom={"10px"}>
                      <Link href="#" color="inherit">En-Us</Link>
                    </Box>
                    <Box paddingBottom={"10px"}>
                      <Link href="#" color="inherit">Hausa</Link>
                    </Box>
                    <Box paddingBottom={"10px"}>
                      <Link href="#" color="inherit">French</Link>
                    </Box>
                  
                  </Grid>



                  <Grid item xs={12} sm={3}>
                    <Box pb={2} >Sponsors</Box>
                    <Box paddingBottom={"10px"}>
                      <Link href="#" color="inherit">TCLI</Link>
                    </Box>
                    <Box paddingBottom={"10px"}>
                      <Link href="#" color="inherit">MODIB</Link>
                    </Box>
                    <Box paddingBottom={"10px"}>
                      <Link href="#" color="inherit">LINDO</Link>
                    </Box>
                   
                  </Grid>
              </Grid>
              <Box textAlign="center" pt={{xs: 5, sm: 10}} pb={{xs: 5, sm: 0}} >
                Gida &copy; {new Date().getFullYear()}
              </Box>
          </Container>
        </Box>
    </Fragment>
  )
}

export default Home