import { LightningElement, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import Id from '@salesforce/schema/Account.Id';
import NAME_FIELD from '@salesforce/schema/Account.Name';
const fields = [NAME_FIELD];

export default class Selector extends LightningElement {
    selectedProductId;

    handleProductSelected(evt) {
        this.selectedProductId = evt.detail;
    }

    userId= Id;

    @wire(getRecord, { recordId: '$userId', fields })
    user;

    get name() {
        return getFieldValue(this.user.data, NAME_FIELD);
    }
}
