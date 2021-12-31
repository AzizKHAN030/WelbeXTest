import React from "react";
import { Pagination } from "react-bootstrap";

export default function PaginationComponent({
  rows,
  activePage,
  onChangePage,
}) {
  const pages = Math.ceil(rows / 10);
  let pagesArr = [];
  for (let i = 0; i < pages; i++) {
    pagesArr.push(i + 1);
  }

  const clickPage = (page) => {
    onChangePage(page);
  };

  return (
    <Pagination>
      {pagesArr.map((page) => {
        return (
          <Pagination.Item
            key={page}
            active={activePage === page}
            onClick={() => {
              clickPage(page);
            }}
          >
            {page}
          </Pagination.Item>
        );
      })}
    </Pagination>
  );
}
