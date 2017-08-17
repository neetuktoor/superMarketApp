DROP DATABASE IF EXISTS aisleFinder;
CREATE DATABASE aisleFinder;
USE aisleFinder;

CREATE TABLE users(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  firstName VARCHAR(100),
  lastName VARCHAR(100),
  email VARCHAR(100),
  PRIMARY KEY (id)
);

CREATE TABLE groceryList(
item VARCHAR(100),
category VARCHAR(100),
amount INTEGER(11),
description VARCHAR(100)
);