import { Component } from '@angular/core';
import { PessoaService } from '../../../service/pessoa.service';
import { Pessoa } from '../../../models/pessoa.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-addpessoas',
    templateUrl: './addpessoas.component.html',
    styleUrls: ['./addpessoas.component.css']
})
export class AddPessoaComponent {

    Pessoa: Pessoa = {
        nome: '',
        numeroDeTelefone: ''
    };
    submitted = false;

    constructor(private PessoaService: PessoaService, private route: Router) { }


    savePessoa(): void {
        const data = {
            nome: this.Pessoa.nome,
            numeroDeTelefone: this.Pessoa.numeroDeTelefone
        };

        this.PessoaService.create(data)
            .subscribe({
                next: (res) => {
                    this.submitted = true;

                },
                error: (e) => console.error(e)
            });
    }

    newPessoa(): void {
        this.submitted = false;
        this.Pessoa = {
            nome: '',
            numeroDeTelefone: ''
        };
    }

}