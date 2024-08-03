import { Component } from '@angular/core';
import { CreateIncomePopUpComponent } from '../create-income-pop-up/create-income-pop-up.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-month-and-new-objects',
  standalone: true,
  imports: [MatDialogModule, CreateIncomePopUpComponent],
  templateUrl: './month-and-new-objects.component.html',
  styleUrl: './month-and-new-objects.component.css'
})
export class MonthAndNewObjectsComponent {

  constructor(public dialog: MatDialog) {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateIncomePopUpComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('the dialog was closed');
    })
  }

  
}
