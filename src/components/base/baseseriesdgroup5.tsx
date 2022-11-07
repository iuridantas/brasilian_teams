import { useNavigate } from 'react-router-dom';
import { HeaderButtons, HeaderComponent } from './style';
import { TiArrowBack } from 'react-icons/ti';

export function BaseSeriesDGroup5() {
  const navigate = useNavigate();

  return (
    <HeaderComponent>
      <HeaderButtons>
        <div>
          <button
            onClick={() => {
              navigate('/seried');
            }}
          >
            <TiArrowBack color="red" fontSize={30} />
          </button>
        </div>
      </HeaderButtons>
    </HeaderComponent>
  );
}
