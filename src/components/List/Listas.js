import React, { Component } from 'react';

class Listas extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="row">
                <ol>

                <li className="li list-group-item"><a href="#" className="lista" id="0">Canción 1</a> </li>
                <div className='list' id="respuesta-0" ><iframe  className="song-0" width="500" height="281" src="https://www.youtube.com/embed/OtWWkW7nEI8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> </div>

                <li className="li list-group-item"><a href="#" className="lista" id="1">Canción 2</a> </li>
                    <div className='list' id="respuesta-1" ><iframe  className="song-3" width="500" height="281" src="https://www.youtube.com/embed/LBr7kECsjcQ?list=RDvz9QbgXDHVA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>

                <li className="li list-group-item"><a href="#" className="lista" id="2">Canción 3</a> </li>
                <div className='list' id="respuesta-2" ></div>

                <li className="li list-group-item"><a href="#"className="lista" id="3">Canción 4</a> </li>
                <div className='list' id="respuesta-3" ></div>

            </ol>
            </div>

        )
    }
}
export default Listas;