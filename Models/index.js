require('../config/db.connection');


module.exports = {
    // This is exporting the nft model
    Gear: require('./Gear'),
    // This is exporting the author model
    Artist: require('./Artist')
    // This is exporting my user model
}

