import style from './ModalPopup.module.scss';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import * as React from 'react';
import { useEffect } from 'react';
import { ReactComponent as CrossMark } from '../../assets/icons/cross.svg';
import { ReactComponent as LogoWithName } from '../../assets/logo-with-name.svg';

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

  let buttonActionText = <></>;
  if (props.buttonAction === 'accepted') {
    buttonActionText = 'approve';
  } else if (props.buttonAction === 'rejected') {
    buttonActionText = 'decline';
  }

  return (
    <div className={style.dialogBox}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className={style.popup}>
          <div className={style.crossMark} onClick={() => handleClose(false)}>
            <CrossMark />
          </div>
          <div className={style.logoMic}>
            <p>
              {' '}
              <LogoWithName />
            </p>
          </div>
          <DialogContent className={style.dialogContent}>
            <DialogContentText
              className={style.confirmationText}
              id="alert-dialog-description"
            >
              Are you sure to {buttonActionText}?
            </DialogContentText>
          </DialogContent>
          <DialogActions className={style.dialogActions}>
            <Button
              className={style.okButton}
              onClick={() => handleClose(true)}
            >
              Ok
            </Button>
            <Button
              className={style.cancelButton}
              onClick={() => handleClose(false)}
              autoFocus
            >
              Cancel
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
