import { Component } from '@angular/core';
import { PessoaService } from '../../../service/pessoa.service';
import { Pessoa } from '../../../models/pessoa.model';


@Component({
    selector: 'app-listpessoas',
    templateUrl: './listpessoas.component.html',
    styleUrls: ['./listpessoas.component.css']
})
export class ListPessoaComponent {
    constructor(private pessoaService: PessoaService) { }
    dataSource: Pessoa[] = []
    nome: string = ``
    ngOnInit(): void {
        this.retrievePessoas();
    }


    async retrievePessoas() {
        this.pessoaService.getAll()
            .subscribe({
                next: (data) => {
                    this.dataSource = data.results;
                },
                error: (e) => console.error(e)
            });
    }

    async deletePessoa(pessoa: Pessoa) {
        this.pessoaService.delete(pessoa.id)
            .subscribe({
                next: (data) => {
                    this.retrievePessoas();
                },
                error: (e) => console.error(e)
            });

    }

    displayedColumns: string[] = ['name', 'phone', 'actions'];



}