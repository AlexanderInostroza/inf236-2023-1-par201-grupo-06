# Grupo 6

Este es el repositorio del *Grupo 6*, cuyos integrantes son:

* Luis Álvarez - 201904544-K
* Vicente Ruiz - 202004642-5
* Alexander Inostroza - 202173595-K
* **Tutor**: Tabata Ahumada

## Wiki

> Obtener enlace desde el home de la wiki del repo.

Puede acceder a la Wiki mediante el siguiente [enlace](https://github.com/AlexanderInostroza/inf236-2023-1-par201-grupo-06/wiki)

## Videos

* [Vídeo presentación avance 1](https://youtu.be/0nHZnH322dM)
* [Vídeo presentación avance 2, hito 4](https://youtu.be/VOsks6NvwPw)
* [Vídeo hito 6-7](https://youtu.be/NHZF_o2MIM8)
## Aspectos técnicos relevantes

# MERN-base-proyect
Mern Stack code for the [Mern Tutorial](https://www.mongodb.com/languages/mern-stack-tutorial)

## prerequisites
- Install node.js ([Node](https://nodejs.org/en/))
- Install Code editor ([VS code](https://code.visualstudio.com/))
- Create Atlas cluster ([Get started with Atlas](https://www.mongodb.com/docs/atlas/getting-started/?_ga=2.60427181.186721350.1682018286-1256642793.1682018286))

> Disclaimer: The React application works with Node.js 16 and below.
## How To Run
Create an Atlas URI connection parameter in `server/config.env` with your Atlas URI (get it from your own created cluster), should look like this:
```
ATLAS_URI=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
PORT=5000
```

Start server:
```
cd mern/server
npm install
npm start
```

Start Web server
```
cd mern/client
npm install
npm start
```
