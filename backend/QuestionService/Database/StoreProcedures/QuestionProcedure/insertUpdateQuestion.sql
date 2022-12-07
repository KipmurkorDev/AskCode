CREATE PROCEDURE insertUpdate(
    @user_id VARCHAR(200),
    @question_id VARCHAR(100),
    @title VARCHAR(400),
    @description VARCHAR(400)
    )
AS
BEGIN
    IF EXISTS(
    SELECT*
    FROM Question
    WHERE question_id = @question_id AND user_id=@user_id) 
    BEGIN
        UPDATE Question
         SET title = @title ,description=@description
         WHERE question_id = @question_id AND user_id = @user_id;
    END
ELSE BEGIN
        INSERT INTO Question
            (user_id, question_id,title, description )
        VALUES
            (@user_id, @question_id, @title, @description)
    END

END