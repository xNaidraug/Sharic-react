import React, { Component } from 'react';

class Listas extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <ul>

                <li className="li"><a href="#" className="lista" id="0">Canción 1</a> </li>
                <div id="respuesta-0" ><iframe width="500" height="281" src="https://www.youtube.com/embed/OtWWkW7nEI8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> </div>

                <li className="li"><a href="#" className="lista" id="1">Canción 2</a> </li>
                <div id="respuesta-1" ><iframe width="500" height="281" src="https://www.youtube.com/embed/OtWWkW7nEI8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> </div>

                <li className="li"><a href="#" className="lista" id="2">Canción 3</a> </li>
                <div id="respuesta-2" ><iframe width="500" height="281" src="https://www.youtube.com/embed/F1Vgu237AbU?list=RDvz9QbgXDHVA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> </div>

                <li className="li"><a href="#"className="lista" id="3">Canción 4</a> </li>
                <div id="respuesta-3" ><iframe width="500" height="281" src="https://www.youtube.com/embed/LBr7kECsjcQ?list=RDvz9QbgXDHVA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>

            </ul>


        )
    }
}
export default Listas;