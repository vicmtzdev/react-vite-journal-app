import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';

import { AuthLayout } from '../layout/AuthLayout';

import { useForm } from '../../hooks';

import { checkingAuthentication, startGoogleSingIn } from '../../store/auth';


export const LoginPage = () => {

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: 'vicmtz@gmail.com',
    password: '123456',
  });

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(checkingAuthentication());
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSingIn());
  }


  return (
    <>
    
      {/* Container general */}
      <AuthLayout title="Login" >

        <form onSubmit={onSubmit} >
            {/* Container inputs */}
            <Grid container>

              <Grid item xs={12} sx={{mt: 2}}>
              <TextField label="Correo" type="email" placeholder="your-email@gmail.com" fullWidth name='email' onChange={onInputChange} value={email} />
              </Grid>

              <Grid item xs={12} sx={{mt: 2}}>
              <TextField label="Contraseña" type="password" placeholder="Password" fullWidth name='password' onChange={onInputChange} value={password} />
              </Grid>

              {/* Container buttons */}
              <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>

                <Grid item xs={12} sm={6}>
                <Button type='submit' variant="contained" fullWidth> 
                    Login
                  </Button>
                </Grid>

                <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth onClick={onGoogleSignIn} > 
                    <Google />
                    {/* <Typography sx={{ml: 1}} >Google</Typography> */}
                  </Button>
                </Grid>

              </Grid>

              {/* Container */}
              <Grid container direction='row' justifyContent='end' >
                <Link component={RouterLink} color='inherit' to="/auth/register">
                  Crear una cuenta
                </Link>
              </Grid>
            
            </Grid>
          </form>

      </AuthLayout>

    </>
  )
}
