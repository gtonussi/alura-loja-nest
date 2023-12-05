import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { EmailUnico } from 'src/usuario/validacao/email-unico.validator';

export class CriaUsuarioDTO {
  @IsNotEmpty({
    message: 'O nome não pode ser vazio',
  })
  nome: string;

  @IsEmail(undefined, {
    message: 'O email deve ser um endereço de email válido',
  })
  @EmailUnico({ message: 'Já existe um usuário com este email.' })
  email: string;

  @MinLength(6, {
    message: 'A senha deve ter pelo menos 6 caracteres',
  })
  senha: string;
}
