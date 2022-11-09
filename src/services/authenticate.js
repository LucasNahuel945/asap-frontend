import { url } from '../const'

export const authenticate = async (email, password) => {
    try {
        const response = await fetch(url + '/usuarios')
        const data = await response.json()
        return await data.find(x => (x.email === email || x.nombre) && x.password === password)
    } catch (error) {
        console.error(error)
    }
}

export const getMenus = async (id) => {
    try {
        const response = await fetch(url + '/' + id)
        const data = await response.json()
        return await data.menus
    } catch (error) {
        console.error(error)
    }
}

