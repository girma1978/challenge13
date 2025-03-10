// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
  bio: string;
  id: number;
  name: string;
  login: string;
  avatar_url: string;
  email: string;
  location: string;
  html_url: string;
  company: string;
}
