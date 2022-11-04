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
      const teams = await axios.get('/seried/grupo1');
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
      const teams = await axios.get('/seried/grupo2');
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
      const teams = await axios.get('/seried/grupo3');
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
      const teams = await axios.get('/seried/grupo4');
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
      const teams = await axios.get('/seried/grupo5');
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
      const teams = await axios.get('/seried/grupo6');
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
      const teams = await axios.get('/seried/grupo7');
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
      const teams = await axios.get('/seried/grupo8');
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
      const isDeleted = await axios.delete('/seried/grupo1/delete/' + teamId);
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
      const isDeleted = await axios.delete('/seried/grupo2/delete/' + teamId);
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
      const isDeleted = await axios.delete('/seried/grupo3/delete/' + teamId);
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
      const isDeleted = await axios.delete('/seried/grupo4/delete/' + teamId);
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
      const isDeleted = await axios.delete('/seried/grupo5/delete/' + teamId);
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
      const isDeleted = await axios.delete('/seried/grupo6/delete/' + teamId);
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
      const isDeleted = await axios.delete('/seried/grupo7/delete/' + teamId);
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
      const isDeleted = await axios.delete('/seried/grupo8/delete/' + teamId);
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
      const newTeam = await axios.post('/seried/grupo1/create', teams);
      return newTeam.data;
    } catch (err: any) {
      console.log(err);
      handleError('Erro ao criar o produto', err.response.data.message[0]);
    }
  },
  creatTeamSerieDGroup2: async (teams: TeamsInput): Promise<Teams | undefined> => {
    try {
      const newTeam = await axios.post('/seried/grupo2/create', teams);
      return newTeam.data;
    } catch (err: any) {
      console.log(err);
      handleError('Erro ao criar o produto', err.response.data.message[0]);
    }
  },
  creatTeamSerieDGroup3: async (teams: TeamsInput): Promise<Teams | undefined> => {
    try {
      const newTeam = await axios.post('/seried/grupo3/create', teams);
      return newTeam.data;
    } catch (err: any) {
      console.log(err);
      handleError('Erro ao criar o produto', err.response.data.message[0]);
    }
  },
  creatTeamSerieDGroup4: async (teams: TeamsInput): Promise<Teams | undefined> => {
    try {
      const newTeam = await axios.post('/seried/grupo4/create', teams);
      return newTeam.data;
    } catch (err: any) {
      console.log(err);
      handleError('Erro ao criar o produto', err.response.data.message[0]);
    }
  },
  creatTeamSerieDGroup5: async (teams: TeamsInput): Promise<Teams | undefined> => {
    try {
      const newTeam = await axios.post('/seried/grupo5/create', teams);
      return newTeam.data;
    } catch (err: any) {
      console.log(err);
      handleError('Erro ao criar o produto', err.response.data.message[0]);
    }
  },
  creatTeamSerieDGroup6: async (teams: TeamsInput): Promise<Teams | undefined> => {
    try {
      const newTeam = await axios.post('/seried/grupo6/create', teams);
      return newTeam.data;
    } catch (err: any) {
      console.log(err);
      handleError('Erro ao criar o produto', err.response.data.message[0]);
    }
  },
  creatTeamSerieDGroup7: async (teams: TeamsInput): Promise<Teams | undefined> => {
    try {
      const newTeam = await axios.post('/seried/grupo7/create', teams);
      return newTeam.data;
    } catch (err: any) {
      console.log(err);
      handleError('Erro ao criar o produto', err.response.data.message[0]);
    }
  },
  creatTeamSerieDGroup8: async (teams: TeamsInput): Promise<Teams | undefined> => {
    try {
      const newTeam = await axios.post('/seried/grupo8/create', teams);
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
      const teams = await axios.get('/seried/grupo1/find/' + teamId);
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
      const teams = await axios.get('/seried/grupo2/find/' + teamId);
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
      const teams = await axios.get('/seried/grupo3/find/' + teamId);
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
      const teams = await axios.get('/seried/grupo4/find/' + teamId);
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
      const teams = await axios.get('/seried/grupo5/find/' + teamId);
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
      const teams = await axios.get('/seried/grupo6/find/' + teamId);
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
      const teams = await axios.get('/seried/grupo7/find/' + teamId);
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
      const teams = await axios.get('/seried/grupo8/find/' + teamId);
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
        '/seried/grupo1/update/' + teams._id,
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
        '/seried/grupo2/update/' + teams._id,
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
        '/seried/grupo3/update/' + teams._id,
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
        '/seried/grupo4/update/' + teams._id,
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
        '/seried/grupo5/update/' + teams._id,
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
        '/seried/grupo6/update/' + teams._id,
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
        '/seried/grupo7/update/' + teams._id,
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
        '/seried/grupo8/update/' + teams._id,
        teams,
      );
      return updatedTeams.data;
    } catch (err: any) {
      handleError('Erro ao atualizar o produto', err.response.data.message[0]);
    }
  },
  registerUser:async (user:UserInput): Promise<User | undefined> => {
    try {
      const userCreate = await axios.post('/users/create', user);
      return userCreate.data;
    } catch (err: any) {
      handleError('Erro ao registrar o usuário', err.response.data.message[0]);
    }
  },
  signIn: async (loginData: SignIn): Promise<LoginResponse | undefined> => {
    try {
      const login = await axios.post('/auth/login', loginData);
      localStorage.setItem('token', login.data.token);
      return login.data;
    }catch (err:any){
      handleError(
        'Email ou senha incorretos tente novamente',
        err.response.data.message[0],
      );
    }
  }
};
