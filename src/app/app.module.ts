import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleTestModule } from './sample-test/sample-test.module';
import { AppService } from './sample-test/services/app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SampleTestModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
