INSERT INTO theatre_db.Screens (name, seats) VALUES ("screen-1", 10);
INSERT INTO theatre_db.Screens (name, seats) VALUES ("screen-2", 15);

INSERT INTO theatre_db.ShowTimes (name) VALUES ("9.00 am");
INSERT INTO theatre_db.ShowTimes (name) VALUES ("2.00 pm");
INSERT INTO theatre_db.ShowTimes (name) VALUES ("6.00 pm");

INSERT INTO theatre_db.Movies (title, releaseDate) VALUES ("frozen", "2017-11-27");
INSERT INTO theatre_db.Movies (title, releaseDate) VALUES ("finding nemo", "2003-05-30");

INSERT INTO theatre_db.Users (name, userName, passWord, role) VALUES ("admin", "admin", "admin", "admin");
INSERT INTO theatre_db.Users (name, userName, passWord, role) VALUES ("john doe", "john", "password", "user");


INSERT INTO theatre_db.MovieScreenDateShows (date, movieId, screenId, ShowTimeId) 
  VALUES ("2017-11-15", 1, 1, 1);

INSERT INTO theatre_db.MovieScreenDateShows (date, movieId, screenId, ShowTimeId) 
  VALUES ("2017-11-15", 1, 2, 1);

INSERT INTO theatre_db.MovieScreenDateShows (date, movieId, screenId, ShowTimeId) 
  VALUES ("2017-11-16", 1, 1, 1);

INSERT INTO theatre_db.MovieScreenDateShows (date, movieId, screenId, ShowTimeId) 
  VALUES ("2017-11-16", 1, 2, 1);

INSERT INTO theatre_db.MovieScreenDateShows (date, movieId, screenId, ShowTimeId) 
  VALUES ("2017-11-17", 1, 1, 1);

INSERT INTO theatre_db.MovieScreenDateShows (date, movieId, screenId, ShowTimeId) 
  VALUES ("2017-11-17", 1, 2, 1);

INSERT INTO theatre_db.MovieScreenDateShows (date, movieId, screenId, ShowTimeId) 
  VALUES ("2017-11-15", 2, 1, 2);

INSERT INTO theatre_db.MovieScreenDateShows (date, movieId, screenId, ShowTimeId) 
  VALUES ("2017-11-15", 2, 2, 2);

INSERT INTO theatre_db.MovieScreenDateShows (date, movieId, screenId, ShowTimeId) 
  VALUES ("2017-11-16", 2, 1, 2);

INSERT INTO theatre_db.MovieScreenDateShows (date, movieId, screenId, ShowTimeId) 
  VALUES ("2017-11-16", 2, 2, 2);

INSERT INTO theatre_db.MovieScreenDateShows (date, movieId, screenId, ShowTimeId) 
  VALUES ("2017-11-17", 2, 1, 2);

INSERT INTO theatre_db.MovieScreenDateShows (date, movieId, screenId, ShowTimeId) 
  VALUES ("2017-11-17", 2, 2, 2);



-- -- 15 Nov frozen screen-1
-- INSERT INTO theatre_db.MovieScreenDates (date, movieId, screenId ) VALUES ("2017-11-15", 1, 1);
-- -- 15 Nov frozen screen-2
-- INSERT INTO theatre_db.MovieScreenDates (date, movieId, screenId ) VALUES ("2017-11-15", 1, 2);
-- -- 15 Nov finding nemo screen-1
-- INSERT INTO theatre_db.MovieScreenDates (date, movieId, screenId ) VALUES ("2017-11-15", 2, 1);
-- -- 15 Nov finding nemo screen-2
-- INSERT INTO theatre_db.MovieScreenDates (date, movieId, screenId ) VALUES ("2017-11-15", 2, 2);

-- -- frozen screen-1
-- INSERT INTO theatre_db.MovieScreenDates (date, movieId, screenId ) VALUES ("2017-11-16", 1, 1);
-- -- frozen screen-1
-- INSERT INTO theatre_db.MovieScreenDates (date, movieId, screenId ) VALUES ("2017-11-16", 1, 2);
-- -- finding nemo screen-1
-- INSERT INTO theatre_db.MovieScreenDates (date, movieId, screenId ) VALUES ("2017-11-16", 2, 1);
-- -- finding nemo screen-1
-- INSERT INTO theatre_db.MovieScreenDates (date, movieId, screenId ) VALUES ("2017-11-16", 2, 2);




-- -- 15 Nov screen-1 9.00am frozen
-- INSERT INTO theatre_db.MovieScreenDateShows (MovieScreenDateId, ShowTimeId) VALUES (1, 1);
-- -- 15 Nov screen-1 2.0pm frozen
-- INSERT INTO theatre_db.MovieScreenDateShows (MovieScreenDateId, ShowTimeId) VALUES (3, 2);
-- -- 15 Nov screen-2 9.00am frozen
-- INSERT INTO theatre_db.MovieScreenDateShows (MovieScreenDateId, ShowTimeId) VALUES (2, 1);
-- -- 15 Nov screen-2 2.00pm frozen
-- INSERT INTO theatre_db.MovieScreenDateShows (MovieScreenDateId, ShowTimeId) VALUES (4, 2);

-- -- 16 Nov screen-1 9.00am frozen
-- INSERT INTO theatre_db.MovieScreenDateShows (MovieScreenDateId, ShowTimeId) VALUES (5, 1);
-- -- 16 Nov screen-1 2.0pm frozen
-- INSERT INTO theatre_db.MovieScreenDateShows (MovieScreenDateId, ShowTimeId) VALUES (7, 2);
-- -- 16 Nov screen-2 9.00am frozen
-- INSERT INTO theatre_db.MovieScreenDateShows (MovieScreenDateId, ShowTimeId) VALUES (6, 1);
-- -- 16 Nov screen-2 2.00pm frozen
-- INSERT INTO theatre_db.MovieScreenDateShows (MovieScreenDateId, ShowTimeId) VALUES (8, 2);













