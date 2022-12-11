CREATE  or ALTER PROCEDURE deleQuestion(
  @question_id VARCHAR(100)
)
AS
BEGIN
UPDATE Question SET isDelete='1' WHERE Question.question_id=@question_id
UPDATE Answer SET isDelete='1' WHERE Answer.question_id=@question_id
UPDATE Comment SET isDelete='1' WHERE Comment.answer_id=@question_id

END