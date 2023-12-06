import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ArmazemService} from "../../service/armazem.service";
import {Product} from "../../shared/product";
import {ToastrService} from "ngx-toastr";
import {SharedService} from "../../shared/behavior";

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit{
  public products: Product[] = [];
  constructor(
    private armazem: ArmazemService,
    private sharedService: SharedService,
    private toastr: ToastrService,
  ) {}


  ngOnInit() {
    this.readProdutos();
  };

  public readProdutos(){
    this.armazem.readProduct().subscribe(res => {
      this.products = [];
      res.forEach((e: any) => {
        this.products.push({
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        })
      })
    });
  }

  public updateProdutos(value: Product) {
    this.sharedService.updateData(value);
  }
  public deletarProdutos(value: Product) {
    this.armazem.deleteProduct(value.id).then(() => {
      this.toastr.error('Produto deletado com sucesso!', 'Uhhhh');
    }).catch(() =>{
      this.toastr.success('O Produto não foi deletado!', 'Opsss ...');
    });
  }

}
