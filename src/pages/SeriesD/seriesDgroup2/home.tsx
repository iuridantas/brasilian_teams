import { Card } from '../../../components/card/cardseriedgrupo2';
import { api } from '../../../utils/api/apiSeriedGroup2';
import { CardListDiv } from './style';
import { useEffect, useState } from 'react';
import { Teams } from '../../../utils/types/times.type';
import { TopSeriesDGroup2 } from '../../../components/top/topseriesdgroup2';
import { BaseSeriesDGroup2 } from '../../../components/base/baseseriesdgroup2';

export function HomeSerieDGroup2() {
  const [teams, setTeams] = useState<Teams[]>([]);
  const [control, setControl] = useState<boolean>(false);

  async function getTeamsInfo() {
    const allTeams = await api.getTeamsSerieDGroup2();
    setTeams(allTeams ?? []);
  }

  function updatePage() {
    setControl(!control);
  }

  useEffect(() => {
    getTeamsInfo();
  }, [control]);

  return (
    <CardListDiv>
      <TopSeriesDGroup2 />
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
      <BaseSeriesDGroup2 />
    </CardListDiv>
  );
}
