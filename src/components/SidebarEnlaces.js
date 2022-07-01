import React from 'react'
import * as IconosAi from "react-icons/ai";
import * as IconosTi from "react-icons/ti";

export const SidebarEnlaces = [
    {
        title: 'Inicio',
        path: '/',
        icon: <IconosAi.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Aparcamientos',
        path: '/aparcamientos',
        icon: <IconosAi.AiFillCar />,
        cName: 'nav-text'
    },
    {
        title: 'El Tiempo',
        path: '/eltiempo',
        icon: <IconosTi.TiWeatherPartlySunny />,
        cName: 'nav-text'
    },
]