import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { WoTService } from '../services/wot.service';

import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-entity-raw-editor',
  templateUrl: './entity-raw-editor.component.html',
  styleUrls: ['./entity-raw-editor.component.css']
})
export class EntityRawEditorComponent implements OnInit {

  idEntityRoute;

  typeEntityModel: string;
  idEntityModel: string;

  breadcrumb: any[] = [];

  isEdit: boolean = false;

  entity: any = [];

  entityStr: string = null;
  url: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    //private entityService: EntityService,
    private wotService: WoTService,
    private toastr: ToastrService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    if (history.state.url != undefined)
      this.url = (history.state.url);
    else this.backToThingsList();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (response) => {
        this.idEntityRoute = response.id;
        this.setEditEntityValues();
      }
    );

  }

  saveOrUpdateEntity(entityTextArea) {
    //console.log(entityTextArea.value);

    let entity = null;
    try {
      entity = JSON.parse(entityTextArea.value);
    } catch (e) {
      this.toastr.error('Error in parser Thing');
    }

  }

  backToThingsList() {
    this.router.navigate(['things']);
  }

  showMoreEntity() {

    if (this.idEntityRoute) {
      this.router.navigate(['things/show-more', this.idEntityRoute], { state: { url: this.url } });
    }

  }

  isShowButtonChangeView() {
    return (this.idEntityRoute);
  }

  copyInputMessage(inputElement) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
    this.toastr.success('Thing copied!');
  }

  private setEditEntityValues() {

    this.wotService.getByIdTypeUrl(this.url, this.idEntityRoute).subscribe(

      (response) => {
        this.entity = response;
        //clone var to does not modify array of entity in service
        this.entity = this.wotService.simpleClone(this.entity);
        this.entityStr = JSON.stringify(this.entity, null, 2);
      },
      (error) => {
        this.toastr.error('error getting Thing');
        throw new Error('error getting Thing ' + JSON.stringify(error));

      }
    );

  }
}


