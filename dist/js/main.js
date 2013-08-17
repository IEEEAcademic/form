
var lineText = '<div class="row well line" style="margin:20px 10px;">'+

                  '<div class="col-lg-1">'+
                  '</div>'+

                  '<div class="col-lg-7">'+
                    '<p style="margin-top:10px;">Choose the option that suits you better...</p>'+
                  '</div>'+

                  '<div class="col-lg-4">'+

                    '<div class="select-container">'+
                      '<select class="selectpicker">'+
                        '<option selected>Add Video</option>'+
                        '<option>Add Prof</option>'+
                        '<option>Add Chapter</option>'+
                        '<option>Add Book</option>'+
                      '</select>'+
                    '</div>'+

                  '</div>'+

                  '<div class="form-content" >'+

                    '<div class="col-lg-1">'+
                    '</div>'+

                    '<div class="col-lg-6">'+

                      '<div style="margin-top:20px;">'+
                        '<div class="input-group">'+
                          '<span class="input-group-addon">Title</span>'+
                          '<input type="text" class="form-control" placeholder="Enter the title...">'+
                        '</div>'+
                        '<div class="input-group" style="margin-top:10px;">'+
                          '<span class="input-group-addon">Description</span>'+
                          '<input type="text" class="form-control" placeholder="Enter the description...">'+
                        '</div>'+
                      '</div>'+
                      '<div class="fileupload fileupload-new" data-provides="fileupload" style="margin-top:30px;">'+
                        '<div class="input-append">'+
                          '<div class="col-lg-7">'+
                            '<div class="uneditable-input form-control">'+
                              '<i class="icon-file fileupload-exists"></i>'+
                              '<span class="fileupload-preview"></span>'+
                            '</div>'+
                          '</div>'+
                          '<span class="btn btn-file btn-primary">'+
                            '<span class="fileupload-new">Select file</span>'+
                            '<span class="fileupload-exists">Change</span>'+
                            '<input type="file" />'+
                          '</span>'+
                          '<a href="#" class="btn fileupload-exists btn-primary" data-dismiss="fileupload">Remove</a>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                    '<div class="col-lg-1"></div>'+
                    '<div class="col-lg-4" style="margin-top:65px;">'+
                      '<span class="btn btn-primary">Send Meta to Server</span>'+
                    '</div>'+

                  '</div>'+
                '</div>';



var AddBook = '<div class="col-lg-1"></div>'+
            '<div class="col-lg-6">'+
              '<div style="margin-top:20px;">' +
                    '<div class="input-group">'+
                      '<span class="input-group-addon">Title</span>'+
                      '<input type="text" class="form-control" placeholder="Enter the title...">'+
                    '</div>'+
                    '<div class="input-group" style="margin-top:10px;">'+
                      '<span class="input-group-addon">Description</span>'+
                      '<input type="text" class="form-control" placeholder="Enter the description...">'+
                    '</div>'+
                  '</div>'+
                  '<div class="fileupload fileupload-new" data-provides="fileupload" style="margin-top:30px;">'+
                    '<div class="input-append">'+
                      '<div class="col-lg-7">'+
                      '<div class="uneditable-input form-control">'+
                        '<i class="icon-file fileupload-exists"></i>'+
                        '<span class="fileupload-preview"></span>'+
                      '</div>'+
                      '</div>'+
                      '<span class="btn btn-file btn-primary">'+
                        '<span class="fileupload-new">Select file</span>'+
                        '<span class="fileupload-exists">Change</span>'+
                        '<input type="file" />'+
                      '</span>'+
                      '<a href="#" class="btn fileupload-exists btn-primary" data-dismiss="fileupload">Remove</a>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class="col-lg-1"></div>'+
                '<div class="col-lg-4" style="margin-top:65px;">'+
                  '<span class="btn btn-primary">Send Meta to Server</span>'+
                '</div>';



function formControl(){
      console.log('change; new value='+ $(this).val());

      formChanged = $(this).closest(".line").find(".form-content");

      switch($(this).val()){

        case "Add Video":
        console.log('ola');
          formChanged.html(AddBook);

        break;

        case "Add Prof":

          formChanged.html("");

        break;

        case "Add Chapter":

        break;

        case "Add Book":

        break;

      }


    }



$(document).bind("ready", function(){

  $('.selectpicker').selectpicker().bind("change.simpleselect", formControl);
	

  $("#plus-btn").bind("click", function(){

    $(this).prev().after(lineText);

    $('.selectpicker').selectpicker().bind("change.simpleselect", formControl);
    

  });

});