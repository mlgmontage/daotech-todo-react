import { useEffect, useState } from "react";

type PaginationT = {
  page: number;
  setPage: (n: number) => void;
  total: number;
  sliced: any;
};

const usePagination = (list: any[], perpage: number): PaginationT => {
  const [page, setPage] = useState(0);
  const len = list.length;

  // NOTE: Reseting current page when list gets filtered
  useEffect(() => setPage(0), [len]);

  const total = Math.ceil(len / perpage);
  const sliced = list.slice(page * perpage, page * perpage + perpage);

  return { page, setPage, total, sliced };
};

export default usePagination;
