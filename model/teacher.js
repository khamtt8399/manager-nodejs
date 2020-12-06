// Require thu vien
const mongoose = require('mongoose');
// Tao Schema
const teacher = new mongoose.Schema(
    {
        ho: 'String',
        ten: 'String',
        cmnd: 'String',
        ngaysinh: 'String',
        gioitinh: 'String',
        diachi: 'String',
        sdt: 'String',
        email: 'String',
        chucvu: 'String',
        hocvi: 'String',
        khoa: 'String',
        chuyennganh: 'String'
    }, { versionKey: null }
)
// 
module.exports = mongoose.model('teachers', teacher);