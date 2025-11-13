import "./MaterialCard.css";
import Pagination from "../pagination/Pagination";
import { hooks } from "@/hooks/index";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { components } from "@/components/index";
import { stores } from "@/store/index";

const ITEMS_PER_PAGE = 3;

export default function MaterialCard() {
  const { filteredData } = stores.useFilterStore();
  const { getAllSubstances } = hooks.useGetAllSubstances();
  const { data, isLoading, error } = useQuery({
    queryKey: ["substance"],
    queryFn: () => getAllSubstances(),
  });

  const [currentPage, setCurrentPage] = useState(1);

  if (isLoading) return <components.Loading />;
  if (error) return <p>Error fetching data</p>;

  const items =
    filteredData && filteredData.length > 0 ? filteredData : data?.data || [];

  if (!items.length) {
    return <p style={{ textAlign: "center" }}>No results found 😔</p>;
  }

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div>
      <div className="material-container">
        {currentItems.map((item: any) => (
          <div key={item.id} className="material-card">
            <div>
              <p>
                Name: <span>{item.attributes.name}</span>
              </p>
              <p>
                Description: <span>{item.attributes.description || "N/A"}</span>
              </p>
              <p>
                Aggregate:{" "}
                <span>
                  {item.attributes.aggregate === null
                    ? "N/A"
                    : item.attributes.aggregate}
                </span>
              </p>
              <p>
                ID: <span>{item.id}</span>
              </p>
            </div>
            <div>
              <a
                href={item.attributes.base_url}
                target="_blank"
                rel="noreferrer"
              >
                Origin Resource
              </a>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
