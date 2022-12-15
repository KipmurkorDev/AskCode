CREATE PROCEDURE getQuestion (
    @question_id VARCHAR(100)
)
AS
BEGIN
SELECT * FROM Question
WHERE question_id=@question_id and isDelete='0'
END