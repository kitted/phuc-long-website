import { useState, useEffect, RefObject } from "react";

export function usePagination<T>(
  data: T[],
  itemsPerPage: number,
  scrollRef?: RefObject<HTMLElement>
) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    if (scrollRef?.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentPage, scrollRef]);

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    currentData,
  };
}
