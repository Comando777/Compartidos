CREATE TABLE IF NO EXISTS proyecto (id INTEGER PRIMARY KEY AUTOINCREMENT,titulo TEXT, genero TEXT, img TEXT);
CREATE TABLE IF NOT EXISTS personaje(id INTEGER PRIMARY KEY AUTOINCREMENT,nombre TEXT, edad INTEGER,genero TEXT,proyectoId INTEGER);
CREATE TABLE IF NOT EXISTS mundo(id INTEGER PRIMARY KEY AUTOINCREMENT,nombre TEXT,paises INTEGER,proyectoId INTEGER);