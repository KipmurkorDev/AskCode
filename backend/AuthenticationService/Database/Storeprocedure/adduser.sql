CREATE PROCEDURE adduser (
    @user_id VARCHAR(100),
    @Name VARCHAR(100),
    @user_name VARCHAR(100),
    @email VARCHAR(100),
    @user_password VARCHAR(100)
)
AS
BEGIN
INSERT users(user_id,Name, user_name, email, user_password) VALUES (@user_id,@Name, @user_name,  @email, @user_password)
END