#!/bin/bash

DIRINICIAL=$(pwd);
DIRROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )";
APP=mobilebugget-phonegap
DIRAPP=$DIRROOT/applications/$APP

function install {
  docker build -t $APP -f $DIRROOT/docker/phonegap/Dockerfile . 
}

function build {
  docker run -v $DIRAPP:/data webratio/phonegap phonegap build android
}

function serve {
  docker run -d -p 3000:3000 -v $DIRAPP:/data $APP phonegap serve -p 3000
}

function create {
  docker run -v $DIRROOT/applications:/data $APP phonegap create $APP
}

case "$1" in
  install)
    install
    ;;
  create)
    create
    ;;
  serve)
    serve
    ;;
  build)
    build
    ;;
  about)
    echo "https://hub.docker.com/r/webratio/phonegap/"
    ;;
  *)
  echo "command $1 not found";
esac

cd $DIRINICIAL; #Volta para o diretorio onde estava
