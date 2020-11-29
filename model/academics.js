const mongoose = require('mongoose');
const hocvi = new mongoose.Schema(
    {
        mahocvi: 'String',
        tenhocvi: 'String'
    }
)
module.exports = mongoose.model('academics', hocvi);
