import { Card } from '../../components/card/cardseriedgrupo4';
import { api } from '../../utils/api/apiSeriedGroup4';
import { CardListDiv, Load } from './style';
import { useEffect, useState } from 'react';
import { Teams } from '../../utils/types/times.type';
import { TopSeriesDGroup4 } from '../../components/top/topseriesdgroup4';
import { BaseSeriesDGroup4 } from '../../components/base/baseseriesdgroup4';

export function HomeSerieDGroup4() {
  const [teams, setTeams] = useState<Teams[]>([]);
  const [loading, setLoading] = useState(false);
  const [control, setControl] = useState<boolean>(false);

  async function getTeamsInfo() {
    setLoading(true);
    const allTeams = await api.getTeamsSerieDGroup4();
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
          <TopSeriesDGroup4 />
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
          <BaseSeriesDGroup4 />
        </CardListDiv>
      )}
    </>
  );
}
