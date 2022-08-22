import React from 'react'
import { withCookies } from 'react-cookie'
import { Button, Link, Card, Typography, CircularProgress, CssBaseline, Grid, TextField, FormControl } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { themes } from '@naturacosmeticos/natds-web'
import { ReactComponent as Logo } from '../assets/images/naturaandco.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: (props) => props.backgroundImage,
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
    maxWidth: 340
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

const FormLogin = (props) => {
  const { cookies } = props;
  const number = React.useMemo(() => Math.floor(Math.random() * 20), [])
  const image = require('../assets/images/splash/' + number + '.jpg').default
  const classes = useStyles({
    backgroundImage: `url(${image})`
  })

  React.useEffect(() => {
    cookies.remove('my-app/module')
    cookies.remove('my-app/platform')
    cookies.remove('my-app/platformTechnical')
    cookies.remove('my-app/platformAdmin')
    cookies.remove('my-app/personCode')
    cookies.remove('my-app/personName')
    cookies.remove('my-app/menu')
    cookies.remove('my-app/projectless')
    
    if (cookies.get('my-app/currentTheme') === undefined) {
      cookies.set('my-app/currentTheme', 'natura')
    }
    sessionStorage.clear()
  }, [])

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />

      <Grid item xs={12} sm={12} md={12} className={classes.image}>
        <div className={classes.login}>
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

              <FormControl fullWidth margin='normal'>
                <TextField
                  id='codCN'
                  required
                  label='Usuário de Rede'
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
                <TextField
                  id='password'
                  required
                  name='password'
                  label='Senha'
                  type='password'
                  variant='standard'
                  size='medium'
                  autoComplete='current-password'
                  value={props.password}
                  onChange={(e) => props.setPassword(e.target.value)}
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
                  'Acessar'
                )}
              </Button>

              <Grid container>
                <Grid xs={6} item>
                  <Link href='/faq' color='primary' variant='subtitle1'>FAQ</Link>
                </Grid>
                <Grid xs={6} item align='right'>
                  <Link href={process.env.REACT_APP_CONFLUENCE} color='primary' variant='subtitle1' target='_blank'>
                    Confluence
                  </Link>
                </Grid>
                <Grid xs={6} item>
                  <Link href='/onetimesecret' color='primary' variant='subtitle1'>One Time Secret</Link>
                </Grid>
              </Grid>

              <div className={classes.paperDown}>
                <Typography variant='body1' color='textSecondary'>
                  <b>CoE Devops</b>
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
  )
}

export default withCookies(FormLogin)
