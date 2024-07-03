CREATE DATABASE my_database;
--  USE my_database;
\c my_database;

CREATE TABLE merchants( id SERIAL PRIMARY KEY, name VARCHAR(30), email VARCHAR(30) );
INSERT INTO merchants (name, email) VALUES ('john', 'john@mail.com');
INSERT INTO merchants (name, email) VALUES ('elias', 'elias@mail.com');
INSERT INTO merchants (name, email) VALUES ('eric', 'eric@mail.com');
INSERT INTO merchants (name, email) VALUES ('dallas', 'dallas@mail.com');

SELECT * FROM merchants;

CREATE USER my_user WITH PASSWORD 'root';
ALTER USER my_user WITH SUPERUSER;


SELECT usesysid as user_id,
       usename as username,
       usesuper as is_superuser,
       passwd as password_md5,
       valuntil as password_expiration
FROM pg_shadow
ORDER BY usename;