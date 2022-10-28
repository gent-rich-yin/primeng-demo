import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { IconsComponent } from './components/icons/icons.component';
import { SpeedDialComponent } from './components/speed-dial/speed-dial.component';
import { SplitButtonComponent } from './components/split-button/split-button.component';

const routes: Routes = [
  {path: 'button', component: ButtonComponent},  
  {path: 'Icons', component: IconsComponent},  
  {path: 'SplitButton', component: SplitButtonComponent},  
  {path: 'SpeedDial', component: SpeedDialComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
