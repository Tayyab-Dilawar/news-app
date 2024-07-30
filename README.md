# Getting Started with the News App, I discuss three ways to run this project.

For the first two steps you have to download the code from this repository

## 1

In the project directory, you have to install the node_modules using the command:

### `npm install`

After that you have to start the app by writing this below command:

### `npm start`

After starting the app, you have to write the below url in any browser you love to run this news app:

### `http://localhost:3000`

## 2

Run this project by docker image, firstly you have to start the docker desktop app

In the project directory, you have to run this command:

### `docker build -t challenge-td:v1 .`

After that you can run this command:

### `docker run -p 3000:3000 challenge-td:v1`

After run the app, you have to write the below url in any browser you love to:

### `http://localhost:3000`

## 3

Run this project by pull the docker image, pull the image by using this command:

### `docker pull tayyabdilawar/news-app`

After pull the image successfully, run this command:

### `docker run -p 3000:3000 tayyabdilawar/news-app`

After run the app, you have to write the url in any browser:

### `http://localhost:3000`
