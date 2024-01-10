import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartupService } from './core/bootstrap/startup.service';
import { DefaultInterceptor } from './core/interceptors/default.interceptor';
import { MaterialModule } from './material.module';
import { LoginComponent } from './login/login/login.component';
import { ShareModule } from './nav/share.module';
import { SignUpComponent } from './sign-up/sign-up.component';


export function StartupServiceFactory(startupService: StartupService) {
  return () => startupService.load();
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      progressBar: true,
      closeButton: true
    }),
    ShareModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: DefaultInterceptor,
    multi: true
  },
    //add this if we want a startup service
    // StartupService,
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: StartupServiceFactory,
    //   deps: [StartupService],
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
