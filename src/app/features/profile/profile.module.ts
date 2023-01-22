import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from 'src/app/routing/home/profile-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
