import React from 'react';
import Component from "../../utils/component"
import ReactPaginate from 'react-paginate';

class PaginationBar extends Component {
  render() {
    return (
        <ReactPaginate previousLabel={"<"}
          nextLabel={">"}
          breakLabel={<span>...</span>}
          breakClassName={"break-me"}
          pageCount={this.props.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={this.props.onPageChange}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          nextClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          forcePage={this.props.currentPage}
          activeClassName={"active"}
          />

    )
  }
}

export default PaginationBar;