
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";



const News = () => {

 

  return (
    <>
    
        <Box
          xs={{ d: "flex" }}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          {[].map((a, index) => (
            <Card sx={{ maxWidth: 345, maxHeight: 600, m: 5 }} >
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
                <Button size="small"
              
                >CLEAR</Button>
                
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

export default News;
