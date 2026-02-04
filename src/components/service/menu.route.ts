const getmenus = async () => {
  const data = await fetch("https://server-food-ashy.vercel.app/menu");
  const menu = await data.json();
  return menu
};

export  const menuService = {
   getmenus
}