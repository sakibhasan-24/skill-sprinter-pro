import axios from "axios";

const useAxiosPublicData = axios.create({
  baseURL: "https://skill-sprinter-pro-server.vercel.app",
});

export default function useAxiosPublic() {
  return useAxiosPublicData;
}
