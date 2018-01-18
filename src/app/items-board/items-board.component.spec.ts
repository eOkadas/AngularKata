import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemsBoardComponent } from './items-board.component';
import { CategoryService } from 'app/services/category.service';
import { createStubInstance } from 'sinon';

describe('ItemsBoardComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          ItemsBoardComponent
      ],
      providers: [{ provide: CategoryService, useValue: createStubInstance(CategoryService) }]
    }).compileComponents();
  }));
  let component: ItemsBoardComponent;
  let fixture: ComponentFixture<ItemsBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
