class CaracteristicaProduto {
  nome: string;
  descricao: string;
}

class ImagemProduto {
  url: string;
  descricao: string;
}

export class ProdutoEntity {
  id: string;
  usuarioId: string;
  nome: string;
  valor: number;
  quantidade: number;
  descricao: string;
  categoria: string;
  caracteristicas: CaracteristicaProduto[];
  imagens: ImagemProduto[];
}
