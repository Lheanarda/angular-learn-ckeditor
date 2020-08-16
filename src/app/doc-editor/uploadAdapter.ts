import { AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
export default class UploadAdapter {

  loader;
  afStorage;
  ref:AngularFireStorageReference; //3
  task:AngularFireUploadTask;

  //private storage:AngularFireStorage --> normally done it like this

  constructor(loader, storage) {
    this.loader = loader;
    this.afStorage = storage;

  }

  upload() {
    return new Promise((resolve, reject) => {
      console.log('the file we got was', this.loader.file);
      this.loader.file.then(file=>{
        const id = Math.random().toString(36).substring(2); //Generate Random ID
        this.ref = this.afStorage.ref(id); //target file
        this.task = this.ref.put(file); //put files to fireupload
        this.task.then((data)=>{
          this.ref.getDownloadURL().subscribe(data=>{
            resolve({default:data})
          })
        })
      })
    });

  }

  abort() {
    console.log('UploadAdapter abort');
  }
}
