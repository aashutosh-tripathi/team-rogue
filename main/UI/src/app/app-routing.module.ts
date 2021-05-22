import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AnnouncementFormComponent } from './announcement-form/announcement-form.component';
import { BugListComponent } from './bug-list/bug-list.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/announcement', component: AnnouncementFormComponent },
  { path: 'admin/buglist', component: BugListComponent },
  { path: 'admin/feedbacklist', component: FeedbackListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
