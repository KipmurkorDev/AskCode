CREATE TABLE Comment (
    user_id VARCHAR(100) NOT NULL,
    answer_id VARCHAR(100) NOT NULL FOREIGN KEY REFERENCES Answer(answer_id) ON DELETE CASCADE,
    comment_id VARCHAR(100) NOT NULL,
    comment_descprition VARCHAR(400) NOT NULL,
    isDelete BIT DEFAULT '0',
    comment_created VARCHAR(100) NOT NULL
)