
import {writeFileSync} from 'fs';

//writes data to the db file
const saveToDatabase = (DB) => {
  console.log(DB);
  writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2), {
      encoding: "utf-8",
    });
  };

  export default saveToDatabase;