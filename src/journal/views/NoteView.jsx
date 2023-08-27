import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import { ImageGallery } from '../components';

import { AddPhotoAlternateOutlined, SaveOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { setActiveNote, startSaveNote, startUploadingFiles } from '../../store/journal';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {

    const dispatch = useDispatch();
    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);
    const { body, title, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {

        const newDate = new Date(date);
        return newDate.toUTCString();

    }, [date]);


    const fileInputRef = useRef();


    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState])

    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire('Nota actualizada', messageSaved, 'success');
        }
    }, [messageSaved])

    const onSaveNote = () => {
        dispatch(startSaveNote());
    }

    const onFileInputChange = ({ target }) => {
        if (target.files === 0) return;
        dispatch(startUploadingFiles(target.files));
    }

    return (
        <>

            <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }} className='animate__animated animate__fadeIn animate__faster' >

                <Grid item >
                    <Typography fontSize={39} fontWeight='light' >{dateString}</Typography>
                </Grid>


                <Grid item >
                    <input ref={fileInputRef} type='file' multiple onChange={onFileInputChange} style={{ display: 'none' }} />

                    <IconButton onClick={() => fileInputRef.current.click()} disabled={isSaving} color='primary' sx={{ mb: 2, mr: 1 }}>
                        <AddPhotoAlternateOutlined fontSize="large" />
                    </IconButton>

                    <Button onClick={onSaveNote} disabled={isSaving} color='primary' variant='contained' sx={{ p: 1, mb: 2 }} >
                        <Typography>Guardar</Typography>
                        <SaveOutlined sx={{ fontSize: 20, ml: 1 }} />
                    </Button>
                </Grid>

                <Grid container >

                    <TextField type='text' variant='filled' fullWidth placeholder='Ingrese un titulo' label='Título' sx={{ border: 'none', mb: 1 }} name='title' value={title} onChange={onInputChange} />
                    <TextField type='text' variant='filled' fullWidth multiline placeholder='¿Qué sucedió hoy?' minRows={5} name='body' value={body} onChange={onInputChange} />

                </Grid>

                <ImageGallery />

            </Grid>

        </>
    )
}
