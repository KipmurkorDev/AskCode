CREATE PROCEDURE getuser(@email varchar(100))
AS
BEGIN
        SELECT *
        FROM Users
        WHERE email= @email AND isDelete=0
END