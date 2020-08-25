import React from 'react';
import PropTypes from 'prop-types';

 
const Noticias = ({noticia}) => {

    //Extraer datos
    const {urlToImage, url, title, description, source} = noticia;
        
    const imagen = (urlToImage) ?
        
        <div className="card-image" alt={title}>
        <img src={urlToImage} alt={description}/>
        <span className="card-title">{source.name}</span>
        </div>
    : null;
    return ( 
        <div className="col s12 m6 l4">
            <div className="card">
            {imagen}

                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >Ver Noticia Completa</a>
                </div>
            </div>
        </div>

     );
}

Noticias.propTypes = {
    noticia: PropTypes.object.isRequired
}
export default Noticias;