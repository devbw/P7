CREATE TABLE Users (
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(40) NOT NULL,
    lastname VARCHAR(40) NOT NULL,
    email VARCHAR(40) NOT NULL,
    password VARCHAR(100) NOT NULL,
    created DATETIME,
    updated DATETIME,
    PRIMARY KEY (id)
) ENGINE=INNODB;

ALTER TABLE Users ADD UNIQUE (email);

CREATE TABLE Posts (
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    post_content VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    user_id SMALLINT UNSIGNED NOT NULL,
    created DATETIME,
    updated DATETIME,
    PRIMARY KEY (id)
) ENGINE=INNODB;

CREATE INDEX IDX_USER_ID ON Posts (user_id);

CREATE TABLE Likes (
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    user_id SMALLINT UNSIGNED NOT NULL,
    post_id SMALLINT UNSIGNED NOT NULL,
    created DATETIME,
    updated DATETIME,
    PRIMARY KEY (id)
) ENGINE=INNODB;

CREATE INDEX IDX_USER_ID ON Likes (user_id);
CREATE INDEX IDX_POST_ID ON Likes (post_id);
CREATE UNIQUE INDEX USER_ID__POST_ID ON Likes (user_id, post_id);

CREATE TABLE Comments (
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    user_id SMALLINT UNSIGNED NOT NULL,
    post_id SMALLINT UNSIGNED NOT NULL,
    created DATETIME,
    updated DATETIME,
    PRIMARY KEY (id)
) ENGINE=INNODB;

CREATE INDEX IDX_USER_ID ON Comments (user_id);
CREATE INDEX IDX_POST_ID ON Comments (post_id);
CREATE UNIQUE INDEX USER_ID__POST_ID ON Comments (user_id, post_id);