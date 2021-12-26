import logo from './logo.svg';
import React from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

import Nav from './components/Navbar/Navbar';
import BottomMenu from './components/BottomMenu/BottomMenu';
import Hero from './components/Hero/Hero';
import Body from './components/Body/Body';
import Gallery from './components/Gallery/Gallery';
import ReviewCard from './components/Reviews/Reviews';



const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  

  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  return (
    <div className='body'>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav ColorModeContext={ColorModeContext}/>
        <Hero />
        
        <Body />
        <Gallery />
        <ReviewCard />
        
        
      
      <IconButton sx={{ position: 'fixed', ml: 1, bottom: '0', left: '0', padding: '10px' }} onClick={colorMode.toggleColorMode} color="inherit" className='dm'>
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
       <BottomMenu />
      </ThemeProvider>
    </ColorModeContext.Provider>
    </div>
  );
}

export default App;
