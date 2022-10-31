import { Teams } from '../../utils/types/times.type';
import { api } from '../../utils/api/api';
import { CardSection, ButtonsDiv, Buttons } from './style';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

interface CardProps extends Teams {
  updatePage: () => void;
}
export function Card({
  _id,
  name,
  foundation,
  shield,
  mascot,
  localization,
  updatePage,
}: CardProps) {
  const navigate = useNavigate();

  async function DeleteCard() {
    swal({
      title: 'Deletar time?',
      text: 'Tem certeza que deseja deletar?',
      icon: 'warning',
      dangerMode: true,
      buttons: {
        cancel: {
          text: 'Cancelar',
          value: null,
          visible: true,
          closeModal: true,
          className: '',
        },
        confirm: {
          text: 'Confirmar',
          value: true,
          visible: true,
          closeModal: true,
        },
      },
    }).then(async (res) => {
      console.log(res);
      if (res) {
        const isDeleted = await api.deleteTeamSerieDGroup2(_id);
        if (isDeleted) {
          updatePage();
        }
      }
    });
  }

  return (
    <CardSection>
      <h2>{name}</h2>
      <img src={shield} alt={name} height="100" width="100"></img>
      <h3>Fundação: {foundation}</h3>
      <h3>Mascote: {mascot}</h3>
      <h3>Localização: {localization}</h3>
      <ButtonsDiv>
        <Buttons
          color="blue"
          onClick={() => {
            navigate('/update/' + _id);
          }}
        >
          Editar
        </Buttons>
        <Buttons color="red" onClick={DeleteCard}>
          Deletar
        </Buttons>
      </ButtonsDiv>
    </CardSection>
  );
}
