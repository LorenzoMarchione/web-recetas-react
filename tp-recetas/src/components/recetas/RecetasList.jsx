import { Grid, Container, Typography } from '@mui/material';
import RecetaCard from './RecetaCard';

export default function RecetasList({ recetas }) {
  if (!recetas || recetas.length === 0) {
    return (
      <Container sx={{ py: 4 }}>
        <Typography variant="h6" color="text.secondary" align="center">
          No hay recetas disponibles
        </Typography>
      </Container>
    );
  }

  return (
    <Container 
      sx=
        {{ 
          py: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
        🍽️ Nuestras Recetas
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {recetas.map((receta) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={receta.id}>
            <RecetaCard receta={receta} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}