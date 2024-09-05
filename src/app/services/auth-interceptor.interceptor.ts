import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoginAuthService } from './API/login-auth.service';
import { LoginComponent } from '../pages/login/login.component';
import { ShareTokenService } from './share-token.service';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  const sharedTokenService = inject(ShareTokenService)
  console.log(sharedTokenService.getToken(), "auth aqui")
  const authToken = sharedTokenService.getToken();

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });

  return next(authReq);
};
