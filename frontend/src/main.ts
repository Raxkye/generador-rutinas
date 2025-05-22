import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { jwtInterceptor } from './app/core/auth/jwt.interceptor';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([jwtInterceptor]))
  ]
});
