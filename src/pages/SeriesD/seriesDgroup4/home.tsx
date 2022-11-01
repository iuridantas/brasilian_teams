import { Card } from '../../../components/card/cardseriedgrupo1';
import { api } from '../../../utils/api/api';
import { CardListDiv } from './style';
import { useEffect, useState } from 'react';
import { Teams } from '../../../utils/types/times.type';
import { TopSeriesDGroup4 } from '../../../components/top/topseriesdgroup4';

export function HomeSerieDGroup4() {
  const [teams, setTeams] = useState<Teams[]>([]);
  const [control, setControl] = useState<boolean>(false);

  async function getTeamsInfo() {
    const allTeams = await api.getTeamsSerieDGroup4();
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
      <TopSeriesDGroup4/>
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
    </CardListDiv>
  );
}