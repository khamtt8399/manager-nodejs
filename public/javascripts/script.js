/**
 * Chuyen trang
 */
function toLogin() {
  window.location = "/login";
}
function toAddPage() {
  window.location = "/add";
}

/**
 * Xac nhan xoa
 */
function comfirmDelete(msg) {
  if(window.confirm(msg) == true)
  {
    return true;
  }
  return false;
}

// Rang buoc du lieu nhap vao
$(document).ready(function () {
  $('form[id="addForm"]').validate({
    onfocusout: false,
    onkeyup: false,
    onclick: false,
    rules: {
      "ho": 'required',
      "ten": 'required',
      "cmnd": {
        'required': true,
        minlength: 9,
        maxlength: 9
      },
      "diachi": 'required',
      "sdt": {
        'required': true,
        minlength: 10,
        maxlength: 10
      },
      "email": {
        'required': true,
        email: true
      }
    },
    messages: {
      "ho": "<span style='color:red;'>Vui lòng nhập họ của bạn!</span>",
      "ten": "<span style='color:red;'>Vui lòng nhập tên của bạn!</span>",
      "cmnd": {
        'required': "<span style='color:red;'>Vui lòng nhập số chứng minh nhân dân của bạn!</span>",
        minlength: "<span style='color:red;'>Vui lòng nhập số chứng minh nhân dân hợp lệ!</span>",
        maxlength: "<span style='color:red;'>Vui lòng nhập số chứng minh nhân dân hợp lệ!</span>"
      },
      "diachi": "<span style='color:red;'>Vui lòng nhập địa chỉ của bạn!</span>",
      "sdt": {
        'required': "<span style='color:red;'>Vui lòng nhập số điện thoại của bạn!</span>",
        minlength: "<span style='color:red;'>Vui lòng nhập số điện thoại hợp lệ!</span>",
        maxlength: "<span style='color:red;'>Vui lòng nhập số điện thoại hợp lệ!</span>"
      },
      "email": {
        'required': "<span style='color:red;'>Vui lòng nhập email của bạn!</span>",
        email: "<span style='color:red;'>Vui lòng nhập email hợp lệ!</span>"
      }
    },
    submitHandler: function (form) {
      form.submit();
    }
  });
});   