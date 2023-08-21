import * as React from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import bjIcon from './images/favicon-32x32.png';
// import { Paper } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    // Name of the component
    MuiCard: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // padding: 10,
          margin: 5,
          maxWidth: 900,
        },
      },
    },
  },
});

const SimpleAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Avatar alt="Hire Ben Johnson" src={bjIcon} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hire Ben Johnson
          </Typography>
          <IconButton 
            component="a" 
            href="https://www.linkedin.com/in/ben-johnson-18984510"
            target="_blank"
            rel="noopener noreferrer">
            <LinkedInIcon />
          </IconButton>
          <IconButton 
            component="a" 
            href="https://github.com/ben-h-johnson/project-share"
            target="_blank"
            rel="noopener noreferrer">
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <SimpleAppBar />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
