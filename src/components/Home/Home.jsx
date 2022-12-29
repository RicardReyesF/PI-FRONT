//import { Component } from "react";
//import Image from "../../images/wallpaperflare.com_wallpaper.png"

import { Link } from 'react-router-dom'
import style from '../Home/home.module.css'

export const Home = () => {
        return (
            <div className={style.form}>
                <h1 className={style.words}>Bienvenido</h1>
                <br />
                <div >
                    <Link to="/recipes">
                        <button className={style.button}>Ingresa</button>
                    </Link>
                </div>
            </div>
            
        )
    }