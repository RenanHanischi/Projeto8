import React from 'react';
import "./Banner.css";
import {BsInstagram, BsYoutube} from "react-icons/bs";

const Banner = () => {
    return (
        <section >
            <div className="Banner-card">
                <div className="Banner-item">
                    <p className="Banner-titulo"> Em breve a 8dobom, vamos ajudar você a vender mais!</p>
                </div>
                <div className="flex-row">
                    <a href='https://www.instagram.com/loja8dobom/' target="_blank">
                        <BsInstagram style={
                            {height:"40px",width:"100%",color:"#FF1493"}
                        }/>
                    </a>
                    <a href='https://www.youtube.com/@user-bs8cf8nu7t' target="_blank">
                        <BsYoutube style={
                            {height:"40px",width:"100%",color:"#B22222"}
                        }/>
                    </a>
                </div>

                         
            </div>

        </section>
    )
}
export default Banner
