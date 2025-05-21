import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductFilterComponent } from './products/product-filter.component';
import { ProductDetailsComponent } from './products/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductFilterComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
