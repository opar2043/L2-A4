import axiosinstance from "./axiosinstance";

const getOrders = async () => {
  const res = await axiosinstance.get('/order');
  const data = res.data;
  return data
};
const getSingleOrders = async (id : string) => {
  const res = await axiosinstance.get(`/order/${id}`);
  const data = res.data;
  return data
};

const deleteOrders = async (id : string) => {
  const res = await axiosinstance.delete(`/order/${id}`);
  const data = res.data;
  return data
};
const updateOrders = async (id : string) => {
  const res = await axiosinstance.patch(`/order/${id}`);
  const data = res.data;
  return data
};


export  const orderService = {
getOrders,
deleteOrders,
updateOrders,
getSingleOrders
}