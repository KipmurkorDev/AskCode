CREATE or Alter PROCEDURE inserUpdateVote(
    @user_id VARCHAR(200),
    @answer_id VARCHAR(200),
    @question_id VARCHAR(100),
    @upvote INT=0,
    @downvote INT=0
    )
AS
BEGIN
    IF EXISTS(
    SELECT*
    FROM downUpVote
    WHERE answer_id = @answer_id AND user_id = @user_id) 
    BEGIN
        UPDATE downUpVote
         SET upvote = @upvote ,downvote=@downvote
         WHERE answer_id = @answer_id AND user_id = @user_id;
    END
ELSE BEGIN
        INSERT INTO downUpVote
            (user_id, answer_id,question_id, upvote, downvote )
        VALUES
            (@user_id, @answer_id, @question_id, @upvote, @downvote)
    END

END