#!/bin/bash

DIRINICIAL=$(pwd);
DIRROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )";
APP=app
DIRAPP=$DIRROOT/$APP

function install {
 docker build -t $APP -f $DIRROOT/docker/gulp/Dockerfile . 
}

case "$1" in

  install)
    install
    ;;
  about)
    echo "https://hub.docker.com/r/webratio/phonegap/"
    ;;
  *)
  echo "command $1 not found";
esac
