import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

import { DetailsComponent } from './details.component';
import { PlayersService } from '../players.service';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let playersService: jasmine.SpyObj<PlayersService>;
  let activatedRoute: ActivatedRoute;
  let router: Router;

  beforeEach(() => {
    const playersServiceSpy = jasmine.createSpyObj('PlayersService', ['getPlayer']);
    const activatedRouteStub = {
      snapshot: {
        params: { playerId: 1 } // Assuming you want to test with playerId 1
      }
    };
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      providers: [
        { provide: PlayersService, useValue: playersServiceSpy },
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: Router, useValue: routerSpy }
      ]
    });

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    playersService = TestBed.inject(PlayersService) as jasmine.SpyObj<PlayersService>;
    activatedRoute = TestBed.inject(ActivatedRoute);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load player details', () => {
    const playerData = {
      id: 1,
      name: 'Test Player',
      shirtno: 10,
      position: { id: 1, name: 'Forward' },
      appearances: 20,
      goals: 10
    };

    // Mock the getPlayer method to return an observable of playerData
    playersService.getPlayer.and.returnValue(of(playerData));

    // Call ngOnInit explicitly to trigger the lifecycle hook
    component.ngOnInit();

    expect(component.player).toEqual(playerData);
  });

  it('should display player goals in list item', fakeAsync(() => {
    const playerData = {
      id: 1,
      name: 'Test Player',
      shirtno: 10,
      position: { id: 1, name: 'Forward' },
      appearances: 20,
      goals: 10,
    };

    // Mock the getPlayer method to return an observable of playerData
    playersService.getPlayer.and.returnValue(of(playerData));

    // Call ngOnInit explicitly to trigger the lifecycle hook
    component.ngOnInit();

    // Use tick to simulate the passage of time
    tick();
    fixture.detectChanges(); // Detect changes after tick

    const compiled = fixture.nativeElement;
    const goalsListItem = compiled.querySelector('li:nth-child(5)');
    expect(goalsListItem.textContent).toContain('Goals: 10');
  }));

it('should display player name in h4 element', fakeAsync(() => {
  const playerData = {
    id: 1,
    name: 'Test Player',
    shirtno: 10,
    position: { id: 1, name: 'Forward' },
    appearances: 20,
    goals: 10,
  };

  // Mock the getPlayer method to return an observable of playerData
  playersService.getPlayer.and.returnValue(of(playerData));

  // Call ngOnInit explicitly to trigger the lifecycle hook
  component.ngOnInit();

  // Use tick to simulate the passage of time
  tick();
  fixture.detectChanges(); // Detect changes after tick

  const compiled = fixture.nativeElement;
  const h4Element = compiled.querySelector('h4');
  expect(h4Element.textContent).toContain('Test Player');
}));

it('should display player ID in list item', fakeAsync(() => {
  const playerData = {
    id: 1,
    name: 'Test Player',
    shirtno: 10,
    position: { id: 1, name: 'Forward' },
    appearances: 20,
    goals: 10,
  };

  // Mock the getPlayer method to return an observable of playerData
  playersService.getPlayer.and.returnValue(of(playerData));

  // Call ngOnInit explicitly to trigger the lifecycle hook
  component.ngOnInit();

  // Use tick to simulate the passage of time
  tick();
  fixture.detectChanges(); // Detect changes after tick

  const compiled = fixture.nativeElement;
  const idListItem = compiled.querySelector('li:nth-child(1)');
  expect(idListItem.textContent).toContain('Id: 1');
}));

it('should display player shirt number in list item', fakeAsync(() => {
  const playerData = {
    id: 1,
    name: 'Test Player',
    shirtno: 10,
    position: { id: 1, name: 'Forward' },
    appearances: 20,
    goals: 10,
  };

  // Mock the getPlayer method to return an observable of playerData
  playersService.getPlayer.and.returnValue(of(playerData));

  // Call ngOnInit explicitly to trigger the lifecycle hook
  component.ngOnInit();

  // Use tick to simulate the passage of time
  tick();
  fixture.detectChanges(); // Detect changes after tick

  const compiled = fixture.nativeElement;
  const shirtnoListItem = compiled.querySelector('li:nth-child(2)');
  expect(shirtnoListItem.textContent).toContain('Shirt No: 10');
}));

it('should display player position in list item', fakeAsync(() => {
  const playerData = {
    id: 1,
    name: 'Test Player',
    shirtno: 10,
    position: { id: 1, name: 'Forward' },
    appearances: 20,
    goals: 10,
  };

  // Mock the getPlayer method to return an observable of playerData
  playersService.getPlayer.and.returnValue(of(playerData));

  // Call ngOnInit explicitly to trigger the lifecycle hook
  component.ngOnInit();

  // Use tick to simulate the passage of time
  tick();
  fixture.detectChanges(); // Detect changes after tick

  const compiled = fixture.nativeElement;
  const positionListItem = compiled.querySelector('li:nth-child(3)');
  expect(positionListItem.textContent).toContain('Position: Forward');
}));

it('should display player appearances in list item', fakeAsync(() => {
  const playerData = {
    id: 1,
    name: 'Test Player',
    shirtno: 10,
    position: { id: 1, name: 'Forward' },
    appearances: 20,
    goals: 10,
  };

  // Mock the getPlayer method to return an observable of playerData
  playersService.getPlayer.and.returnValue(of(playerData));

  // Call ngOnInit explicitly to trigger the lifecycle hook
  component.ngOnInit();

  // Use tick to simulate the passage of time
  tick();
  fixture.detectChanges(); // Detect changes after tick

  const compiled = fixture.nativeElement;
  const appearancesListItem = compiled.querySelector('li:nth-child(4)');
  expect(appearancesListItem.textContent).toContain('Appearances: 20');
}));

it('should display player goals in list item', fakeAsync(() => {
  const playerData = {
    id: 1,
    name: 'Test Player',
    shirtno: 10,
    position: { id: 1, name: 'Forward' },
    appearances: 20,
    goals: 10,
  };

  // Mock the getPlayer method to return an observable of playerData
  playersService.getPlayer.and.returnValue(of(playerData));

  // Call ngOnInit explicitly to trigger the lifecycle hook
  component.ngOnInit();

  // Use tick to simulate the passage of time
  tick();
  fixture.detectChanges(); // Detect changes after tick

  const compiled = fixture.nativeElement;
  const goalsListItem = compiled.querySelector('li:nth-child(5)');
  expect(goalsListItem.textContent).toContain('Goals: 10');
}));

  it('should handle async loading of player details', fakeAsync(() => {
    const playerData = {
      id: 1,
      name: 'Test Player',
      shirtno: 10,
      position: { id: 1, name: 'Forward' },
      appearances: 20,
      goals: 10
    };

    // Mock the getPlayer method to return an observable of playerData
    playersService.getPlayer.and.returnValue(of(playerData));

    // Call ngOnInit explicitly to trigger the lifecycle hook
    component.ngOnInit();

    // Use tick to simulate the passage of time
    tick();

    expect(component.player).toEqual(playerData);
  }));
});
