INSERT INTO theatre_db.Screens (name, seats) VALUES ("screen-1", 10);
INSERT INTO theatre_db.Screens (name, seats) VALUES ("screen-2", 15);

INSERT INTO theatre_db.ShowTimes (name) VALUES ("9.00 am");
INSERT INTO theatre_db.ShowTimes (name) VALUES ("2.00 pm");
INSERT INTO theatre_db.ShowTimes (name) VALUES ("6.00 pm");

INSERT INTO theatre_db.Movies (title, releaseYear) VALUES ("frozen", "2013");
INSERT INTO theatre_db.Movies (title, releaseYear) VALUES ("finding nemo", "2003");

INSERT INTO theatre_db.Users (name, userName, passWord, role) VALUES ("admin", "admin", "admin", "admin");
INSERT INTO theatre_db.Users (name, userName, passWord, role) VALUES ("john doe", "john", "password", "user");
INSERT INTO theatre_db.Users (name, userName, passWord, role) VALUES ("minu", "minu", "pass", "user");
INSERT INTO theatre_db.Users (name, userName, passWord, role) VALUES ("minu", "minu", "pass", "user");

INSERT INTO theatre_db.shows (date, movieId, screenId, ShowTimeId) 
  VALUES ("2017-11-15", 1, 1, 1);

INSERT INTO theatre_db.shows (date, movieId, screenId, ShowTimeId) 
  VALUES ("2017-11-15", 1, 2, 1);

INSERT INTO theatre_db.shows (date, movieId, screenId, ShowTimeId) 
  VALUES ("2017-11-16", 1, 1, 1);

INSERT INTO theatre_db.shows (date, movieId, screenId, ShowTimeId) 
  VALUES ("2017-11-16", 1, 2, 1);

INSERT INTO theatre_db.shows (date, movieId, screenId, ShowTimeId) 
  VALUES ("2017-11-17", 1, 1, 1);

INSERT INTO theatre_db.shows (date, movieId, screenId, ShowTimeId) 
  VALUES ("2017-11-17", 1, 2, 1);


INSERT INTO theatre_db.shows (date, movieId, screenId, ShowTimeId) 
  VALUES ("2017-11-15", 2, 1, 2);

INSERT INTO theatre_db.shows (date, movieId, screenId, ShowTimeId) 
  VALUES ("2017-11-15", 2, 2, 2);

INSERT INTO theatre_db.shows (date, movieId, screenId, ShowTimeId) 
  VALUES ("2017-11-16", 2, 1, 2);

INSERT INTO theatre_db.shows (date, movieId, screenId, ShowTimeId) 
  VALUES ("2017-11-16", 2, 2, 2);

INSERT INTO theatre_db.shows (date, movieId, screenId, ShowTimeId) 
  VALUES ("2017-11-17", 2, 1, 2);

INSERT INTO theatre_db.shows (date, movieId, screenId, ShowTimeId) 
  VALUES ("2017-11-17", 2, 2, 2);