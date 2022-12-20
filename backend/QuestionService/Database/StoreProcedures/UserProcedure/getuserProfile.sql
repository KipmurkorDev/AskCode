CREATE  or Alter PROCEDURE getProfile(
    @user_id VARCHAR(100)
)
  AS
  BEGIN
  SELECT Users.user_name, Users.email, Users.Name FROM Users WHERE Users.user_id=@user_id and isDelete='0'
  SELECT Question.title, Question.question_id, Question.created FROM Question WHERE Question.user_id=@user_id and isDelete='0'
  SELECT Answer.user_id,Answer.question_id, Answer.answer_descprition, Answer.answer_id, Answer.answer_created FROM Answer WHERE Answer.user_id=@user_id and isDelete='0'
  SELECT Comment.user_id, Comment.question_id,Comment.answer_id, Comment.comment_id, Comment.comment_descprition, Comment.comment_created FROM Comment WHERE Comment.user_id=@user_id and isDelete='0'
END