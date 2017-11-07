/*
-- Query: SELECT * FROM theatre_db.Shows
LIMIT 0, 1000

-- Date: 2017-11-05 23:07
*/


INSERT INTO theatre_db.Screens (name, seats) VALUES ("screen-1", 10);
INSERT INTO theatre_db.Screens (name, seats) VALUES ("screen-2", 15);

INSERT INTO theatre_db.ShowTimes (name) VALUES ("9.00 am");
INSERT INTO theatre_db.ShowTimes (name) VALUES ("2.00 pm");
INSERT INTO theatre_db.ShowTimes (name) VALUES ("6.00 pm");

INSERT INTO theatre_db.Movies (title, releaseYear) VALUES ("frozen", "2013");
INSERT INTO theatre_db.Movies (title, releaseYear) VALUES ("finding nemo", "2003");
INSERT INTO theatre_db.Movies (title, releaseYear) VALUES ("moana", "2016");
INSERT INTO theatre_db.Movies (title, releaseYear) VALUES ("gladiator", "2000");

INSERT INTO theatre_db.Users (name, userName, passWord, role) VALUES ("admin", "admin", "admin", "admin");
INSERT INTO theatre_db.Users (name, userName, passWord, role) VALUES ("john doe", "john", "password", "user");


INSERT INTO theatre_db.`Shows` (`id`,`date`,`screenId`,`showtimeId`,`MovieId`) VALUES (1,'2017-11-15',1,1,1);
INSERT INTO theatre_db.`Shows` (`id`,`date`,`screenId`,`showtimeId`,`MovieId`) VALUES (2,'2017-11-15',2,1,1);
INSERT INTO theatre_db.`Shows` (`id`,`date`,`screenId`,`showtimeId`,`MovieId`) VALUES (3,'2017-11-16',1,1,1);
INSERT INTO theatre_db.`Shows` (`id`,`date`,`screenId`,`showtimeId`,`MovieId`) VALUES (4,'2017-11-16',2,1,1);
INSERT INTO theatre_db.`Shows` (`id`,`date`,`screenId`,`showtimeId`,`MovieId`) VALUES (5,'2017-11-17',1,1,1);
INSERT INTO theatre_db.`Shows` (`id`,`date`,`screenId`,`showtimeId`,`MovieId`) VALUES (6,'2017-11-17',2,1,1);
INSERT INTO theatre_db.`Shows` (`id`,`date`,`screenId`,`showtimeId`,`MovieId`) VALUES (7,'2017-11-15',1,2,2);
INSERT INTO theatre_db.`Shows` (`id`,`date`,`screenId`,`showtimeId`,`MovieId`) VALUES (8,'2017-11-15',2,2,2);
INSERT INTO theatre_db.`Shows` (`id`,`date`,`screenId`,`showtimeId`,`MovieId`) VALUES (9,'2017-11-16',1,2,2);
INSERT INTO theatre_db.`Shows` (`id`,`date`,`screenId`,`showtimeId`,`MovieId`) VALUES (10,'2017-11-16',2,2,2);
INSERT INTO theatre_db.`Shows` (`id`,`date`,`screenId`,`showtimeId`,`MovieId`) VALUES (11,'2017-11-17',1,2,2);
INSERT INTO theatre_db.`Shows` (`id`,`date`,`screenId`,`showtimeId`,`MovieId`) VALUES (12,'2017-11-17',2,2,2);
INSERT INTO theatre_db.`Shows` (`id`,`date`,`screenId`,`showtimeId`,`MovieId`) VALUES (13,'2017-11-06',2,1,3);
INSERT INTO theatre_db.`Shows` (`id`,`date`,`screenId`,`showtimeId`,`MovieId`) VALUES (14,'2017-11-07',2,1,3);
INSERT INTO theatre_db.`Shows` (`id`,`date`,`screenId`,`showtimeId`,`MovieId`) VALUES (16,'2017-11-08',2,1,3);
INSERT INTO theatre_db.`Shows` (`id`,`date`,`screenId`,`showtimeId`,`MovieId`) VALUES (17,'2017-11-09',2,1,3);
