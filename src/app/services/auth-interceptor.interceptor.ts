import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoginAuthService } from './API/login-auth.service';
import { LoginComponent } from '../pages/login/login.component';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjb250cm9sZS1maW5hbmNlaXJvLWFwaSIsInN1YiI6InRlc3RlMkB0ZXN0ZS5jb20iLCJleHAiOjE3MjU0NjU4MTd9.cRqQZZaN7gT-CBrxqL0fNOyoD8qxLmf5Vxe7hJ-mRUA';

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });

  return next(authReq);
};
