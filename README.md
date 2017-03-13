#  Music Player
Music Player is a simple project to illustrate my technical skills. It is a basic player with CRUD operations, user can fill up the play queue from music library and listen tracks from it.

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
- User can rate the current playing track

#### Error State
<img src="https://cloud.githubusercontent.com/assets/963966/23863246/27b58f78-0807-11e7-957e-caf41e94a636.png" width="400px">  
When any error occurred during operation

#### Loading State
##### TBD
