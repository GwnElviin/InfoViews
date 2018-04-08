import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsadminComponent } from './groupsadmin.component';

describe('GroupsadminComponent', () => {
  let component: GroupsadminComponent;
  let fixture: ComponentFixture<GroupsadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupsadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
