import { useDispatch, useSelector } from "react-redux";
import { getMenuByPerfil, getSubmenus } from "../services";
import { addMenu } from "../store";

export const useSetupMenus = () => {
  const dispatch = useDispatch();
  const { perfil } = useSelector(state => state.auth.user);

  return async () => {
    const menus = await getMenuByPerfil(perfil.id);
    
    menus.map(async menu => {
      const submenus = await getSubmenus(menu.id);
      dispatch(addMenu({ ...menu, submenus }));
    });
  }
};
