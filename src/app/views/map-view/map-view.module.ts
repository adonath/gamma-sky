import { NgModule } from '@angular/core';

import { MapViewComponent } from './map-view.component';
import { MapComponent } from '../../widgets/map/map.component';
import { AboutComponent } from '../../widgets/about/about.component';

import { MapViewRoutingModule } from './map-view-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { CatalogService } from '../../services/catalog.service';

@NgModule({
  declarations: [
    MapViewComponent,
    MapComponent,
    AboutComponent
  ],
  imports: [
    MapViewRoutingModule,
    SharedModule
  ],
  providers: [
    CatalogService
  ]
})
export class MapViewModule { }