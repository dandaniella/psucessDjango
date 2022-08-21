const apiURL = "http://localhost:5000/psuccess/";
// const baseURL = "http://localhost/pawnshop1/";
const baseURL = "http://localhost:8000/";

const notification = (type, title, message) => {
  return toastr[type](message, title);
};

const token = localStorage.getItem("TOKEN");
let button = document.querySelector(".submit");
//form reset

// $.ajaxSetup({
// 	headers: {
// 		Accept: "application/json",
// 		Authorization: "Bearer " + token,
// 	},
// });

formReset = (action = "hide") => {
  if (action == "hide") {
    $(".form-id")[0].reset();
  }
};

//trim input valuse except input fields
function trimInputFields() {
  var allInputs = $("input:not(:file()");
  allInputs.each(function () {
    $(this).val($.trim($(this).val()));
  });
}
