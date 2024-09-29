import React from 'react'
import { AppBar, Box, Button,  Toolbar, Typography } from "@mui/material";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/Clarusway_Logo.png"

const Navbar = () => {
const navigate=useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Link to="/"><img src={logo} alt="" width="70px"/></Link>
       
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
          ><Link style={{color:"white",textDecoration:"none"}} to="/"> Clarusway </Link>
           
          </Typography>

    
           
            <Button color="inherit" onClick={()=>navigate("/basket")} ><LocalGroceryStoreIcon/></Button>
       
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar