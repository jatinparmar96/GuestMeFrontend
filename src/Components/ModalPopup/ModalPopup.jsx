import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';
import { useEffect } from 'react';

const AlertDialog = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = (action) => {
    if (action) props.bookingStatus(props.buttonAction, props.booking._id);
    setOpen(false);
  };

  useEffect(() => {
    // console.log(props.open);
    setOpen(props.open);
  }, [props.open]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Confirmation Popup'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure want to {props.buttonAction}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(true)}>Ok </Button>
          <Button onClick={() => handleClose(false)} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
