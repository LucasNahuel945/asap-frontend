import { url } from '../const'

export const getMenuByPerfil = async (idPerfil) => {
    try {
        const response = await fetch(url + '/perfiles/' + idPerfil)
        const menus = (await response.json()).menus

        return menus
    } catch (error) {
        console.error(error)
    }
}

export const getSubmenus = async (idmenu) => {
    try {
        const response = await fetch(url + '/menus/' + idmenu + '/submenus')
        const submenus = await response.json()
        return submenus
    } catch (error) {
        console.error(error)
    }
}