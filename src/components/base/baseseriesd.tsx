import { useNavigate } from 'react-router-dom';
import { HeaderButtons, HeaderComponent } from './style';
import { TiArrowBack } from 'react-icons/ti';

export function BaseSeriesD() {
  const navigate = useNavigate();

  return (
    <HeaderComponent>
      <HeaderButtons>
        <div>
          <button
            onClick={() => {
              navigate('/');
            }}
          >
            <TiArrowBack color="black" fontSize={30} />
          </button>
        </div>
      </HeaderButtons>
    </HeaderComponent>
  );
}
