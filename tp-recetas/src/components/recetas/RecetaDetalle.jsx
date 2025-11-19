import {
  Paper,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Chip,
  Stack,
} from '@mui/material';
import { AccessTime, Restaurant, People } from '@mui/icons-material';

export default function RecetaDetalle({ receta }) {
  return (
    <Paper 
      sx={{ 
        p: { xs: 2, md: 3 },
        borderRadius: 3,
        boxShadow: 2, // sombra suave
        maxWidth: '900px', // limita ancho en pantallas grandes
        mx: 'auto', // centra el Paper
        width: '100%',
      }}>
      {/* Imagen grande */}
      <img
        src={receta.imagen}
        alt={receta.titulo}
        style={{
          width: '100%',
          height: 'auto',
          maxHeight: '500px',
          objectFit: 'cover',
          borderRadius: 8,
          marginBottom: '24px',
        }}
      />

      {/* Título y descripción */}
      <Typography variant="h3" component="h1" gutterBottom>
        {receta.titulo}
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        {receta.descripcion}
      </Typography>

      {/* Información general: tiempo, dificultad, porciones */}
      <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap' }}>
        <Chip
          icon={<AccessTime />}
          label={receta.tiempoPreparacion}
          variant="filled"
          color="primary"
        />
        <Chip
          icon={<Restaurant />}
          label={receta.dificultad}
          color={
            receta.dificultad === 'Fácil'
              ? 'success'
              : receta.dificultad === 'Media'
              ? 'warning'
              : 'error'
          }
        />
        <Chip
          icon={<People />}
          label={`${receta.porciones} porciones`}
          variant="outlined"
        />
      </Stack>

      <Divider sx={{ my: 3 }} />

      {/* Ingredientes */}
      <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
        📝 Ingredientes
      </Typography>
      <List dense>
        {receta.ingredientes.map((ing, index) => (
          <ListItem key={index} disableGutters>
            <ListItemText
              primary={`${ing.cantidad} ${ing.unidad} de ${ing.nombre}`}
              primaryTypographyProps={{ variant: 'body1' }}
            />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 3 }} />

      {/* Preparación */}
      <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
        👨‍🍳 Preparación
      </Typography>
      <List dense>
        {receta.pasos.map((paso, index) => (
          <ListItem key={index} disableGutters>
            <ListItemText
              primary={`${index + 1}. ${paso}`}
              primaryTypographyProps={{ variant: 'body1' }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}