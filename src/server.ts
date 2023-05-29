import mongoose from "mongoose";
import app from "./app";
import config from "./config/index";

async function batman() {
    try{
        await mongoose.connect(config.database_url as string);
        console.log(`Db is Connected`)

        app.listen(config.port, () => {
            console.log(`app listening on port ${config.port}`)
          })
    }catch(err){
        console.log(`Failed to connect`, err);
    }
}

batman();