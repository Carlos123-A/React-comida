#!/bin/bash

docker build -t react-comida .

docker run -d -p 3000:3000 --name react-docker react-comida
