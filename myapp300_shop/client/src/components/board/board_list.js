import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "react-js-pagination";

import TableRow from "./table_row";
import "../../page.css";
import { Link } from "react-router-dom";

const BoardList = () => {
  const [board, setBoard] = useState([]); //현재 페이지에서 보여줄 데이터들(레코드)
  const [page, setPage] = useState(1);
  const [totalCnt, setTotalCnt] = useState(0); //전체 레코드수
  const [loading, setLoading] = useState(false);

  const loadData = async (page) => {
    setLoading(true);
    const res = await axios.get("http://localhost:9000/board/list/" + page);
    console.log("======================================");
    console.log(res.data);

    setTotalCnt(res.data.totalRecord);
    setBoard(res.data.boardList);
    setLoading(false);
  };

  useEffect(() => {
    loadData(1);
  }, []);

  const handlePageChange = (page) => {
    setPage(page);
    loadData(page);
  };

  return (
    <div>
      <h3 align="center">게시판 목록</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <colgroup>
          <col width="8%" />
          <col width="*" />
          <col width="12%" />
          <col width="12%" />
          <col width="12%" />
        </colgroup>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {board.map((object, i) => {
            return (
              <TableRow obj={object} key={object.ID} totalCnt={totalCnt} />
            );
          })}
        </tbody>
      </table>

      <Pagination
        activePage={page}
        itemsCountPerPage={2}
        totalItemsCount={totalCnt}
        pageRangeDisplayed={2}
        prevPageText={"<"}
        nextPageText={">"}
        onChange={handlePageChange}
      />
      <Link className="btn btn-danger" to="/board/write">
        글쓰기
      </Link>
    </div>
  );
};

export default BoardList;
