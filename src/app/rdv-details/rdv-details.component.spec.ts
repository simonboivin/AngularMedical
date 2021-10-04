import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvDetailsComponent } from './rdv-details.component';
import { RouterTestingModule } from '@angular/router/testing';

describe( 'RdvDetailsComponent', () => {
    let component: RdvDetailsComponent;
    let fixture: ComponentFixture<RdvDetailsComponent>;

    beforeEach( async () => {
        await TestBed.configureTestingModule( {
            declarations: [RdvDetailsComponent],
            imports: [HttpClientModule, RouterTestingModule]
        } )
            .compileComponents();
    } );

    beforeEach( () => {
        fixture = TestBed.createComponent( RdvDetailsComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
