import { Link } from 'react-router-dom';
import { BaseSeriesD } from '../../components/base/baseseriesd';
import { TopSeriesD } from '../../components/top/topseriesd';
import { CardDiv1 } from './style';

export function HomeSerieD() {
  return (
    <>
      <TopSeriesD />
      <CardDiv1>
        <div>
          <Link to="/seriedgrupo1">
            <img src="./Grupo1.png" alt="logo"></img>
          </Link>
        </div>
        <div>
          <Link to="/seriedgrupo2">
            <img src="./Grupo2.png" alt="logo"></img>
          </Link>
        </div>
        <div>
          <Link to="/seriedgrupo3">
            <img src="./Grupo3.png" alt="logo"></img>
          </Link>
        </div>
        <div>
          <Link to="/seriedgrupo4">
            <img src="./Grupo4.png" alt="logo"></img>
          </Link>
        </div>
        <div>
          <Link to="/seriedgrupo5">
            <img src="./Grupo5.png" alt="logo"></img>
          </Link>
        </div>
        <div>
          <Link to="/seriedgrupo6">
            <img src="./Grupo6.png" alt="logo"></img>
          </Link>
        </div>
        <div>
          <Link to="/seriedgrupo7">
            <img src="./Grupo7.png" alt="logo"></img>
          </Link>
        </div>
        <div>
          <Link to="/seriedgrupo8">
            <img src="./Grupo8.png" alt="logo"></img>
          </Link>
        </div>
      </CardDiv1>
      <BaseSeriesD />
    </>
  );
}
