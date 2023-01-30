import * as React from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
Typography } from '@mui/material';

export default function PopupFile() {
    const [open, setOpen] = React.useState(false);
    const [image, setImage] = React.useState(null);

    // Get window to open
    const handleClickOpen = (event) => {
        setOpen(true);
        
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box
          onClick={handleClickOpen}
          sx={{
              overflow: 'auto',
          }}
        >
            <Dialog
                sx={{position: 'fixed'}}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Onnistui"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Kiitos.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={handleClose} id="peruuta">SULJE</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}