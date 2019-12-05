<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		<title>Upload File With Progree Bar</title>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"/>
		<link rel="stylesheet" href="upload.css"/>
	</head>
	<body>

		<!-- start progress -->
		<div class="upload_container">
			<div class="upload_name">select file for upload</div>
			<div class="upload_progress">
				<div class="upload_bar"></div>
			</div>
			<div class="upload_info">0%</div>
			<!-- end progress -->

			<form action="upload.php" method="POST" class="upload_form" enctype="multipart/form-data">
				<input type="file" class="myfile" name="myfile"/>
				<div class="buttons_container">
					<button type="button" class="choose_file">Choose</button>
					<button type="submit">Upload</button>
				</div>
			</form>
		</div>
		<!-- end progress -->

		<div class="upload_list">
			<div class="upload_list_head">Uploaded Files</div>
			<ul></ul>
		</div>

		<script src="jquery-3.4.1.min.js"></script>
		<script src="upload.js"></script>
	</body>
</html>