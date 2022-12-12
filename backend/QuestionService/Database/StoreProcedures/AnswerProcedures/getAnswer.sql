CREATE or ALTER  PROCEDURE getAnswer(
    @question_id VARCHAR(100)
)
  AS
  BEGIN
  SELECT Question.user_id,Question.question_id, Question.created, Answer.isAccepted, Answer.answer_id, Answer.answer_created, Answer.answer_descprition, Question.title,Question.description 
    FROM Question
    left JOIN Answer
    on Question.question_id=Answer.question_id
    WHERE Question.question_id=@question_id and Question.isDelete=0
    
END