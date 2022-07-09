import axios from 'axios'

const allAparcamientos = async () => {
    const peticion = axios.get('datos.madrid.es/egob/catalogo/202625-0-aparcamientos-publicos.json')
    console.log(peticion)
}

export { allAparcamientos }