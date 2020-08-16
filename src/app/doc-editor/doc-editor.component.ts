import { UploadImageService } from './../upload-image.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ChangeEvent, CKEditorComponent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import UploadAdapter from './uploadAdapter';
import * as ClassicEditor from 'ckeditor5-build-classic-image-resize';


@Component({
  selector: 'app-doc-editor',
  templateUrl: './doc-editor.component.html',
  styleUrls: ['./doc-editor.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DocEditorComponent implements OnInit {
  //for accessing ckeditor
  html:string;

  @ViewChild('editor') editorComponent:CKEditorComponent;

  constructor(private uploadImageService:UploadImageService, private afStorage:AngularFireStorage) { }

  ngOnInit() {
    this.html = "<figure style=\"width:58.52%; border:1px solid black\"> <img style=\" max-width:100% \" src=\"https://firebasestorage.googleapis.com/v0/b/fir-demo-825f8.appspot.com/o/ydtwzj92a69?alt=media&amp;token=42494489-d28d-44be-bf42-842d53c5fd73\"> </figure>"
    // this.html = "<span class=\"test\">hello</span>"
  }

  //for receiving ckeditor
  public getEditor(){
    return this.editorComponent.editorInstance
  }

  //for configuration
  public config = {
    placeholder: 'Type something...',
    toolbar: {
      items: [
          'heading',
          '|',
          'fontFamily',
          '|',
          'bold',
          'italic',
          'link',
          'bulletedList',
          'numberedList',
          'imageUpload',
          'blockQuote',
          'undo',
          'redo'
      ]
  },
  image: {
        // Configure the available styles.
        styles: [
            'alignLeft', 'alignCenter', 'alignRight'
        ],

        // Configure the available image resize options.
        resizeOptions: [
            {
                name: 'imageResize:original',
                label: 'Original',
                value: null
            },
            {
                name: 'imageResize:50',
                label: '50%',
                value: '50'
            },
            {
                name: 'imageResize:75',
                label: '75%',
                value: '75'
            }
        ],

        // You need to configure the image toolbar, too, so it shows the new style
        // buttons as well as the resize buttons.
        toolbar: [
            'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
            '|',
            'imageResize',
            '|',
            'imageTextAlternative'
        ]
    },
  language: 'en'
  }

  //editor type
  public Editor = ClassicEditor;

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


