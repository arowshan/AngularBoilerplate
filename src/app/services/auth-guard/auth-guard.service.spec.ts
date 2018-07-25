import {
  TestBed,
  inject,
  ComponentFixture,
  async
} from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { AuthService } from './auth.service';

describe('AuthGuardService', () => {
  let testBedService: AuthGuardService;
  let componentService: AuthGuardService;
  let service: AuthGuardService;
  let authService: AuthService;
  let next: ActivatedRouteSnapshot;
  let state: RouterStateSnapshot;
  const mockSnapshot: any = jasmine.createSpyObj<RouterStateSnapshot>(
    'RouterStateSnapshot',
    ['toString']
  );

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardService],
      imports: [HttpClientModule, RouterTestingModule]
    });

    // AuthService provided to the TestBed
    testBedService = TestBed.get(AuthGuardService);
    authService = TestBed.get(AuthService);
  });

  it('should be created', inject(
    [AuthGuardService],
    (service: AuthGuardService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('should check guarded routes by passing url', () => {
    const url = 'test';
    const spy = spyOn(testBedService, 'checkLogin');
    testBedService.checkLogin(url);
    expect(spy).toHaveBeenCalled();
  });
});
