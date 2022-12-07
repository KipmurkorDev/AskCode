CREATE PROCEDURE insertUpdateAnswer(
    @user_id VARCHAR(200),
    @question_id VARCHAR(100),
    @answer_id VARCHAR(400),
    @answer_descprition VARCHAR(400)
    )
AS
BEGIN
    IF EXISTS(
    SELECT*
    FROM Answer
    WHERE answer_id = @answer_id AND question_id=@question_id)
    BEGIN
        UPDATE Answer
         SET answer_descprition=@answer_descprition
         WHERE answer_id = @answer_id AND question_id=@question_id
    END
ELSE BEGIN
        INSERT INTO Answer
            (user_id, question_id, answer_id, answer_descprition )
        VALUES
            (@user_id, @question_id, @answer_id, @answer_descprition)
    END

END
