import axios from "axios";

const useAxiosPublicData = axios.create({
  baseURL: "http://localhost:5000",
});

export default function useAxiosPublic() {
  return useAxiosPublicData;
}
