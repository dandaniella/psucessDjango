$(function () {
  $("#profile_pic").change(function () {
    readURL(this);
  });
});

function readURL(input) {
  var url = input.value;
  var ext = url.substring(url.lastIndexOf(".") + 1).toLowerCase();
  if (
    input.files &&
    input.files[0] &&
    (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")
  ) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#photo_path_placeholder").attr("src", e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    //$("#img").attr("src", "/assets/no_preview.png");
  }

  //load data table
  // loadTable();
}
