import { Card } from '../../components/card/cardserieb';
import { api } from '../../utils/api/apiSerieb';
import { CardListDiv, Load } from './style';
import { useEffect, useState } from 'react';
import { Teams } from '../../utils/types/times.type';
import { TopSeriesB } from '../../components/top/topseriesb';
import { BaseSeriesB } from '../../components/base/baseseriesb';

export function HomeSerieB() {
  const [teams, setTeams] = useState<Teams[]>([]);
  const [loading, setLoading] = useState(false);
  const [control, setControl] = useState<boolean>(false);

  async function getTeamsInfo() {
    setLoading(true);
    const allTeams = await api.getTeamsSerieB();
    setTeams(allTeams ?? []);
    setLoading(false);
  }

  function updatePage() {
    setControl(!control);
  }

  useEffect(() => {
    getTeamsInfo();
  }, [control]);

  return (
    <>
      {loading ? (
        <Load>
          {' '}
          <h1>loading...</h1>
        </Load>
      ) : (
        <CardListDiv>
          <TopSeriesB />
          {teams.map((teams) => {
            return (
              <Card
                key={teams._id}
                _id={teams._id}
                name={teams.name}
                shield={teams.shield}
                foundation={teams.foundation}
                mascot={teams.mascot}
                localization={teams.localization}
                updatePage={updatePage}
              />
            );
          })}
          <BaseSeriesB />
        </CardListDiv>
      )}
    </>
  );
}
