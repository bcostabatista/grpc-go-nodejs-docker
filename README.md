## README

### Docker

Make sure you have [docker](https://www.docker.com/) installed

#

### Network

We're working with a shared network between containers, so before all, create the required network environment:

`````
$ docker network create starter-net
`````

### Entrypoint files

Also, make sure the <i>entrypoint.sh</i> files in the applications root directories have the proper permissions.

`````
$ chmod a+x entrypoint.js
`````

### Dev environment

Go to the <b>ms-calculator</b> folder then run:

````
$ docker-compose up
````

On a new terminal window, go to the <b>ms-products</b> folder then run:

`````
$ docker-compose up
`````
