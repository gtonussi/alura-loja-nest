import { IsNotEmpty, IsString } from 'class-validator';

export class CaracteristicaProdutoDTO {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  descricao: string;
}
