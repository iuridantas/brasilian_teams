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
  deleteTeamSerieDGroup1: async (teamId: string): Promise<boolean | undefined> => {
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
  deleteTeamSerieDGroup2: async (teamId: string): Promise<boolean | undefined> => {
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
  deleteTeamSerieDGroup3: async (teamId: string): Promise<boolean | undefined> => {
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
  deleteTeamSerieDGroup4: async (teamId: string): Promise<boolean | undefined> => {
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
  deleteTeamSerieDGroup5: async (teamId: string): Promise<boolean | undefined> => {
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
  deleteTeamSerieDGroup6: async (teamId: string): Promise<boolean | undefined> => {
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
  deleteTeamSerieDGroup7: async (teamId: string): Promise<boolean | undefined> => {
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
  deleteTeamSerieDGroup8: async (teamId: string): Promise<boolean | undefined> => {
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
};
