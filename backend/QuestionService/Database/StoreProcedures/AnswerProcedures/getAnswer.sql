CREATE or ALTER  PROCEDURE getAnswer(
    @question_id VARCHAR(100)
)
  AS
  BEGIN
  SELECT Answer.answer_id,Question.question_id,  Question.title,Question.description,  Answer.answer_descprition
    FROM Question
    left JOIN Answer
    on Question.question_id=Answer.question_id
    WHERE Question.question_id=@question_id and Question.isDelete=0
    
END
