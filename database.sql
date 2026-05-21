CREATE DATABASE Musik;
USE Musik;
CREATE TABLE Band (
id INT AUTO_INCREMENT PRIMARY KEY,
namn VARCHAR(100), 
bokningspris INT
);

CREATE TABLE Musiker (
 id INT AUTO_INCREMENT PRIMARY KEY,
 namn VARCHAR(100), 
Instrument  VARCHAR(100)
);

CREATE TABLE Medlemskap (
id INT AUTO_INCREMENT PRIMARY KEY,
band_id INT, 
musiker_id INT, 
startdatum DATE,
slutdatum DATE, 
FOREIGN KEY (band_id) REFERENCES Band(id), 
FOREIGN KEY (musiker_id) REFERENCES Musiker(id)
);

INSERT INTO Band (namn, bokningspris) VALUES
('Acdc', 10000), 
('Greenday', 5000);

INSERT INTO Musiker (namn, instrument) VALUES
('Sven Svensson', 'Sång'), ('Per Persson', 'Gitarr'),
('Olaf Olafsson', 'Piano');

INSERT INTO Medlemskap (band_id, musiker_id, startdatum, slutdatum) VALUES 
(1, 1, '2020-01-01', NULL), 
(2, 2, '2021-01-01', '2024-01-01'), 
(1, 3, '2022-01-01', NULL);
