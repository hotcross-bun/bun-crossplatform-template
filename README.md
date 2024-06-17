# bun-multiplatform-monorepo

Monorepo setup for 

- `pkgs/common`
  - Bun
  - DrizzleORM
  - Biome
- `pkgs/server`
  - Bun
- `pkgs/web`
  - SvelteKit
  - TailwindCSS
  - shadcn-svelte
- `pkgs/desktop-*`
  - Tauri (v1 and v2)
  - *Electrobun?*
  - *Raw webview?*
- `pkgs/mobile`
  - *Capacitor?*
  - *React Native?*

*\*tentative choices*

  
These are just tools and technologies that I like and believe to be reliable for my own workflow. 
This stack takes everything I have in mind into account (cross-platform, local-first, speed) which is why Biome and Bun have been chosen. 
SvelteKit is my favorite. I like the automatic file-based routing. Bidirectional data flow is a bit weird though, which is why I've chosen Svelte 5 even though it's only at RC.
Bun unfortunately doesn't have much in the way of desktop app support. I need that (local-first) very badly. Bun-specific solutions are underway, but it may be valuable instead to have your common Bun binary be linked as a single-file executable into Tauri, but those implementation details are left up to you.

I hate when monorepos have `/packages` as a root folder. It made the folder feel too big, even though it wasn't even filled yet. so I've renamed it to `pkgs`. 
Bun has helped me "just get started." I can't be bothered with node.js anymore because sqlite feels to difficult to get setup with. With bun, I don't have to do that anymore, I'm already hooked into the filesystem nicely, with a nice api (drizzleorm support right off the bat is insane too.)

Tauri is the electron replacement that I have most experience with. Their Discord support is the best I've gotten out of any community I'm currently in and they have more of an approach to security than I do. The setup I have by default here might punch a hole through that, but that doesn't make me love them any less. Good people there, and it's the only way I've found to make desktop work nicely with web without being as bloated as electron.

If you'd like to contribute, come chat with me in the [Discord](https://discord.gg/tg9ph67zTh)!

To install all dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.30. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
