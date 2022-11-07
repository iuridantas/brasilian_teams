import { Card } from '../../components/card/cardseriedgrupo8';
import { api } from '../../utils/api/apiSeriedGroup8';
import { CardListDiv, Load } from './style';
import { useEffect, useState } from 'react';
import { Teams } from '../../utils/types/times.type';
import { TopSeriesDGroup8 } from '../../components/top/topseriesdgroup8';
import { BaseSeriesDGroup8 } from '../../components/base/baseseriesdgroup8';

export function HomeSerieDGroup8() {
  const [teams, setTeams] = useState<Teams[]>([]);
  const [loading, setLoading] = useState(false);
  const [control, setControl] = useState<boolean>(false);

  async function getTeamsInfo() {
    setLoading(true);
    const allTeams = await api.getTeamsSerieDGroup8();
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
          <TopSeriesDGroup8 />
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
          <BaseSeriesDGroup8 />
        </CardListDiv>
      )}
    </>
  );
}
