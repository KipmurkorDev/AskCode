CREATE or ALTER  PROCEDURE getAnswers(
    @question_id VARCHAR(100),
    @value int
)
  AS
  BEGIN
DECLARE @RowsOfPage AS INT
SET @RowsOfPage=2
  SELECT Question.user_id,Question.question_id, Question.created, Answer.isAccepted, Answer.answer_id, Answer.answer_created, Answer.answer_descprition, Question.title,Question.description 
    FROM Question
    left JOIN Answer on Question.question_id=Answer.question_id
    WHERE Question.question_id=@question_id and Question.isDelete=0
    ORDER BY Answer.answer_created
    OFFSET (@value-1)*@RowsOfPage ROWS
    FETCH NEXT @RowsOfPage ROWS ONLY  
    SELECT * FROM downupvote
    
END