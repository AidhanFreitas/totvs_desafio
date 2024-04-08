import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPessoaComponent } from './components/addpessoas/addpessoas.component';
import { ListPessoaComponent } from './components/listpessoas/listpessoas.component';
import { UpdatePessoaComponent } from './components/updatepessoas/updatepessoas.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'add', component: AddPessoaComponent },
  { path: 'list', component: ListPessoaComponent },
  { path: 'update/:id', component: UpdatePessoaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }