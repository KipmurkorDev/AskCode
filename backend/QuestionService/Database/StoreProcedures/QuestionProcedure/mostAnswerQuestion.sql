CREATE OR ALTER PROCEDURE mostAnswerQuestion
AS
BEGIN
SELECT Question.title, Question.question_id,Question.created, COUNT(Answer.question_id) as count
FROM Question
LEFT JOIN Answer ON Question.question_id=Answer.question_id
GROUP BY  Question.title,Question.question_id,Question.created HAVING COUNT(Answer.question_id)>0
ORDER by count  DESC
END