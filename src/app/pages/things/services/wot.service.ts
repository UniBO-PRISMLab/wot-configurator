import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { FieldModel } from '../../../shared/models/field.model';
import { createNgModule } from "@angular/compiler/src/core";

const wotService = {
    url: "http://localhost", //"https://dicam083010.ing.unibo.it",
    port: 8080
};

const arrowHeadHost = {
    url: "http://137.204.57.93",
    port: 8443
};

@Injectable({
    providedIn: 'root'
})
export class WoTService {

    constructor(
        private http: HttpClient,
    ) {
        console.log('entity service : ' + wotService.url);
    }

    getList() {
        return this.http.get(
            `${wotService.url}:${wotService.port}`);
    }

    getSingleThing(url) {
        return this.http.get(url);
    }

    getByIdType(entityId) {
        return this.http.get(
            `${wotService.url}:${wotService.port}/${entityId}`);
    }

    getByIdTypeUrl(url, entityId) {
        url = url.replace("::", ':');
        return this.http.get(
            `${url}/${entityId}`);
    }

    simpleClone(obj: any) {
        return Object.assign({}, obj);
    }

    getProperty(url, thingId, property) {
        return this.getValue(`${url}/${thingId}/properties/${property}`);
    }

    create() {

    };
    getAllServices() {
        //console.log(`${arrowHeadHost.url}:${arrowHeadHost.port}/serviceregistry/mgmt?direction=ASC&sort_field=id`);
        return this.http.get(`${arrowHeadHost.url}:${arrowHeadHost.port}/serviceregistry/mgmt?direction=ASC&sort_field=id`);
    }

    //PUT http://192.168.0.19:8080/soil-probe-1/properties/battery { "value": 888}

    update(url, title, property, value) {
        return this.http.put(
            `${url}/${title}/properties/${property}`,
            { "value": value }
        );
    }

    convertModelToNgsi(model: FieldModel[]) {

        let attrs: any[] = [];

        let obj = {};

        model.forEach(
            el => {

                let v = (el.value == '...' || el.value == 'No value available' ? '' : el.value);

                obj[el.name] = {
                    type: el.type,
                    value: el.value,
                    metadata: {}
                };

                //attrs.push (obj);
            }
        );

        //return attrs;
        return obj;
    }

    getSimpleFields(thing) {
        const simpleFields = [];
        for (const key in thing) {
            if (typeof thing[key] !== 'object')
                simpleFields.push({ name: key, value: thing[key] });
        }
        return simpleFields;
    }

    getProperties(thing) {
        const formattedProperties = [];
        for (const key in thing?.properties) {
            let property: any = {
                name: key,
                value: null,
                description: null,
                isObject: false,
                readOnly: true,
                link: ""
            };

            if (thing.properties[key]?.description)
                property.description = thing.properties[key].description;
            if ("readOnly" in thing.properties[key])
                property.readOnly = thing.properties[key].readOnly;
            if (thing.properties[key]?.forms[0]?.href) {
                console.log(key)
                this.getValue(thing.properties[key]?.forms[0]?.href)
                    .pipe(take(1))
                    .subscribe((response) => {
                        if (typeof response === 'object' && response != null) {
                            property.value = JSON.stringify(response, null, 2);
                            property.isObject = true;
                        } else {
                            property.value = response;
                        }
                        property.link = thing.properties[key]?.forms[0]?.href;
                    });
            } else if (thing.properties[key]?.value) {
                property.value = thing.properties[key].value;
            }
            formattedProperties.push(property);
        }
        return formattedProperties;
    }
    sendAction(url, title, action, value) {
        url = url.replace("::", ":");
        console.log(`${url}/${title}/actions/${action}`);
        console.log({ "value": value });
        return this.http.post(
            `${url}/${title}/actions/${action}`,
            { "value": value }
        );
    }
    getActions(thing) {
        const formattedActions = [];
        for (const key in thing?.actions) {
            let action: any = {
                name: key,
                value: null,
                description: null,
                input: {},
                hasLink: false,
                readOnly: true
            };

            if (thing.actions[key]?.description)
                action.description = thing.actions[key].description;

            if (thing.actions[key]?.forms[0]?.href) {
                action.value = thing.actions[key]?.forms[0]?.href;
                action.hasLink = true;
            }
            if (thing.actions[key]?.input)
                action.input = thing.actions[key]?.input;
            formattedActions.push(action);
        }
        return formattedActions;
    }

    getEvents(thing) {
        const formattedEvents = [];
        for (const key in thing?.events) {
            let event: any = {
                name: key,
                value: null,
                description: null,
                hasLink: false,
                readOnly: true
            }; false

            if (thing.events[key]?.description)
                event.description = thing.events[key].description;

            if (thing.events[key]?.forms[0]?.href) {
                event.value = thing.events[key]?.forms[0]?.href;
                event.hasLink = true;
            }
            formattedEvents.push(event);
        }
        return formattedEvents;
    }

    getValue(url) {
        return this.http.get(url);
    }
}
