import { Card } from '../../../components/card/cardseriedgrupo1';
import { api } from '../../../utils/api/apiSeriedGroup1';
import { CardListDiv } from './style';
import { useEffect, useState } from 'react';
import { Teams } from '../../../utils/types/times.type';
import { TopSeriesDGroup1 } from '../../../components/top/topseriesdgroup1';
import { BaseSeriesDGroup1 } from '../../../components/base/baseseriesdgroup1';

export function HomeSerieDGroup1() {
  const [teams, setTeams] = useState<Teams[]>([]);
  const [control, setControl] = useState<boolean>(false);

  async function getTeamsInfo() {
    const allTeams = await api.getTeamsSerieDGroup1();
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
      <TopSeriesDGroup1 />
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
      <BaseSeriesDGroup1 />
    </CardListDiv>
  );
}
