import { createContext, useContext, useEffect, useState } from 'react';
import recetasData from '../data/recetas.json'; // Importamos el JSON directamente

const RecetasContext = createContext(null);

export const RecetasProvider = ({ children }) => {
  const [recetas, setRecetas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cargarRecetas = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 300));
        setRecetas(recetasData);
      } catch (error) {
        console.error('Error al cargar las recetas:', error);
      } finally {
        setIsLoading(false);
      }
    };

    cargarRecetas();
  }, []);

  const getRecetaById = (id) => {
    const idNum = parseInt(id, 10);
    return recetas.find((receta) => receta.id === idNum);
  };

  return (
    <RecetasContext.Provider
      value={{
        recetas,
        isLoading,
        getRecetaById,
      }}
    >
      {children}
    </RecetasContext.Provider>
  );
};

export const useRecetas = () => {
  const context = useContext(RecetasContext);
  if (!context) {
    throw new Error('useRecetas debe usarse dentro de un RecetasProvider');
  }
  return context;
};