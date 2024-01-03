// Material UI
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";


export const BlogCard = ({ title = '' }) => {
  return (
    <Box sx={{ width: '100%'}} display='flex' alignItems='center' justifyContent='center'>
      <Card sx={{ maxWidth: 500}}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://res.cloudinary.com/newflare/image/upload/v1700844442/demos/muputun/hlaebbbdp18aq4qair55.jpg"
          title={ title }
        />
        <CardContent sx={{ bgcolor: 'transparent' }}>
          <Typography gutterBottom variant="h5" component="div" color='primary' pb={1}>
            Test Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions sx={{ padding: 2 }}>
          <Button size='medium' sx={{ color: 'white' }}>Leer más</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
