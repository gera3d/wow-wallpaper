# Project Plan: Turtle WoW Custom Loading Screen Creator (GitHub Edition)

## 1. Project Overview
Development of a GitHub Pages-hosted web application that allows Turtle WoW players to create, customize, and share loading screen packs for Vanilla WoW 1.12.1. The application will leverage GitHub's infrastructure for hosting, storage, and user authentication.

## 2. Requirements and Features

### Core Features
- GitHub OAuth authentication for saving and managing loading screen packs
- Loading screen template library with Turtle WoW-themed backgrounds
- Client-side image upload functionality for custom backgrounds
- Preview functionality showing how screens will look in-game
- Pack export in the correct format for Turtle WoW client
- Community sharing through GitHub repositories and discussions

### Technical Requirements
- File format compliance with WoW 1.12.1 specifications
- Proper image resolution and aspect ratio handling (4:3 and widescreen support)
- Client-side BLP file conversion using WebAssembly
- MPQ archive creation in the browser
- Minimal file size optimization for distribution

## 3. Technology Stack
- **Frontend**: React.js, TypeScript, Tailwind CSS
- **Authentication**: GitHub OAuth
- **Storage**: GitHub Repositories/Gists for user packs
- **Image Processing**: WebAssembly modules for BLP conversion
- **Hosting**: GitHub Pages
- **Version Control**: Git/GitHub
- **CI/CD**: GitHub Actions

## 4. Development Phases

### Phase 1: Foundation (Weeks 1-2)
- Set up GitHub repository and GitHub Pages configuration
- Create basic application structure with React
- Implement GitHub OAuth authentication

### Phase 2: Core Functionality (Weeks 3-5)
- Build client-side image upload and manipulation functionality
- Develop loading screen template system
- Implement text overlay editor
- Create WebAssembly-based BLP conversion module

### Phase 3: User Experience (Weeks 6-7)
- Design and implement intuitive UI/UX
- Create preview functionality
- Develop browser-based pack export feature using WebAssembly
- Implement GitHub repository/gist storage for user packs

### Phase 4: Community Features (Weeks 8-10)
- Implement pack sharing via GitHub repositories
- Use GitHub stars for rating system
- Create featured packs showcase on the main page
- Add tagging and categorization using GitHub topics

## 5. Implementation Details

### GitHub Storage Strategy
- **User Authentication**: GitHub OAuth for secure user identification
- **Pack Storage Options**:
  - Option 1: Create repositories for user packs with proper metadata
  - Option 2: Use GitHub Gists for smaller packs
  - Option 3: Store in branches of a central repository
- **Templates**: Stored in the main repository's `/public/assets/templates`
- **Shared Content**: Discoverable through GitHub topics and featured in app gallery

### Loading Screen Technical Specifications
- Target resolution: 1024x768 (standard) with support for 1920x1080
- File format: BLP (Blizzard Picture) converted client-side via WebAssembly
- Required loading screens:
  - LOADINGSCREEN_EASTERN
  - LOADINGSCREEN_KALIMDOR
  - LOADINGSCREEN_LOAD
  - LOADINGSCREEN_LOGIN
  - (Plus additional Turtle WoW-specific screens)

### User Workflow
1. User authenticates with GitHub OAuth
2. Creates new pack or loads existing pack from their GitHub storage
3. Selects templates or uploads custom backgrounds (processed client-side)
4. Adds custom text and styling
5. Previews pack in simulated game environment
6. Exports pack as downloadable file (MPQ created in-browser)
7. Optionally saves pack to GitHub repository/gist for sharing

## 6. Testing Strategy
- Unit testing for all core functionality using Jest
- GitHub Actions for automated testing on each commit
- Browser compatibility testing with focus on WebAssembly support
- User acceptance testing with Turtle WoW players
- Performance testing for client-side image processing operations

## 7. Deployment Plan
- Initial deployment to GitHub Pages for testing
- Beta release with core functionality using GitHub OAuth
- Official launch with repository-based sharing features
- Regular updates through automated GitHub Actions workflows

## 8. GitHub-Specific Considerations
- **Rate Limiting**: Implement caching and rate limit handling for GitHub API
- **Storage Limits**: Monitor repository sizes and implement optimization
- **Privacy**: Clear documentation on what data is stored in GitHub repositories
- **Fallback**: Local storage option for users who prefer not to use GitHub storage

## 9. Future Enhancements
- GitHub Actions workflows for automated pack validation
- GitHub Discussions integration for community feedback on packs
- Template contribution system via pull requests
- Seasonal pack competitions using GitHub Discussions
- Custom GitHub App for enhanced integration

## 10. Resources and References
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub OAuth Documentation](https://docs.github.com/en/developers/apps/building-oauth-apps)
- [Turtle WoW Official Website](https://turtle-wow.org/)
- [WoW 1.12.1 Client File Specifications](https://wowdev.wiki/BLP)
- [Community Discord for Feedback](https://discord.gg/turtlewow)