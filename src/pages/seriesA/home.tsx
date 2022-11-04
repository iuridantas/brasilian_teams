import { Card } from '../../components/card/cardseriea';
import { api } from '../../utils/api/apiSeriea';
import { CardListDiv } from './style';
import { useEffect, useState } from 'react';
import { Teams } from '../../utils/types/times.type';
import { TopSeriesA } from '../../components/top/topseriesa';
import { BaseSeriesA } from '../../components/base/baseseriesa';

export function HomeSerieA() {
  const [teams, setTeams] = useState<Teams[]>([]);
  const [control, setControl] = useState<boolean>(false);

  async function getTeamsInfo() {
    const allTeams = await api.getTeamsSerieA();
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
      <TopSeriesA/>
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
      <BaseSeriesA/>
    </CardListDiv>
  );
}
