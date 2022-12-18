CREATE or ALTER PROCEDURE acceptedAnswer(
    @answer_id VARCHAR(100),
    @isAccepted BIT 
)
AS
BEGIN
UPDATE Answer SET isAccepted=@isAccepted WHERE answer_id=@answer_id
END