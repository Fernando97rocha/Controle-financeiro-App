import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from '../../services/API/category.service';
import { Category } from '../../models/category-model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IncomeService } from '../../services/API/income.service';
import { AppServiceService } from '../../services/app-service.service';
import { response } from 'express';

@Component({
  selector: 'app-create-income-pop-up',
  standalone: true,
  imports: [MatDialogModule, CommonModule, FormsModule],
  templateUrl: './create-income-pop-up.component.html',
  styleUrl: './create-income-pop-up.component.css'
})
export class CreateIncomePopUpComponent implements OnInit {

  @ViewChild('divCategory') divCategory!: ElementRef;
  @ViewChild('divNewCategory') divNewCategory!: ElementRef;

  categories: Category[] = [];
  categoryToCompare!: string;

  category: string = '';
  categoryId!: any;
  categoryType: string = 'income'
  description: string = '';
  amount: string = '';

  constructor (public dialogRef: MatDialogRef<CreateIncomePopUpComponent>, 
              private incomeService: IncomeService, 
              private categoryService: CategoryService,
              private appService: AppServiceService) {}

  ngOnInit(): void {
    
    this.categoryService.getCategories().subscribe(data => {
      data.forEach(cat => {
        if (cat.type === this.categoryType) {
          this.categories.push(cat);
          console.log('cuidar disso no backend')
        }
      })
    })
  }

  cancel(): void {
    this.dialogRef.close();
  }

  newCategoryDisplay() {
    this.divCategory.nativeElement.classList.add('event-to-hide')
    this.divNewCategory.nativeElement.classList.remove('event-to-hide')
    this.divNewCategory.nativeElement.classList.add('new-category')
    this.category = '';
  }

  backToList() {
    this.divNewCategory.nativeElement.classList.remove('new-category')
    this.divNewCategory.nativeElement.classList.add('event-to-hide')
    this.divCategory.nativeElement.classList.remove('event-to-hide')
  }

  addNewCategory() {

    if (this.category.length === 0){
      alert('A categoria não pode ser vazia')
    }

    this.categories.forEach(cat => {
      if (cat.name === this.category) {
        this.categoryToCompare = this.category;
      }
    })

    if (this.category !== this.categoryToCompare) {
      const newCategory = {
        name: this.category,
        type: this.categoryType
      }

      this.categoryService.postNewCategory(newCategory).subscribe( newCategory => {
        this.categories.push(newCategory);
        console.log(newCategory)
      });

    } else {
      alert('Esta categoria já existe');
    }

    this.divNewCategory.nativeElement.classList.remove('new-category')
    this.divNewCategory.nativeElement.classList.add('event-to-hide')
    this.divCategory.nativeElement.classList.remove('event-to-hide')
  }

  onSubmit() {

    this.categories.forEach( cat => {
      if (this.category === cat.name) {
        this.categoryId = cat.id;
      }
    })
    
    const newIncome = {
      description: this.description,
      categoryId: this.categoryId,
      category: this.category,
      value: Number(this.amount.replace(',', '.'))
    }

    if (this.amount.length === 0 || this.description.length === 0 || this.category.length === 0) {
      alert('É necessário preencher todos os valores')
      
    } else {
      this.incomeService.addNewIncome(newIncome).subscribe(response => {
        response.category = newIncome.category;
        this.appService.putIncomes(response)        
      });
      this.cancel();
    }

    this.description = '';
    this.amount = '';
    this.category = '';

  }
}
