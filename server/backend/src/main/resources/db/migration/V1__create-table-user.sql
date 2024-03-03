CREATE TABLE "user" (
                        user_id SERIAL PRIMARY KEY,
                        username VARCHAR(255) UNIQUE,
                        name VARCHAR(255),
                        email VARCHAR(255) UNIQUE,
                        phone_number VARCHAR(20),
                        password VARCHAR(255),
                        role VARCHAR(50)
);
