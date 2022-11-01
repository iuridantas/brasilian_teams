import { useNavigate } from 'react-router-dom';
import { HeaderComponent, HeaderLogo } from './style';

export function TopSeriesD() {
  const navigate = useNavigate();

  return (
    <HeaderComponent>
      <HeaderLogo>
          <h2>Campeonato Brasileiro Serie D</h2>
      </HeaderLogo>
    </HeaderComponent>
  );
}