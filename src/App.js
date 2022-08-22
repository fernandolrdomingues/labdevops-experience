import logo from './logo.svg';
import './App.css';
import { withCookies } from 'react-cookie'
import { Button, Link, Card, Typography, CircularProgress, CssBaseline, Grid, TextField, FormControl } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { themes } from '@naturacosmeticos/natds-web'
import { ReactComponent as Logo } from '/Users/fernandodomingues/Downloads/sre-projetos.naturaeco.com/my-app/src/assets/images/naturaandco.svg'
import React, { Suspense, useEffect } from 'react'
import { Provider as ThemeProvider } from '@naturacosmeticos/natds-web'
import { useDispatch, useSelector } from 'react-redux'
import Routes from './routes'
import { swapTheme } from './features/themes/swapperSlice'
import Cookies from 'universal-cookie'
import './loader.css'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    padding: '15px',
    backgroundImage: `url(/Users/fernandodomingues/Downloads/sre-projetos.naturaeco.com/my-app/src/assets/images/splash/4.jpg)`
  },
  image: {
    //backgroundImage: (props) => props.backgroundImage,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    borderRadius: 12,
    maxWidth: 600
  },
  paperDown: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(2)
  },
  logo: {
    fill: 'black',
    margin: theme.spacing(2),
    width: 200
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(2, 0, 2)
  },
  login: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  dock: {
    display: 'flex',
    height: '15%',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  }
}))

function App() {
  const props = false;
  const number = React.useMemo(() => Math.floor(Math.random() * 20), [])
  const image = require('/Users/fernandodomingues/Downloads/sre-projetos.naturaeco.com/my-app/src/assets/images/splash/' + number + '.jpg').default
  const classes = useStyles({
    background: 'blue'
  })

  React.useEffect(() => {
    sessionStorage.clear()
  }, [])

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />

      <Grid item xs={12} sm={12} md={12} className={classes.image}>
        <div className={classes.login} >
          <Card className={classes.paper}>
            <Logo className={classes.logo} />

            <form className={classes.form} onSubmit={props.handleSubmit}>
              {props.authenticated === false && props.errorAPI !== true ? (
                <Typography variant='h6' align='center' color='error'>
                  Credenciais inválidas
                </Typography>
              ) : null}

              {props.errorAPI === true ? (
                <Typography variant='h6' align='center' color='primary'>
                  Erro do servidor
                </Typography>
              ) : null}

                <Typography variant='body1' color='text' align='center'>
                  <b>CCoE - Projetos Internos</b>
                </Typography>

                <Typography variant='body1' color='textSecondary'>
                  <b><br/>Processo de abertura de solicitação de análise da adoção/consumo de ferramentas e estruturas Cloud</b>
                </Typography>

              <FormControl fullWidth margin='normal'>
              <Typography variant='body1' color='textSecondary'>
                  <b><br/>Nome do Solicitante</b>
              </Typography>
                <TextField
                  id='codCN'
                  required
                  label=''
                  name='codCN'
                  autoFocus
                  variant='standard'
                  size='medium'
                  autoComplete='username'
                  value={props.codCN}
                  onChange={(e) => props.setCodCN(e.target.value)}
                />
              </FormControl>

              <FormControl fullWidth margin='normal'>
              <Typography variant='body1' color='textSecondary'>
                  <b>Equipe do Solicitante</b>
              </Typography>
                <TextField
                  id='codCN'
                  required
                  label=''
                  name='codCN'
                  autoFocus
                  variant='standard'
                  size='medium'
                  autoComplete='username'
                  value={props.codCN}
                  onChange={(e) => props.setCodCN(e.target.value)}
                />
              </FormControl>

              <FormControl fullWidth margin='normal'>
              <Typography variant='body1' color='textSecondary'>
                  <b>E-mail corporativo</b>
              </Typography>
                <TextField
                  id='codCN'
                  required
                  label=''
                  name='codCN'
                  autoFocus
                  variant='standard'
                  size='medium'
                  autoComplete='username'
                  value={props.codCN}
                  onChange={(e) => props.setCodCN(e.target.value)}
                />
              </FormControl>

              <FormControl fullWidth margin='normal'>
              <Typography variant='body1' color='textSecondary'>
                  <b>Telefone para contato</b>
              </Typography>
                <TextField
                  id='codCN'
                  required
                  label=''
                  name='codCN'
                  autoFocus
                  variant='standard'
                  size='medium'
                  autoComplete='username'
                  value={props.codCN}
                  onChange={(e) => props.setCodCN(e.target.value)}
                />
              </FormControl>

              <FormControl fullWidth margin='normal'>
              <Typography variant='body1' color='textSecondary'>
                  <b>Nome do Gestor</b>
              </Typography>
                <TextField
                  id='codCN'
                  required
                  label=''
                  name='codCN'
                  autoFocus
                  variant='standard'
                  size='medium'
                  autoComplete='username'
                  value={props.codCN}
                  onChange={(e) => props.setCodCN(e.target.value)}
                />
              </FormControl>

              <FormControl fullWidth margin='normal'>
              <Typography variant='body1' color='textSecondary'>
                  <b>Email do Gestor</b>
              </Typography>
                <TextField
                  id='codCN'
                  required
                  label=''
                  name='codCN'
                  autoFocus
                  variant='standard'
                  size='medium'
                  autoComplete='username'
                  value={props.codCN}
                  onChange={(e) => props.setCodCN(e.target.value)}
                />
              </FormControl>

              <FormControl fullWidth margin='normal'>
              <Typography variant='body1' color='textSecondary'>
                  <b>Telefone do Gestor</b>
              </Typography>
                <TextField
                  id='codCN'
                  required
                  label=''
                  name='codCN'
                  autoFocus
                  variant='standard'
                  size='medium'
                  autoComplete='username'
                  value={props.codCN}
                  onChange={(e) => props.setCodCN(e.target.value)}
                />
              </FormControl>

              <FormControl fullWidth margin='normal'>
              <Typography variant='body1' color='textSecondary'>
                  <b>Nome do Arquiteto Soluções</b>
              </Typography>
                <TextField
                  id='codCN'
                  required
                  label=''
                  name='codCN'
                  autoFocus
                  variant='standard'
                  size='medium'
                  autoComplete='username'
                  value={props.codCN}
                  onChange={(e) => props.setCodCN(e.target.value)}
                />

              </FormControl>

              

              <Button
                type='submit'
                fullWidth
                variant='contained'
                color={(props.isLoading) ? 'default' : 'primary'}
                className={classes.submit}
                disabled={props.isLoading}
              >
                {props.isLoading ? (
                  <CircularProgress color='primary' size={20} />
                ) : (
                  'Enviar Demanda'
                )}
              </Button>

              <Grid container>
                <Grid xs={6} item align='right'>
                </Grid>
                <Grid xs={6} item>
                </Grid>
              </Grid>

              <div className={classes.paperDown}>
                <Typography variant='body1' color='textSecondary'>
                  <b>CCoE - Projetos Internos</b>
                </Typography>

                <Typography variant='body2' color='textSecondary'>
                  Natura &Co © {` ${new Date().getFullYear()}.`}
                </Typography>
              </div>
            </form>
          </Card>
        </div>

        <div className={classes.dock}>
        </div>
      </Grid>
    </Grid>
  );
}

export default App;
