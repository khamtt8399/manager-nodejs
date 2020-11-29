const mongoose = require('mongoose');
const khoa = new mongoose.Schema(
    {
        makhoa: 'String',
        tenkhoa: 'String'
    }
)
module.exports = mongoose.model('units', khoa);