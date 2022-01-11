import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClientModule } from "@angular/common/http";
import * as Rx from 'rxjs';
import { delay } from "rxjs/operators";
import { UrlDetailsComponent } from './url-details.component';
import { UrlService } from '../services/url.service';

describe('UrlDetailsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        HttpClientModule  
      ],
      declarations: [
        UrlDetailsComponent
      ],
      providers : [
        UrlService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UrlDetailsComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  })

  
  it('should call getAllUrls and get response as empty array', fakeAsync(() => {
    const fixture = TestBed.createComponent(UrlDetailsComponent);
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(UrlService);
    let spy_getPosts = spyOn(service,"getUrls").and.callFake(() => {
      return Rx.of([]).pipe(delay(100));
    });
    component.GetAllUrls();
    tick(100);
    expect(component.urls).toEqual([]);
  }))

  
});
