import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../features/categorySlice";
import * as React from "react";

import ButtonGroup from "@mui/material/ButtonGroup";

const Home = () => {
  const dispatch = useDispatch();
  const { kategoriler } = useSelector((state) => state.categorySlice);
  const {products}=useSelector((state)=>state.homeSlice);
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <>
    
 <ButtonGroup variant="contained" aria-label="Basic button group">
 {kategoriler.map((b,i)=>(
 <Button>{category}</Button>


))}

</ButtonGroup>
     
      <Box
        xs={{ d: "flex" }}
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
        {products.map((a, index) => (
          <Card sx={{ maxWidth: 345, maxHeight: 600, m: 5 }}>
            <CardMedia component="img" image={""} height="250" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">CLEAR</Button>

              <Button size="small" href="" target="_blank">
                DETAIL
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default Home;
