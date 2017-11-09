
-- All these insert statements are mandatory for the proper functioning of this app.
-- Currently there is no provision in UI to create these records.

-- Inserting Screens for theatre.
INSERT INTO theatre_db.Screens (name, seats) VALUES ("screen-1", 10);
INSERT INTO theatre_db.Screens (name, seats) VALUES ("screen-2", 15);

-- Inserting Show Times
INSERT INTO theatre_db.ShowTimes (name) VALUES ("9.00 am");
INSERT INTO theatre_db.ShowTimes (name) VALUES ("2.00 pm");
INSERT INTO theatre_db.ShowTimes (name) VALUES ("6.00 pm");

-- Inserting record for admin User.
-- Currently it is not possible to create admin users from UI.
-- username: admin | password: admin
INSERT INTO theatre_db.`Users` (`id`,`name`,`userName`,`passWord`,`role`) VALUES (4,'admin','admin','sha1$3021fc82$1$6508bc74e90932296de199a8bcc5e9e99058bd98','admin');