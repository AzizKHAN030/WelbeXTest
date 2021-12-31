create TABLE cities(
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  name VARCHAR(255),
  population INTEGER,
  distance INTEGER
);