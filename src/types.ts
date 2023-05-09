export interface Movie {
  id: number;
  title: string;
  year: number;
  poster_path?: string;
  release_date: Date;
}

export interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  tasks: string[];
}

