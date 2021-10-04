import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Patients } from '../classes/patients';
import { Rdv } from '../classes/rdv';
import { Villes } from '../classes/villes';

import { RdvComponent } from './rdv.component';

describe( 'RdvComponent', () => {
    let component: RdvComponent;
    let fixture: ComponentFixture<RdvComponent>;

    beforeEach( async () => {
        await TestBed.configureTestingModule( {
            declarations: [RdvComponent],
            imports: [HttpClientModule]
        } )
            .compileComponents();
    } );

    beforeEach( () => {
        fixture = TestBed.createComponent( RdvComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );


    it( 'should list all rdv', () => {
        const compiled = fixture.nativeElement as HTMLElement;

        expect( compiled.querySelector( '.h2' )?.textContent ).toContain( "Liste des Rendez-vous" );
        expect( compiled.querySelectorAll( "table" ).length ).toBe( 1 );
        expect( compiled.querySelectorAll( "thead tr" ).length ).toBe( 1 );
    } );

    it( 'should create rdv', () => {
        const compiled = fixture.nativeElement as HTMLElement;

        let ville: Villes = new Villes( 1, "Test", 99999 );
        let patient: Patients = new Patients( 1, "NomTest", "PrenomTest", "test@test.com", "09 99 99 99 99", ville );
        component.rdvList = [
            new Rdv( 1, patient, new Date( "2021-11-01T17:00" ), "consultation", 1, "" ),
            new Rdv( 2, patient, new Date( "2021-11-20T11:00" ), "controle", 2, "" ),
        ];

        fixture.detectChanges();
        expect( compiled.querySelectorAll( 'tbody tr' ).length ).toBe( component.rdvList.length );
        expect( component ).toBeTruthy();
    } );
} );
