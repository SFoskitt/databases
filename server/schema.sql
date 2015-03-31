CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
user_id INT(3),
username VARCHAR(20),
text VARCHAR(140),
roomname VARCHAR (20)
  /* Describe your table here.*/
);

CREATE TABLE users(
name VARCHAR (20),
ID INT (3) NOT NULL auto_increment,
PRIMARY KEY (ID)
);
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

