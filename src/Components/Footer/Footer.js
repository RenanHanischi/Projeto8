import React from 'react';
import { Link } from "react-scroll";
import "./Footer.css"
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div>
                <div>
                    <a className='Footer-link'>Privacidade</a>
                    <a className='Footer-link'>Termos de uso</a>
                </div>
            </div>
            <Link to="topo-da-pagina">
                <div>
                    <FaArrowUp color='#ffffff'/>
                </div>
            </Link>


        </footer>

    )

}
export default Footer