import React from "react"
import { useDispatch } from "react-redux"

import styles from "./Pagination.module.scss"
import ReactPaginate from "react-paginate";

import { setCurrentPage } from "../../redux/slices/pageParamsSlice"

const PaginationBlock = ({ currentPage, pageCount }) => {
  const dispatch = useDispatch()

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel={
        <svg
          className={styles.nextArrow}
          version="1.1"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg">
          <polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 " />
        </svg>}
      previousLabel={
        <svg
          className={styles.previousArrow}
          version="1.1"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg">
          <polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 " />
        </svg>}
      forcePage={currentPage}
      onPageChange={(event) => dispatch(setCurrentPage(event.selected))}
      pageRangeDisplayed={4}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
    />
  )
}

export default PaginationBlock
