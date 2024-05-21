import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPageComponent } from './loginPage.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPageComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call login method on form submit', () => {
    const loginSpy = spyOn(component, 'login');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    expect(loginSpy).toHaveBeenCalled();
  });

  //it('should validate email and password', () => {
  //  const emailControl = components.loginPage.controls['email'];
  //  const passwordControl = components.loginPage.controls['password'];
//
  //  emailControl.setValue('');
  //  passwordControl.setValue('');
//
  //  expect(component.loginPage.valid).toBeFalsy();
//
  //  emailControl.setValue('test@example.com');
  //  passwordControl.setValue('password');
//
  //  expect(component.loginPage.valid).toBeTruthy();
  //});
});