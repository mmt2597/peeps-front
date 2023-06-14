import { PositionService } from 'src/app/services/position.service';
import { Options, ChangeContext } from '@angular-slider/ngx-slider';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-field-type',
  templateUrl: './form-field-type.component.html',
  styleUrls: ['./form-field-type.component.scss']
})
export class FormFieldTypeComponent implements OnInit {
  @Input() options: any;
  @Output() optionsChange = new EventEmitter;

  @Input() template: string = '';

  positions: any[] = [];

  // Slider Settings
  sliderValue: number = 0;
  sliderOptions: Options = {
    showTicksValues: true,
    draggableRange: true
  };

  constructor(
    private positionService: PositionService
  ) { }

  ngOnInit(): void {
    this.preLoadedForm();
  }

  onChangeCheckBox(event: any) {
    this.options.answer = this.options.answer || [];

    if(event.target.checked) {
      this.options.answer.push(event.target.value);
    } else {
      let index = this.options?.answer?.findIndex((val: any) => val == event.target.value);
      this.options.answer?.splice(index, 1);
    }
  }

  onChangeRadio(event: any) {
    this.options.answer = event.target.checked ? event.target.value : null;
  }

  preLoadedForm() {
    let question = this.options?.question;
    let fieldType = this.options?.question?.field_type;

    if(question?.type == 'static') {
      if(question?.static_type == 'position') this.getPositions();
    }

    if(question?.type == 'dynamic') {
      if(fieldType == 'slider') this.setSliderSettings();
    }
  }

  getPositions() {
    this.positionService.get().subscribe(res => this.positions = res?.data);
  }

  // Slider Functions

  setSliderSettings() {
    let fieldOptions = this.options?.question?.field_options;
    let sliderOptions: any[] = [];
    this.sliderValue = fieldOptions.findIndex((fieldOption: any) => fieldOption?.uuid == this.options.answer);

    fieldOptions.forEach((fieldOption: any, index: number) => {
      sliderOptions.push({ 
        value: index,
        // legend: fieldOption?.option
      });
    });

    this.sliderOptions.stepsArray = sliderOptions;
    this.sliderOptions.translate = (value: number) => { 
      return fieldOptions[value]?.option;
    };
  }

  onUserChange(changeContext: ChangeContext): void {
    this.options.answer = this.options?.question?.field_options[changeContext.value]?.uuid;
  }
}
