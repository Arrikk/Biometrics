const data = {
    enrollment_id: '3',
    usrname: "User eh"
}
$.ajax({
  method: "POST",
  url: "http://192.168.0.122/form",
  data: data,
  success: function (e) {
    console.log(e);
    bruiz.message("success", "Success", "Donee");
    resetData();
  },
  error: function (e) {
    bruiz.message("error", "Error", "error");
    console.log(e);
  },
});
