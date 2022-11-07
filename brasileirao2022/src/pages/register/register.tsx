import { useState, FormEvent } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { api } from '../../utils/api/apiLogin';
import { RegisterSection, PasswordDiv, ButtonSection } from './style';

type viewPasswords = {
  password: boolean;
  confirmPassword: boolean;
};

export default function Register() {
  const [viewPassword, setViewPassword] = useState<viewPasswords>({
    password: false,
    confirmPassword: false,
  });

  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newUser = {
      name: event.currentTarget.userName.value,
      username: event.currentTarget.userName.value,
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
      photo: event.currentTarget.image.value,
    };
    const user = await api.registerUser(newUser);
    console.log(user);
    if (user) {
      navigate('/login');
    }
  }

  return (
    <RegisterSection>
      <h2>Cadastrar Usuário</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label>
        <input type="text" name="nome"></input>
        <label htmlFor="userName">Nome do usuário:</label>
        <input type="text" name="userName"></input>
        <label htmlFor="email">Email: </label>
        <input type="text" name="email"></input>
        <label htmlFor="password">Senha:</label>
        <PasswordDiv>
          <input
            type={viewPassword.password ? 'text' : 'password'}
            name="password"
          ></input>
          <button
            type="button"
            onClick={() => {
              setViewPassword({
                ...viewPassword,
                password: !viewPassword.password,
              });
            }}
          >
            {viewPassword.password ? (
              <AiFillEyeInvisible size={20} />
            ) : (
              <AiFillEye size={20} />
            )}
          </button>
        </PasswordDiv>
        <label htmlFor="image">Imagem: </label>
        <input type="text" name="image"></input>
        <ButtonSection>
          <button type="submit">Cadastrar</button>
        </ButtonSection>
      </form>
    </RegisterSection>
  );
}
