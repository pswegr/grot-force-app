import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'grot-resistor',
  templateUrl: './resistor.component.html',
  styleUrl: './resistor.component.scss'
})
export class ResistorComponent {
  @Output() resistorDragging = new EventEmitter<boolean>();
  @Input() x = 0;
  @Input() y = 0;

  onDragStart(event: DragEvent): void {
    event.dataTransfer!.setData('text/plain', ''); // Necessary for Firefox to enable drag
    event.dataTransfer!.setDragImage(new Image(), 0, 0); // Hides the default drag image
    event.dataTransfer!.dropEffect = 'move';

    this.resistorDragging.emit(true);
  }
}
