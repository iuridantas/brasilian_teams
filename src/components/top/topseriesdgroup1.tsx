import { useNavigate } from 'react-router-dom';
import { HeaderButtons, HeaderComponent, HeaderLogo } from './style';

export function TopSeriesDGroup1() {
  const navigate = useNavigate();

  return (
    <HeaderComponent>
      <HeaderLogo>
        <h2>Campeonato Brasileiro Serie D - Grupo 1</h2>
      </HeaderLogo>
      <HeaderButtons>
        <div>
          <button
            onClick={() => {
              navigate('/seriedgrupo1');
            }}
          >
            Grupo 1
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              navigate('/seriedgrupo2');
            }}
          >
            Grupo 2
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              navigate('/seriedgrupo3');
            }}
          >
            Grupo 3
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              navigate('/seriedgrupo4');
            }}
          >
            Grupo 4
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              navigate('/seriedgrupo5');
            }}
          >
            Grupo 5
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              navigate('/seriedgrupo6');
            }}
          >
            Grupo 6
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              navigate('/seriedgrupo7');
            }}
          >
            Grupo 7
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              navigate('/seriedgrupo8');
            }}
          >
            Grupo 8
          </button>
        </div>
        <div>
          {localStorage.getItem('token') ? (
            <button
              onClick={() => {
                navigate('/cadastrartimeserieDgrupo1');
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
