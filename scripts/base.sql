CREATE TABLE users(
    id INTEGER,
    handle VARCHAR(40) UNIQUE NOT NULL,
    name VARCHAR(64) NOT NULL,
    password_hash CHAR(60) NOT NULL,
    profile_picture VARCHAR(256),
    PRIMARY KEY (id)
);

CREATE TABLE user_session(
    user_id INTEGER,
    auth_token CHAR(36) NOT NULL,
    expiration_date TEXT NOT NULL DEFAULT (date('now', '+1 year')),
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
    kind VARCHAR(32) NOT NULL, /* "video" or "image" */
    source VARCHAR(256) NOT NULL,
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
    comment VARCHAR(512) NOT NULL,
    FOREIGN KEY (post_id) REFERENCES posts(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

/* Passwords: test123 */
INSERT INTO users(id, handle, name, password_hash, profile_picture) VALUES
    (1, 'tyler', 'Tyler Durden', '$2b$10$RA5skFUvLZ8THb9qUjqPseG8zqHntZkMjLwqQs2npYhY9UuF291nG', 'https://yt3.ggpht.com/a/AATXAJxh8gwCtIMEFss7zrKOqj4f972-KdapGx8Huw=s900-c-k-c0xffffffff-no-rj-mo'),
    (2, 'travis.taxi', 'Travis', '$2b$10$RA5skFUvLZ8THb9qUjqPseG8zqHntZkMjLwqQs2npYhY9UuF291nG', 'https://static1.srcdn.com/wordpress/wp-content/uploads/2020/02/Travis-in-Taxi-Driver-3.jpg'),
    (3, 'goofy.ahh', 'Goofy Ahh', '$2b$10$RA5skFUvLZ8THb9qUjqPseG8zqHntZkMjLwqQs2npYhY9UuF291nG', NULL),
    (4, 'ligma.1337', 'Ligma 1337', '$2b$10$RA5skFUvLZ8THb9qUjqPseG8zqHntZkMjLwqQs2npYhY9UuF291nG', 'https://i.pinimg.com/originals/e8/cc/7a/e8cc7ab3f5811fc222975f271245f661.png');

INSERT INTO posts(id, user_id, text) VALUES
    (1, 2, 'this is an example post'),
    (2, 3, 'hello everyone' || x'0a' || 'this post has more than one line' || x'0a' || 'test 12345' || x'0a' || 'abc 123' || x'0a' || 'instasnap is kewl' || x'0a' || 'lets add more lines' || x'0a' || 'since we need to test the read more feature' || x'0a' || 'hopefully this is enough'),
    (3, 4, 'this is another example post'),
    (4, 4, 'this is a media-less post' || x'0a' || 'this is a reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeally looooooooooooooooooooooooooooooong line' || x'0a' || 'i can add a ton of lines in a media-less post' || x'0a' || 'without triggering the show more' || x'0a' || 'lets trigger it forcefully though' || x'0a' || 'alright maybe this is enough' || x'0a' || 'lets check' || x'0a' || 'oops not enough' || x'0a' || 'lets keep going' || x'0a' || 'a little more...' || x'0a' || 'should be almost there' || x'0a' || 'aight' || x'0a' || 'this should be enough now'),
    (5, 2, ''),
    (6, 4, 'this is a video post');

INSERT INTO post_media(post_id, kind, source) VALUES
    (1, 'image', 'https://wallpaperaccess.com/full/946122.jpg'),
    (2, 'image', 'https://wallpaperaccess.com/full/815776.jpg'),
    (2, 'image', 'https://wallpaperaccess.com/full/946122.jpg'),
    (3, 'image', 'https://wallpaperaccess.com/full/946122.jpg'),
    (5, 'image', 'https://wallpaperaccess.com/full/381403.jpg'),
    (6, 'video', 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4'),
    (6, 'image', 'https://wallpaperaccess.com/full/381403.jpg');

INSERT INTO post_likes(post_id, user_id) VALUES
    (1, 1),
    (1, 2),
    (1, 3),
    (1, 4),
    (2, 2),
    (2, 3),
    (2, 4);

INSERT INTO post_comments(post_id, user_id, comment) VALUES
    (3, 2, 'hello abc'),
    (3, 2, 'hello abc'),
    (3, 2, 'hello abc'),
    (3, 2, 'hello abc'),
    (3, 2, 'hello abc'),
    (3, 2, 'hello abc'),
    (3, 2, 'hello abc'),
    (3, 2, 'hello abc'),
    (3, 2, 'hello abc'),
    (4, 3, 'abc 123'),
    (4, 3, 'abc 123'),
    (4, 3, 'abc 123'),
    (4, 3, 'abc 123'),
    (4, 3, 'abc 123'),
    (4, 3, 'abc 123'),
    (4, 3, 'abc 123'),
    (4, 3, 'abc 123');
