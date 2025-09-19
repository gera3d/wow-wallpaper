# WoW Loading Screen Creator - Project Structure

## Proposed Directory Structure

```
wow-loading-screen-creator/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── assets/
│   │   ├── templates/
│   │   │   ├── eastern-kingdoms/
│   │   │   ├── kalimdor/
│   │   │   ├── dungeons/
│   │   │   └── general/
│   │   └── icons/
│   └── wasm/
│       ├── blp-converter.wasm
│       └── mpq-creator.wasm
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── GitHubLogin.tsx
│   │   │   ├── AuthContext.tsx
│   │   │   └── ProtectedRoute.tsx
│   │   ├── Editor/
│   │   │   ├── ZoneSelector.tsx
│   │   │   ├── TemplateSelector.tsx
│   │   │   ├── ImageUpload.tsx
│   │   │   ├── ImageCropper.tsx
│   │   │   ├── TextOverlay.tsx
│   │   │   └── EditorWorkspace.tsx
│   │   ├── Preview/
│   │   │   ├── GamePreview.tsx
│   │   │   ├── LoadingScreenMock.tsx
│   │   │   └── AspectRatioToggle.tsx
│   │   ├── Gallery/
│   │   │   ├── PackGallery.tsx
│   │   │   ├── PackCard.tsx
│   │   │   ├── FeaturedPacks.tsx
│   │   │   └── UserPacks.tsx
│   │   ├── Export/
│   │   │   ├── ExportDialog.tsx
│   │   │   ├── PackBuilder.tsx
│   │   │   └── DownloadProgress.tsx
│   │   └── Shared/
│   │       ├── Header.tsx
│   │       ├── Footer.tsx
│   │       ├── Navigation.tsx
│   │       ├── LoadingSpinner.tsx
│   │       ├── ErrorBoundary.tsx
│   │       └── Toast.tsx
│   ├── hooks/
│   │   ├── useGitHubAuth.ts
│   │   ├── useGitHubStorage.ts
│   │   ├── useImageProcessor.ts
│   │   ├── usePackBuilder.ts
│   │   └── useLocalStorage.ts
│   ├── services/
│   │   ├── github/
│   │   │   ├── githubApi.ts
│   │   │   ├── oauthService.ts
│   │   │   └── repositoryService.ts
│   │   ├── image/
│   │   │   ├── imageProcessor.ts
│   │   │   ├── blpConverter.ts
│   │   │   └── cropUtils.ts
│   │   ├── pack/
│   │   │   ├── mpqBuilder.ts
│   │   │   ├── packValidator.ts
│   │   │   └── exportService.ts
│   │   └── storage/
│   │       ├── localStorageService.ts
│   │       └── cacheService.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Editor.tsx
│   │   ├── Gallery.tsx
│   │   ├── MyPacks.tsx
│   │   └── About.tsx
│   ├── types/
│   │   ├── index.ts
│   │   ├── github.ts
│   │   ├── pack.ts
│   │   ├── zone.ts
│   │   └── image.ts
│   ├── data/
│   │   ├── zones.json
│   │   ├── templates.json
│   │   └── presets.json
│   ├── utils/
│   │   ├── fileHandlers.ts
│   │   ├── imageUtils.ts
│   │   ├── validators.ts
│   │   ├── constants.ts
│   │   └── helpers.ts
│   ├── styles/
│   │   ├── globals.css
│   │   ├── components.css
│   │   └── tailwind.css
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
├── docs/
│   ├── API.md
│   ├── CONTRIBUTING.md
│   └── USER_GUIDE.md
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
├── .gitignore
└── README.md
```

## Key Architecture Decisions

### Component Organization
- **Auth**: All authentication-related components
- **Editor**: Core editing functionality components  
- **Preview**: Preview and visualization components
- **Gallery**: Community sharing and browsing components
- **Export**: Pack building and download functionality
- **Shared**: Reusable UI components

### Service Layer Structure
- **github**: All GitHub API interactions
- **image**: Image processing and conversion
- **pack**: MPQ building and pack management
- **storage**: Local storage and caching

### Data Management
- **TypeScript interfaces** in `/types` for type safety
- **Static data files** in `/data` for zones, templates
- **Context providers** for global state management

### Build and Deployment
- **Vite** for fast development and optimized builds
- **GitHub Actions** for automated CI/CD
- **GitHub Pages** for hosting

## Technology Stack Details

### Frontend Framework
- **React 18** with functional components and hooks
- **TypeScript** for type safety
- **Vite** for build tooling and dev server

### Styling
- **Tailwind CSS** for utility-first styling
- **Custom CSS** for game-specific UI mockups
- **Responsive design** for desktop and mobile

### State Management
- **React Context** for global state (auth, settings)
- **Custom hooks** for data fetching and local state
- **Local Storage** for persistence

### File Processing
- **WebAssembly modules** for BLP conversion
- **Browser APIs** for file handling
- **Canvas API** for image manipulation

### GitHub Integration
- **GitHub OAuth** for authentication
- **GitHub API** for repository/gist management
- **GitHub Pages** for hosting and deployment

## Development Workflow

1. **Local Development**: Use Vite dev server with hot reload
2. **Testing**: Jest for unit tests, React Testing Library for components
3. **Building**: Vite production build with optimizations
4. **Deployment**: GitHub Actions automatically deploy to GitHub Pages
5. **Versioning**: Semantic versioning with Git tags

## Performance Considerations

- **Code splitting** for large dependencies (WASM modules)
- **Lazy loading** for gallery images and templates
- **Service workers** for caching static assets
- **Optimized images** for templates and previews

## Security and Privacy

- **Client-side processing** keeps user images private
- **GitHub OAuth** for secure authentication
- **No sensitive data storage** in localStorage
- **Rate limiting** for GitHub API calls