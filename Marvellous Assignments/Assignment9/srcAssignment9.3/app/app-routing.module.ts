import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BooksComponent } from './books/books.component';
import { WrongChoiceComponent } from './wrong-choice/wrong-choice.component';

const routes: Routes = [
  { path:"" , component:TechnologiesComponent },
  { path:"technologies" , component:TechnologiesComponent },
  { path:"books" , component:BooksComponent },
  { path:"**" , component:WrongChoiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
