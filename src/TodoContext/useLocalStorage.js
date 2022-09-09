import React from "react";



function useLocalStorage(itemName, initialValue) { // Hook de localstorage
    const [error, setError] = React.useState(false);
  
    const [loading, setLoading] = React.useState(true);
  
    // Guardamos nuestros TODOs del localStorage en nuestro estado  React.useState(parsedItem)
    const [item, setItem] = React.useState(initialValue)  // Estado inicial de nuestros TODOs
  
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          // Traemos nuestros TODOs almacenados
          const localStorageItem = localStorage.getItem('itemName');
          let parsedItem;
  
          /*Si el usuario es nuevo no existe un item en localStorage,
            por lo tanto guardamos uno con un array vacío*/
          if (!localStorageItem) {
            localStorage.setItem('itemName', JSON.stringify(initialValue)); // guardar datos setItem(name, dato)
            parsedItem = initialValue;
  
          } else {
            // Si existen TODOs en el localStorage los regresamos como nuestros todos
            parsedItem = JSON.parse(localStorageItem)
          }
          setItem(parsedItem);
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      }, 1000)
    });
  
    // Creamos la función (arrow funtion) en la que actualizaremos nuestro localStorage
    const saveItem = (newItem) => {
      try {
        // Convertimos a string nuestros TODOs en una variable
        const stringifiedItem = JSON.stringify(newItem);
        // Los guardamos en el localStorage
        localStorage.setItem('itemName', stringifiedItem);
        // Actualizamos nuestro estado
        setItem(newItem);
      } catch (error) {
        setError(error);
  
      }
    };
    return {
      item,
      saveItem,
      loading,
      error,
    };
  }
  

  export {useLocalStorage}