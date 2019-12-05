<?php
	
	if (isset($_FILES['myfile']['name'])) 
	{
		// uploaded
		$file_name  = $_FILES['myfile']['name'];
		$file_tmp   = $_FILES['myfile']['tmp_name']; 
		$file_type  = $_FILES['myfile']['type'];
		$file_size  = $_FILES['myfile']['size'];
		$file_error = $_FILES['myfile']['error']; 

		move_uploaded_file($file_tmp, 'files/'.$file_name);  	
	}
	else
	{
		// not uploaded
	}

?>