#!/bin/bash

DIRINICIAL=$(pwd);
DIRROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )";
APP=app
DIRAPP=$DIRROOT/$APP
GULP=mobilebudget-gulp

function install {
 docker build -t $GULP -f $DIRROOT/docker/gulp/Dockerfile . 
 docker run --name="$GULP" -v $DIRROOT:/data -d $GULP tail -f /dev/null
 docker exec -it $GULP bash -c "npm install"
}

function run {
  docker start $GULP
}

case "$1" in
  install)
    install
    ;;
  run)
    run
    ;;
  *)
  echo "command $1 not found";
esac
