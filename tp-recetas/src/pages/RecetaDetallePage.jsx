import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';
import { useRecetas } from '../contexts/RecetasContext';
import RecetaDetalle from '../components/recetas/RecetaDetalle';

export default function RecetaDetallePage() {
  const { id } = useParams();
  const { recetas, getRecetaById, isLoading } = useRecetas();
  const navigate = useNavigate();

  const receta = getRecetaById(id);

  // Redirigir si no hay recetas aún (en caso de loading inicial)
  useEffect(() => {
    if (!isLoading && recetas.length > 0 && !receta) {
      // Receta no encontrada
    }
  }, [isLoading, receta, recetas]);

  const handleVolver = () => {
    navigate('/recetas');
  };

  if (isLoading) {
    return (
      <Container sx={{ py: 6, textAlign: 'center' }}>
        <Typography variant="h6">Cargando receta...</Typography>
      </Container>
    );
  }

  if (!receta) {
    return (
      <Container sx={{ py: 6, textAlign: 'center' }}>
        <Typography variant="h5" color="error" gutterBottom>
          🚫 Receta no encontrada
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Lo sentimos, no existe una receta con ese ID.
        </Typography>
        <Button variant="outlined" onClick={handleVolver}>
          Volver al Listado
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <Button 
          variant="outlined" 
          onClick={handleVolver} 
          sx={{ 
            textTransform: 'none',
            borderRadius: 2,
            px: 3,
          }}>
          ← Volver al Listado
        </Button>
      </Box>
      <RecetaDetalle receta={receta} />
    </Container>
  );
}