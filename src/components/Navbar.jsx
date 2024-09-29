import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography, Badge } from "@mui/material";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux"; // Redux'tan sepet verilerini almak için
import logo from "../assets/Clarusway_Logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  // Redux'tan sepetteki ürünleri alıyoruz
  const basketItems = useSelector((state) => state.basketSlice.basketItems);

  // Sepetteki toplam ürün miktarını hesaplıyoruz
  const totalItems = basketItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Link to="/">
            <img src={logo} alt="Clarusway Logo" width="50px" />
          </Link>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
          >
            <Link style={{ color: "white", textDecoration: "none" }} to="/">
              Clarusway
            </Link>
          </Typography>

          {/* Sepete eklenen ürün sayısını ikon üzerinde gösteriyoruz */}
          <Button color="inherit" onClick={() => navigate("/basket")}>
            <Badge badgeContent={totalItems} color="error">
              <LocalGroceryStoreIcon />
            </Badge>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
