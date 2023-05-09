CREATE TABLE Libro
(
  ID_Libro SERIAL INT NOT NULL,
  ISBN INT(13) NOT NULL,
  Nombre VARCHAR(25) NOT NULL,
  Resumen VARCHAR(140),
  PRIMARY KEY (ID_Libro),
  UNIQUE (ISBN)
);

CREATE TABLE Categoria
(
  ID_Categoria SERIAL INT NOT NULL,
  Nombre VARCHAR(25) NOT NULL,
  PRIMARY KEY (ID_Categoria)
);

CREATE TABLE Tiene
( ID_Tiene SERIAL INT NOT NULL,
  ID_Categoria INT NOT NULL,
  ID_Libro INT NOT NULL,
  PRIMARY KEY (ID_Tiene),
  FOREIGN KEY (ID_Categoria) REFERENCES Categoria(ID_Categoria),
  FOREIGN KEY (ID_Libro) REFERENCES Libro(ID_Libro)
);

CREATE TABLE Rol
(
  ID_Rol SERIAL INT NOT NULL,
  Nombre (15)VARCHAR NOT NULL,
  PRIMARY KEY (ID_Rol)
);

CREATE TABLE Galeria_Libro
(
  ID_Galeria_Libro SERIAL INT NOT NULL,
  ID_Libro INT NOT NULL,
  PRIMARY KEY (ID_Galeria_Libro),
  FOREIGN KEY (ID_Libro) REFERENCES Libro(ID_Libro)
);

CREATE TABLE IMG_Libro
(
  Ruta VARCHAR NOT NULL,
  ID_IMG_Libro SERIAL INT NOT NULL,
  ID_Galeria_Libro INT NOT NULL,
  PRIMARY KEY (ID_IMG_Libro),
  FOREIGN KEY (ID_Galeria_Libro) REFERENCES Galeria_Libro(ID_Galeria_Libro)
);

CREATE TABLE Usuario
(
  ID_Usuario SERIAL INT NOT NULL,
  Nombre VARCHAR(25) NOT NULL,
  Pass VARCHAR(16) NOT NULL,
  Imagen VARCHAR(30),
  Correo VARCHAR(30) NOT NULL,
  Activo INT(1) NOT NULL,
  ID_Rol INT NOT NULL,
  PRIMARY KEY (ID_Usuario),
  FOREIGN KEY (ID_Rol) REFERENCES Rol(ID_Rol),
  DEFAULT 0 FOR Activo
);

CREATE TABLE Ejemplar
(
  Precio INT NOT NULL,
  Visible INT(1) NOT NULL,
  ID_Ejemplar SERIAL INT NOT NULL,
  Estado VARCHAR(100) NOT NULL,
  ID_Usuario INT NOT NULL,
  ID_Libro INT NOT NULL,
  PRIMARY KEY (ID_Ejemplar),
  FOREIGN KEY (ID_Usuario) REFERENCES Usuario(ID_Usuario),
  FOREIGN KEY (ID_Libro) REFERENCES Libro(ID_Libro),
  DEFAULT 1 FOR Visible
);

CREATE TABLE Conversacion
(
  IDConversacion SERIAL INT NOT NULL,
  ID_Usuario1 INT NOT NULL,
  ID_Usuario2 INT NOT NULL,
  PRIMARY KEY (IDConversacion),
  FOREIGN KEY (ID_Usuario1) REFERENCES Usuario(ID_Usuario),
  FOREIGN KEY (ID_Usuario2) REFERENCES Usuario(ID_Usuario)
);

CREATE TABLE Factura
(
  ID_Factura SERIAL INT NOT NULL,
  ID_Ejemplar INT NOT NULL,
  ID_Usuario INT NOT NULL,
  PRIMARY KEY (ID_Factura),
  FOREIGN KEY (ID_Ejemplar) REFERENCES Ejemplar(ID_Ejemplar),
  FOREIGN KEY (ID_Usuario) REFERENCES Usuario(ID_Usuario)
);

CREATE TABLE Comentario
(
  ID_Comentario SERIAL VARCHAR NOT NULL,
  Puntuacion INT NOT NULL,
  Texto VARCHAR(140),
  ID_Libro INT NOT NULL,
  ID_Usuario INT NOT NULL,
  PRIMARY KEY (ID_Comentario),
  FOREIGN KEY (ID_Libro) REFERENCES Libro(ID_Libro),
  FOREIGN KEY (ID_Usuario) REFERENCES Usuario(ID_Usuario)
);

CREATE TABLE Galeria_Ejemplar
(
  ID_Galeria_Ejemplar SERIAL INT NOT NULL,
  ID_Ejemplar INT NOT NULL,
  PRIMARY KEY (ID_Galeria_Ejemplar),
  FOREIGN KEY (ID_Ejemplar) REFERENCES Ejemplar(ID_Ejemplar)
);

CREATE TABLE Galeria_Comentario
(
  ID_Galeria_Comentario SERIAL INT NOT NULL,
  ID_Comentario VARCHAR NOT NULL,
  PRIMARY KEY (ID_Galeria_Comentario),
  FOREIGN KEY (ID_Comentario) REFERENCES Comentario(ID_Comentario)
);

CREATE TABLE IMG_Comentario
(
  ID_IMG_Comentario SERIAL INT NOT NULL,
  Ruta VARCHAR NOT NULL,
  ID_Galeria_Comentario INT NOT NULL,
  PRIMARY KEY (ID_IMG_Comentario),
  FOREIGN KEY (ID_Galeria_Comentario) REFERENCES Galeria_Comentario(ID_Galeria_Comentario)
);

CREATE TABLE Mensaje
(
  ID_Mensaje  SERIAL INT NOT NULL,
  Texto VARCHAR(140) NOT NULL,
  Fecha DATE NOT NULL,
  ID_Conversacion INT NOT NULL,
  PRIMARY KEY (ID_Mensaje),
  FOREIGN KEY (ID_Conversacion) REFERENCES Conversacion(IDConversacion)
);

CREATE TABLE IMG_Ejemplar
(
  ID_IMG_Ejemplar  SERIAL INT NOT NULL,
  Ruta VARCHAR NOT NULL,
  ID_Galeria_Ejemplar INT NOT NULL,
  PRIMARY KEY (ID_IMG),
  FOREIGN KEY (ID_Galeria_Ejemplar) REFERENCES Galeria_Ejemplar(ID_Galeria_Ejemplar),
  UNIQUE (Ruta)
);