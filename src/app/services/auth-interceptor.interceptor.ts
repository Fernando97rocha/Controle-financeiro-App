import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ShareTokenService } from './share-token.service';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  const sharedTokenService = inject(ShareTokenService)
  console.log(typeof(sharedTokenService.getToken()), "auth aqui")
  const token = sharedTokenService.getToken();
  const authToken = token;

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });
  console.log(authReq);

  return next(authReq);
};
