CREATE or Alter PROCEDURE getComments(
    @answer_id VARCHAR(100)
)
  AS
  BEGIN
  SELECT * FROM Comment
  WHERE  answer_id=@answer_id and isDelete='0'
END