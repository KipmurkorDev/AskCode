CREATE PROCEDURE mostAnswerQuestion
AS
BEGIN
SELECT Question.title, COUNT(Answer.question_id) as count
FROM Question
LEFT JOIN Answer ON Question.question_id=Answer.question_id
GROUP BY  Question.title
ORDER by count  DESC
END
