import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Pagination({
  ItemsCount,
  pageSize,
  currentPage,
  clickHandler,
}) {
  const PagesCount = Math.ceil(ItemsCount / pageSize);
  const numArray = [...Array(PagesCount + 1).keys()].slice(1);

  if (PagesCount === 1) return null;

  const previousPg = () => {
    if (currentPage > 1)
      return (
        <li className="page-item">
          <a
            onClick={() => clickHandler(currentPage - 1)}
            className="page-link"
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </a>
        </li>
      );
  };

  const nextPg = () => {
    if (currentPage < PagesCount)
      return (
        <li className="page-item">
          <a
            onClick={() => clickHandler(currentPage + 1)}
            className="page-link"
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </a>
        </li>
      );
  };

  return (
    <nav>
      <ul
        style={{ float: "right", marginRight: "200px" }}
        className="pagination"
      >
        {currentPage > 1 && (
          <li className="page-item">
            <a onClick={() => clickHandler(1)} className="page-link">
              <FontAwesomeIcon icon={faAnglesLeft} />
            </a>
          </li>
        )}
        {previousPg()}
        {numArray.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a onClick={() => clickHandler(page)} className="page-link">
              {page}
            </a>
          </li>
        ))}
        {nextPg()}
        {currentPage < PagesCount && (
          <li className="page-item">
            <a onClick={() => clickHandler(PagesCount)} className="page-link">
              <FontAwesomeIcon icon={faAnglesRight} />
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export function Paginate(arr, pageSize, currentPage) {
  const startIndex = (currentPage - 1) * pageSize;
  return arr.slice(startIndex, startIndex + pageSize);
}
