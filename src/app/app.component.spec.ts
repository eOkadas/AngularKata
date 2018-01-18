import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ItemsBoardComponent } from 'app/items-board/items-board.component';
import { CategoryService } from 'app/services/category.service';
import { createStubInstance } from 'sinon';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          AppComponent
        , ItemsBoardComponent
      ],
      providers: [{ provide: CategoryService, useValue: createStubInstance(CategoryService) }]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('MarketPlace');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to MarketPlace!');
  }));
});
