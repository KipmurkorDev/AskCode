CREATE  or ALTER PROCEDURE getQuestions
AS

BEGIN
DECLARE @PageNumber AS INT
DECLARE @RowsOfPage AS INT
SET @PageNumber=1
SET @RowsOfPage=6
    SELECT * FROM Question
    WHERE  isDelete=0
    ORDER BY title
    OFFSET (@PageNumber-1)*@RowsOfPage ROWS
    FETCH NEXT @RowsOfPage ROWS ONLY                 

END