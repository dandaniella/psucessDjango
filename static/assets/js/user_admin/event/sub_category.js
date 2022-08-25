$(function () {
  //  *****************************************
  //    evnt category form
  //  *****************************************

  $("#form-id").on("submit", function (e) {
    e.preventDefault();

    if ($("#form-id").parsley().validate()) {
      if ($("#subcategoryID").val() == "") {
        axios({
          method: "post",
          url: apiURL + "event_subcategory",
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
          data: {
            name: $("#subcat-name").val(),
            categoryID: $("#select_categoryID").val(),
            description: $("#subcat-description").val(),
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
        var categoryid = $("#select_categoryID").val();
        console.log($("#select_categoryID").val());
        axios({
          method: "PUT",
          url: apiURL + "event_subcategory/" + $("#subcategoryID").val(),
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
          data: {
            name: $("#subcat-name").val(),
            categoryID: categoryid,
            description: $("#subcat-description").val(),
          },
        })
          .then(function (response) {
            formReset();
            $(".modal-title").text("Edit Event Subcategory");
            loadTable();
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  });

  // // Select 2
  $(".select2").select2({
    dropdownParent: $("#subcatModal"),
    placeholder: "Select a category ",
  });

  //
  // profile sample lang
  // $("#category-table").DataTable({
  //   ajax: apiURL + "event_category/table",
  //   "aoColumns": [
  //     { "data": "Name" },
  //     { "data": "Parent" },
  //     {
  //         "mData": "Name",
  //         "mRender": function (data, type, row) {
  //             return "<a href='Admin/Categories/Edit/" + data + "'>EDIT</a>";
  //         }
  //     }
  // ]
  // });

  editData = (id, num) => {
    axios({
      method: "GET",
      url: apiURL + "event_subcategory/" + id,
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
      dataType: "json",
    })
      .then((getResponse) => {
        formReset();
        console.log(getResponse);
        $("#subcatModal").modal("show");
        $(".modal-title").text("Edit Event Subcategory");

        $("#subcat-name").val(getResponse.data.name),
          $("#subcat-description").val(getResponse.data.description),
          $("#subcategoryID").val(getResponse.data.subcategoryID);
        $("#select_categoryID")
          .val(getResponse.data.category.categoryID)
          .trigger("change");
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
          url: apiURL + "event_subcategory/" + id,
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
    $("#subcategory-table").dataTable().fnClearTable();
    $("#subcategory-table").dataTable().fnDraw();
    $("#subcategory-table").dataTable().fnDestroy();
    $("#subcategory-table").DataTable({
      ajax: apiURL + "event_subcategory/table",

      columns: [
        { data: "name", title: "Title" },
        { data: "category.name", title: "Category Title" },
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
              data.subcategoryID +
              `\',0)"><i class="bx bx-edit-alt"></i></button>	`;
            btn +=
              `<button type="button" class="btn btn-outline-danger btn-sm " onClick="return deleteData(\'` +
              data.subcategoryID +
              `\',0)"><i class="bx bx-trash"></i></button>	`;
            // return '<div class="btn-group"> <button type="button" class="btn btn-light" >Memo</button></div>';

            return btn;
          },
        },

        // { data: "description" }
      ],
    });
  };

  loadTable();

  loadCategory = () => {
    axios({
      method: "GET",
      url: apiURL + "event_category",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then(function (response) {
        // console.log(response.data);
        $.each(response.data, function (i, dataOptions) {
          var options = "";
          options =
            ` <option value="` +
            dataOptions.categoryID +
            `">` +
            dataOptions.name +
            `</option>`;

          $("#select_categoryID").append(options);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  loadCategory();

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
