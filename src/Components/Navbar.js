import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
// import { Link } from 'react-router-dom'; // If you're using React Router

const BewakoofNavbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {/* <Link to="/" style={{ textDecoration: 'none', color: 'white' }}> */}
            Bewakoof
          {/* </Link> */}
        </Typography>
        <Button color="inherit">
          {/* <Link to="/men" style={{ textDecoration: 'none', color: 'white' }}> */}
            Men
          {/* </Link> */}
        </Button>
        <Button color="inherit">
          {/* <Link to="/women" style={{ textDecoration: 'none', color: 'white' }}> */}
            Women
          {/* </Link> */}
        </Button>
        <Button color="inherit">
          {/* <Link to="/kids" style={{ textDecoration: 'none', color: 'white' }}> */}
            Kids
          {/* </Link> */}
        </Button>
        <IconButton color="inherit">
          <Badge badgeContent={3} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default BewakoofNavbar;
