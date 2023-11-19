import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ResistorComponent } from './components/resistor/resistor.component';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'grot-circuit-resolver',
  templateUrl: './circuit-resolver.component.html',
  styleUrl: './circuit-resolver.component.scss',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity: 1,
        color: '#2fde32'
      })),
      state('closed', style({
        opacity: 0.8,
        color: '#2f8cde'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
      transition('open <=> closed', [
        animate('0.5s')
      ]),
      transition ('* => open', [
        animate ('1s',
          style ({ opacity: '*' }),
        ),
      ]),
      transition('* => *', [
        animate('1s')
      ]),
    ]),
  ],

})
export class CircuitResolverComponent {
  @ViewChild('circuitCanvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild(ResistorComponent) resistorComponent!: ResistorComponent; // Import ResistorComponent
  isDragging = false;
  offsetX!: number;
  offsetY!: number;
  resistorDragging = false;
  voltageSourceDragging = false;
  resistorX = 0;
  resistorY = 0;
  resistors: { x: number, y: number }[] = [];
  voltageSources: {x: number, y: number}[] = [];
  isOpen = false; //animation

  onMouseDown(event: MouseEvent): void {
    if (event.target === this.canvas.nativeElement) {
      this.isDragging = true;
      const canvasRect = this.canvas.nativeElement.getBoundingClientRect();
      this.offsetX = event.clientX - canvasRect.left;
      this.offsetY = event.clientY - canvasRect.top;
    }
  }

  // Handling the dragging of the resistor
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.resistorDragging) {
      this.resistorX = event.clientX;
      this.resistorY = event.clientY;
    }
    if (this.isDragging) {
      const canvas = this.canvas.nativeElement;
      const x = event.clientX - canvas.getBoundingClientRect().left - this.offsetX;
      const y = event.clientY - canvas.getBoundingClientRect().top - this.offsetY;
      canvas.style.left = x + 'px';
      canvas.style.top = y + 'px';
    }
  }

  
  onMouseUp(): void {
    this.isDragging = false;
  }

  allowDrop(event: DragEvent): void {
    event.preventDefault();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    const circuitCanvas = this.canvas.nativeElement;
    const rect = circuitCanvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (this.resistorDragging) {
      this.addResistor(x, y);
      this.resistorDragging = false
    } else if (this.voltageSourceDragging) {
      this.addVoltageSource(x, y);
    }
  }

  // Method to add a resistor to the canvas
  addResistor(x: number, y: number): void {
    const circuitCanvas = this.canvas.nativeElement;
    const context = circuitCanvas.getContext('2d');

    const resistorWidth = 60;
    const resistorHeight = 20;

    // Draw resistor on canvas
    if(context){
      context.beginPath();
      context.rect(x, y, resistorWidth, resistorHeight);
      context.fillStyle = '#ccc';
      context.fill();
      context.lineWidth = 1;
      context.strokeStyle = '#999';
      context.stroke();
    }

    // Store the coordinates or other resistor data as needed
    const newResistor = { x, y };
    this.resistors.push(newResistor); // Add the resistor to your collection
  }

  addVoltageSource(x: number, y: number): void {
    const circuitCanvas = this.canvas.nativeElement;
    const context = circuitCanvas.getContext('2d');

    const sourceWidth = 60;
    const sourceHeight = 20;

    // Draw voltage source on canvas
    if(context){
      context.beginPath();
      context.rect(x, y, sourceWidth, sourceHeight);
      context.fillStyle = '#ffcc00';
      context.fill();
      context.lineWidth = 1;
      context.strokeStyle = '#cc9900';
      context.stroke();
    }


    // Store the coordinates or other source data as needed
    const newSource = { x, y };
    this.voltageSources.push(newSource); // Add the voltage source to your collection
  }

  handleResistorDragging(event: boolean){
    this.resistorDragging = true;
  }

  handleVoltageSourceDragging(event: boolean){
    this.voltageSourceDragging = true;
  }

  open(){
    this.isOpen = true;
  }
  close(){
    this.isOpen = false;
  }
}
