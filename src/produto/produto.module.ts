import { Module } from '@nestjs/common';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { ProdutoController } from './produto.controller';
import { ProdutoRepository } from './produto.repository';

@Module({
  imports: [UsuarioModule],
  controllers: [ProdutoController],
  providers: [ProdutoRepository],
})
export class ProdutoModule {}
