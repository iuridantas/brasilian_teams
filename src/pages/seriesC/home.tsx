import { Card } from '../../components/card/cardseriec';
import { api } from '../../utils/api/api';
import { CardListDiv } from './style';
import { useEffect, useState } from 'react';
import { Teams } from '../../utils/types/times.type';
import { TopSeriesC } from '../../components/top/topseriesc';
import { BaseSeriesC } from '../../components/base/baseseriesc';

export function HomeSerieC() {
  const [teams, setTeams] = useState<Teams[]>([]);
  const [control, setControl] = useState<boolean>(false);

  async function getTeamsInfo() {
    const allTeams = await api.getTeamsSerieC();
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
      <TopSeriesC />
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
      <BaseSeriesC />
    </CardListDiv>
  );
}
