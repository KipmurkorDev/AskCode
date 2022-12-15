CREATE TABLE Question
(
    user_id VARCHAR(100) NOT NULL FOREIGN KEY REFERENCES Users(user_id)  ON DELETE CASCADE,
    question_id varchar(100) PRIMARY KEY  NOT NULL,
    title varchar(400) NOT NULL,
    description VARCHAR(100) NOT NULL,
    isDelete BIT DEFAULT '0',
    created VARCHAR(100) NOT NULL
)