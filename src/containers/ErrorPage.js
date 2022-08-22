import React, { useState } from "react";
import { Grid, Button, Link, Card, Typography, CssBaseline, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
  },
  image: {
    backgroundImage: (props) => props.backgroundImage,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paperDown: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  avatar: {
    margin: theme.spacing(2),
    width: "300px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: "left",
    color: theme.palette.text.secondary,
    marginTop: "100px",
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    display: "block",
    alignItems: "center",
    borderRadius: "1em",
  },
}));

const ErrorPage = (props) => {
  let number = Math.floor(Math.random() * 20);
  const [imgURL] = useState(
    require("../assets/images/splash/" + String(number) + ".jpg").default
  );

  const background = {
    backgroundImage: "url(" + imgURL + ")",
  };

  const classes = useStyles(background);
  const errorMsg = "Ops!"
  const notfoundMsg = "página não encontrada"
  let history = useHistory();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />

      <Grid item xs={12} sm={6} md={12} elevation={6} className={classes.image} >

        <Card className={classes.paper}>
          <img
            src={require("../assets/images/naturaandco.svg").default}
            className={classes.avatar}
            alt="Logo"
          />

          <Typography variant="h2">{props.location.pathname === '/error' ? errorMsg : notfoundMsg}</Typography>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => history.goBack()}
            className={classes.submit}>
            Voltar para Aplicação
          </Button>

          <Grid container justifyContent="space-between">
            <Grid item>
              <Link href="/faq" variant="subtitle1" color="primary">
                Precisa de orientação?
              </Link>
            </Grid>

            <Grid item>
              <Link href={process.env.REACT_APP_CONFLUENCE} variant="subtitle1" color="primary" target="_blank">
                Confluence
              </Link>
            </Grid>
          </Grid>
          <br />

          <Grid item className={classes.paperDown}>
            <Typography variant="h5">
              <b>CoE Arq. & Devops</b>
            </Typography>

            <Typography variant="h6">Natura &Co © 2020</Typography>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ErrorPage;
