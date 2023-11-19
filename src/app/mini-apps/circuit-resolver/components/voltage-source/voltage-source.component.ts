import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'grot-voltage-source',
  templateUrl: './voltage-source.component.html',
  styleUrl: './voltage-source.component.scss'
})
export class VoltageSourceComponent {
  @Output() voltageSourceDragging = new EventEmitter<boolean>();
  @Input() x = 0;
  @Input() y = 0;

  onDragStart(event: DragEvent): void {
    event.dataTransfer?.setData('text/plain', ''); // Necessary for Firefox to enable drag
    event.dataTransfer?.setDragImage(new Image(), 0, 0); // Hides the default drag image

    this.voltageSourceDragging.emit(true);
  }
}
