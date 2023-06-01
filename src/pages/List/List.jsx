import React from "react";
import "./List.scss";
import DataTable from "../../components/DataTable/DataTable";
import { getUsers } from "../../util/http";
import { useEffect } from "react";
const List = () => {
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="userContainer">
      <DataTable />
    </div>
  );
};

export default List;
