import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeFromBasket } from "../features/basketSlice";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const BasketPage = () => {
  const { basketItems } = useSelector((state) => state.basketSlice);
  const dispatch = useDispatch();
console.log(basketItems);
  return (
    <Box sx={{ p: 5 }}>
     
      {basketItems.length === 0 ? (
        <Typography sx={{textAlign:"center",fontSize:"1.5rem",color:"red"}}>You have no items in your shopping cart,<Link to="/">start adding some!</Link></Typography>
      ) : (
        basketItems.map((item) => (
          <Box key={item.id} sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
            <Typography variant="h6">{item.title}</Typography>
            <Typography>{item.price}$</Typography>
            <Typography>Miktar: {item.quantity}</Typography>
            <Button onClick={() => dispatch(incrementQuantity(item.id))}>+</Button>
            <Button onClick={() => dispatch(decrementQuantity(item.id))}>-</Button>
            <Button color="error" onClick={() => dispatch(removeFromBasket(item.id))}>
              Sepetten Çıkar
            </Button>
          </Box>
        ))
      )}
    </Box>
  );
};

export default BasketPage;
