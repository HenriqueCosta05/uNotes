CREATE TYPE role AS ENUM ('USER', 'ADMIN');

ALTER TABLE usuario
    ALTER COLUMN role TYPE role;