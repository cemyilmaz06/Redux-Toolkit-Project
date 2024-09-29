import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, setCategory } from "../features/categorySlice"; // setCategory import edildi
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { getHomeData } from "../features/homeSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { items, loading, currentCategory } = useSelector((state) => state.categorySlice);
  const { products } = useSelector((state) => state.homeSlice);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getHomeData());
  }, [dispatch]);

  // Kategorilere göre ürünleri filtreliyoruz
  const filteredProducts = currentCategory === 'all'
    ? products
    : products.filter((product) => product.category === currentCategory);

  return (
    <>
      {/* Kategori Butonları */}
      <Container sx={{ textAlign: "center" }}>
        {["all", ...items].map((a, index) => (
          <Button
            color="secondary"
            sx={{
              marginTop: "10px",
              marginLeft: "20px",
              border: "2px solid",
              borderRadius: "10px",
            }}
            key={index}
            onClick={() => dispatch(setCategory(a))} // Kategori set ediliyor
          >
            {a}
          </Button>
        ))}
      </Container>

      {/* Ürün Kartları */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
        {filteredProducts.map((b, index) => (
          <Card sx={{ maxWidth: 345, maxHeight: 600, m: 5 }} key={index}>
            <CardMedia
           
              component="img"
              image={b.image}
              sx={{
                width: "100%",        
                height: "250px",        
                objectFit: "contain",   // Görselin en-boy oranını korur ve taşma yapmaz
                 margin: "auto",  }}
           
            />
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "1.5rem",
              }}
            >
              <Typography height="15vh" gutterBottom variant="h5" component="div">
                {b.title}
              </Typography>
              <Typography fontWeight="bold" fontSize="1.5rem" variant="body2" color="text.secondary">
                {b.price}$
              </Typography>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography gutterBottom variant="h5" component="div" marginLeft="6px" sx={{fontSize:"1rem"}}>
                {b.category}
              </Typography>

              <IconButton color="secondary" aria-label="add to shopping cart" >
                <AddShoppingCartIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default Home;
