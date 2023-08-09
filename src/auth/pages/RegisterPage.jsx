import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography, Alert } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startCreatingUserWithEmailPassword } from '../../store/auth';


const formData = {
  displayName: '',
  email: '',
  password: '',
}

const formValidations = {
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
  email: [(value) => value.includes('@'), 'Incluye un signo @ en la dirección de correo electrónico'],
  password: [(value) => value.length >= 6, 'Incluye una constraseña con mas de 6 caracteres'],
}


export const RegisterPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth);
  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const { formState, displayName, email, password, onInputChange, isFormValid, displayNameValid, emailValid, passwordValid, } = useForm(formData, formValidations);

  const onSubmit = (event) => {

    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState))

  }

  return (
    <>

      {/* Container general */}
      <AuthLayout title="Crear cuenta" >

        <form onSubmit={onSubmit}>
          {/* Container inputs */}
          <Grid container>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Nombre completo"
                type="text" placeholder="Name"
                fullWidth
                name='displayName'
                value={displayName}
                onChange={onInputChange}
                error={!!displayNameValid && formSubmitted}
                helperText={formSubmitted ? displayNameValid : ''}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="your-email@gmail.com"
                fullWidth
                name='email'
                value={email}
                onChange={onInputChange}
                error={!!emailValid && formSubmitted}
                helperText={formSubmitted ? emailValid : ''}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="Password"
                fullWidth
                name='password'
                value={password}
                onChange={onInputChange}
                error={!!passwordValid && formSubmitted}
                helperText={formSubmitted ? passwordValid : ''}
              />
            </Grid>

            {/* Container buttons */}
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

              <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
                <Alert severity='error' >
                  {errorMessage}
                </Alert>
              </Grid>

              <Grid item xs={12}>
                <Button disabled={isAuthenticating} type='submit' variant="contained" fullWidth >
                  Crear cuenta
                </Button>
              </Grid>

            </Grid>

            {/* Container */}
            <Grid container direction='row' justifyContent='end' >
              <Typography sx={{ mr: 1 }} >¿Ya tienes cuenta?</Typography>
              <Link component={RouterLink} color='inherit' to="/auth/login">
                Ingresar
              </Link>
            </Grid>

          </Grid>
        </form>

      </AuthLayout>

    </>
  )
}
