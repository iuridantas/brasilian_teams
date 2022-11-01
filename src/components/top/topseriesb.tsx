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
          <button
            onClick={() => {
              navigate('/cadastrartimeserieB');
            }}
          >
            Cadastrar Time
          </button>
        </div>
      </HeaderButtons>
    </HeaderComponent>
  );
}