import axios from "axios";

const useAxiosPublicData = axios.create({
  baseURL: "https://server-8lmdgp0sx-sakib-hasans-projects.vercel.app",
});

export default function useAxiosPublic() {
  return useAxiosPublicData;
}
