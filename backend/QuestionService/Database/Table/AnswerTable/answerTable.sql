CREATE TABLE Answer(
    user_id VARCHAR(100),
    question_id VARCHAR(100),
    answer_id VARCHAR(100),
    answer_descprition VARCHAR(400),
    isDelete BIT DEFAULT '0',
    upvote int DEFAULT '0',
    downvote int DEFAULT '0'

)