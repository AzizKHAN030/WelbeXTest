import React from "react";

import { Navbar, Container, Form, Col, Row } from "react-bootstrap";

export default function Nav({
  tableHeads,
  onSelectFilter,
  selectedColumn,
  selectedType,
}) {
  const columnRef = React.useRef(null);
  const filterTypeRef = React.useRef(null);
  const searchInputRef = React.useRef(null);

  const setFilters = (fetch) => {
    onSelectFilter({
      column: columnRef.current.value,
      filterType: filterTypeRef.current.value,
      value: searchInputRef.current.value.toLowerCase(),
      fetch: fetch,
    });
  };

  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container className="justify-content-between">
        <Navbar.Brand href="/">WelbeX Table</Navbar.Brand>
        <Row className="justify-content-end">
          <Col lg={5}>
            <Form.Select
              aria-label="Default select example"
              onChange={() => {
                searchInputRef.current.value = "";
                setFilters();
              }}
              ref={columnRef}
              value={selectedColumn}
            >
              <option disabled>Фильтрация по колонкам</option>
              {tableHeads.map((item, idx) => {
                return (
                  <option key={idx} value={item.type}>
                    {item.name}
                  </option>
                );
              })}
            </Form.Select>
          </Col>

          <Col lg={4}>
            <Form.Select
              aria-label="Default select example"
              ref={filterTypeRef}
              value={selectedType}
              onChange={setFilters}
            >
              <option disabled>Тип фильтрации</option>
              <option value="=">Равно</option>
              <option value="like" disabled={selectedColumn !== "name"}>
                Содержит
              </option>
              <option value=">" disabled={selectedColumn === "name"}>
                Больше
              </option>
              <option value="<" disabled={selectedColumn === "name"}>
                Меньше
              </option>
            </Form.Select>
          </Col>

          <Col lg={3}>
            <Form.Control
              placeholder="Поиск"
              ref={searchInputRef}
              onChange={() => {
                setFilters("fetch");
              }}
              type={selectedColumn !== "name" ? "number" : ""}
            />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
