const apiURL = "http://localhost:5000/psuccess/admin/";
// const baseURL = "http://localhost/pawnshop1/";
const baseURL = "http://localhost:8000/";

const notification = (type, title, message) => {
  return toastr[type](message, title);
};

const token = localStorage.getItem("TOKEN");
let button = document.querySelector(".submit");
// let isDelete = false;

//form reset

// $.ajaxSetup({
// 	headers: {
// 		Accept: "application/json",
// 		Authorization: "Bearer " + token,
// 	},
// });

swalAlert = (title, text, icon) => {
  if (icon == "success") {
    console.log("helo");
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      // showCancelButton: !0,
      confirmButtonColor: "#556ee6",
      // cancelButtonColor: "#f46a6a",
    });
  }
};

formReset = () => {
  $(".uuid").val("");
  $(".form-id")[0].reset();
  $(".modal-title").text("Add Event Category");
};

axios.interceptors.request.use(
  function (config) {
    if (config.method == "post") {
      button != undefined ? (button.ariaDisabled = true) : null;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    if (response.config.method == "post") {
      swalAlert(response.data.message, "", "success");
    } else if (response.config.method == "put") {
      swalAlert(response.data.message, "", "success");
    }
    return response;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

$(document).ajaxStart(function () {
  console.log("loading");
});
//trim input valuse except input fields
function trimInputFields() {
  var allInputs = $("input:not(:file()");
  allInputs.each(function () {
    $(this).val($.trim($(this).val()));
  });
}
