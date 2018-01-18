import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemsBoardComponent } from './items-board/items-board.component';
import { CategoryService } from './services/category.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ItemsBoardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
