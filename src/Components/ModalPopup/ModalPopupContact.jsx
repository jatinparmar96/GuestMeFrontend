import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as CrossMark } from '../../assets/icons/cross.svg';
import { ReactComponent as LogoWithName } from '../../assets/logo-with-name.svg';
import style from './ModalPopupContact.module.scss';

const AlertDialogContact = (props) => {
  const [ open, setOpen ] = React.useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    props.setPopupOpen(false);
     navigate('/about')
  };

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);



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
              Oops! We are still Working on this feature.
              Please contact us through LinkedIn.
            </DialogContentText>
          </DialogContent>
          <DialogActions className={style.dialogActions}>
            <Button
              className={style.okButton}
              onClick={() => handleClose(true)}
            >
              Ok
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
};

export default AlertDialogContact;
