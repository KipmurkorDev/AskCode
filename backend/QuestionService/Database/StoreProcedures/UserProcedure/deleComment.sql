CREATE  or ALTER PROCEDURE deleComment(
    @comment_id VARCHAR(100)
)
as
BEGIN
UPDATE Comment
SET isDelete='1'
WHERE comment_id=@comment_id
END