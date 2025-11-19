import { List, ListItem, ListItemText } from '@mui/material';

export default function IngredientesList({ ingredientes }) {
  if (!ingredientes || ingredientes.length === 0) {
    return <div>No hay ingredientes disponibles.</div>;
  }

  return (
    <List dense>
      {ingredientes.map((ing, index) => (
        <ListItem key={index} disableGutters>
          <ListItemText
            primary={`${ing.cantidad} ${ing.unidad} de ${ing.nombre}`}
            primaryTypographyProps={{ variant: 'body1' }}
          />
        </ListItem>
      ))}
    </List>
  );
}