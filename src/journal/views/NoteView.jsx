import { SaveAlt, SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';

export const NoteView = () => {
    return (
        <>

            <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>

                <Grid item >
                    <Typography fontSize={39} fontWeight='light' >15 de Mayo, 2023</Typography>
                </Grid>

                <Grid item >
                    <Button color='primary' variant='contained' sx={{ p: 1, mb: 2 }} >
                        <Typography>Guardar</Typography>
                        <SaveOutlined sx={{ fontSize: 20, ml: 1 }} />
                    </Button>
                </Grid>

                <Grid container >

                    <TextField type='text' variant='filled' fullWidth placeholder='Ingrese un titulo' label='Título' sx={{ border: 'none', mb: 1 }} />
                    <TextField type='text' variant='filled' fullWidth multiline placeholder='¿Qué sucedió hoy?' minRows={5} />

                </Grid>

                <ImageGallery />

            </Grid>

        </>
    )
}
