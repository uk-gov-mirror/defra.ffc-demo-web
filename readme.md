[![Build status](https://defradev.visualstudio.com/DEFRA_FutureFarming/_apis/build/status/defra-ff-mine-support-spike)](https://defradev.visualstudio.com/DEFRA_FutureFarming/_build/latest?definitionId=-1)

# Mine Support
Digital service mock to claim public money in the event property subsides into mine shaft.

# Environment variables

| name     | description      | required | default |            valid            | notes |
|----------|------------------|:--------:|---------|:---------------------------:|-------|
| NODE_ENV | Node environment |    no    |         | development,test,production |       |
| PORT     | Port number      |    no    | 3000    |                             |       |

# Prerequisites

Node v10+

# Running the application

First build the application using:

`$ npm run build`

Now the application is ready to run:

`$ node index.js`
