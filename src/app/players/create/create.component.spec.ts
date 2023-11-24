// import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
// import { ReactiveFormsModule } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { of } from 'rxjs';

// import { CreateComponent } from './create.component';
// import { PlayersService } from '../players.service';
// import { PositionsService } from '../positions.service';
// import { Player } from '../player';
// import { Position } from '../position';

// describe('CreateComponent', () => {
//   let component: CreateComponent;
//   let fixture: ComponentFixture<CreateComponent>;
//   let playersService: jasmine.SpyObj<PlayersService>;
//   let positionsService: jasmine.SpyObj<PositionsService>;
//   let router: jasmine.SpyObj<Router>;

//   beforeEach(() => {
//     const playersServiceSpy = jasmine.createSpyObj('PlayersService', ['createPlayer']);
//     const positionsServiceSpy = jasmine.createSpyObj('PositionsService', ['getPositions']);
//     const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

//     TestBed.configureTestingModule({
//       declarations: [CreateComponent],
//       imports: [ReactiveFormsModule],
//       providers: [
//         { provide: ActivatedRoute, useValue: {} },
//         { provide: PlayersService, useValue: playersServiceSpy },
//         { provide: PositionsService, useValue: positionsServiceSpy },
//         { provide: Router, useValue: routerSpy },
//       ],
//     });

//     fixture = TestBed.createComponent(CreateComponent);
//     component = fixture.componentInstance;
//     playersService = TestBed.inject(PlayersService) as jasmine.SpyObj<PlayersService>;
//     positionsService = TestBed.inject(PositionsService) as jasmine.SpyObj<PositionsService>;
//     router = TestBed.inject(Router) as jasmine.SpyObj<Router>;

//     // Provide a mock implementation for positionsService.getPositions()
//     positionsService.getPositions.and.returnValue(of([]));

//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should initialize the form', () => {
//     expect(component.createForm).toBeDefined();
//   });

//   it('should load positions on ngOnInit', () => {
//     const positions: Position[] = [{ id: 1, name: 'Position 1' }];
//     positionsService.getPositions.and.returnValue(of(positions));

//     component.ngOnInit();

//     expect(component.positions).toEqual(positions);
//   });

//   it('should validate required fields in the create player form', () => {
//     const form = component.createForm;
//     expect(form.valid).toBeFalsy();

//     // Set values for each form control
//     form.controls['shirtno'].setValue('Test Shirt No');
//     form.controls['name'].setValue('Test Name');
//     form.controls['positionid'].setValue('1'); // Assuming '1' is a valid position id
//     form.controls['appearances'].setValue('10');
//     form.controls['goals'].setValue('5');

//     // Trigger change detection to update form validity
//     fixture.detectChanges();

//     expect(form.valid).toBeTruthy();
//   });

//   it('PlayerCreateComponent should render the form fields', () => {
//     const compiled = fixture.nativeElement;
//     expect(compiled.querySelector('h3').textContent).toContain('Create Player'); // Assuming the heading is <h3>
//     expect(compiled.querySelector('form')).toBeTruthy();

//     // Shirt No field
//     expect(compiled.querySelector('label[for="shirtno"]').textContent).toContain('Shirt No:');
//     expect(compiled.querySelector('input[id="shirtno"][formControlName="shirtno"]')).toBeTruthy();

//     // Name field
//     expect(compiled.querySelector('label[for="name"]').textContent).toContain('Name:');
//     expect(compiled.querySelector('input[id="name"][formControlName="name"]')).toBeTruthy();

//     // Position field (assuming it's a select)
//     expect(compiled.querySelector('label[for="positionid"]').textContent).toContain('Position:');
//     expect(compiled.querySelector('select[id="positionid"][formControlName="positionid"]')).toBeTruthy();

//     // Appearances field
//     expect(compiled.querySelector('label[for="appearances"]').textContent).toContain('Appearances:');
//     expect(compiled.querySelector('input[id="appearances"][formControlName="appearances"]')).toBeTruthy();

//     // Goals field
//     expect(compiled.querySelector('label[for="goals"]').textContent).toContain('Goals:');
//     expect(compiled.querySelector('input[id="goals"][formControlName="goals"]')).toBeTruthy();

//     // Submit button
//     expect(compiled.querySelector('button[type="submit"]').textContent).toContain('Create');
//   });

// });
