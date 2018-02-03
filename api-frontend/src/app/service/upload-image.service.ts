import { Injectable } from '@angular/core';

@Injectable()
export class UploadImageService {
  filesToUpload: Array<File>;

  constructor() {this.filesToUpload = [];}

  uploadImage(movieId: number) {
    this.makeFileRequest("http://localhost:8000/movie/image?movieId="+movieId, [], this.filesToUpload)
    .then((result) => {
		  console.log(result);
  	}, (error) => {
  		console.log(error);
  	});
  }

  updateImage(movieId: number){
	  if(this.filesToUpload.length>0){
		this.makeFileRequest("http://localhost:8000/movie/update/image?movieId="+movieId, [], this.filesToUpload)
		.then((result) => {
			  console.log(result);
		  }, (error) => {
			  console.log(error);
		  });
	  }
  }

  fileChangeEvent(fileInput: any) {
  	this.filesToUpload = <Array<File>> fileInput.target.files;
  }

  makeFileRequest(url:string, params:Array<string>, files:Array<File>) {
  	return new Promise((resolve, reject) => {
  		var formData:any = new FormData();
  		var xhr = new XMLHttpRequest();
  		for(var i=0; i<files.length;i++) {
  			formData.append("uploads[]", files[i], files[i].name);
  		}
  		xhr.onreadystatechange = function() {
  			if(xhr.readyState == 4) {
  				if(xhr.status==200) {
  					console.log("Image uploaded successfully!");
  				} else {
  					reject(xhr.response);
  				}
  			}
  		}
  		xhr.open("POST", url, true);
  		xhr.setRequestHeader("x-auth-token", localStorage.getItem("xAuthToken"));
  		xhr.send(formData);
  	});
  }

}
