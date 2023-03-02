import React, { memo, useMemo } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';

function Loading(props) {
  /* Global & Local States */
  const { typePosition, typeBackground, typeIcon, isLoading, isHideText, text } = props;
  /* Views */
  const RenderPosition = useMemo(() => {
    switch (typePosition) {
      case 'relative':
        return { width: '100%', height: '100%', position: 'absolute', top: '0px', left: '0px', zIndex: 10 };
      case 'absolute':
        return { width: '100%', height: '100%', position: 'fixed', top: '0px', left: '0px', zIndex: 100003 };
      default:
        return { width: '100%', height: '100%', position: 'fixed', top: '0px', left: '0px', zIndex: 100003 };
    }
  }, [typePosition]);
  const RenderBackground = useMemo(() => {
    switch (typeBackground) {
      case 'white':
        return { background: 'rgb(255, 255, 255, 0.5)' };
      case 'black':
        return { background: 'rgba(0, 0, 0, 0.6)' };
      default:
        return '';
    }
  }, [typeBackground]);
  const RenderTextColor = useMemo(() => {
    switch (typeBackground) {
      case 'white':
        return { fontStyle: 'normal', fontWeight: 'bold', fontSize: '14px', lineHeight: '20px', color: '#510AAC' };
      case 'black':
        return { fontStyle: 'normal', fontWeight: 'bold', fontSize: '13px', color: 'white' };
      default:
        return { fontStyle: 'normal', fontWeight: 'bold', fontSize: '14px', lineHeight: '20px', color: '#510AAC' };
    }
  }, [typeBackground]);
  const RenderText = useMemo(() => {
    if (isHideText) {
      return <React.Fragment />;
    }
    return (
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          fontStyle: 'normal',
          textAlign: 'center',
          marginTop: '10px',
          ...RenderTextColor,
        }}
      >
        {text}
      </Box>
    );
  }, [isHideText, text, typeBackground]);
  const RenderAnimation = useMemo(() => {
    if (!typeIcon) {
      return (
        <Box
          sx={{
            height: '70px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress size={30} thickness={5} />
          {RenderText}
        </Box>
      );
    }
    switch (typeIcon) {
      case 'basic':
        return (
          <Box
            sx={{
              height: '70px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CircularProgress size={30} thickness={5} />
            {RenderText}
          </Box>
        );
      case 'text':
        return (
          <Box
            sx={{
              height: '70px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {RenderText}
          </Box>
        );
      case 'icon':
        return (
          <Box
            sx={{
              height: '70px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CircularProgress size={30} thickness={5} />
          </Box>
        );
      case 'line:fix':
        return (
          <LinearProgress
            sx={{
              width: '100%',
              position: 'fixed',
              top: 0,
              left: 0,
            }}
          />
        );
      case 'line:relative':
        return (
          <LinearProgress
            sx={{
              width: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
        );
      default:
        return <React.Fragment />;
    }
  }, [typeIcon, isHideText, text]);
  return (
    <React.Fragment>
      {isLoading && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            flexDirection: 'column',
            ...RenderPosition,
            ...RenderBackground,
          }}
        >
          {RenderAnimation}
        </Box>
      )}
    </React.Fragment>
  );
}

export default memo(Loading);
