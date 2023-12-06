import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ArmazemService} from "../../service/armazem.service";
import {Product} from "../../shared/product";
import {ToastrService} from "ngx-toastr";
import {SharedService} from "../../shared/behavior";

@Component({
  selector: 'app-form-cadastrar',
  templateUrl: './form-cadastrar.component.html',
  styleUrls: ['./form-cadastrar.component.css']
})
export class FormCadastrarComponent implements OnInit{
  public formGroup!: FormGroup;
  public loading: boolean = false;
  public produtoId: string | null = null;
  public produto! :Product;
  constructor(
    private formBuilder: FormBuilder,
    private armazem: ArmazemService,
    private toastr: ToastrService,
    private sharedService: SharedService
  ) {
    this.initFormGroup();
    this.sharedService.sharedData.subscribe(res => {
      if(res){
        this.produtoId = res.id;
        this.produto = res;
        this.formGroup.patchValue({
          categoria: res.categoria,
          nome: res.nome,
          preco: res.preco,
          descricao: res.descricao,
        })
      }
    });
  }

  ngOnInit() {

  }

  public initFormGroup(){
    this.formGroup = this.formBuilder.group({
      categoria: ['', Validators.required],
      preco: ['', [Validators.required, Validators.minLength(3)]],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      descricao: ['', [Validators.required, Validators.minLength(5)]],
    })
  }

  public armazenar() {
    if(this.produtoId){
    this.updateProdutos(this.produtoId);
    } else {
      this.cadastrar();
    }
  }

  public cadastrar(){
    this.loading = true;
    const produto: Product = this.formGroup.value;
    this.armazem.createProduct(produto).then(() =>{
      this.loading = false;
      this.toastr.success('Produto criado com sucesso!', 'Uhhhh');
      this.formGroup.reset();
      this.formGroup.controls['categoria'].setValue('');
    }).catch( () => {
      this.loading = false;
      this.toastr.error('O Produto não foi criado!', 'Opsss ...');
      this.formGroup.reset();
      this.formGroup.controls['categoria'].setValue('');
    });
  }

  public updateProdutos(id: any) {
    this.loading = true;
    const produto: Product = this.formGroup.value;
    produto.id = id;
    this.armazem.updateProduct(produto).then(() =>{
      this.loading = false;
      this.toastr.success('Produto foi atualizado com sucesso!', 'Uhhhh');
      this.formGroup.reset();
      this.formGroup.controls['categoria'].setValue('');
    }).catch(() =>{
      this.loading = false;
      this.toastr.error('O Produto não foi atualizado!', 'Opsss ...');
      this.formGroup.reset();
      this.formGroup.controls['categoria'].setValue('');
    })

  }
}
