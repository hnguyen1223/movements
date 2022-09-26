  
  

# Movements
This is a mono repo for a set of web app, extension and backend for a RSS reader.

Main components
* Web app - Feed reader
* Browser Extension - Visual tool to create custom mapping from list-like website to feed
* Backend - load feed, scrap websites from custom mapping

## Inspirations
This is both a personal project that addresses some of my needs and a testing ground for Nx architecture with monorepo to solve some problems with more complex projects e.g. code duplication, circular dependencies, growing shared module and mental overhead to manage all of those.

## Some Considerations
- monorepo to share code and enforce rules between different apps & backend.
- SCAMs (single component Angular modules), with Angular 14 standalone components where applicable, to create more self contained and resusable components
- No NgRx - I don't think state and data manipulation are complex enough to warrant a trade-off for NgRx
- Micro Frontends (& module federation) - while super interesting, it's not big enough (few, not complex sub domains) to divide into multiple smaller apps

## Project Structure
```
└── root
    ├── apps                    // bootsrapping, logics have been moved to libs
    │   ├── web
    │   ├── extension
    │   ├── backend
    └── libs
        ├── web                 // app-specific
        │   ├── feature         // use cases, smart components
        │   │   ├── shell       // feature-shell to contain overall app routing
        │   │   ├── layout      // main layout
        │   │   └── home        // home feature page
        │   ├── data-access
        │   │   └── settings    // service
        │   ├── ui              // app specific dumb components, minimal
        ├── extension
        └── shared              // app-agnostic
            ├── feature         // shared smart components
            ├── data-access
            │   ├── feed
            │   └── persistence // layer over localstorage atm, + firetore (future)
            ├── ui
            │   ├── resizable layout
            │   └── list	    
            └── utils
                └─── app config
```

## Library Constraints (Dependencies)
- Lib --x--> App
- Lib (App 1) --x--> Lib (App 2)
- Lib (Shared) --x--> Lib (App)
- Lib (Util) only ----> Lib (Util)
- Lib (UI) only ----> Lib (UI / Util)
- Lib (Data) only ----> Lib (Data / Util)
- No importing library if it's being lazy loaded

## Progress
work in progress - [movements.huynguyen.ca](https://movements.huynguyen.ca)

### Web App 
- [x] Overall Structure
- [x] Feed  - RSS
- [x] Persistence - localstorage
- [ ] Persistence - Firestore
- [ ] Different feed fiew
- [x] Feed - Atom support
- [ ] Error checking (feed format, url, etc.)

### Backend
- [x] Feed  - RSS
- [ ] Error checking (feed format, url, etc.)
- [x] Feed - Atom
- [ ] Feed - custom mapping (JSDOM)
- [ ] Feed - custom mapping (puppeteer)
- [ ] Custom NX plugin to support firebase functions in nx

### Extension
- [ ] Custom mapping creator
- [ ] Feed view
- [ ] Persistence - chrome.storage
- [ ] Persistence - Firestore (manifest v3 problems)
- [ ] Safari extension
