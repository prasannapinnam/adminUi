import React from "react";
import CheckBox from "./common/CheckBox";
import TableBody from "./common/TableBody";
import TableHeader from "./common/TableHeader";
import { Link } from "react-router-dom";

function MemTable(props) {
  let { list } = props;
  let columns = [
    {
      id: 1,
      label: <CheckBox item={props.CBMain} handleCheck={props.CBSelectAll} />,
      content: (entry) => (
        <CheckBox item={entry} handleCheck={() => props.handleCB(entry)} />
      ),
    },

    { id: 2, label: "name" },
    { id: 3, label: "email" },
    { id: 4, label: "role" },
    {
      id: 5,
      label: "",
      content: (entry) => (
        <Link className="btn btn-secondary btn-sm" to={`/members/${entry.id}`}>
          edit
        </Link>
      ),
    },
    {
      id: 6,
      label: "",
      content: (entry) => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => props.handleDel(entry.id)}
        >
          delete
        </button>
      ),
    },
  ];

  return (
    <table className="table">
      <TableHeader columns={columns} />
      <TableBody items={list} columns={columns} />
    </table>
  );
}

export default MemTable;
