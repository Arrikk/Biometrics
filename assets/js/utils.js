let searchParam = new URLSearchParams(location.search);
let action = searchParam.get("action");
let enrollmentId = searchParam.get("enrollment_id");

window.bruiz = {
  notDetected: function () {
    Swal.fire("Scanner ?", "No scanner detected", "question");
  },
  detected: function () {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Fingerprint scanner Detected",
      showConfirmButton: false,
      timer: 1500,
    });
  },
  message: function (
    icon = "error",
    title = "Failed",
    text = " Fingerprint Disconnected"
  ) {
    Swal.fire({
      icon,
      title,
      text,
    });
  },
  enrollmentId,
  token:
    "63b1b12d229311e8bb98365740a45521ccd63a832afbdc7bf62519705b9d0f394d694ea93213d849bb6b9d69100192808ef030d788403140c88b4e8c6f52d67f87ac55d93193c68505868895e20941682244fb3a931a8c8b2a1932cbd0dbdb40c47f63d09bebe5309074bdca58370dbd0a85af71d3e1d236197618839dc44dfc",
  requestEngine: function requestEngine(
    uri,
    formData,
    btn,
    mssg = "Uploaded Successfully",
    error = "Failed to send data"
  ) {
    $.ajax({
      url: uri,
      method: "POST",
      mimeType: 'multipart/form-data',
      data: formData,
      processData: false,
      contentType: false,
      beforeSend: function(){
        btn.prop('disabled', true).text('Processing...')
      },
      success: function (e) {
        // console.log(e);
        bruiz.message("success", "Success", mssg);
        btn.prop('disabled', true).html('<i class="bi-fingerprint"></i>Verify')
        resetData();
      },
      error: function (e) {
        bruiz.message("error", "Error", error);
        btn.prop('disabled', true).html('<i class="bi-fingerprint"></i>Verify')
        // console.log(e);
        setData();
      },
    });
  }, 
  apiUri: 'http://146.190.231.203:8000/api/',
  action
};

if(action == 'enroll' && !enrollmentId == '') $('#enrollment').show();
if(action == 'verify' && !enrollmentId == '') $('#verification').show();
// apiUri: 'https://9bc40ab7c4fd.eu.ngrok.io/form'