// Next.js
import NextLink from 'next/link';
import { Box, Link, List, ListItem, Typography } from '@mui/material';
import {FiberManualRecord} from '@mui/icons-material';


export const BlogView = () => {
  return (
    <Box
      px={ 4 }
      my={ 14 }
    >
      <Typography
        variant='h1'
        component='h1'
        textAlign='center'
        pb={ 10 }
      >
        Canales GNSS: ¿Qué y por qué son tan relevantes?
      </Typography>

      <Typography
        variant='h2'
        component='h2'
      >
        Definición y Utilidad
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        En general, los satélites de geoposicionamiento GNSS emiten señales que constan de tres partes. Una señal portadora, uno o más códigos de ruido pseudoaleatorios (PRN) y un mensaje de navegación. Los dos últimos son modulados por la portadora mediante una técnica conocida como modulación de fase.
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        Los canales GNSS permiten que la antena de un receptor, detecte la señal proveniente de un satélite determinado y de una banda específica. La antena GNSS es capaz de recibirlos, clasificarlos y seguirlos de forma continua. Los sistemas receptores GNSS realizan todo el proceso de Adquisición, Seguimiento y Decodificación.

      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        El proceso de Adquisición determina qué satélites son visibles por el receptor y a qué constelación pertenece, es decir, detecta la presencia o ausencia de los satélites a la vista. Además, realiza una primera estimación de los retrasos de fase de código y portadora.
      </Typography>

      {/*List Item*/}
      <List>
        <ListItem>
          <FiberManualRecord sx={{ marginRight: 2 }} color='primary' />
          <Typography>
            Fase portadora: La diferencia entre la señal portadora generada por el oscilador interno de un receptor y la señal portadora proveniente del satélite.
          </Typography>
        </ListItem>
      </List>


      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        Esta estimación es posteriormente mejorada en el proceso de Seguimiento, dando lugar a la segunda etapa de la unidad de procesamiento de señales. Aquí se realiza la búsqueda local de estimaciones más precisas de los retrasos de fase de código y portadora, y sus variaciones.
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        Generalmente los enlaces de señales GNSS son modulados por un mensaje de navegación, y este contiene el momento en que se transmitieron las efemérides transmitidas, información sobre el estado general del sistema, órbitas aproximadas de los satélites, corrección de errores, entre otros.
      </Typography>

      <Typography
        variant='h2'
        component='h2'
        marginTop={ 8 }
      >
        Receptores GNSS Multibanda y Multifrecuencia
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        Las bandas tienen que ver con los rangos de frecuencia que nos permiten sincronizarnos con las señales de las constelaciones. Cada satélite envía varias señales de radio a diferentes frecuencias y para que los códigos de alcance y mensaje de navegación viajen desde el satélite hasta el receptor deben estar modulados con una portadora que permita que las señales lleguen con suficiente potencia.
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        La distancia real entre el satélite y el receptor GNSS no es la misma a la distancia medida, generando un error en esa magnitud, al haber ondas de diferentes frecuencias, habrá diferentes caminos entre el satélite y el receptor, donde a través de una combinación lineal estos errores se corrigen rápidamente obteniendo distancias Satélite-Receptor más fiables.
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        Por tanto, utilizar varias señales de ondas de diferentes portadoras nos ayudaría a agilizar y mejorar el cálculo de la posición de un receptor, incluso en entornos de mala visibilidad del satélite. 
      </Typography>

      <Typography
        variant='h2'
        component='h2'
        marginTop={ 8 }
      >
        Precisión
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        Cuanto mayor sea el número de canales, más satélites se podrán rastrear simultáneamente, aumentando la redundancia de datos. En este proceso, la precisión no aumenta linealmente, sino que mejora hasta un cierto número de satélites, volviéndose luego casi constante.
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        Teniendo en cuenta por ejemplo 10 satélites, en cada una de las 4 constelaciones disponibles (GPS, GLONASS, GALILEO Y BEIDOU) y 4 frecuencias por cada constelación, tenemos aproximadamente 160 canales, que son suficientes para poder adquirir las frecuencias de todos los satélites de las diferentes constelaciones disponibles.
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        Cabe mencionar que el número de bandas de frecuencia no afecta directamente la precisión centimétrica, por lo tanto, un Receptor GNSS Monobanda podría obtener precisión similar a uno Multibanda, siempre y cuando se encuentren en condiciones ambientales ideales y no excedan distancias mayores a 15 km entre ambos receptores durante la comparación.
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        Los receptores multibanda capturan varias bandas de frecuencia de los satélites, logrando una solución fija o Fix en segundos y mantienen un rendimiento sólido incluso si la visibilidad del cielo está parcialmente bloqueada. Además, trabajan con líneas base más largas ya que permite corregir errores ionosféricos (Ejemplo: hasta 60 km en RTK y 100 km en PPK).
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        El Receptor <NextLink href='/productos/x5-receptor' passHref legacyBehavior><Link target='_blank'>GNSS Mettatec X5R</Link></NextLink> tiene lo mejor de ambos mundos, es multifrecuencia y multibanda con suficientes canales, permitiendo una gran precisión a bajo costo. Estas son algunas de sus características:

      </Typography>

      {/*List*/}
      <List>
        <ListItem>
          <FiberManualRecord sx={{ marginRight: 2 }} color='primary' />
          <Typography>
            Número de canales: 184 canales
          </Typography>
        </ListItem>

        <ListItem>
          <FiberManualRecord sx={{ marginRight: 2 }} color='primary' />
          <Typography>
            Receptor GNSS multibanda con precisión centimétrica
          </Typography>
        </ListItem>

        <ListItem>
          <FiberManualRecord sx={{ marginRight: 2 }} color='primary' />
          <Typography>
            Funciona en modo PPK, RTK y NTRIP
          </Typography>
        </ListItem>

        <ListItem>
          <FiberManualRecord sx={{ marginRight: 2 }} color='primary' />
          <Typography>
            GPS, GLONASS L1/L2, Galileo E1/E5b, BeiDou B1I/B2I, QZSS L1/L2C
          </Typography>
        </ListItem>

        <ListItem>
          <FiberManualRecord sx={{ marginRight: 2 }} color='primary' />
          <Typography>
            Compatible con software o aplicaciones como: <NextLink href='/productos/surpad-4.2-gnss-app' passHref legacyBehavior><Link target='_blank'>SURPAD 4.2</Link></NextLink>, SWMaps, Field Genius, Survey Master, SurvPC y cualquier software GIS que soporte NMEA vía Bluetooth
          </Typography>
        </ListItem>

        <ListItem>
          <FiberManualRecord sx={{ marginRight: 2 }} color='primary' />
          <Typography>
            Funciona en modo RTK con LoRa Radio hasta 10 km
          </Typography>
        </ListItem>
      </List>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
        fontSize={ 18 }
      >
        Contenido Facilitado por <NextLink href='https://mettatec.com/es/' passHref legacyBehavior><Link target='_blank'>Mettatec</Link></NextLink>.
      </Typography>


    </Box>
  );
}
