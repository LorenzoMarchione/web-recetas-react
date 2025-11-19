import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        mb: 3,
        boxShadow: 'none', 
        bgcolor: 'background.blue', 
        borderBottom: '1px solid', 
        borderColor: 'divider', 
        }}>
      <Toolbar
        sx={{
          justifyContent: 'space-around',
          width: '100%',
          px: { xs: 2, md: 3 },
        }}
      >
        <Typography
          variant="h6"
          component={Link}
          to="/recetas"
          sx={{
            color: 'inherit',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          🍳 Recetas de Cocina
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/recetas"
          sx={{
            color: 'text.primary',
            fontWeight: 'medium',
            px: 2,
            py: 1,
            borderRadius: 1,
            // Hover: azul oscuro
            '&:hover': {
              backgroundColor: '#0d47a1', // Azul oscuro (Material Deep Blue 900)
              color: '#ffffff',
            },
          }}>
          Recetas
        </Button>
      </Toolbar>
    </AppBar>
  );
}