import React, { memo, useMemo } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

function Modal(props) {
  /* Global & Local States */
  const {
    open,
    onClose,
    onConfirm,
    typeSize,
    typeIsLoading,
    disableEscapeKeyDown,
    disableCancelButton,
    disableConfirmButton,
    disableBackdropClick,
    children,
    title,
    closeIcon = true,
    disabledConfirm,
    disabledCancel,
    confirmText,
    cancelText,
    forceFullScreen,
    sx,
  } = props;
  /* Views */
  const RenderSize = useMemo(() => {
    switch (typeSize) {
      case 'xs':
        return 'xs';
      case 'sm':
        return 'sm';
      case 'md':
        return 'md';
      case 'lg':
        return 'lg';
      case 'xl':
        return 'xl';
      default:
        return 'sm';
    }
  }, [typeSize]);
  const RenderCloseIcon = useMemo(() => {
    if (closeIcon) {
      return (
        <ButtonBase
          sx={{
            position: 'absolute',
            right: '24px',
            top: '24px',
            zIndex: 100,
          }}
          onClick={onClose}
        >
          <ClearIcon fontSize="small" />
        </ButtonBase>
      );
    }
    return <React.Fragment />;
  }, [open, closeIcon, onClose]);
  const RenderCustomTitle = useMemo(() => {
    if (title) {
      if (typeof title === 'string') {
        return (
          <Box sx={{ height: '40px' }}>
            <Typography variant="h5" color="textPrimary" sx={{ wordBreak: 'break-word', whiteSpace: 'pre-wrap' }}>
              {title}
            </Typography>
          </Box>
        );
      }
      return title;
    }
    return <React.Fragment />;
  }, [title]);
  const RenderIsLoading = useMemo(() => {
    if (typeIsLoading) {
      return (
        <LinearProgress
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 10000,
            width: '100%',
          }}
        />
      );
    }
    return <></>;
  }, [typeIsLoading]);
  const RenderCustomCancelButton = useMemo(() => {
    if (!disableCancelButton) {
      return (
        <Button sx={{ mr: 8 }} variant="text" color="inherit" onClick={onClose} disabled={disabledCancel}>
          {!cancelText ? 'cancel' : cancelText}
        </Button>
      );
    }
    return <React.Fragment />;
  }, [disableCancelButton, disabledCancel, cancelText, onClose]);
  const RenderCustomConfirmButton = useMemo(() => {
    if (!disableConfirmButton) {
      return (
        <Button color="primary" variant="contained" onClick={onConfirm} disabled={disabledConfirm}>
          {!confirmText ? 'confirm' : confirmText}
        </Button>
      );
    }

    return <React.Fragment />;
  }, [disableConfirmButton, disabledConfirm, confirmText, onConfirm]);
  /* Main */
  return (
    <Dialog
      open={open}
      onClose={(event, reason) => {
        if (reason !== 'backdropClick' && disableBackdropClick && onClose) {
          onClose();
        }
      }}
      fullScreen={forceFullScreen}
      fullWidth
      maxWidth={RenderSize}
      disableEnforceFocus
      disableEscapeKeyDown={disableEscapeKeyDown}
      sx={sx}
    >
      <Box sx={{ p: 6, position: 'relative' }}>
        {RenderCloseIcon}
        {RenderCustomTitle}
        <Box sx={{ mb: title ? 4 : 0, width: '100%' }}>{children}</Box>
        <Box
          sx={{
            pb: forceFullScreen ? 4 : 0,
            mt: disableCancelButton && disableConfirmButton ? 0 : 4,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          {RenderCustomCancelButton}
          {RenderCustomConfirmButton}
        </Box>
        {RenderIsLoading}
      </Box>
    </Dialog>
  );
}

export default memo(Modal);
