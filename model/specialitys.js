const mongoose = require('mongoose');
const chuyennganh = new mongoose.Schema(
    {
        machuyennganh: 'String',
        tenchuyennganh: 'String'
    }
)
module.exports = mongoose.model('specialitys', chuyennganh);