import { Component, OnInit, ViewChild } from '@angular/core';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { ChangeEvent, CKEditorComponent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import '@ckeditor/ckeditor5-build-decoupled-document/build/translations/id';


@Component({
  selector: 'app-doc-editor',
  templateUrl: './doc-editor.component.html',
  styleUrls: ['./doc-editor.component.css']
})
export class DocEditorComponent implements OnInit {
  //for accessing ckeditor
  @ViewChild('editor') editorComponent:CKEditorComponent;

  constructor() { }

  ngOnInit() {
  }

  //for receiving ckeditor
  public getEditor(){
    return this.editorComponent.editorInstance
  }

  //for configuration
  public config = {
    placeholder: 'Type something...',
    language: 'id'
  }

  //editor type
  public Editor = DecoupledEditor;

  //fired when ready
  public onReady( editor ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }

  //on change text emit
  public onChange( { editor }: ChangeEvent ) {
    const data = editor.getData();
    // console.log (this.getEditor())
    // console.log( data );
  }

  //for data input & binding
  public model = {
    editorData: ''
  };

}
