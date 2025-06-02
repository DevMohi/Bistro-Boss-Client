import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://bistro-boss-server-umber-ten.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;

//Will make changes on 3rd
// 