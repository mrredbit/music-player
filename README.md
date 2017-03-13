#  Music Player
Music Player is a simple project to demonstrate my technical skills. It is a basic player with CRUD operations of Tracks and Playlists entity, user can fill up the play queue from music library and play tracks from it.

### DEMO
http://musicplayer.davidchiu.io

### Functionality
#### Empty State
<img src="https://cloud.githubusercontent.com/assets/963966/23863030/87ad3b0c-0806-11e7-921a-3c26fdb4b8dc.png" width="400px">  

#### Loaded State  
##### My Library  
<img src="https://cloud.githubusercontent.com/assets/963966/23863218/103da452-0807-11e7-814f-a61f2d253221.png" width="400px">  
User can click on the + button to add track to play queue  

##### Play Queue  
<img src="https://cloud.githubusercontent.com/assets/963966/23863222/11f4c38e-0807-11e7-99f4-d6fe5f347cb4.png" width="400px">  
- User can click on the - button to remove track from play queue  
- User can interact with the player control (play, pause, previous, next)
- User can rate the current playing track by clicking on the stars

#### Error State
<img src="https://cloud.githubusercontent.com/assets/963966/23863246/27b58f78-0807-11e7-957e-caf41e94a636.png" width="400px">  
When any error occurred during operation

#### Loading State
##### TBD

### Installation
Run below command on the root folder  

Install dependencies
```
npm install
```
Install json-server (a very simple mock server)
```
npm install -g json-server
```

### Usage
Run Development Web Server (listen on port 8000)
```
npm start
```

Run json-server for Backend (listen on port 3000)
```
npm run jsonserver
```

Build Production Website (api will point to production backend on Google Cloud)
```
npm run dist
```

### Technology Used
- **ES6 + HTML5 + CSS3**
- **React** - Used as componented based rendering engine for presentation layer.
- **Redux** - As the main framework of the website.
- **Webpack** - Transforming, bundling, packing modules.
- **Babel** - Transpiling ES6 to browser supported javascript.
- **Karma** - Test runner.
- **Mocha** - Testing framework.
- **Chai** - Assertion library.
- **EsLint** - Highlighting and reporting improvement of code.
- **PostCSS** - Transforming CSS files, used autoprefixer in this project to add different browser vendor prefixes.
- **Json Server** - For quickly mocking a backend for POC
- **Npm** - Managing node modules and running tasks

### Architecture
- **Redux** - Inspired by Facebook's FLUX architecture, Redux enforce one way data flow to achieve having one single source of truth, making state container always predictable, testable, maintainable, and even undoable. 
- **One way data flow** - Presentation data change is always in one way, UI or systems event will create `Actions`, `Actions` is then `dispatch` to `Reducer`, `Reducer` return a new `state` to store in `Store`, `Store` then trigger re-rendering of just the changed data.
- **Single source of truth** - There is only one presentation state of whole application which is stored in the `state` of `Store`. And it will only be modified by `Reducer`.
- **Immutable store** - The state is written in a immutable manner, everytime when there is changes, reducer will return a complete new state. Developer don't need to worry about the state is changed somewhere accidentally.
- **Container + Component approach** - React components are only served as presentation layers for user interactions. I seperate the UI components into two types, `Container` and `Component`. `Container` is acted as a smart component, where interaction logics, life cycle event handling... etc are all written in this layer. `Component` on the other hand is acted as a dump component, which it will just render the DOM element based on whatever passed to its `props`, it don't care much about what logic behind.
- **CSS Module** - I used CSS Module to try to avoid global styles(which always cause chaos with naming collisions) as much as possible. Every components will have their own CSS module, the class name is be hashed so it won't collide with other component.

### Library Used
- **Momentjs** - Time formatting
- **Howlerjs** - Handy lib for playing music

### Performance Enhancement
- **Optimistic update** 
  - Problem - When building the music player, because all the data, including the track rating, were store in the backend. Whenever we are updating the Tracks and Playlist entity, the UI re-rendering is happen after the round trip of server communication. Sometimes in the edge case it can be very slow and make the user feel laggy(e.g. the rating action). I 
  - Enhancement - In the real situtation, we are quite confident that 99% of the requests will return a successful 200 response. So I assume that rating request will very probably be success too. Therefore I enhanced the UX by updating the client UI before getting the api response, so user can see an instant update. The worst case is when the server return a different data(for the case other people is changing the same place at the same time) or a failed response. But when the response came back, it will actually cause a second data change, so it will correct the data on screen or show an error message by that time, no big deal.

### TODO
- Mobile Layout  
<img src="https://cloud.githubusercontent.com/assets/963966/23865108/79c10a86-080c-11e7-8729-63a7cafec744.png" height="280px">
<img src="https://cloud.githubusercontent.com/assets/963966/23865109/79c16382-080c-11e7-8e0f-c3259567d7c8.png" height="280px">
<img src="https://cloud.githubusercontent.com/assets/963966/23865106/79bfa66e-080c-11e7-8b8b-e3f2a403bd9e.png" height="280px">
<img src="https://cloud.githubusercontent.com/assets/963966/23865110/79e19fa8-080c-11e7-842d-c2c3b01c8e98.png" height="280px">
<img src="https://cloud.githubusercontent.com/assets/963966/23865107/79c0d304-080c-11e7-8f88-d0d6b0851a95.png" height="280px">
- Loading State
- Cover more unit tests
