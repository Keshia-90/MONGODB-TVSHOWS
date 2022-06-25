exports.addShow = async (collection, showObj) => {
    try {
        const addEntry = await collection.insertOne(showObj);
        console.log(addEntry);
    } catch (error) {
        console.log(error);
    }
};

exports.listShows = async (collection) => {
    try {
        const showList = await collection.find().toArray();
        console.log(showList);
    } catch (error) {
        console.log(error);
    }
};


