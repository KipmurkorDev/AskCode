CREATE PROCEDURE acceptedAnswer(
    @answer_id VARCHAR(100)
)
AS
BEGIN
UPDATE Answer SET isAccepted='1' WHERE answer_id=@answer_id
END