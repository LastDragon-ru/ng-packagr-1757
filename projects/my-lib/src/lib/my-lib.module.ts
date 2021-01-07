import { NgModule } from '@angular/core';
import { MyLibComponent } from 'projects/my-lib/src/lib/my-lib.component';



@NgModule({
  declarations: [MyLibComponent],
  imports: [
  ],
  exports: [MyLibComponent]
})
export class MyLibModule { }
