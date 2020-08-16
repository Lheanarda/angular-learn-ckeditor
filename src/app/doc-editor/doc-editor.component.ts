import { UploadImageService } from './../upload-image.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { ChangeEvent, CKEditorComponent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import '@ckeditor/ckeditor5-build-decoupled-document/build/translations/id';
import UploadAdapter from './uploadAdapter';


@Component({
  selector: 'app-doc-editor',
  templateUrl: './doc-editor.component.html',
  styleUrls: ['./doc-editor.component.css']
})
export class DocEditorComponent implements OnInit {
  //for accessing ckeditor

  @ViewChild('editor') editorComponent:CKEditorComponent;

  constructor(private uploadImageService:UploadImageService, private afStorage:AngularFireStorage) { }

  ngOnInit() {
  }

  //for receiving ckeditor
  public getEditor(){
    return this.editorComponent.editorInstance
  }

  //for configuration
  public config = {
    placeholder: 'Type something...',
    language: 'id',
  }

  //editor type
  public Editor = DecoupledEditor;

  //fired when ready
  public onReady( editor ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );

    const storage = this.afStorage
    editor.plugins.get('FileRepository').createUploadAdapter = function (loader) {
      return new UploadAdapter(loader,storage);
    };
  }

  //on change text emit
  public onChange( { editor }: ChangeEvent ) {
    if(editor){
      const data = editor.getData();
    }

  }

  //for data input & binding
  public model = {
    editorData: ''
  };



}


