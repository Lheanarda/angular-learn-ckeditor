import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

constructor(private afStorage:AngularFireStorage) {
}

test:string = "asu"
ref:AngularFireStorageReference; //3
task:AngularFireUploadTask;
imageUrl = new Subject<string>();

upload(file:any){
  //Upload Image
  const id = Math.random().toString(36).substring(2); //Generate Random ID
  this.ref = this.afStorage.ref(id); //target file
  this.task = this.ref.put(file); //put files to fireupload
  this.task.then((data)=>{
    console.log("END TASK", data);
    this.ref.getDownloadURL().subscribe(data=>{
      this.imageUrl.next(data);
    })
  })
}


}
