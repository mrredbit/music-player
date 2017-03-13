#  Music Player
Music Player is a simple project to illustrate my technical skills. It is a basic player with CRUD operations of Tracks and Playlists entity, user can fill up the play queue from music library and play tracks from it.

### DEMO
http://musicplayer.davidchiu.io

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

### Technology Used
- ES6 + HTML5 + CSS3
- React + Redux
- Webpack
- Babel
- Karma
- Mocha
- Chai
- EsLint
- PostCSS

### Architecture
- Redux
- One way data flow
- Single source of truth
- Immutable store
- Container + Component approach
- CSS Module

### Library Used
- Momentjs
- Howlerjs

### Performance Enhancement
- Optimistic update

### TODO
- Mobile Layout  
<img src="https://cloud.githubusercontent.com/assets/963966/23865108/79c10a86-080c-11e7-8729-63a7cafec744.png" height="280px">
<img src="https://cloud.githubusercontent.com/assets/963966/23865109/79c16382-080c-11e7-8e0f-c3259567d7c8.png" height="280px">
<img src="https://cloud.githubusercontent.com/assets/963966/23865106/79bfa66e-080c-11e7-8b8b-e3f2a403bd9e.png" height="280px">
<img src="https://cloud.githubusercontent.com/assets/963966/23865110/79e19fa8-080c-11e7-842d-c2c3b01c8e98.png" height="280px">
<img src="https://cloud.githubusercontent.com/assets/963966/23865107/79c0d304-080c-11e7-8f88-d0d6b0851a95.png" height="280px">
- Loading State
- Cover more unit tests
