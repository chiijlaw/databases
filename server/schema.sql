DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  message varchar(200),
  users_id int
  -- FOREIGN KEY (user_id) REFERENCES user(id)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users(
 id int PRIMARY KEY NOT NULL auto_increment,
 username varchar(50) NOT NULL
);

ALTER TABLE messages
ADD FOREIGN KEY (users_id) REFERENCES users(id);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

