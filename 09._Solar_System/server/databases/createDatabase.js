import db from "./connection.js"

console.log(process.argv.findIndex((argument) => argument === "delete_mode"));

const isDeleteMode = true;

if (isDeleteMode) {
    db.exec(`DROP TABLE planets;`);
    db.exec(`DROP TABLE people;`);
}

db.exec(`
CREATE TABLE IF NOT EXISTS planets(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    size FLOAT,
    is_habitable BOOLEAN
);
`);

db.exec(`
CREATE TABLE IF NOT EXISTS people(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    planet_id INTEGER,
    FOREIGN KEY (planet_id) REFERENCES planets(id)
)
`);

if (isDeleteMode) {
    db.exec(`INSERT INTO planets(name, is_habitable) VALUES ('Mercury', False );`);
    db.exec(`INSERT INTO planets(name, is_habitable) VALUES ('Venus', False );`);
    db.exec(`INSERT INTO planets(name, is_habitable) VALUES ('Earth', True );`);
    db.exec(`INSERT INTO planets(name, is_habitable) VALUES ('Mars', False );`);
}
