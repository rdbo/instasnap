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
    FOREIGN KEY (user_id) REFERENCES user(id)
);

/* Password: test123 */
INSERT INTO users(handle, name, password_hash) VALUES ('tester', 'Tester 123', '$2y$10$PKYyei8/Hhm8ol8iQ0DSTOnsoG4bWlfdM6A630wl6fliKl.iarub6');
