import { useEffect } from "react";
import { stores } from "@/store/index";
import { hooks } from "@/hooks/index";

export default function Filter() {
  const { useFilterStore } = stores;
  const { filter, setFilter } = useFilterStore();
  const { useGetSubstance } = hooks;
  const { getSubstance } = useGetSubstance();
  useEffect(() => {
    if (!filter) return;
    const delay = setTimeout(() => {
      getSubstance();
    }, 500);
    return () => clearTimeout(delay);
  }, [filter]);
  return (
    <input
      className="filter"
      onChange={(e) => setFilter(e.target.value)}
      value={filter}
      placeholder="Filter..."
      type="text"
    />
  );
}
