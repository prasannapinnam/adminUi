import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination, { Paginate } from "./common/Pagination";
import SearchBox from "./common/SearchBox";
import MemTable from "./MemTable";

function Members() {
  const [data, setData] = useState([]);
  const [currentPage, SetCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [mainCheck, setMainCheck] = useState({ checked: false });

  const fetchData = async () => {
    let { data: result } = await axios.get(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    );
    result = result.map((entry) => ({ checked: false, ...entry }));
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id) => {
    let newData = data.filter((entry) => entry.id !== id);
    setData(newData);
  };

  const handlePageClick = (page) => {
    SetCurrentPage(page);
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    SetCurrentPage(1);
  };

  const handleCheckBox = (entry) => {
    let mems = [...data];
    const index = mems.indexOf(entry);
    mems[index] = { ...mems[index] };
    mems[index].checked = !mems[index].checked;
    setData(mems);
  };

  const selectAll = () => {
    let mems = [...data];
    mems = mems.map((entry) => {
      entry.checked = !entry.checked;
      return entry;
    });
    setData(mems);

    let dupMain = { ...mainCheck };
    dupMain.checked = !dupMain.checked;
    setMainCheck(dupMain);
  };

  const handleDeleteChecked = () => {
    const newList = data.filter((entry) => entry.checked === false);
    setData(newList);
  };

  let PaginatedMems = Paginate(data, 10, currentPage);
  let filteredMems = [...data];

  if (searchQuery) {
    const searched = data.filter(
      (entry) =>
        entry.name.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
        entry.email.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
        entry.role.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    PaginatedMems = Paginate(searched, 10, currentPage);
    filteredMems = searched;
  }

  return (
    <>
      <SearchBox value={searchQuery} searchChange={handleSearchChange} />
      <MemTable
        list={PaginatedMems}
        CBSelectAll={selectAll}
        CBMain={mainCheck}
        handleCB={handleCheckBox}
        handleDel={handleDelete}
      />
      <button
        style={{ float: "left", marginLeft: 30 }}
        className="btn btn-danger btn-sm"
        onClick={handleDeleteChecked}
      >
        delete Checked
      </button>
      <Pagination
        ItemsCount={filteredMems.length}
        pageSize={10}
        clickHandler={handlePageClick}
        currentPage={currentPage}
      />
    </>
  );
}

export default Members;
