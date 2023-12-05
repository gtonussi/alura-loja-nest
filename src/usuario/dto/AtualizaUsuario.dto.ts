import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { EmailUnico } from 'src/usuario/validacao/email-unico.validator';

export class AtualizaUsuarioDTO {
  @IsOptional()
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  nome: string;

  @IsOptional()
  @IsEmail(undefined, {
    message: 'O email deve ser um endereço de email válido',
  })
  @EmailUnico({ message: 'Já existe um usuário com este email.' })
  email: string;

  @IsOptional()
  @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres' })
  senha: string;
}
