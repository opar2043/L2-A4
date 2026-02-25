import axiosinstance from "./axiosinstance";

const getmenus = async () => {
  const res = await axiosinstance.get('/menu');
  const data = res.data;
  return data
};
const getSingleMenu = async (id : string) => {
  const res = await axiosinstance.get(`/menu/${id}`);
  const data = res.data;
  return data
};

const deleteMenu = async (id : string) => {
  const res = await axiosinstance.delete(`/menu/${id}`);
  const data = res.data;
  return data
};
const updateMenu = async (id : string) => {
  const res = await axiosinstance.patch(`/menu/${id}`);
  const data = res.data;
  return data
};


export  const menuService = {
   getmenus,
   getSingleMenu,
   deleteMenu,
   updateMenu
}