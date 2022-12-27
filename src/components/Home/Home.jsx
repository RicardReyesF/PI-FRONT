//import { Component } from "react";
//import Image from "../../images/wallpaperflare.com_wallpaper.png"

import { Link } from 'react-router-dom'
import style from '../Home/home.module.css'

export const Home = () => {
        return (
            <div>
                <h1>Bienvenido</h1>
                <div>
                    <Link to="/recipes">
                        <button>Ingresa</button>
                    </Link>
                </div>
            </div>
            
        )
    }