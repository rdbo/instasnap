CREATE TABLE users(
    id INTEGER,
    handle VARCHAR(40) UNIQUE NOT NULL,
    name VARCHAR(64) NOT NULL,
    password_hash CHAR(60) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE user_session(
    user_id INTEGER,
    auth_token CHAR(36) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE posts(
    id INTEGER,
    user_id INTEGER,
    text VARCHAR(512) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE post_media(
    post_id INTEGER,
    kind VARCHAR(32), /* "video" or "image" */
    source VARCHAR(256),
    FOREIGN KEY (post_id) REFERENCES posts(id)
);

CREATE TABLE post_likes(
    post_id INTEGER,
    user_id INTEGER,
    PRIMARY KEY (post_id, user_id),
    FOREIGN KEY (post_id) REFERENCES posts(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE post_comments(
    post_id INTEGER,
    user_id INTEGER,
    comment VARCHAR(512),
    FOREIGN KEY (post_id) REFERENCES posts(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

/* Passwords: test123 */
INSERT INTO users(id, handle, name, password_hash) VALUES
    (1, 'tester', 'Tester 123', '$2b$10$RA5skFUvLZ8THb9qUjqPseG8zqHntZkMjLwqQs2npYhY9UuF291nG'),
    (2, 'john.doe', 'John Doe', '$2b$10$RA5skFUvLZ8THb9qUjqPseG8zqHntZkMjLwqQs2npYhY9UuF291nG'),
    (3, 'goofy.ahh', 'Goofy Ahh', '$2b$10$RA5skFUvLZ8THb9qUjqPseG8zqHntZkMjLwqQs2npYhY9UuF291nG'),
    (4, 'ligma.1337', 'Ligma 1337', '$2b$10$RA5skFUvLZ8THb9qUjqPseG8zqHntZkMjLwqQs2npYhY9UuF291nG');

INSERT INTO posts(id, user_id, text) VALUES
    (1, 2, 'this is an example post'),
    (2, 3, 'hello everyone' || x'0a' || 'this post has more than one line' || x'0a' || 'test 12345' || x'0a' || 'abc 123'),
    (3, 4, 'this is another example post'),
    (4, 4, 'this is a media-less post' || x'0a' || 'this is a reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeally looooooooooooooooooooooooooooooong line' || x'0a' || 'i can add a ton of lines in a media-less post' || x'0a' || 'without triggering the show more' || x'0a' || 'lets trigger it forcefully though' || x'0a' || 'alright maybe this is enough' || x'0a' || 'lets check' || x'0a' || 'oops not enough' || x'0a' || 'lets keep going' || x'0a' || 'a little more...' || x'0a' || 'should be almost there' || x'0a' || 'aight' || x'0a' || 'this should be enough now');

INSERT INTO post_media(post_id, kind, source) VALUES
    (1, 'image', 'https://wallpaperaccess.com/full/946122.jpg'),
    (2, 'image', 'https://wallpaperaccess.com/full/815776.jpg'),
    (2, 'image', 'https://wallpaperaccess.com/full/946122.jpg'),
    (3, 'image', 'https://wallpaperaccess.com/full/946122.jpg');

INSERT INTO post_likes VALUES
    (1, 1),
    (1, 2),
    (1, 3),
    (1, 4),
    (2, 2),
    (2, 3),
    (2, 4);
