import { SafeHtmlPipe } from './doc-editor/safe-html.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AppComponent } from './app.component';
import { DocEditorComponent } from './doc-editor/doc-editor.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule} from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { HttpClientModule} from '@angular/common/http';
import UploadAdapter from './doc-editor/uploadAdapter';

@NgModule({
   declarations: [
      AppComponent,
      DocEditorComponent,
      SafeHtmlPipe
   ],
   imports: [
      BrowserModule,
      CKEditorModule,
      FormsModule,
      AngularFireModule.initializeApp({ //1
        apiKey: "AIzaSyAmCebWXYwUxxBE-neOls82Ce3Co_HKnww",
        authDomain: "fir-demo-825f8.firebaseapp.com",
        projectId: "fir-demo-825f8",
        storageBucket: "fir-demo-825f8.appspot.com",
      }),
      AngularFireStorageModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
