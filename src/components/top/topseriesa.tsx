import { useNavigate } from 'react-router-dom';
import { HeaderButtons, HeaderComponent, HeaderLogo } from './style';

export function TopSeriesA() {
  const navigate = useNavigate();

  return (
    <HeaderComponent>
      <HeaderLogo>
        <h2>Campeonato Brasileiro Serie A</h2>
      </HeaderLogo>
      <HeaderButtons>
        <div>
          {localStorage.getItem('token') ? (
            <button
              onClick={() => {
                navigate('/cadastrartimeserieA');
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
