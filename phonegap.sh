#!/bin/bash

DIRINICIAL=$(pwd);
DIRROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )";
APP=$DOCKERAPPNAME
DOCKERAPPNAME=mobilebugdet-phonegap
DIRAPP=$DIRROOT/app

function install {
  docker build -t $DOCKERAPPNAME -f $DIRROOT/docker/phonegap/Dockerfile . 
  init
}

function build {
  docker run -v $DIRAPP:/data webratio/phonegap phonegap build android
}

function init {
  docker run --name="$DOCKERAPPNAME" -d -p 3000:3000 -v $DIRAPP:/data $DOCKERAPPNAME phonegap serve -p 3000 --autoreload
}

function serve {
  docker start $DOCKERAPPNAME
}

function plugin {
  docker run --rm -v $DIRAPP:/data $DOCKERAPPNAME phonegap plugin add $1
}

function create {
  docker run -v $DIRROOT:/data app phonegap create $DOCKERAPPNAME
}

case "$1" in
  install)
    install
    ;;
  init)
    init
    ;;
  create)
    create
    ;;
  serve)
    serve
    ;;
  plugin)
    plugin
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
