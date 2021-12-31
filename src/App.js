import React from "react";
import axios from "axios";
import Nav from "./components/Nav";
import DataTable from "./components/DataTable";
import PaginationComponent from "./components/PaginationComponent";

function App() {
  const [cities, setCities] = React.useState([]);
  const [selectSort, setSelectSort] = React.useState("name");
  const [order, setOrder] = React.useState(true);
  const [selectedColumn, setSelectedColumn] = React.useState("name");
  const [selectedType, setSelectedType] = React.useState("=");
  const [searchVal, setSearchVal] = React.useState("");
  const [rows, setRows] = React.useState(0);
  const [activePage, setActivePage] = React.useState(1);

  const tableTitles = [
    { name: "Название", type: "name" },
    { name: "Население", type: "population" },
    { name: "Расстояние от г.Ташкента (км)", type: "distance" },
  ];

  const onSelectSort = (type) => {
    setSelectSort(type);
    setOrder(!order);
    fetchData({
      type,
      order: order ? "desc" : "asc",
      column: selectedColumn,
      filterType: selectedType,
      value: searchVal,
      page: activePage,
    });
  };

  const onSelectFilter = (obj) => {
    if (
      (obj.column === "name" &&
        (obj.filterType === ">" || obj.filterType === "<")) ||
      (obj.column !== "name" && obj.filterType === "like")
    ) {
      setSelectedType("=");
    } else {
      setSelectedType(obj.filterType);
    }
    setSelectedColumn(obj.column);
    setSearchVal(obj.value);
    if (obj.fetch === "fetch" || obj.value) {
      setActivePage(1);
      fetchData({
        type: selectSort,
        order: order ? "asc" : "desc",
        column: obj.column,
        filterType: obj.filterType,
        value: obj.value,
        page: 1,
      });
      getRows({
        type: selectSort,
        order: order ? "asc" : "desc",
        column: obj.column,
        filterType: obj.filterType,
        value: obj.value,
      });
    }
  };

  const onChangePage = (page) => {
    setActivePage(page);
    fetchData({
      type: selectSort,
      order: order ? "asc" : "desc",
      column: selectedColumn,
      filterType: selectedType,
      value: searchVal,
      page,
    });
  };

  const fetchData = async (obj) => {
    if (obj) {
      obj.value
        ? await axios
            .get(
              `/api/cities?column=${obj.column}&filter=${
                obj.filterType
              }&value=${obj.value}&orderBy=${obj.type}&order=${
                obj.order
              }&page=${!obj.page ? 1 : obj.page}`
            )
            .then((res) => {
              setCities([...res.data]);
            })
        : await axios
            .get(
              `/api/cities?orderBy=${obj.type}&order=${obj.order}&page=${
                !obj.page ? 1 : obj.page
              }`
            )
            .then((res) => {
              setCities([...res.data]);
            });
    } else {
      await axios
        .get("/api/cities?orderBy=name&order=asc&page=1")
        .then((res) => {
          setCities([...res.data]);
        });
    }
  };
  const getRows = async (obj) => {
    obj.value
      ? await axios
          .get(
            `/api/rows?column=${obj.column}&filter=${obj.filterType}&value=${obj.value}&orderBy=${obj.type}&order=${obj.order}`
          )
          .then((res) => {
            setRows(res.data[0].count);
          })
      : await axios.get(`/api/rows`).then((res) => {
          setRows(res.data[0].count);
        });
  };

  React.useEffect(() => {
    fetchData({
      type: selectSort,
      order: order ? "asc" : "desc",
      column: selectedColumn,
      filterType: selectedType,
      value: searchVal,
    });
    getRows({
      type: selectSort,
      order: order ? "asc" : "desc",
      column: selectedColumn,
      filterType: selectedType,
      value: searchVal,
    });
  }, []);
  return (
    <div className="App">
      <Nav
        tableHeads={tableTitles}
        onSelectFilter={onSelectFilter}
        selectedColumn={selectedColumn}
        selectedType={selectedType}
      />
      <DataTable
        cities={cities}
        fetchData={fetchData}
        tableHeads={tableTitles}
        onSelectSort={onSelectSort}
        order={order}
        selectSort={selectSort}
      />
      <PaginationComponent
        rows={rows}
        onChangePage={onChangePage}
        activePage={activePage}
      />
    </div>
  );
}

export default App;
