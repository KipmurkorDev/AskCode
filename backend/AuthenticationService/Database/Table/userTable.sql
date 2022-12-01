CREATE TABLE Users(
user_id VARCHAR(100) Primary Key,
Name VARCHAR(100),
user_name VARCHAR(120),
email VARCHAR(100),
user_password VARCHAR(100),
isSent bit DEFAULT '0',
isDelete bit DEFAULT '0',
)
