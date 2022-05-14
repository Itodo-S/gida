import {Fragment,useState} from 'react'
import { Box, Button, Grid, Typography , 
    TextareaAutosize, TextField} from '@material-ui/core'
import useStyles from "./styles";

function Contact() {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [message, setMessage] = useState('');
  
    const submitForm = (e) => {
      e.preventDefault();
      console.log({ email, firstName, message });
    };

  return (
    <Fragment>
    <Box  className={classes.heroBox }>
        <Grid container spacing={6} className={classes.gridContainer}>
            <Grid item xs={12} md={7}>
            <Typography variant="h3" className={classes.title}>
                Contact Us
                <Box className={classes.underline}></Box>
            </Typography>
            <Typography variant="h6" className={classes.subtitle}>
               You can reach out via our socail media handles or contact us via email and we'll get back to you.
            </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
            <Box className={classes.formContainer}>
  
      <Box
        className={classes.form}
        component="form"
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          className={classes.inputField}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          className={classes.inputField}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />



        <TextareaAutosize
          aria-label="minimum height"
          minRows={6}
          placeholder="Enter a message"
          className={classes.textArea}
          spellCheck
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button
           className={classes.contactButton}
            color="primary"
            variant="contained"
            sx={{ width: '250px', fontSize: '20px' }}
          onClick={submitForm}
        >
          Send Email
        </Button>
      </Box>
    </Box>
            </Grid>
        </Grid>
    </Box>
</Fragment>
  )
}

export default Contact