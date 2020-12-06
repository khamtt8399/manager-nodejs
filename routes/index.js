var express = require("express");
var router = express.Router();
var teacherModel = require("../model/teacher");
var chucvuModel = require("../model/positions");
var chuyennganhModel = require("../model/specialitys");
var hocvi = require("../model/academics");
var khoa = require("../model/units");
var func = require('../functions/string');
// Tai du lieu can thiet
router.get("/", function (req, res, next) {
  chucvuModel.find({}, function (err, result) {
    cv = result;
  });
  chuyennganhModel.find({}, function (err, result) {
    cn = result;
  });
  hocvi.find({}, function (err, result) {
    hv = result;
  });
  khoa.find({}, function (err, result) {
    k = result;
  });
  res.redirect("/view");
});
// Render trang xem thong tin giarng vien
router.get("/view", function (req, res, next) {
  teacherModel.find({}, function (err, result) {
    res.render("view", {
      list: result,
      title: "Trang chủ",
      tieude: "DANH SÁCH THÔNG TIN GIẢNG VIÊN",
    });
  });
});

// Render trang them thong tin giarng vien
router.get("/add", function (req, res, next) {
  res.render("add", {
    title: "Thêm thông tin giảng viên",
    tieude: "THÊM THÔNG TIN GIẢNG VIÊN",
    chucvu: cv,
    chuyennganh: cn,
    hocvi: hv,
    khoa: k,
  });
});
// Them thong tin giang vien vao MongoDB
router.post("/add", function (req, res, next) {
    var data = {
      'ho': func.convert(req.body.ho),
      'ten': func.convert(req.body.ten),
      'cmnd': func.trim(req.body.cmnd),
      'ngaysinh': func.trim(req.body.ngaysinh),
      'gioitinh': func.trim(req.body.gioitinh),
      'diachi': func.trim(req.body.diachi),
      'sdt': func.trim(req.body.sdt),
      'email': func.trim(req.body.email),
      'chucvu': func.trim(req.body.chucvu),
      'hocvi': func.trim(req.body.hocvi),
      'khoa': func.trim(req.body.khoa),
      'chuyennganh': func.trim(req.body.chuyennganh),
    };
    var addTeacher = new teacherModel(data);
    addTeacher.save();
    res.redirect('/');
    
});
// Render trang cap nhat thong tin giang vien
router.get("/update/:id", function (req, res, next) {
  var id = req.params.id;
  teacherModel.findById(id, function (err, result) {
    if(!err)
    {
      res.render("update", {
        title: "Cập nhật thông tin giảng viên",
        tieude: "SỬA THÔNG TIN GIẢNG VIÊN",
        giangvien: result,
        chucvu: cv,
        chuyennganh: cn,
        hocvi: hv,
        khoa: k,
      });
    }
  });
});

// Cap nhat thong tin giang vien vao MongoDB
router.post("/update/:id", function (req, res, next) {
  var data = {
    'ho': func.convert(req.body.ho),
    'ten': func.convert(req.body.ten),
    'cmnd': func.trim(req.body.cmnd),
    'ngaysinh': func.trim(req.body.ngaysinh),
    'gioitinh': func.trim(req.body.gioitinh),
    'diachi': func.trim(req.body.diachi),
    'sdt': func.trim(req.body.sdt),
    'email': func.trim(req.body.email),
    'chucvu': func.trim(req.body.chucvu),
    'hocvi': func.trim(req.body.hocvi),
    'khoa': func.trim(req.body.khoa),
    'chuyennganh': func.trim(req.body.chuyennganh),
  };
  var id = req.params.id;
  teacherModel.findByIdAndUpdate(id, data, function (err, result) { 
    res.redirect("/");
  });
});

// Render trang dang nhap
router.get("/login", function (req, res, next) {
  res.render("login", { title: "Đăng nhập hệ thống" });
});

// Xoa thong tin giang vien
router.get('/delete/:id', function(req, res, next)
{
  var id = req.params.id;
  teacherModel.findByIdAndRemove(id, function(err, result)
  {
    res.redirect('/');
  });
});
module.exports = router;
