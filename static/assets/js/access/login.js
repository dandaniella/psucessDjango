$(function () {
  $("#login_id").on("submit", function (e) {
    e.preventDefault();

    if ($("#login_id").parsley().validate()) {
      // alert($("#user_email").val());
      // // no validate
      // $.ajax({
      //   url: apiURL + "login",
      //   type: "POST",
      //   data: {
      //     email: $("#user_email").val(),
      //     password: $("#user_password").val(),
      //   },
      //   dataType: "json",
      //   success: function (data) {
      //     localStorage.setItem("TOKEN", data.token);
      //     // save session data in php
      //     let session_data = "";
      //     session_data += "token=" + data.token;
      //     session_data += "&user_id=" + data.data.user_id;
      //     session_data += "&user_name=" + data.data.user_name;
      //     session_data += "&user_email=" + data.data.user_email;
      //     session_data += "&user_type=" + data.data.user_type;
      //     localStorage.setItem("USER_ID", data.data.user_id);
      //     window.location.replace(baseURL + "Access/oAuth?" + session_data);
      //     alert("sucess");
      //     console.log(data )

      //   },
      //   error: function ({ responseJSON }) {
      //     console.log(responseJSON);
      //     notification("error", " ", responseJSON.message.join());
      //   },
      // });

      // axios
      //   .post("http://localhost:5000/psuccess/login", {
      //     email: $("#user_email").val(),
      //     password: $("#user_password").val(),
      //   })
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });

      axios({
        method: "post",
        // url: "http://localhost:5000/psuccess/login",
        url: apiURL + "login",
        data: {
          email: $("#user_email").val(),
          password: $("#user_password").val(),
        },
      })
        .then(function (response) {
          console.log(response);

          let session_data = "";
          session_data += "token=" + response.data.access_token;
          session_data += "&userID" + response.data.userID;
          session_data += "&email" + response.data.email;
          session_data += "&firstName" + response.data.firstName;
          session_data += "&middleName" + response.data.middleName;
          session_data += "&lastName" + response.data.lastName;
          session_data += "&fullName" + response.data.fullName;
          session_data += "&accountType" + response.data.accountType;
          session_data += "&profilePhoto" + response.data.profilePhoto;
          session_data += "&transactionID" + response.data.transactionID;
          session_data +=
            "&userOrganizationID" + response.data.userOrganizationID;

          console.log(session_data);
          window.location.replace(baseURL + "login/auth?" + session_data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  });
});
