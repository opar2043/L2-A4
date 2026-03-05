import axiosinstance from "./axiosinstance";

const postCarts = async () => {
  const res = await axiosinstance.post('/cart');
  const data = res.data;
  return data
};
const getCarts = async () => {
  const res = await axiosinstance.get('/cart');
  const data = res.data;
  return data
};


const deleteCarts = async (id : string) => {
  const res = await axiosinstance.delete(`/cart/${id}`);
  const data = res.data;
  return data
};


export  const Cartservice = {
getCarts,
deleteCarts,
postCarts
}