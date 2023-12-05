import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class ImagemProdutoDTO {
  @IsNotEmpty()
  @IsString()
  descricao: string;

  @IsNotEmpty()
  @IsUrl()
  url: string;
}
