  
  

# Movements
This is a mono repo for a set of web app, extension and backend for a RSS reader.

Main components
- Web app
    - Feed reader: Angular SPA that wraps a shared feed-reader feature libary
- Extension
    - Options page: Feed reader (shared feature library)
    - Response header modification for CORS: static rules through `declarativeNetRequest` permission
    - Content script: Custom mapping creator
- Cors-proxy: proxy web app requests if browser extension is not installed

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
    │   ├── cors-proxy
    └── libs
        ├── web             
        │   └── shell           // shell to contain overall app routing
        ├── extension             
        │   └── shell           // shell to contain overall app routing (options page)
        └── shared              // app-agnostic
            ├── feed-reader     // shared feed reader
            │   │   ├── feed
            │   │   ├── feed-add
            │   │   ├── feed-item-list
            │   │   └── layout
            ├── data-access
            │   ├── feed
            │   ├── persistence // layer over localstorage atm, + firetore (future)
            │   └── settings    // layer over persistence, customizable per app (future)
            ├── ui              // share dumb ui components
            │   ├── resizable layout
            │   ├── header-bar
            │   └── line-clamp	    
            └── utils
                ├─── app config
                ├─── is-not-nullish
                ├─── uri-encode
                └─── url-validator
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
- [x] Feed - RSS
- [x] Persistence - localstorage
- [ ] Persistence - Firestore
- [x] Add feed
- [x] Remove feed
- [ ] Folder organization
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
- [x] Feed view
- [x] Persistence - chrome.storage
- [ ] Persistence - Firestore (manifest v3 problems)
- [ ] Safari extension
