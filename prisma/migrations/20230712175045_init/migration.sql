-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Nation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "population" INTEGER
);
INSERT INTO "new_Nation" ("id", "name", "population") SELECT "id", "name", "population" FROM "Nation";
DROP TABLE "Nation";
ALTER TABLE "new_Nation" RENAME TO "Nation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
