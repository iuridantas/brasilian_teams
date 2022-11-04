import { useNavigate } from 'react-router-dom';
import { HeaderButtons, HeaderComponent, HeaderLogo } from './style';

export function TopSeriesB() {
  const navigate = useNavigate();

  return (
    <HeaderComponent>
      <HeaderLogo>
          <h2>Campeonato Brasileiro Serie B</h2>
      </HeaderLogo>
      <HeaderButtons>
      <div>
        {localStorage.getItem('token') ? (
          <button
            onClick={() => {
              navigate('/cadastrartimeserieB');
            }}
          >
            Cadastrar Time
          </button>
          ) : null}
        </div>
      </HeaderButtons>
    </HeaderComponent>
  );
}