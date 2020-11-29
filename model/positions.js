const mongoose = require('mongoose');
const chucvu = new mongoose.Schema(
    {
        machucvu: 'String',
        tenchucvu: 'String'
    }
)
module.exports = mongoose.model('positions', chucvu);