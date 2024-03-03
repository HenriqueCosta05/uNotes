CREATE TABLE token (
                       id SERIAL PRIMARY KEY,
                       token VARCHAR(255),
                       is_logged_out BOOLEAN,
                       user_id INT,
                       FOREIGN KEY (user_id) REFERENCES "user" (user_id)
);
