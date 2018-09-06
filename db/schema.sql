
CREATE DATABASE burgers_db;
USE burgers_db;


DROP TABLE IF EXISTS burgers;
CREATE TABLE `burgers`
(
	`id` int NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`inCart` BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);