import "./MaterialCard.css";
import { hooks } from "@/hooks/index";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { components } from "@/components/index";

const ITEMS_PER_PAGE = 5;

export default function MaterialCard() {
  const { getSubstance } = hooks.useGetSubstance();
  const { data, isLoading, error } = useQuery({
    queryKey: ["substance"],
    queryFn: () => getSubstance(),
  });

  const [currentPage, setCurrentPage] = useState(1);

  if (isLoading) return <components.Loading />;
  if (error) return <p>Error fetching data</p>;

  const items = data?.data || [];
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

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              fontWeight: currentPage === i + 1 ? "bold" : "normal",
              margin: "0 5px",
            }}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
