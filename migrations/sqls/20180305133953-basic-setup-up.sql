CREATE TABLE ITEMS (
  ID SERIAL PRIMARY KEY,
  BARCODE_ID VARCHAR(30) NOT NULL UNIQUE,
  NAME VARCHAR(60) NOT NULL,
  MRP REAL NOT NULL,
  SP REAL NOT NULL
);