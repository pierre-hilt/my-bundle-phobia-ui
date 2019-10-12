import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormComponent } from './search-form.component';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule],
      declarations: [SearchFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have an input', () => {
    const inputElement: any = fixture.debugElement.query(By.css('input'));
    expect(inputElement).toBeTruthy();
  });

  it('should call search on submit', () => {
    const httpClient = TestBed.get(HttpClient);
    spyOn(httpClient, 'get');
    const formElement: any = fixture.debugElement.query(By.css('form'));
    formElement.triggerEventHandler('submit', null);
    expect(httpClient.get).toHaveBeenCalled();
  });
});
