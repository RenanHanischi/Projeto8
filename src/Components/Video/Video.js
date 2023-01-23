import React from 'react';
import "./Video.css";

const Video =() =>{
    return(
        <section>
            <div className="conteudo">
                <p className="paragrafo">Que tal colocar a sua loja exposta em uma plataforma exclusiva para influenciadores com loja própria? Incrível né, pensando nisso a 8dobom criou um site e aplicativo para você influenciador!!</p>
           
            </div>
            <div className='Video-card'>
                <iframe width="789" height="444" src="https://www.youtube.com/embed/6ZVBoOL1dxI" title="Conheça a 8dobom" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </section>
    )
}
export default Video