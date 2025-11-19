import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Chip,
  Stack,
  Button,
} from '@mui/material';
import { AccessTime, People } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function RecetaCard({ receta }) {
  const navigate = useNavigate();

  const handleVerReceta = () => {
    navigate(`/recetas/${receta.id}`);
  };

  // Determinar color del chip de dificultad
  const getDificultadColor = (dificultad) => {
    switch (dificultad) {
      case 'Fácil':
        return 'success';
      case 'Media':
        return 'warning';
      case 'Difícil':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4,
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={receta.imagen}
        alt={receta.titulo}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" gutterBottom>
          {receta.titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {receta.descripcion}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 1, flexWrap: 'wrap' }}>
          <Chip
            icon={<AccessTime />}
            label={receta.tiempoPreparacion}
            size="small"
            variant="outlined"
          />
          <Chip
            label={receta.dificultad}
            size="small"
            color={getDificultadColor(receta.dificultad)}
          />
        </Stack>
        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
          <Chip
            icon={<People />}
            label={`${receta.porciones} porciones`}
            size="small"
            variant="outlined"
          />
        </Stack>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleVerReceta}
        >
          Ver Receta
        </Button>
      </CardActions>
    </Card>
  );
}