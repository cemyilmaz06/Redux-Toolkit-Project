import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromBasket,
  clearBasket,
} from "../features/basketSlice";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const BasketPage = () => {
  const { basketItems } = useSelector((state) => state.basketSlice);
  const dispatch = useDispatch();

  // Toplam fiyatı hesaplıyoruz
  const totalPrice = basketItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Box sx={{ p: 5, display: "flex" }}>
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          minHeight: "100%",
          gap: "1rem",
          textAlign:"center"
        }}
      >
        {basketItems.length === 0 ? (
          <Typography 
            sx={{fontSize: "1.5rem", color: "red" ,margin:"auto"}}
          >
            You have no items in your shopping cart,
            <Link to="/">start adding some!</Link>
          </Typography>
        ) : (
          basketItems.map((item) => (
            <Card key={item.id} sx={{ maxWidth: 345, margin: "auto" }}>
              <CardMedia
                component="img"
                image={item.image}
                sx={{
                  width: "100%",
                  height: "250px",
                  objectFit: "contain", // Görselin en-boy oranını korur ve taşma yapmaz
                  margin: "auto",
                }}
              />
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1.5rem",
                }}
              >
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {item.title}
                </Typography>
                <Typography
                  fontWeight="bold"
                  fontSize="1.5rem"
                  variant="body2"
                  color="text.secondary"
                >
                  {item.price}$
                </Typography>
              </CardContent>
              <Container sx={{ display: "flex" }}>
                <Button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </Button>
                <Typography sx={{ marginTop: "10px" }}>
                  {item.quantity}
                </Typography>
                <Button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </Button>
                <Button
                  sx={{
                    backgroundColor: "red",
                    color: "white",
                    marginLeft: "100px",
                    padding: "5px 40px",
                    marginBottom: "5px",
                  }}
                  color="error"
                  onClick={() => dispatch(removeFromBasket(item.id))}
                >
                  REMOVE
                </Button>
              </Container>
            </Card>
          ))
        )}
        {/* Subtotal ve Cart işlemleri */}

        {basketItems.length > 0 && (<Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          {/* Sepetteki toplam fiyatı gösteriyoruz */}
          <Typography fontWeight="bold" fontSize="1.5rem">
            Subtotal: {totalPrice.toFixed(2)}$
          </Typography>
          <Button
            sx={{
              backgroundColor: "red",
              color: "white",
              padding: "5px 20px",
            }}
            onClick={() => dispatch(clearBasket())
              // Sepeti boşaltma işlemi
            }
          >
            EMPTY CART
          </Button>
        </Container>)}
        
      </Container>
    </Box>
  );
};

export default BasketPage;
