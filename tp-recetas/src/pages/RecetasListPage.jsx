import { useRecetas } from '../contexts/RecetasContext';
import RecetasList from '../components/recetas/RecetasList';

export default function RecetasListPage() {
  const { recetas, isLoading } = useRecetas();

  if (isLoading) {
    return (
      <div style={{ padding: '32px', textAlign: 'center' }}>
        Cargando recetas...
      </div>
    );
  }

  return <RecetasList recetas={recetas} />;
}