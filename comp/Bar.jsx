import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputTask from './InputTask'

export default function Bar() {
  return (
      <AppBar position="absolute" sx={{bottom: 0, top: 'auto'}}>
        <Toolbar sx={{justifyContent: 'space-between'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <InputTask/>

        </Toolbar>
      </AppBar>
  );
}
