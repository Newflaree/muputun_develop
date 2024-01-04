// Next.js
import NextLink from 'next/link';
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
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      sx={{ width: '100%'}}
    >
      <Card sx={{ maxWidth: 500}}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://res.cloudinary.com/newflare/image/upload/v1700844442/demos/muputun/hlaebbbdp18aq4qair55.jpg"
          title={ title }
        />
        <CardContent sx={{ bgcolor: 'transparent' }}>
          <Typography gutterBottom variant="h5" component="div" color='primary' pb={1}>
            Canales GNSS: ¿Qué y por qué son tan relevantes?
          </Typography>
          <Typography variant="body2" color="text.secondary">
            En general, los satélites de geoposicionamiento GNSS emiten señales que constan de tres partes. Una señal portadora, uno o más códigos de ruido pseudoaleatorios (PRN) y un mensaje de navegación.
          </Typography>
        </CardContent>
        <CardActions sx={{ padding: 2 }}>
          <NextLink
            href='blogs/canales-gnss'
            passHref
            legacyBehavior
          >
          <Button
            size='medium'
            sx={{
              color: 'white',
              fontSize: 18,
              ':hover': {
                backgroundColor: 'primary.dark'
              }
            }}
          >
              Leer más
          </Button>
          </NextLink>
        </CardActions>
      </Card>
    </Box>
  );
}
