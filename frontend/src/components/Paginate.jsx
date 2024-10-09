import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";

import React from "react";

const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <Paginate.Item
            as={Link}
            key={x + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${x + 1}`
                  : `/page/${x + 1}`
                : `/admin/productlist/$(x+1)`
            }
            active={x + 1 === page}
          >
            {x + 1}
          </Paginate.Item>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
