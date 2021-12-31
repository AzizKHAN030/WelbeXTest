import React from "react";
import { Table, Container } from "react-bootstrap";

import arrow from "../assets/icons/arrow.svg";

export default function DataTable({
  cities,
  tableHeads,
  onSelectSort,
  order,
  selectSort,
}) {
  const clickSort = (type) => {
    onSelectSort(type);
  };

  return (
    <Container className="main-table">
      <Table striped bordered hover className="table">
        <thead>
          <tr>
            <th>#</th>
            {tableHeads.map((head, idx) => (
              <th
                onClick={() => {
                  clickSort(head.type);
                }}
                key={idx}
              >
                {head.name}
                {selectSort === head.type && (
                  <img
                    src={arrow}
                    alt="arrow"
                    className={order ? "asc" : "desc"}
                  />
                )}
              </th>
            ))}
            <th>Дата последнего обновления</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city) => {
            return (
              <tr key={city.id}>
                <td>{city.id}</td>
                <td>{city.name}</td>
                <td>{city.population}</td>
                <td>{city.distance}</td>
                <td>{city.date.split("T")[0]}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
