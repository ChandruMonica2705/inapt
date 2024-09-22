import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Link,
  Box,
  Paper,
  IconButton,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function App() {
  return (
    <Paper 
      elevation={3} 
      style={{ 
        background: 'linear-gradient(109.6deg, rgb(6, 183, 249) 11.2%, rgb(25, 74, 236) 91.1%)', 
        color: '#fff' 
      }}
    >
      <Container>
        <Grid container spacing={2} padding={3} alignItems="center">
          {/* Logo aligned to the left */}
          <Grid item lg={6} md={12} style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Typography variant='h6' component='h5' gutterBottom>
              <div className="navbar__logo-container">
                <img 
                  src="/favicon1.ico" 
                  alt="Logo"  
                  className="navbar__logo-img"  
                  style={{ marginRight: "50px" }}  
                />
              </div>
            </Typography>
          </Grid>

          {/* Links aligned to the right */}
          <Grid item lg={6} md={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', gap: '30px' }}>
              {['Home', 'About Us', 'Services'].map((link) => (
                <li key={link}>
                  <Link 
                    href='#!' 
                    color='inherit' 
                    style={{ 
                      fontSize: '1.25rem',  
                      textDecoration: 'none'  
                    }}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Box textAlign="center" padding={2}>
          <Box marginBottom={2}>
            <IconButton style={{ backgroundColor: '#3b5998', margin: '0 4px' }} href='#!'>
              <FacebookIcon />
            </IconButton>
            <IconButton style={{ backgroundColor: '#55acee', margin: '0 4px' }} href='#!'>
              <TwitterIcon />
            </IconButton>
            <IconButton style={{ backgroundColor: '#dd4b39', margin: '0 4px' }} href='#!'>
              <GoogleIcon />
            </IconButton>
            <IconButton style={{ backgroundColor: '#ac2bac', margin: '0 4px' }} href='#!'>
              <InstagramIcon />
            </IconButton>
            <IconButton style={{ backgroundColor: '#0082ca', margin: '0 4px' }} href='#!'>
              <LinkedInIcon />
            </IconButton>
            <IconButton style={{ backgroundColor: '#333333', margin: '0 4px' }} href='#!'>
              <GitHubIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>

      <Box textAlign='center' padding={2} style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <Typography variant="body2">
          © 2020 Copyright: {' '}
          <Link href='https://mdbootstrap.com/' color='inherit' style={{ textDecoration: 'none' }}>
            MDBootstrap.com
          </Link>
        </Typography>
      </Box>
    </Paper>
  );
}
