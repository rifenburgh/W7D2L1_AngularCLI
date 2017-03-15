import { BrowserModule }              from '@angular/platform-browser';
import { NgModule }                   from '@angular/core';
import { FormsModule }                from '@angular/forms';
import { HttpModule }                 from '@angular/http';

import { AppComponent }               from './app.component';
import { HomepageComponent }          from './homepage/homepage.component';
import { MyPropertyBindingComponent } from './my-property-binding/my-property-binding.component';
import { MyEventBindingComponent }    from './my-event-binding/my-event-binding.component';
import { MyMixedBindingComponent }    from './my-mixed-binding/my-mixed-binding.component';
import { TwoWayBindingComponent }     from './two-way-binding/two-way-binding.component';
import { MyPipesComponent }           from './my-pipes/my-pipes.component';

//Custom Capitalize Pipe
import { CapitalizePipe }             from './pipes/capitalize.pipe';
import { AnimalsComponent } from './animals/animals.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MyPropertyBindingComponent,
    MyEventBindingComponent,
    MyMixedBindingComponent,
    TwoWayBindingComponent,
    MyPipesComponent,
    //Add Custom Capitalize Pipe
    CapitalizePipe,
    AnimalsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
