CREATE PROCEDURE deleAnswer(
    @answer_id VARCHAR(100)
)
AS
BEGIN
UPDATE Answer SET isDelete='1' WHERE answer_id=@answer_id
UPDATE Comment SET isDelete='1' WHERE answer_id=@answer_id
END