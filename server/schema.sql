DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  message varchar(200),
  roomname varchar(50),
  username varchar (50)
--   users_id int,
--   rooms_id int
);

CREATE TABLE users(
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  username varchar(50) NOT NULL
);

CREATE TABLE rooms(
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  roomname varchar(50) NOT NULL
  
);
-- ALTER TABLE messages
--   ADD FOREIGN KEY (users_id) REFERENCES users(id);
-- ALTER TABLE messages
--   ADD FOREIGN KEY (rooms_id) REFERENCES rooms(id);

