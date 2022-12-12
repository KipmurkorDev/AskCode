CREATE TABLE Question
(
    user_id VARCHAR(100) FOREIGN KEY REFERENCES Users(user_id),
    question_id varchar(100),
    title varchar(400),
    description VARCHAR(100),
    isDelete BIT DEFAULT '0',
    created VARCHAR(100)
)