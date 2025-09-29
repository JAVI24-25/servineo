import React from 'react';

export const Marko = () => {
    return (
        <div className="child-container">
            <h1>El Pequeño Juan</h1>
            <div className="child-description">
                <img 
                    src="/placeholder-child.jpg" 
                    alt="Imagen de un niño" 
                    style={{ maxWidth: '200px', borderRadius: '10px' }}
                />
                <p>
                    Juan es un niño de 8 años lleno de energía y curiosidad. 
                    Le encanta jugar en el parque y aprender cosas nuevas cada día.
                </p>
                <ul>
                    <li>Le gusta dibujar</li>
                    <li>Disfruta jugando con sus amigos</li>
                    <li>Su color favorito es el azul</li>
                </ul>
            </div>
        </div>
    );
};
