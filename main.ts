// The Battery's Last Text to Its Charger
// One line of plain text (at most 200 characters): the phone battery's
// final message to the charger it waited for all day.
// Writes the line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "we had a good run. you kept me warm all night, and i still left you for a stranger's usb port. don't wait up. i'm at 1% and he's at 100%.";

// The gate only accepts 1-200 characters: refuse to write anything longer.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length}-character entry to /output/entry.txt`);
