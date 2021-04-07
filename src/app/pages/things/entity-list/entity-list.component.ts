import { Component, OnInit } from '@angular/core';
import { WoTService } from '../services/wot.service';

import { ToastrService } from 'ngx-toastr';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { NgxSpinnerService } from 'ngx-spinner';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.css']
})
export class EntityListComponent implements OnInit {

  order: string = 'id';
  reverse: boolean = false;
  searchText: string;

  isArrowhead: boolean = true;
  navigationSubscription: any;
  resources: Observable<any>[] = [];
  thingsList: any = [];

  constructor(
    private wotService: WoTService,
    private toastr: ToastrService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private orderPipe: OrderPipe

  ) {
    /* this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.init();
      }
    }); */
  }

  ngOnInit() {
    this.isArrowhead ? this.initArrowhead() : this.initWoT();
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
  private initArrowhead() {
    this.spinner.show();
    this.wotService.getAllServices()
      .pipe(
        take(1)
      ).subscribe((response: any) => {
        const arrowHeadFilteredServices = response.data.filter((service) => "systemName" in service.provider ?
          service.provider.systemName === "modron" : false);
        this.parseArrowhead(arrowHeadFilteredServices);
        console.log(this.resources);
        this.spinner.hide();
      }, (error) => {
        this.toastr.error(`Error loading things`);
        console.error(error);
        this.spinner.hide();
      });

  }
  private initWoT() {
    this.spinner.show();

    this.wotService.getList()
      .pipe(
        take(1)
      )
      .subscribe(
        (response) => {
          this.thingsList = response;
          this.thingsList.map((url) => {
            this.wotService.getSingleThing(url)
              .subscribe((response: any) => {
                this.resources.push(response);
              });
          });
        },
        (errorResponse) => {
          console.error(errorResponse);
          this.resources = [];
          this.toastr.error(`Error : ${errorResponse.error.description}`);
          this.spinner.hide();
        }
      );
    this.resources = this.orderPipe.transform(this.resources, 'id');
    console.log(this.resources);
    this.spinner.hide();
  }
  private parseArrowhead(arrowHeadResponse) {
    console.log(arrowHeadResponse);
    this.resources = arrowHeadResponse.map((service) => {
      const thing = {
        title: service.serviceUri,
        url: `${service.provider.address}:${service.provider.port}`
      };
      console.log(thing)
      return thing;
    })
  }
}
