export type Teams = {
  id: string;
  name: string;
  foundation: number;
  shield: string;
  mascot: string;
  localization: string;
};

export type TeamsInput = {
  name: string;
  foundation: number;
  shield: string;
  mascot: string;
  localization: string;
};

export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  photo: string;
  teams?: Teams[];
};

export type UserInput = {
  name: string;
  username: string;
  email: string;
  password: string;
  photo: string;
};

export type SignIn = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  user: User;
};
