import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { DemoComponent } from './child2/demo/demo.component';

const routes: Routes = [
{path:"child1",component:Child1Component},
{path:"child2",component:Child2Component,children:[
  {path:"demo",component:DemoComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
