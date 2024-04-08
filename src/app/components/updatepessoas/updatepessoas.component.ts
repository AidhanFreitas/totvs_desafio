import { Component } from '@angular/core';
import { PessoaService } from '../../../service/pessoa.service';
import { Pessoa } from '../../../models/pessoa.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-updatepessoas',
    templateUrl: './updatepessoas.component.html',
    styleUrls: ['./updatepessoas.component.css']
})
export class UpdatePessoaComponent {
    constructor(private pessoaService: PessoaService, private activatedRoute: ActivatedRoute, private route: Router) { }

    Pessoa: Pessoa = {
        nome: '',
        numeroDeTelefone: '',
        id: 0
    };
    submitted = false;

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            const userId = params['id'];
            this.retrievePessoa(userId);
        });
    }

    async retrievePessoa(id: number) {
        this.pessoaService.get(id)
            .subscribe({
                next: (data) => {
                    this.Pessoa.nome = data.nome
                    this.Pessoa.numeroDeTelefone = data.numeroDeTelefone
                    this.Pessoa.id = data.id
                },
                error: (e) => console.error(e)
            });
    }

    async updatePessoa(pessoa: Pessoa) {
        this.pessoaService.update(pessoa.id, pessoa)
            .subscribe({
                next: (data) => {
                    this.route.navigate(['/'])
                },
                error: (e) => console.error(e)
            });
    }
}