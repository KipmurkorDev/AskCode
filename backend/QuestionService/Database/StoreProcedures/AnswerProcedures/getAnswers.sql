CREATE PROCEDURE getAnswers (
    @answer_id VARCHAR(100)
)
AS
BEGIN
SELECT * FROM Answer
WHERE answer_id=@answer_id and isDelete='0'
END