import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../features/categorySlice";



import { getHomeData } from "../features/homeSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { kategoriler ,loading} = useSelector((state) => state.categorySlice);
  const {products}=useSelector((state)=>state.homeSlice);
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getHomeData());
  }, [dispatch]);
 console.log(products);
  return (
    <>
 
   <Container sx={{textAlign:"center"}}>
  {["all",...kategoriler].map((a,index)=>(
   
 <Button color="secondary" sx={{marginTop:"10px",marginLeft:"20px",border:"2px solid ",borderRadius:"10px"}} key={index}>{a}</Button>

  )

  )}
   </Container>
 

      <Box
        xs={{ d: "flex" }}
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
        {products.map((b, index) => (
          <Card sx={{ maxWidth: 345, maxHeight: 600, m: 5}}>
            <CardMedia sx={{backgroundSize: "cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",width:"200px",margin:"auto"}} component="img" image={b.image} height="250" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {b.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {b.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button  size="small">CLEAR</Button>

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
