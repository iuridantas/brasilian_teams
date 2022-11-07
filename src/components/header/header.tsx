import { Link, useNavigate } from 'react-router-dom';
import { HeaderButtons, HeaderComponent, HeaderLogo } from './style';

export function Header() {
  const navigate = useNavigate();

  return (
    <HeaderComponent>
      <HeaderLogo>
        <Link to="/">
          <h1>Campeonatos Brasileiro 2022</h1>
          <img src="./liga.png" alt="logo" height="80" width="100"></img>
        </Link>
      </HeaderLogo>
      <HeaderButtons>
        <div>
          <button
            onClick={() => {
              navigate('/seriea');
            }}
          >
            Serie A
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              navigate('/serieb');
            }}
          >
            Serie B
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              navigate('/seriec');
            }}
          >
            Serie C
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              navigate('/seried');
            }}
          >
            Serie D
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              navigate('/login');
            }}
          >
            Login
          </button>
        </div>
        <div>
          {localStorage.getItem('token') ? (
            <button
              onClick={() => {
                localStorage.removeItem('token');
                navigate('/');
              }}
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                navigate('/register');
              }}
            >
              Cadastro
            </button>
          )}
        </div>
      </HeaderButtons>
    </HeaderComponent>
  );
}
