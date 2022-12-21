CREATE  or ALTER PROCEDURE getQuestions(
    @PageNumber int
)
AS

BEGIN
DECLARE @RowsOfPage AS INT
SET @RowsOfPage=5
    SELECT * FROM Question
    WHERE  isDelete=0
    ORDER BY title
    OFFSET (@PageNumber-1)*@RowsOfPage ROWS
    FETCH NEXT @RowsOfPage ROWS ONLY                 
SELECT COUNT(Question.question_id) as count FROM Question
END