import {
    Teams,
    TeamsInput,
  } from '../types/times.type';
  import axios from 'axios';
  import swal from 'sweetalert';
  
  axios.defaults.baseURL = 'https://api-teamsbrazilian2022.herokuapp.com/';
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  
  function handleError(text: string, description: string) {
    swal({
      title: text,
      text: description,
      icon: 'warning',
      timer: 5000,
    });
  }
  
  export const api = {
    getTeamsSerieC: async (): Promise<Teams[] | undefined> => {
      try {
        const teams = await axios.get('/seriec', {headers:{'Authorization':'Bearer ' + localStorage.getItem('token')}});
        return teams.data;
      } catch (err: any) {
        handleError(
          'Erro no servidor',
          'Erro no servidor tente novamente em alguns instantes',
        );
      }
    },
    deleteTeamSerieC: async (teamId: string): Promise<boolean | undefined> => {
      try {
        const isDeleted = await axios.delete('/seriec/delete/' + teamId, {headers:{'Authorization':'Bearer ' + localStorage.getItem('token')}});
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
    creatTeamSerieC: async (teams: TeamsInput): Promise<Teams | undefined> => {
      try {
        const newTeam = await axios.post('/seriec/create', teams, {headers:{'Authorization':'Bearer ' + localStorage.getItem('token')}});
        return newTeam.data;
      } catch (err: any) {
        console.log(err);
        handleError('Erro ao criar o produto', err.response.data.message[0]);
      }
    },
    getTeamSerieCById: async (teamId: string): Promise<Teams | undefined> => {
      try {
        const teams = await axios.get('/seriec/find/' + teamId, {headers:{'Authorization':'Bearer ' + localStorage.getItem('token')}});
        return teams.data;
      } catch (err) {
        handleError(
          'Time não encontrado',
          'Nenhum time com esse id foi encontrado no servidor',
        );
      }
    },
    updateTeamSerieC: async (teams: Teams): Promise<Teams | undefined> => {
      try {
        const updatedTeams = await axios.put(
          '/seriec/update/' + teams._id,
          teams, {headers:{'Authorization':'Bearer ' + localStorage.getItem('token')}}
        );
        return updatedTeams.data;
      } catch (err: any) {
        handleError('Erro ao atualizar o produto', err.response.data.message[0]);
      }
    },
  };