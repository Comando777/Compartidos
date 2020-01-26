DROP TABLE IF EXIST autor;
DROP TABLE IF EXIST obra;

CREATE TABLE IF NOT EXISTS autor(id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT,genero TEXT,img TEXT);
INSERT or IGNORE INTO autor VALUES (1, 'Isabel Allende', 'novela', 'linkdeimagen');

INSERT or IGNORE INTO autor VALUES (2,'Laura Gallego', 'novela', 'linkdeimagen');

INSERT or IGNORE INTO autor VALUES (3,'Carlos Cuatemoc', 'autoayuda', 'linkdeimagen');

CREATE TABLE 
INSERT or IGNORE INTO obra (id, titulo, autorId) VALUES (1, 'La casa de los espiritus', 1);
INSERT or IGNORE INTO obra (id, titulo, autorId) VALUES (2, 'La odisea', 1);
INSERT or IGNORE INTO obra (id, titulo, autorId) VALUES (3, 'Donde los arboles cantan', 2);
