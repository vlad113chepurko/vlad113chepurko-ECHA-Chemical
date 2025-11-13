import axios from "axios";
export function useGetSubstance() {
  const getSubstance = async () => {
    const res = await axios.get(
      `https://optimade.materialscloud.org/main/index/links`
    );
    return res.data;
  };
  return { getSubstance };
}
