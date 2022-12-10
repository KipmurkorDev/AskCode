CREATE PROCEDURE deleQuestion(
  @question_id VARCHAR(100),
  @answer_id VARCHAR(100)
)
AS
BEGIN
DELETE from Question WHERE Question.question_id=@question_id
DELETE from Answer WHERE Answer.question_id=@question_id
DELETE from Comment WHERE Comment.answer_id=@answer_id

END