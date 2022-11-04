import { FormEvent, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Teams, TeamsInput } from '../../utils/types/times.type';
import { ContentDiv } from './style';
import { api } from '../../utils/api/api';

export function CreateseriesC() {
  const navigate = useNavigate();
  const [teams, setTeams] = useState<Teams>();
  const { _id } = useParams();

  useEffect(() => {
    getTeamSerieCById();
  }, []);

  async function getTeamSerieCById() {
    if (_id) {
      const team = await api.getTeamSerieCById(_id);
      setTeams(team);
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newTeam: TeamsInput = {
      name: e.currentTarget.teamsName.value,
      foundation: parseFloat(e.currentTarget.teamsFoundation.value),
      shield: e.currentTarget.teamsShield.value,
      mascot: e.currentTarget.teamsMascot.value,
      localization: e.currentTarget.teamsLocalization.value,
    };

    let TeamResponse;
    if (_id) {
      const teamToUpdate = { ...newTeam, _id: _id };
      TeamResponse = await api.updateTeamSerieC(teamToUpdate);
      console.log(TeamResponse);
    } else {
      TeamResponse = await api.creatTeamSerieC(newTeam);
    }

    if (TeamResponse) {
      navigate('/seriec');
    }
  }

  return (
    <ContentDiv>
      <h2>{_id ? 'Atualizar Time' : 'Cadastro de Time'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome do time</label>
        <input
          defaultValue={teams?.name}
          type="text"
          name="teamsName"
          required
        ></input>
        <label>Ano de fundação</label>
        <input
          defaultValue={teams?.foundation}
          type="number"
          name="teamsFoundation"
          required
        ></input>
        <label>Link do escudo do time</label>
        <input
          defaultValue={teams?.shield}
          type="text"
          name="teamsShield"
          required
        ></input>
        <label>Mascote do time</label>
        <input
          defaultValue={teams?.mascot}
          type="text"
          name="teamsMascot"
          required
        ></input>
        <label>Localização do time</label>
        <input
          defaultValue={teams?.localization}
          type="text"
          name="teamsLocalization"
          required
        ></input>
        <section>
          <button type="submit">Enviar</button>
        </section>
      </form>
    </ContentDiv>
  );
}
