import { Database } from "sqlite3";
const db = new Database("db.sqlite");

db.run("CREATE TABLE IF NOT EXISTS clubs (id INTEGER PRIMARY KEY, name TEXT)");
db.run("CREATE TABLE IF NOT EXISTS players (id INTEGER PRIMARY KEY, name TEXT, club_id INTEGER, FOREIGN KEY(club_id) REFERENCES clubs(id), UNIQUE(name, club_id) ON CONFLICT IGNORE)");
//save to db file
// path: src/local/fbsim.sqlite

db.run("INSERT INTO clubs (name) VALUES ('Barcelona')");
db.run("INSERT INTO clubs (name) VALUES ('Real Madrid')");

export function get_club_id(name:string) {
  return new Promise((resolve, reject) => {
    db.get("SELECT id FROM clubs WHERE name = ?", [name], (err, row:any) => {
      if (err) {
        reject(err);
      } else {
        resolve(row.id);
      }
    });
  });
}

let barcelona = get_club_id("Barcelona");
db.run("INSERT INTO players (name, club_id) VALUES ('Lionel Messi', ?)", [barcelona]);
db.run("INSERT INTO players (name, club_id) VALUES ('Gerard Pique', ?)", [barcelona]);

