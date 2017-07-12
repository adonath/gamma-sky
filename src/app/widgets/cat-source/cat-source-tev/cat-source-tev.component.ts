import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CatalogTeV } from '../../../services/catalog';
import { SourceTeV } from '../../../services/source';
import { CatalogService } from '../../../services/catalog.service';

@Component({
  selector: 'cat-source-tev',
  templateUrl: './cat-source-tev.component.html',
  styleUrls: ['./cat-source-tev.component.css']
})
export class CatSourceTeVComponent implements OnInit {

  private sub;
  private id;

  private catalog: CatalogTeV;
  private source: SourceTeV;
  private error: any;

  getCatalog() {
    this.catalogService.getCatalogTeV()
      .then(catalog => { this.catalog = catalog; })
      .catch(error => this.error = error);
  }

  getSource() {
    // return this.catalog.getSource(this.id);
    //TODO call catalogService to get the source here, instead of fetching the source from the cat.json file.
    this.catalogService.getSourceTeV(this.id)
      .then(source => { this.source = source; })
      .catch (error => this.error = error);
  }

  constructor(
    private catalogService: CatalogService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log("Routing to CatSourceTeVComponent...");

    this.getCatalog();

    this.sub = this.activatedRoute.params.subscribe(params => {
      let id = +params['id'];
      console.log('id ', id);
      this.id = id;
      this.getSource();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
