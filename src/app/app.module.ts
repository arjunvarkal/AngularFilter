import { NgModule } from '@angular/core' ;
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser' ;
import { RobotComponent } from './robot.component' ;
import { ProductsComponent } from './products/products.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations:[
    AppComponent,
    RobotComponent,
    ProductsComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule{

}