$(function () {
  //  *****************************************
  //    evnt tags form
  //  *****************************************

  $("#form-id").on("submit", function (e) {
    e.preventDefault();

    if ($("#form-id").parsley().validate()) {
      if ($("#tagsID").val() == "") {
        axios({
          method: "post",
          url: apiURL + "event_tag",
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
          data: {
            name: $("#tags-name").val(),
            description: $("#tags-description").val(),
          },
        })
          .then(function (response) {
            formReset();
            loadTable();
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        axios({
          method: "PUT",
          url: apiURL + "event_tag/" + $("#tagsID").val(),
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
          data: {
            name: $("#tags-name").val(),
            description: $("#tags-description").val(),
          },
        })
          .then(function (response) {
            formReset();
            $(".modal-title").text("Edit Event tags");
            loadTable();
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  });

  // // Select 2
  // $(".select2").select2({
  //   theme: "bootstrap4",
  //   dropdownParent: $("#edit_information"),
  // });

  //
  // profile sample lang
  // $("#category-table").DataTable({
  //   ajax: apiURL + "event_category/table",
  //   "aoColumns": [
  //     { "data": "Name" },
  //     { "data": "Parent" },
  //     {
  //         "mData": "Name",
  //         "mRender": function (data, tags, row) {
  //             return "<a href='Admin/Categories/Edit/" + data + "'>EDIT</a>";
  //         }
  //     }
  // ]
  // });

  editData = (id, num) => {
    // $("#eventModal").modal("show");
    // $(".modal-title").text("Edit Event Category");

    axios({
      method: "GET",
      url: apiURL + "event_tag/" + id,
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
      dataType: "json",
    })
      .then((getResponse) => {
        formReset();
        $("#tagModal").modal("show");
        $(".modal-title").text("Edit Event tags");

        $("#tags-name").val(getResponse.data.name),
          $("#tags-description").val(getResponse.data.description),
          $("#tagsID").val(getResponse.data.tagID);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  deleteData = (id, num) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: !0,
      confirmButtonColor: "#34c38f",
      cancelButtonColor: "#f46a6a",
      confirmButtonText: "Yes, delete it!",
    }).then(function (t) {
      if (t.value == true) {
        axios({
          method: "DELETE",
          url: apiURL + "event_tag/" + id,
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        })
          .then(function (response) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            loadTable();
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    });
  };

  loadTable = () => {
    $("#tags-table").dataTable().fnClearTable();
    $("#tags-table").dataTable().fnDraw();
    $("#tags-table").dataTable().fnDestroy();
    $("#tags-table").DataTable({
      ajax: apiURL + "event_tag/table",

      columns: [
        { data: "name", title: "Title" },
        { data: "description", title: "Description" },
        {
          data: null,
          title: "Action",
          render: function (data, type, row, meta) {
            btn = "";
            //   btn +=
            //     ` <button type="button" onClick = "return editData(\"` +
            //     data.categoryID +
            //     `\`,0)class="btn btn-warning waves-effect waves-light">
            // <i class="bx bx-edit-alt"></i></button>`;
            btn +=
              `<button type="button" class="btn btn-outline-success btn-sm " onClick="return editData(\'` +
              data.tagID +
              `\',0)"><i class="bx bx-edit-alt"></i></button>	`;
            btn +=
              `<button type="button" class="btn btn-outline-danger btn-sm " onClick="return deleteData(\'` +
              data.tagID +
              `\',0)"><i class="bx bx-trash"></i></button>	`;
            // return '<div class="btn-group"> <button tags="button" class="btn btn-light" >Memo</button></div>';

            return btn;
          },
        },

        // { data: "description" }
      ],
    });
  };

  loadTable();

  $("#profile_pic").change(function () {
    readURL(this);
  });
});

//
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
