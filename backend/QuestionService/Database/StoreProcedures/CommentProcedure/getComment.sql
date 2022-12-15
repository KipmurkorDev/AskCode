CREATE PROCEDURE getComment(
    @comment_id VARCHAR(100)
)
AS
BEGIN
SELECT * FROM Comment
WHERE  comment_id=@comment_id and isDelete='0'
END