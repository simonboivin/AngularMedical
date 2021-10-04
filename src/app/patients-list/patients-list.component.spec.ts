import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientsListComponent } from './patients-list.component';

describe( 'PatientsListComponent', () => {
    let component: PatientsListComponent;
    let fixture: ComponentFixture<PatientsListComponent>;

    beforeEach( async () => {
        await TestBed.configureTestingModule( {
            declarations: [PatientsListComponent],
            imports: [HttpClientModule]
        } )
            .compileComponents();
    } );

    beforeEach( () => {
        fixture = TestBed.createComponent( PatientsListComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );

    it( 'shoult list all patients', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect( compiled.querySelector( '.h2' )?.textContent ).toContain( 'Liste des Patients' );
        expect( compiled.querySelectorAll( 'table' ).length ).toBe( 1 );
        expect( component ).toBeTruthy();
    } );

} );
