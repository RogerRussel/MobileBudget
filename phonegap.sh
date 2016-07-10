#!/bin/bash

DIRINICIAL=$(pwd);
DIRROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )";
APP=$DOCKERAPPNAME
DOCKERAPPNAME=mobilebugget-phonegap
DIRAPP=$DIRROOT/app

function install {
  docker build -t $DOCKERAPPNAME -f $DIRROOT/docker/phonegap/Dockerfile . 
}

function build {
  docker run -v $DIRAPP:/data webratio/phonegap phonegap build android
}

function serve {
  docker run -d -p 3000:3000 -v $DIRAPP:/data $DOCKERAPPNAME phonegap serve -p 3000
}

function create {
  docker run -v $DIRROOT:/data app phonegap create $DOCKERAPPNAME
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
