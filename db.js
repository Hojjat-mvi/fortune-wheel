let database = {};

export function insertRecord(key, value) {
    database[key] = value;
    console.log(database)
}

export function getRecord(key) {
    
    return database[key];
}

