import { useNavigate } from 'react-router-dom';
import { HeaderButtons, HeaderComponent, HeaderLogo } from './style';

export function TopSeriesC() {
  const navigate = useNavigate();

  return (
    <HeaderComponent>
      <HeaderLogo>
        <h2>Campeonato Brasileiro Serie C</h2>
      </HeaderLogo>
      <HeaderButtons>
        <div>
          {localStorage.getItem('token') ? (
            <button
              onClick={() => {
                navigate('/cadastrartimeserieC');
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
