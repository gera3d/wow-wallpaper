# GitHub OAuth Setup Guide

This guide helps you set up GitHub OAuth authentication for the WoW Loading Screen Creator.

## Creating a GitHub OAuth App

1. **Go to GitHub Developer Settings**
   - Visit: https://github.com/settings/applications/new
   - Or: GitHub → Settings → Developer settings → OAuth Apps → New OAuth App

2. **Fill in Application Details**
   ```
   Application name: WoW Loading Screen Creator
   Homepage URL: https://gera3d.github.io/wow-wallpaper/
   Application description: A web-based tool for creating custom loading screen packs for World of Warcraft private servers
   Authorization callback URL: https://gera3d.github.io/wow-wallpaper/auth/callback
   ```

3. **For Local Development**
   - Create a separate OAuth App for development
   - Use callback URL: `http://localhost:5174/wow-wallpaper/auth/callback`

4. **Get Your Client ID**
   - After creating the app, copy the "Client ID"
   - Create a `.env.local` file in your project root:
   ```env
   VITE_GITHUB_CLIENT_ID=your_client_id_here
   VITE_GITHUB_REDIRECT_URI=http://localhost:5174/wow-wallpaper/auth/callback
   ```

## Development Testing

For development and testing, you can use a Personal Access Token:

1. **Create a Personal Access Token**
   - Go to: https://github.com/settings/tokens
   - Generate new token (classic)
   - Select scopes: `user:email`, `repo`

2. **Use Development Login**
   - In development mode, click the "Dev" button next to GitHub login
   - Paste your Personal Access Token
   - This bypasses OAuth for testing

## Production Setup

1. **Environment Variables**
   - Set `VITE_GITHUB_CLIENT_ID` in your deployment environment
   - Set `VITE_GITHUB_REDIRECT_URI` to your production callback URL

2. **GitHub Pages**
   - The callback URL should be: `https://gera3d.github.io/wow-wallpaper/auth/callback`
   - Update your OAuth App settings to use this URL

## Security Notes

- Never commit `.env.local` files with real credentials
- Client ID is safe to expose in frontend code
- The OAuth flow handles authentication securely
- Personal Access Tokens should only be used for development

## Scopes Required

- `user:email` - To get user profile information
- `repo` - To save/load packs to GitHub repositories (optional for basic features)

## Troubleshooting

- **"Application not found"**: Check your Client ID
- **"Redirect URI mismatch"**: Ensure callback URLs match exactly
- **CORS errors**: Make sure you're using the correct domain in OAuth settings