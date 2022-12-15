CREATE TABLE Answer(
    user_id VARCHAR(100) NOT NULL,
    question_id VARCHAR(100) NOT NULL FOREIGN KEY REFERENCES Question(question_id) ON DELETE CASCADE,
    answer_id VARCHAR(100) NOT NULL PRIMARY KEY,
    answer_descprition VARCHAR(400)NOT NULL,
    isDelete BIT DEFAULT '0',
    answer_created VARCHAR(100) NOT NULL,
    isAccepted BIT DEFAULT '0'
)