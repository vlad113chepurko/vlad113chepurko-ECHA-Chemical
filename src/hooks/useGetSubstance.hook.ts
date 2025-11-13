import axios from "axios";
import { stores } from "@/store/index";
const { useFilterStore } = stores;

export function useGetSubstance() {
  const { filter: value, setFilteredData } = useFilterStore();
  console.log(value);

  const getSubstance = async () => {
    try {
      const res = await axios.get(`/optimade/main/index/links/`);
      const data = res.data.data || [];
      if (data.length === 0) return [];
      const filtered = data.filter((item: any) =>
        item.attributes?.name?.toLowerCase()?.includes(value.toLowerCase())
      );
      console.log("FILTERED:", filtered);
      setFilteredData(filtered);
      return filtered;
    } catch (err) {
      console.error("Error fetching substance:", err);
      return [];
    }
  };
  return { getSubstance };
}

export function useGetAllSubstances() {
  const getAllSubstances = async () => {
    const res = await axios.get(`/optimade/main/index/links/`);
    return res.data;
  };
  return { getAllSubstances };
}
