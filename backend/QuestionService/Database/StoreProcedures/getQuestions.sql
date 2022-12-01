CREATE PROCEDURE getQuestions
  AS
  BEGIN
  SELECT * FROM Question
  WHERE  isDelete=0
END