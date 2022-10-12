import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutoRepository {
  private produtos = [];

  listaTodos() {
    return this.produtos;
  }

  salva(dadosProduto) {
    this.produtos.push(dadosProduto);
  }
}
