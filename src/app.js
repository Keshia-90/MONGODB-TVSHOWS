const yargs = require("yargs");

const { connection, client } = require("./db/connection");

const { addShow, listShows } = require("./utils");

const app = async (yargsObj) => {
    const collection = await connection();
    if(yargsObj.add) {
        await addShow(collection, {title: yargsObj.title, actor: yargsObj.actor, year: yargsObj.year, ratings: yargsObj.ratings});
        console.log("Success, entry added");
    } else if(yargsObj.list) {
        await listShows(collection);
        }else {
        console.log("Incorrect command");
    }
    await client.close();
};

app(yargs.argv);