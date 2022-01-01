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
  };

  const onChangePage = (page) => {
    setActivePage(page);
  };

  const fetchData = async (obj) => {
    if (obj) {
      obj.value
        ? await axios
            .get(
              `/api/cities?column=${obj.column}&filter=${obj.filterType}&value=${obj.value}&orderBy=${obj.type}&order=${obj.order}&page=${activePage}`
            )
            .then((res) => {
              setCities([...res.data]);
            })
        : await axios
            .get(
              `/api/cities?orderBy=${obj.type}&order=${obj.order}&page=${activePage}`
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
            `/api/rows?column=${obj.column}&filter=${obj.filterType}&value=${obj.value}&orderBy=${obj.type}`
          )
          .then(({ data }) => {
            setRows(data[0].count);
          })
      : await axios.get(`/api/rows`).then(({ data }) => {
          setRows(data[0].count);
        });
  };

  React.useEffect(() => {
    if (searchVal) {
      setActivePage(1);
    }
    getRows({
      type: selectSort,
      order: order ? "asc" : "desc",
      column: selectedColumn,
      filterType: selectedType,
      value: searchVal,
    });
  }, [searchVal, selectedType]);

  React.useEffect(() => {
    fetchData({
      type: selectSort,
      order: order ? "asc" : "desc",
      column: selectedColumn,
      filterType: selectedType,
      value: searchVal,
      activePage,
    });
  }, [order, searchVal, activePage, selectedType]);

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
