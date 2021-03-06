import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias'

function App() {
  //Definir Categoria
  const [categoria, guardarCategoria] =useState('');
  const [noticias, guardarNoticias] = useState([]); 
  //UseEffect
  useEffect(()=>{
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=b114b26a07794fcd8aa68574b8b6efe5`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  },[categoria])
  return (
   <Fragment>
     <Header
     titulo="Buscador de Noticias"
     />
     <div className="container white">
       <Formulario
       guardarCategoria={guardarCategoria}
       />
       <ListadoNoticias
       noticias={noticias}
       />
     </div>
   </Fragment>
  );
}

export default App;
