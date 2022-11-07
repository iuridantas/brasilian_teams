import { FormEvent, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Teams, TeamsInput } from '../../utils/types/times.type';
import { ContentDiv, Load } from './style';
import { api } from '../../utils/api/apiSerieb';

export function CreateseriesB() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [teams, setTeams] = useState<Teams>();
  const { _id } = useParams();

  useEffect(() => {
    getTeamSerieBById();
  }, []);

  async function getTeamSerieBById() {
    if (_id) {
      const team = await api.getTeamSerieBById(_id);
      setTeams(team);
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    setLoading(true);
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
      TeamResponse = await api.updateTeamSerieB(teamToUpdate);
      console.log(TeamResponse);
    } else {
      TeamResponse = await api.creatTeamSerieB(newTeam);
      setLoading(false);
    }

    if (TeamResponse) {
      navigate('/serieb');
    }
  }

  return (
    <>
      {loading ? (
        <Load>
          {' '}
          <h1>loading...</h1>
        </Load>
      ) : (
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
      )}
    </>
  );
}
