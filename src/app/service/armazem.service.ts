import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../shared/product";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class ArmazemService {

  constructor(
    private firestore: AngularFirestore,
    ) {}

  public createProduct(produto: Product): Promise<any> {
    return this.firestore.collection('Produtos').add(produto);
  }

  public readProduct(): Observable<any>{
    return this.firestore.collection('Produtos', ref => ref.orderBy('categoria',"asc")).snapshotChanges();
  }

  public updateProduct(produto: Product): Promise<any>{
    console.log(produto)
    console.log(produto.id)
    return this.firestore.collection('Produtos').doc(produto.id).update(produto);
  }

  public deleteProduct(id: string| undefined): Promise<any>{
    return this.firestore.collection('Produtos').doc(id).delete();
  }

}
