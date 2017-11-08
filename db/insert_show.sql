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
INSERT INTO theatre_db.Users (name, userName, passWord, role) VALUES ("Joy Hey", "joy", "joy", "user");


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

INSERT INTO theatre_db.`Reservations` (`id`,`seatsReserved`,`createdAt`,`updatedAt`,`UserId`,`ShowId`) VALUES (1,5,'2017-11-06 23:06:11','2017-11-06 23:06:11',3,16);
INSERT INTO theatre_db.`Reservations` (`id`,`seatsReserved`,`createdAt`,`updatedAt`,`UserId`,`ShowId`) VALUES (2,3,'2017-11-06 23:07:24','2017-11-06 23:07:24',3,16);
INSERT INTO theatre_db.`Reservations` (`id`,`seatsReserved`,`createdAt`,`updatedAt`,`UserId`,`ShowId`) VALUES (3,4,'2017-11-07 02:29:13','2017-11-07 02:29:13',3,16);
INSERT INTO theatre_db.`Reservations` (`id`,`seatsReserved`,`createdAt`,`updatedAt`,`UserId`,`ShowId`) VALUES (4,1,'2017-11-08 04:17:58','2017-11-08 04:17:58',2,16);
INSERT INTO theatre_db.`Reservations` (`id`,`seatsReserved`,`createdAt`,`updatedAt`,`UserId`,`ShowId`) VALUES (5,3,'2017-11-08 05:32:55','2017-11-08 05:32:55',3,17);
INSERT INTO theatre_db.`Reservations` (`id`,`seatsReserved`,`createdAt`,`updatedAt`,`UserId`,`ShowId`) VALUES (6,2,'2017-11-08 05:33:07','2017-11-08 05:33:07',3,17);
INSERT INTO theatre_db.`Reservations` (`id`,`seatsReserved`,`createdAt`,`updatedAt`,`UserId`,`ShowId`) VALUES (7,2,'2017-11-08 05:33:26','2017-11-08 05:33:26',3,1);
INSERT INTO theatre_db.`Reservations` (`id`,`seatsReserved`,`createdAt`,`updatedAt`,`UserId`,`ShowId`) VALUES (8,2,'2017-11-08 05:33:35','2017-11-08 05:33:35',3,2);
