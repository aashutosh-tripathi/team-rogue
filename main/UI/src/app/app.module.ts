import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FloatingWidgetComponent } from './floating-widget/floating-widget.component';
import { NavbarComponent } from './navbar/navbar.component';
import {BadgeModule} from 'primeng/badge';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { NotificationComponent } from './notification/notification.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { BugReportComponent } from './bug-report/bug-report.component';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { BugService } from './services/bug.service';
import { FeedbackService } from './services/feedback.service';
import { NotificationService } from './services/notification.service';
import {ToastModule} from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import {MessageService} from 'primeng/api';
import {TableModule} from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RadioButtonModule} from 'primeng/radiobutton';
import { AdminComponent } from './admin/admin.component';
import {ButtonModule} from 'primeng/button';
import { BugListComponent } from './bug-list/bug-list.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { AnnouncementFormComponent } from './announcement-form/announcement-form.component';
import { ShopComponent } from './shop/shop.component';
import {CarouselModule} from 'primeng/carousel';
import { JoyrideModule } from 'ngx-joyride';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FloatingWidgetComponent,
    NavbarComponent,
    ChatbotComponent,
    NotificationComponent,
    FeedbackComponent,
    BugReportComponent,
    AdminComponent,
    BugListComponent,
    FeedbackListComponent,
    AnnouncementFormComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BadgeModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
    ToastModule,
    HttpClientModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    RadioButtonModule,
    ButtonModule,
    CarouselModule,
    JoyrideModule.forRoot()
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    BugService,
    FeedbackService,
    NotificationService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
