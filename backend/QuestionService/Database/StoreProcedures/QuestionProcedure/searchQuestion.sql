CREATE  or alter PROCEDURE getsearchQuestions(
    @search_value VARCHAR(400)
)
  AS
  BEGIN
  SELECT * FROM Question
  WHERE title LIKE '%' + @search_value +'%' and isDelete=0
END
