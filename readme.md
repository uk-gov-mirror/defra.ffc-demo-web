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

# Note on Running Locally

to get running against redis-ha locally you must deploy with no affinities, so redis nodes can be on same worker node, set the replicas to one, and set min slaves to zero. This can be donw via the provided `redis.yaml` file:

`helm install --namespace mine-support --name redis -f redis.yaml stable/redis-ha`

Further information: https://stackoverflow.com/questions/55365775/redis-ha-helm-chart-error-noreplicas-not-enough-good-replicas-to-write

A Skaffold file is provided that can redeploy files upon change. This can be run via the script `./bin/start-skaffold`.
Changes to the local file will be copied across to the pod, however this is fairly slow when running locally.
Skaffold uses a `dev-values.yaml` config that makes the file system in the container read/write and starts nodemon.

It's about an order of magnitude quicker to use the provided docker-compose file. At the moment this only contains the local code and a Redis image, not stubs or images for other required services.

The docker-compose file can be launched via `./bin/start-compose`. This will start a nodemon session watching for changes in `.js` and `njk` files. 

For the volume mounts to work correct via WSL the application needs to be run from `/c/...` rather than `/mnt/c/..`.
You may need to create a directory at `/c` then mount it via `sudo mount --bind /mnt/c /c` to be able to change to `/c/..`


