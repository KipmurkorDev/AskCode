CREATE Table downUpVote(
    user_id VARCHAR(100),
    answer_id VARCHAR(100),
    question_id VARCHAR(100),
    upvote INT default '0',
    downvote INT default'0'
)