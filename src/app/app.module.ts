import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './app.component';
import { ProductComponent } from './product/product/product.component';

@NgModule(
  {
  declarations: [
    RootComponent,
    ProductComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path:"",
        redirectTo:'product',
        pathMatch:'full'
      },
      {
        path:"product",
        component:ProductComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [RootComponent]
}
)
export class RootModule { }
