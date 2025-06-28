import React, { useState } from 'react';
import { Button, Grid, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import "./Navbar.css";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Projects', path: '/projects' },
  ];

  const drawer = (
    <div onClick={handleDrawerToggle} style={{ textAlign: 'center', padding: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>Arnab Das</h2>
      <span style={{ display: 'block', marginBottom: '20px' }}>Full Stack Developer | Creative Expert | MERN Stack</span>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} component="a" href={item.path}>
            <ListItemText 
              primary={item.text} 
              style={{ textAlign: 'center' }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <Grid container size={12} spacing={4} className="header">
        <Grid item size={8}>
          <div className="name">
            <h2>Arnab Das</h2>
            <span>Full Stack Developer | Creative Expert | MERN Stack</span>
          </div>
        </Grid>

        {isMobile ? (
          <Grid item size={4} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              style={{ color: '#FFFFFF' }}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
        ) : (
          <Grid container spacing={4}>
            <Button variant="text" sx={{ color: "#FFFFFF" }} href="/">
              Home
            </Button>

            <Button variant="text" sx={{ color: "#FFFFFF" }} href="/about">
              About
            </Button>

            <Button variant="text" sx={{ color: "#FFFFFF" }} href="/projects">
              Projects
            </Button>
          </Grid>
        )}
      </Grid>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        style={{
          display: isMobile ? 'block' : 'none',
        }}
        PaperProps={{
          style: {
            width: 240,
            backgroundColor: '#2c3e50',
            color: '#FFFFFF',
          }
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;