const getusers = async () => {
  const data = await fetch("https://server-food-ashy.vercel.app/users");
  const menu = await data.json();
  return menu
};

export const userService = {
   getusers
}