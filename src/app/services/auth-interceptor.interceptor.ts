import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ShareTokenService } from './share-token.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const sharedTokenService = inject(ShareTokenService)
  const token = sharedTokenService.getToken();

  //verificar se a requisição é para URL de login ou se o token está ausente
  if(req.url.includes('/login') || !token) {
    return next(req);
  }
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return next(authReq);
};
