CREATE Table downUpVote(
    user_id VARCHAR(100) NOT NULL,
    answer_id VARCHAR(100) NOT NULL,
    Vote BIT DEFAULT 0,
)
