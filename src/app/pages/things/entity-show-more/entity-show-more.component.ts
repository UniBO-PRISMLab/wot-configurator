import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WoTService } from '../services/wot.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { take } from 'rxjs/operators';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { PageScrollService } from 'ngx-page-scroll-core';
import { OrderPipe } from 'ngx-order-pipe';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-entity-show-more',
  templateUrl: './entity-show-more.component.html',
  styleUrls: ['./entity-show-more.component.css']
})
export class EntityShowMoreComponent implements OnInit {

  idEntityRoute;
  idEntityModel: string;
  isEdit: boolean = false;
  entity: any = [];
  simpleFields: any = [];
  properties: any = [];
  actions: any = [];
  events: any = [];
  url: string;
  selectedOption: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private orderPipe: OrderPipe,
    private woTService: WoTService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private pageScrollService: PageScrollService,
    private modalService: NgbModal,
    @Inject(DOCUMENT) private document: any
  ) {
    if (history.state.url != undefined)
      this.url = (history.state.url);
    else this.backToEntityList();
  }

  ngOnInit() {
    this.spinner.show();
    this.activatedRoute.params.subscribe(
      (response) => {
        this.idEntityRoute = response.id;
        this.setEditEntityValues();
      }
      , (err: any) => {
        this.toastr.error(`error loading ${this.idEntityRoute}`)
        this.spinner.hide();
        this.backToEntityList();
      });

  }

  autoSave(propertyName, propertyValue) {
    console.log('auto save');
    this.updateProperty(this.idEntityModel, propertyName, propertyValue);
  }

  backToEntityList() {
    this.router.navigate(['things']);
  }

  open(content, source) {
    if (source === "properties")
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg', scrollable: true }).result.then();
    else
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then();
  }



  changeJsonView() {

    if (this.idEntityRoute) {
      this.router.navigate(['things/raw-editor', this.idEntityRoute], { state: { url: this.url } });
    }
  }

  sendAction(action) {
    this.spinner.show();

    this.woTService.sendAction(this.url, this.idEntityModel, action, +this.selectedOption)
      .pipe(
        take(1)
      )
      .subscribe(
        (response) => {
          console.log(response);
          this.spinner.hide();
          this.toastr.success(`action ${action} performed`);
          this.modalService.dismissAll();
          this.ngOnInit();
        },
        (error) => {
          this.spinner.hide();
          this.toastr.error(`error sending action`);
          throw new Error(error);
        });
  }
  //private methods

  private setEditEntityValues() {
    console.log(this.url);
    console.log(this.idEntityRoute);

    this.woTService.getByIdTypeUrl(this.url, this.idEntityRoute)
      .pipe(
        take(1)
      )
      .subscribe(
        (response) => {
          console.log(response)
          this.entity = response;

          //clone var to does not modify array of entity in service
          this.entity = this.woTService.simpleClone(this.entity);
          this.simpleFields = this.woTService.getSimpleFields(this.entity);
          this.simpleFields = this.orderPipe.transform(this.simpleFields, 'name');
          console.log(this.simpleFields)
          this.properties = this.woTService.getProperties(this.entity);
          this.properties = this.orderPipe.transform(this.properties, 'name');
          console.log(this.properties)
          this.actions = this.woTService.getActions(this.entity);
          this.actions = this.orderPipe.transform(this.actions, 'name');
          console.log(this.actions)
          this.events = this.woTService.getEvents(this.entity);
          this.events = this.orderPipe.transform(this.actions, 'name');
          console.log(this.events)
          this.idEntityModel = this.idEntityRoute;
          // this.spinner.hide();

        },
        (error) => {
          this.toastr.error(`error loading ${this.idEntityRoute}`);
          this.spinner.hide();
          this.backToEntityList();
          throw new Error(error);

        }
      );
    this.spinner.hide();

  }
  //this.idEntityModel, propertyName, propertyValue);

  refreshProperty(link, index) {
    this.spinner.show();
    console.log(link);
    console.log(index)
    this.woTService.getValue(link)
      .pipe(
        take(1)
      )
      .subscribe(
        (response: any) => {
          console.log(response);
          if (typeof response === 'object')
            this.properties[index].value = JSON.stringify(response, null, 2);
          else
            this.properties[index].value = response;
          console.log(this.properties[index]);

          this.toastr.success(`property refreshed`);
          this.spinner.hide();
        },
        (error) => {
          console.log(error);

          this.toastr.error(`error refreshing property`);
          this.spinner.hide();
        }
      );

  }

  private updateProperty(title, property, value) {
    this.spinner.show();
    this.woTService.update(this.url, title, property, +value)
      .pipe(
        take(1)
      )
      .subscribe(
        (response) => {
          this.toastr.success(`property ${property} updated`);
          this.spinner.hide();
        },
        (error) => {
          this.toastr.error(`error updating ${property} `);
          this.spinner.hide();
        }
      );
  }

}
