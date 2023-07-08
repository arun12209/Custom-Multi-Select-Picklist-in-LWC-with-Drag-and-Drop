import { LightningElement,track } from 'lwc';

export default class CustomMultiselectPicklist extends LightningElement {
    @track availableOptions = [
        { label: 'Option 1', value: 'Option 1' },
        { label: 'Option 2', value: 'Option 2' },
        { label: 'Option 3', value: 'Option 3' },
        { label: 'Option 4', value: 'Option 4' },
    ];
    @track selectedOptions = [];

    handleDragStart(event) {
        event.dataTransfer.setData('text', event.target.dataset.value);
    }

    handleDragOver(event) {
        event.preventDefault();
    }

    handleDropAvailable(event) {
        event.preventDefault();
        const value = event.dataTransfer.getData('text');
        const selectedOption = this.selectedOptions.find(option => option.value === value);

        if (selectedOption) {
            this.selectedOptions = this.selectedOptions.filter(option => option.value !== value);
            this.availableOptions = [...this.availableOptions, selectedOption];
        }
        console.log('Available options : '+JSON.stringify(this.availableOptions));
        console.log('Selected options : '+JSON.stringify(this.selectedOptions));
    }

    handleDropSelected(event) {
        event.preventDefault();
        const value = event.dataTransfer.getData('text');
        const selectedOption = this.availableOptions.find(option => option.value === value);

        if (selectedOption) {
            this.availableOptions = this.availableOptions.filter(option => option.value !== value);
            this.selectedOptions = [...this.selectedOptions, selectedOption];
        }
        console.log('Available options : '+JSON.stringify(this.availableOptions));
        console.log('Selected options : '+JSON.stringify(this.selectedOptions));
    }
}
