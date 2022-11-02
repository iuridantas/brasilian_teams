import {
  Teams,
  TeamsInput,
  User,
  UserInput,
  SignIn,
  LoginResponse,
} from '../types/times.type';
import axios from 'axios';
import swal from 'sweetalert';

axios.defaults.baseURL = 'https://api-teamsbrazilian2022.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] =
  'Bearer ' + localStorage.getItem('token');

function handleError(text: string, description: string) {
  swal({
    title: text,
    text: description,
    icon: 'warning',
    timer: 5000,
  });
}

export const api = {
  getTeamsSerieA: async (): Promise<Teams[] | undefined> => {
    try {
      const teams = await axios.get('/seriea');
      return teams.data;
    } catch (err: any) {
      handleError(
        'Erro no servidor',
        'Erro no servidor tente novamente em alguns instantes',
      );
    }
  },

  getTeamsSerieB: async (): Promise<Teams[] | undefined> => {
    try {
      const teams = await axios.get('/serieb');
      return teams.data;
    } catch (err: any) {
      handleError(
        'Erro no servidor',
        'Erro no servidor tente novamente em alguns instantes',
      );
    }
  },
  getTeamsSerieC: async (): Promise<Teams[] | undefined> => {
    try {
      const teams = await axios.get('/seriec');
      return teams.data;
    } catch (err: any) {
      handleError(
        'Erro no servidor',
        'Erro no servidor tente novamente em alguns instantes',
      );
    }
  },
  getTeamsSerieDGroup1: async (): Promise<Teams[] | undefined> => {
    try {
      const teams = await axios.get('/Seried/Grupo1');
      return teams.data;
    } catch (err: any) {
      handleError(
        'Erro no servidor',
        'Erro no servidor tente novamente em alguns instantes',
      );
    }
  },
  getTeamsSerieDGroup2: async (): Promise<Teams[] | undefined> => {
    try {
      const teams = await axios.get('/Seried/Grupo2');
      return teams.data;
    } catch (err: any) {
      handleError(
        'Erro no servidor',
        'Erro no servidor tente novamente em alguns instantes',
      );
    }
  },
  getTeamsSerieDGroup3: async (): Promise<Teams[] | undefined> => {
    try {
      const teams = await axios.get('/Seried/Grupo3');
      return teams.data;
    } catch (err: any) {
      handleError(
        'Erro no servidor',
        'Erro no servidor tente novamente em alguns instantes',
      );
    }
  },
  getTeamsSerieDGroup4: async (): Promise<Teams[] | undefined> => {
    try {
      const teams = await axios.get('/Seried/Grupo4');
      return teams.data;
    } catch (err: any) {
      handleError(
        'Erro no servidor',
        'Erro no servidor tente novamente em alguns instantes',
      );
    }
  },
  getTeamsSerieDGroup5: async (): Promise<Teams[] | undefined> => {
    try {
      const teams = await axios.get('/Seried/Grupo5');
      return teams.data;
    } catch (err: any) {
      handleError(
        'Erro no servidor',
        'Erro no servidor tente novamente em alguns instantes',
      );
    }
  },
  getTeamsSerieDGroup6: async (): Promise<Teams[] | undefined> => {
    try {
      const teams = await axios.get('/Seried/Grupo6');
      return teams.data;
    } catch (err: any) {
      handleError(
        'Erro no servidor',
        'Erro no servidor tente novamente em alguns instantes',
      );
    }
  },
  getTeamsSerieDGroup7: async (): Promise<Teams[] | undefined> => {
    try {
      const teams = await axios.get('/Seried/Grupo7');
      return teams.data;
    } catch (err: any) {
      handleError(
        'Erro no servidor',
        'Erro no servidor tente novamente em alguns instantes',
      );
    }
  },
  getTeamsSerieDGroup8: async (): Promise<Teams[] | undefined> => {
    try {
      const teams = await axios.get('/Seried/Grupo8');
      return teams.data;
    } catch (err: any) {
      handleError(
        'Erro no servidor',
        'Erro no servidor tente novamente em alguns instantes',
      );
    }
  },
  deleteTeamSerieA: async (teamId: string): Promise<boolean | undefined> => {
    try {
      const isDeleted = await axios.delete('/seriea/delete/' + teamId);
      if (isDeleted.status === 200) {
        return true;
      }
    } catch (err: any) {
      handleError(
        'Erro ao deletar time',
        'Ocorreu um erro ao deletar, por favor tente novamente mais tarde!',
      );
    }
  },
  deleteTeamSerieB: async (teamId: string): Promise<boolean | undefined> => {
    try {
      const isDeleted = await axios.delete('/serieb/delete/' + teamId);
      if (isDeleted.status === 200) {
        return true;
      }
    } catch (err: any) {
      handleError(
        'Erro ao deletar time',
        'Ocorreu um erro ao deletar, por favor tente novamente mais tarde!',
      );
    }
  },
  deleteTeamSerieC: async (teamId: string): Promise<boolean | undefined> => {
    try {
      const isDeleted = await axios.delete('/seriec/delete/' + teamId);
      if (isDeleted.status === 200) {
        return true;
      }
    } catch (err: any) {
      handleError(
        'Erro ao deletar time',
        'Ocorreu um erro ao deletar, por favor tente novamente mais tarde!',
      );
    }
  },
  deleteTeamSerieDGroup1: async (
    teamId: string,
  ): Promise<boolean | undefined> => {
    try {
      const isDeleted = await axios.delete('/Seried/Grupo1/delete/' + teamId);
      if (isDeleted.status === 200) {
        return true;
      }
    } catch (err: any) {
      handleError(
        'Erro ao deletar time',
        'Ocorreu um erro ao deletar, por favor tente novamente mais tarde!',
      );
    }
  },
  deleteTeamSerieDGroup2: async (
    teamId: string,
  ): Promise<boolean | undefined> => {
    try {
      const isDeleted = await axios.delete('/Seried/Grupo2/delete/' + teamId);
      if (isDeleted.status === 200) {
        return true;
      }
    } catch (err: any) {
      handleError(
        'Erro ao deletar time',
        'Ocorreu um erro ao deletar, por favor tente novamente mais tarde!',
      );
    }
  },
  deleteTeamSerieDGroup3: async (
    teamId: string,
  ): Promise<boolean | undefined> => {
    try {
      const isDeleted = await axios.delete('/Seried/Grupo3/delete/' + teamId);
      if (isDeleted.status === 200) {
        return true;
      }
    } catch (err: any) {
      handleError(
        'Erro ao deletar time',
        'Ocorreu um erro ao deletar, por favor tente novamente mais tarde!',
      );
    }
  },
  deleteTeamSerieDGroup4: async (
    teamId: string,
  ): Promise<boolean | undefined> => {
    try {
      const isDeleted = await axios.delete('/Seried/Grupo4/delete/' + teamId);
      if (isDeleted.status === 200) {
        return true;
      }
    } catch (err: any) {
      handleError(
        'Erro ao deletar time',
        'Ocorreu um erro ao deletar, por favor tente novamente mais tarde!',
      );
    }
  },
  deleteTeamSerieDGroup5: async (
    teamId: string,
  ): Promise<boolean | undefined> => {
    try {
      const isDeleted = await axios.delete('/Seried/Grupo5/delete/' + teamId);
      if (isDeleted.status === 200) {
        return true;
      }
    } catch (err: any) {
      handleError(
        'Erro ao deletar time',
        'Ocorreu um erro ao deletar, por favor tente novamente mais tarde!',
      );
    }
  },
  deleteTeamSerieDGroup6: async (
    teamId: string,
  ): Promise<boolean | undefined> => {
    try {
      const isDeleted = await axios.delete('/Seried/Grupo6/delete/' + teamId);
      if (isDeleted.status === 200) {
        return true;
      }
    } catch (err: any) {
      handleError(
        'Erro ao deletar time',
        'Ocorreu um erro ao deletar, por favor tente novamente mais tarde!',
      );
    }
  },
  deleteTeamSerieDGroup7: async (
    teamId: string,
  ): Promise<boolean | undefined> => {
    try {
      const isDeleted = await axios.delete('/Seried/Grupo7/delete/' + teamId);
      if (isDeleted.status === 200) {
        return true;
      }
    } catch (err: any) {
      handleError(
        'Erro ao deletar time',
        'Ocorreu um erro ao deletar, por favor tente novamente mais tarde!',
      );
    }
  },
  deleteTeamSerieDGroup8: async (
    teamId: string,
  ): Promise<boolean | undefined> => {
    try {
      const isDeleted = await axios.delete('/Seried/Grupo8/delete/' + teamId);
      if (isDeleted.status === 200) {
        return true;
      }
    } catch (err: any) {
      handleError(
        'Erro ao deletar time',
        'Ocorreu um erro ao deletar, por favor tente novamente mais tarde!',
      );
    }
  },
  creatTeamSerieA: async (teams: TeamsInput): Promise<Teams | undefined> => {
    try {
      const newTeam = await axios.post('/seriea/create', teams);
      return newTeam.data;
    } catch (err: any) {
      console.log(err);
      handleError('Erro ao criar o produto', err.response.data.message[0]);
    }
  },
  creatTeamSerieB: async (teams: TeamsInput): Promise<Teams | undefined> => {
    try {
      const newTeam = await axios.post('/serieb/create', teams);
      return newTeam.data;
    } catch (err: any) {
      console.log(err);
      handleError('Erro ao criar o produto', err.response.data.message[0]);
    }
  },
  creatTeamSerieC: async (teams: TeamsInput): Promise<Teams | undefined> => {
    try {
      const newTeam = await axios.post('/seriec/create', teams);
      return newTeam.data;
    } catch (err: any) {
      console.log(err);
      handleError('Erro ao criar o produto', err.response.data.message[0]);
    }
  },
  creatTeamSerieDGroup1: async (teams: TeamsInput): Promise<Teams | undefined> => {
    try {
      const newTeam = await axios.post('/Seried/Grupo1/create', teams);
      return newTeam.data;
    } catch (err: any) {
      console.log(err);
      handleError('Erro ao criar o produto', err.response.data.message[0]);
    }
  },
  creatTeamSerieDGroup2: async (teams: TeamsInput): Promise<Teams | undefined> => {
    try {
      const newTeam = await axios.post('/Seried/Grupo2/create', teams);
      return newTeam.data;
    } catch (err: any) {
      console.log(err);
      handleError('Erro ao criar o produto', err.response.data.message[0]);
    }
  },
  creatTeamSerieDGroup3: async (teams: TeamsInput): Promise<Teams | undefined> => {
    try {
      const newTeam = await axios.post('/Seried/Grupo3/create', teams);
      return newTeam.data;
    } catch (err: any) {
      console.log(err);
      handleError('Erro ao criar o produto', err.response.data.message[0]);
    }
  },
  creatTeamSerieDGroup4: async (teams: TeamsInput): Promise<Teams | undefined> => {
    try {
      const newTeam = await axios.post('/Seried/Grupo4/create', teams);
      return newTeam.data;
    } catch (err: any) {
      console.log(err);
      handleError('Erro ao criar o produto', err.response.data.message[0]);
    }
  },
  creatTeamSerieDGroup5: async (teams: TeamsInput): Promise<Teams | undefined> => {
    try {
      const newTeam = await axios.post('/Seried/Grupo5/create', teams);
      return newTeam.data;
    } catch (err: any) {
      console.log(err);
      handleError('Erro ao criar o produto', err.response.data.message[0]);
    }
  },
  creatTeamSerieDGroup6: async (teams: TeamsInput): Promise<Teams | undefined> => {
    try {
      const newTeam = await axios.post('/Seried/Grupo6/create', teams);
      return newTeam.data;
    } catch (err: any) {
      console.log(err);
      handleError('Erro ao criar o produto', err.response.data.message[0]);
    }
  },
  creatTeamSerieDGroup7: async (teams: TeamsInput): Promise<Teams | undefined> => {
    try {
      const newTeam = await axios.post('/Seried/Grupo7/create', teams);
      return newTeam.data;
    } catch (err: any) {
      console.log(err);
      handleError('Erro ao criar o produto', err.response.data.message[0]);
    }
  },
  creatTeamSerieDGroup8: async (teams: TeamsInput): Promise<Teams | undefined> => {
    try {
      const newTeam = await axios.post('/Seried/Grupo8/create', teams);
      return newTeam.data;
    } catch (err: any) {
      console.log(err);
      handleError('Erro ao criar o produto', err.response.data.message[0]);
    }
  },
  getTeamSerieAById: async (teamId: string): Promise<Teams | undefined> => {
    try {
      const teams = await axios.get('/seriea/find/' + teamId);
      return teams.data;
    } catch (err) {
      handleError(
        'Time não encontrado',
        'Nenhum time com esse id foi encontrado no servidor',
      );
    }
  },
  getTeamSerieBById: async (teamId: string): Promise<Teams | undefined> => {
    try {
      const teams = await axios.get('/serieb/find/' + teamId);
      return teams.data;
    } catch (err) {
      handleError(
        'Time não encontrado',
        'Nenhum time com esse id foi encontrado no servidor',
      );
    }
  },
  getTeamSerieCById: async (teamId: string): Promise<Teams | undefined> => {
    try {
      const teams = await axios.get('/seriec/find/' + teamId);
      return teams.data;
    } catch (err) {
      handleError(
        'Time não encontrado',
        'Nenhum time com esse id foi encontrado no servidor',
      );
    }
  },
  getTeamSerieDGroup1ById: async (teamId: string): Promise<Teams | undefined> => {
    try {
      const teams = await axios.get('/Seried/Grupo1/find/' + teamId);
      return teams.data;
    } catch (err) {
      handleError(
        'Time não encontrado',
        'Nenhum time com esse id foi encontrado no servidor',
      );
    }
  },
  getTeamSerieDGroup2ById: async (teamId: string): Promise<Teams | undefined> => {
    try {
      const teams = await axios.get('/Seried/Grupo2/find/' + teamId);
      return teams.data;
    } catch (err) {
      handleError(
        'Time não encontrado',
        'Nenhum time com esse id foi encontrado no servidor',
      );
    }
  },
  getTeamSerieDGroup3ById: async (teamId: string): Promise<Teams | undefined> => {
    try {
      const teams = await axios.get('/Seried/Grupo3/find/' + teamId);
      return teams.data;
    } catch (err) {
      handleError(
        'Time não encontrado',
        'Nenhum time com esse id foi encontrado no servidor',
      );
    }
  },
  getTeamSerieDGroup4ById: async (teamId: string): Promise<Teams | undefined> => {
    try {
      const teams = await axios.get('/Seried/Grupo4/find/' + teamId);
      return teams.data;
    } catch (err) {
      handleError(
        'Time não encontrado',
        'Nenhum time com esse id foi encontrado no servidor',
      );
    }
  },
  getTeamSerieDGroup5ById: async (teamId: string): Promise<Teams | undefined> => {
    try {
      const teams = await axios.get('/Seried/Grupo5/find/' + teamId);
      return teams.data;
    } catch (err) {
      handleError(
        'Time não encontrado',
        'Nenhum time com esse id foi encontrado no servidor',
      );
    }
  },
  getTeamSerieDGroup6ById: async (teamId: string): Promise<Teams | undefined> => {
    try {
      const teams = await axios.get('/Seried/Grupo6/find/' + teamId);
      return teams.data;
    } catch (err) {
      handleError(
        'Time não encontrado',
        'Nenhum time com esse id foi encontrado no servidor',
      );
    }
  },
  getTeamSerieDGroup7ById: async (teamId: string): Promise<Teams | undefined> => {
    try {
      const teams = await axios.get('/Seried/Grupo7/find/' + teamId);
      return teams.data;
    } catch (err) {
      handleError(
        'Time não encontrado',
        'Nenhum time com esse id foi encontrado no servidor',
      );
    }
  },
  getTeamSerieDGroup8ById: async (teamId: string): Promise<Teams | undefined> => {
    try {
      const teams = await axios.get('/Seried/Grupo8/find/' + teamId);
      return teams.data;
    } catch (err) {
      handleError(
        'Time não encontrado',
        'Nenhum time com esse id foi encontrado no servidor',
      );
    }
  },
  updateTeamSerieA: async (teams: Teams): Promise<Teams | undefined> => {
    try {
      const updatedTeams = await axios.patch(
        '/seriea/update/' + teams._id,
        teams,
      );
      return updatedTeams.data;
    } catch (err: any) {
      handleError('Erro ao atualizar o produto', err.response.data.message[0]);
    }
  },
  updateTeamSerieB: async (teams: Teams): Promise<Teams | undefined> => {
    try {
      const updatedTeams = await axios.patch(
        '/serieb/update/' + teams._id,
        teams,
      );
      return updatedTeams.data;
    } catch (err: any) {
      handleError('Erro ao atualizar o produto', err.response.data.message[0]);
    }
  },
  updateTeamSerieC: async (teams: Teams): Promise<Teams | undefined> => {
    try {
      const updatedTeams = await axios.patch(
        '/seriec/update/' + teams._id,
        teams,
      );
      return updatedTeams.data;
    } catch (err: any) {
      handleError('Erro ao atualizar o produto', err.response.data.message[0]);
    }
  },
  updateTeamSerieDGroup1: async (teams: Teams): Promise<Teams | undefined> => {
    try {
      const updatedTeams = await axios.patch(
        '/Seried/Grupo1/update/' + teams._id,
        teams,
      );
      return updatedTeams.data;
    } catch (err: any) {
      handleError('Erro ao atualizar o produto', err.response.data.message[0]);
    }
  },
  updateTeamSerieDGroup2: async (teams: Teams): Promise<Teams | undefined> => {
    try {
      const updatedTeams = await axios.patch(
        '/Seried/Grupo2/update/' + teams._id,
        teams,
      );
      return updatedTeams.data;
    } catch (err: any) {
      handleError('Erro ao atualizar o produto', err.response.data.message[0]);
    }
  },
  updateTeamSerieDGroup3: async (teams: Teams): Promise<Teams | undefined> => {
    try {
      const updatedTeams = await axios.patch(
        '/Seried/Grupo3/update/' + teams._id,
        teams,
      );
      return updatedTeams.data;
    } catch (err: any) {
      handleError('Erro ao atualizar o produto', err.response.data.message[0]);
    }
  },
  updateTeamSerieDGroup4: async (teams: Teams): Promise<Teams | undefined> => {
    try {
      const updatedTeams = await axios.patch(
        '/Seried/Grupo4/update/' + teams._id,
        teams,
      );
      return updatedTeams.data;
    } catch (err: any) {
      handleError('Erro ao atualizar o produto', err.response.data.message[0]);
    }
  },
  updateTeamSerieDGroup5: async (teams: Teams): Promise<Teams | undefined> => {
    try {
      const updatedTeams = await axios.patch(
        '/Seried/Grupo5/update/' + teams._id,
        teams,
      );
      return updatedTeams.data;
    } catch (err: any) {
      handleError('Erro ao atualizar o produto', err.response.data.message[0]);
    }
  },
  updateTeamSerieDGroup6: async (teams: Teams): Promise<Teams | undefined> => {
    try {
      const updatedTeams = await axios.patch(
        '/Seried/Grupo6/update/' + teams._id,
        teams,
      );
      return updatedTeams.data;
    } catch (err: any) {
      handleError('Erro ao atualizar o produto', err.response.data.message[0]);
    }
  },
  updateTeamSerieDGroup7: async (teams: Teams): Promise<Teams | undefined> => {
    try {
      const updatedTeams = await axios.patch(
        '/Seried/Grupo7/update/' + teams._id,
        teams,
      );
      return updatedTeams.data;
    } catch (err: any) {
      handleError('Erro ao atualizar o produto', err.response.data.message[0]);
    }
  },
  updateTeamSerieDGroup8: async (teams: Teams): Promise<Teams | undefined> => {
    try {
      const updatedTeams = await axios.patch(
        '/Seried/Grupo8/update/' + teams._id,
        teams,
      );
      return updatedTeams.data;
    } catch (err: any) {
      handleError('Erro ao atualizar o produto', err.response.data.message[0]);
    }
  },
};
