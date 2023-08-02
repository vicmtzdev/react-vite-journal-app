import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';

export const JournalPage = () => {
  return (
    <>

      <JournalLayout>

        {/* <Typography>Ipsum ipsum nisi amet eiusmod consectetur consectetur commodo. Amet exercitation et pariatur do nostrud. Quis minim fugiat anim tempor officia eiusmod proident excepteur esse commodo id aliqua. Do officia officia elit ea voluptate voluptate deserunt aute.</Typography> */}
        <NothingSelectedView />
        {/* <NoteView /> */}

        <IconButton
          size='large'
          sx={{
            color: 'white',
            backgroundColor: 'matchone.main',
            ':hover': { backgroundColor: 'matchtwo.main' },
            position: 'fixed',
            right: 50,
            bottom: 50
          }}
        >
          <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>

      </JournalLayout>


    </>
  )
}
