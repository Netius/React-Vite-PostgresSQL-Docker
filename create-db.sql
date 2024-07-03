CREATE DATABASE my_database;
\c my_database;
CREATE TABLE merchants( id SERIAL PRIMARY KEY, name VARCHAR(30), email VARCHAR(30) );
INSERT INTO merchants (name, email) VALUES ('john', 'john@mail.com');
INSERT INTO merchants (name, email) VALUES ('elias', 'elias@mail.com');
INSERT INTO merchants (name, email) VALUES ('eric', 'eric@mail.com');
INSERT INTO merchants (name, email) VALUES ('dallas', 'dallas@mail.com');

CREATE USER my_user WITH PASSWORD 'root';
ALTER USER my_user WITH SUPERUSER;
