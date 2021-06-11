const config = {
    "type": "postgres",
    "username": "good_dog",
    "database": "go_dog_db",
    "password": "Star1234",
    "host": "localhost",
    "port": 6063,
    "migrations": [
        "src/domain/database/migrations/*.ts",
    ],
    "entities": [
        "src/domain/database/entities/*.ts"
    ],
    "cli": {
        "migrationsDir": "src/domain/database/migrations"
    }
}

if(process.env.NODE_ENV === "dev" || process.env.NODE_ENV === "DEV") {
    Object.assign(config, {
        "database": "go_dog_dev_db"
    });
}

module.exports = config;