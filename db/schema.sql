DROP DATABASE IF EXISTS notes_db;
CREATE DATABASE notes_db;
USE notes_db;


CREATE TABLE notes (
  id int AUTO_INCREMENT,
  note VARCHAR(255) NOT NULL,
  PRIMARY KEY(id)
);
-- CREATE TABLE sentiment (
--   id INT NOT NULL AUTO_INCREMENT,
--   non_specific BOOLEAN DEFAULT FALSE,
--   gratitude BOOLEAN DEFAULT FALSE,
--   grievance BOOLEAN DEFAULT FALSE,
--   praise BOOLEAN DEFAULT FALSE,
--   prayer BOOLEAN DEFAULT FALSE,
--   quote BOOLEAN DEFAULT FALSE,
--   remembrance BOOLEAN DEFAULT FALSE,
--   remourse BOOLEAN DEFAULT FALSE,
--   worship BOOLEAN DEFAULT FALSE,
--   PRIMARY KEY(id),
--   FOREIGN KEY(note_id) REFERENCES notes(note_id)
-- );

-- CREATE TABLE occassion (
--   id INT NOT NULL AUTO INCREMENT,
--   reflection BOOLEAN DEFAULT FALSE,
--   anniversary BOOLEAN DEFAULT FALSE,
--   appreciation BOOLEAN DEFAULT FALSE,
--   back_to_school BOOLEAN DEFAULT FALSE,
--   baptism BOOLEAN DEFAULT FALSE,
--   bar_mitzvah BOOLEAN DEFAULT FALSE,
--   bat_mitzvah BOOLEAN DEFAULT FALSE,
--   birthday BOOLEAN DEFAULT FALSE,
--   confirmation BOOLEAN DEFAULT FALSE,
--   congratulations BOOLEAN DEFAULT FALSE,
--   encouragement BOOLEAN DEFAULT FALSE,
--   first_communion BOOLEAN DEFAULT FALSE,
--   friendship BOOLEAN DEFAULT FALSE,
--   graduation BOOLEAN DEFAULT FALSE,
--   health_and_recovery BOOLEAN DEFAULT FALSE,
--   new_baby BOOLEAN DEFAULT FALSE,
--   milestone BOOLEAN DEFAULT FALSE,
--   quinceañera BOOLEAN DEFAULT FALSE,
--   retirement BOOLEAN DEFAULT FALSE,
--   sympathy BOOLEAN DEFAULT FALSE,
--   wedding BOOLEAN DEFAULT FALSE,
--   PRIMARY KEY(id),
--   FOREIGN KEY(note_id) REFERENCES notes(note_id)
-- )


