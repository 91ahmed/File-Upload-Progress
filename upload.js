$(document).ready(function(){

	$('input[name="myfile"]').bind('change', function() 
	{
		var file_name = this.files[0].name;

        $('.upload_info').html('0%');
        $('.upload_bar').css({'width': '0'});
		$('.upload_name').html(file_name);
	});

	$('.upload_form').on('submit', function(e){
		e.preventDefault();

		// Form data
		var formData     = new FormData($(this)[0]);
		var formAction   = $(this).attr('action');
		var formMethod   = $(this).attr('method');

		// File data
		var file_name = $('input[name="myfile"]')[0].files[0].name;
		var file_size = $('input[name="myfile"]')[0].files[0].size;
		var file_type = $('input[name="myfile"]')[0].files[0].type;

		var files_count = 0;

		$.ajax({
			method: formMethod,
			url: formAction,
			data: formData,
			dataType: 'json',
			contentType: false,
			cache: false,
			processData: false,
			beforeSend: function(XMLHttpRequest) {

			},
			xhr: function() {

				var xhr = new window.XMLHttpRequest();

				// Upload Progress
			    xhr.upload.addEventListener("progress", function(evt) {
			      if (evt.lengthComputable) {
			        var percentComplete = evt.loaded / evt.total;
			        percentComplete = parseInt(percentComplete * 100);

			        $('.upload_info').html(percentComplete+'%');
			        $('.upload_bar').css({'width': percentComplete+'%'});

			        if (percentComplete === 100) {
			        	$('.upload_info').html('100% done.');
			        	$('.upload_list').css({'display':'block'});
			        } else {
			        	/*
						$('.cancel_upload').on('click', function(){
							xhr.abort();
							$('.upload_info').html(percentComplete+'% canceled');
							$('.upload_bar').css({'background-color': '#f44'});
						});
						*/
			        }

			      }
			    }, false);

			    /*
				xhr.onloadstart = function (e) {
				    console.log("start")
				}
				*/
				xhr.onloadend = function (e) {
				    $('.upload_list ul').append('<li><i class="fas fa-check-circle"></i><span>'+file_name+'</span></li>');
				    
				    document.getElementsByClassName("upload_form")[0].reset();
				    document.getElementsByClassName("myfile")[0].value = '';
					$('.upload_form input').val('');
				}
				
			    return xhr;
			},
		});
	});

	$('.choose_file').on('click', function() {
	    $('input[name="myfile"]').trigger('click');
	});

});