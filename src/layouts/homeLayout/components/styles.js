import { makeStyles } from '@material-ui/core';
import zIndex from '@material-ui/core/styles/zIndex';

const styles = (theme) => {
  return {
    root: {
      background: "#EEF2F6"
    },
    toolBar: {
      height: '10vh',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px',
      backgroundColor: 'white',
    },
    logo: {
      color: 'blue',
      cursor: 'pointer',
    },
    link: {
      color: "#000",
    },
    menuIcon: {
      color: '#000',
    },
    formContainer: {
      flexGrow: 1,
      padding: '10px',
      maxWidth: '700px',
      margin: '30px auto',
      [theme.breakpoints.between('xs', 'sm')]: {
        width: '100%',
      },
    },
    form: {
      marginTop: '30px',
    },
    formHeading: {
      textAlign: 'center',
    },
    heroBox: {
      width: '100%',
      display: 'flex',
      minHeight: '600px',
      alignItems: 'center',
      justifyContent: 'center',
      background: "#EEF2F6",
      top: "0px",
      marginTop: "0px"
    },
    gridContainer: {
      display: 'flex',
      justifyContent: "center",
      alignItems: 'center',
      maxWidth: '1300px',
      padding: '50px',
    },
    gridItem: {
      left: "1000px"
    },
    aboutUsContainer: {
      width: '100%',
      display: 'flex',
      minHeight: '400px',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '30px 0px 50px 0px',
    },
    aboutUsSubtitle: {
      opacity: '0.7',
      paddingBottom: '30px',
      fontSize: '18px',
    },
    title: {
      paddingBottom: '15px',
      color: "#29332BCC",
      fontWeight: "700",
      fontFamily: "Inter"

    },
    subtitle: {
      opacity: '0.4',
      paddingBottom: '30px',
      color: "#29332B",
      fontWeight: "500",
      lineHeight: "1.5",
      width: "420px",

    },
    aboutBox: {
      width: '100%',
      display: 'flex',
      minHeight: '600px',
      alignItems: 'center',
      justifyContent: 'center',
      background: "#EEF2F6"
    },
    aboutTitle: {
      paddingBottom: '15px',
      color: "#29332B",
      fontWeight: "700",
      fontFamily: "Inter",
      fontSize: "45px",
      fontStyle: "normal",
      marginBottom: "25px"

    },
    underline: {
      width: "204px",
      height: "22px",
      background: "#053D7E",
      borderRadius: "0px 0px 100px 0px"
    },
    statisticUnderline: {
      width: "204px",
      height: "22px",
      background: "#053D7E",
      borderRadius: "0px 0px 100px 0px"
    },
    herotitle: {
      flexGrow: 1,
      textAlign: "center"
    },
    statisticBox: {
      width: "100%",
      background: "#EEF2F6"
    
    },
    aboutSubtitle: {
      opacity: '0.7',
      paddingBottom: '30px',
      color: "#29332B",
      fontWeight: "500",
      lineHeight: "1.5",
      width: "500px",
      fontFamily: "inter"

    },
    statisticTitle: {
      // flexGrow: 1,
      // textAlign: "center",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontSize: "45px",
      lineHeight: "1.5",
      color: "#29332B"
    },
    iconBox: {
      width: "169px",
      height: "169px",
      color: "#053D7E",
      marginBottom: "25px"
    },
    icon: {
      width: "169px",
      height: "169px",
      color: "#053D7E",
      marginBottom: "25px"
    },
    iconSubitle: {
      paddingLeft: "30px"
    },
    iconTitle: {
      width: "50px",
      height: "48px",
      fontWeight: "800",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontSize: "25px",
      lineHeight: "1.5",
      color: "#000",
      alignItems: "center",
      justifyContent: "center"
    },
    heroTitle: {
      background: "#f4f4f5",
      width: "100%",
      height: "100px",
      flexGrow: "1"
    },
    heroAvatar: {
      width: "169px",
      height: "169px"
    },
    button: {
      backgroundColor: "#053D7E",
      borderRadius: "15px",
      padding: "20px",
      width: "250px",
      fontSize: "20px",
      fontWeight: "400"
    },
    contactButton: {
      backgroundColor: "#053D7E",
      borderRadius: "15px",
      fontSize: "20px",
      fontWeight: "400",
      width: "280px"
    },
    largeImage: {
      width: "123%",
      height: "220% ",
      marginLeft: -29
    },
    aboutImg:{
      width: "600px",
      borderRadius: "20px",
      height: "350px"

    },
    sectionGridContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      minHeight: '500px',
    },

    aboutSection: {
        width: "7000px"
    },
    sectionGridItem: {
      backgroundColor: '#f2f0f1',
      textAlign: 'center',
      padding: '30px',
      width: '200px',
      borderRadius: '10px',
      margin: '10px !important',
    },
    // heroGridItem: {
    //   padding: '30px',
    //   width: '200px',
    // },
    inputField: {
      marginBottom: '20px !important',
    },
    textArea: {
      width: '100%',
      marginBottom: '20px',
      fontSize: '16px',
      padding: '10px',
    },
    footerContainer: {
      display: 'flex',
      alignItems: 'center',
      miHeight: '10vh',
      padding: '20px',
      justifyContent: 'center',
      backgroundColor: '#f2f0f1',
      flexDirection: 'column',
    },
    footerText: {
      paddingBottom: '10px',
    },
    footerDate: {
      opacity: '0.4',
    },
    testimonialCard: {
      backgroundColor: '#fff',
      padding: '10px',
      minHeight: '200px',
      display: 'flex',
      alignItems: 'center',
    },
    testimonialStatement: {
      paddingBottom: '25px',
    },
    avatar: {
      marginRight: '10px',
    },
    avatars: {
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1000"
    },
    statistics: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 0
    },
    testimonialPosition: {
      fontSize: '14px',
      opacity: '0.6',
    },
  };
};

const useStyles = makeStyles(styles);
export default useStyles;