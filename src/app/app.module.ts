import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AppComponent } from './app.component';
import { DocEditorComponent } from './doc-editor/doc-editor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
   declarations: [
      AppComponent,
      DocEditorComponent
   ],
   imports: [
      BrowserModule,
      CKEditorModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
