// GitHub-related type definitions

export interface GitHubUser {
  id: number;
  login: string;
  name: string;
  email: string;
  avatar_url: string;
  html_url: string;
}

export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  clone_url: string;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  topics: string[];
}

export interface GitHubGist {
  id: string;
  description: string;
  html_url: string;
  files: { [filename: string]: GitHubGistFile };
  created_at: string;
  updated_at: string;
  public: boolean;
}

export interface GitHubGistFile {
  filename: string;
  type: string;
  language: string;
  raw_url: string;
  size: number;
  content?: string;
}

export interface GitHubAuthConfig {
  clientId: string;
  clientSecret?: string; // Not used in public client
  redirectUri: string;
  scope: string[];
}

export interface GitHubAuthToken {
  access_token: string;
  token_type: string;
  scope: string;
}