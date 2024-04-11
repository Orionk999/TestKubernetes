![](http://i.imgur.com/y8g506n.png?1)

# Daniel

## Comandos para hacer correr el backend

docker build -t node-test2 .

minikube docker-env

eval $(minikube -p minikube docker-env)

kubectl delete deployment my-app-deployment --namespace my-app-namespace

kubectl apply -f backend.yaml

kubectl get pods --namespace my-app-namespace

kubectl logs my-app-deployment-75555bf54c-l67mb -c my-app-container

Este comando es importante para ver la IP del pod tanto de mongo como de la imagen de Docker.

kubectl describe pod my-app-deployment-75555bf54c-l67mb --namespace my-app-namespace

kubectl port-forward [Nombre del pod que representa la imagen]  3000:3000


POST
http://127.0.0.1:3000/dispositivos/
Request
```json
{
    "nombre": "Dispositivo16",
    "modelo": "XH582",
    "almacenamiento": 100,
    "contrasena": "BB"
}
```
Response
```json
{
    "nombre": "Dispositivo16",
    "modelo": "XH582",
    "almacenamiento": 100,
    "contrasena": "1e626ede6a6e54d89bd4e46595542a6a:2a32dc7a1e9247bfed2d2ccbe138983d",
    "_id": "6617681d1a61f8b37f0ae1f7",
    "__v": 0
}
```


GET
http://127.0.0.1:3000/dispositivos/
Request
```json

```
Response
```json
[
    {
        "id": "a8214da0-75f4-4e2b-8b32-baebc254d7b2",
        "nombre": "Dispositivo",
        "modelo": "X2014789",
        "almacenamiento": 35769,
        "contrasena": "25c6bd441dcc605bebe114af98165d1b:a73470e09c022efe364b243ba5ff9c77"
    }
]
```


http://127.0.0.1:3000/dispositivos/6617681d1a61f8b37f0ae1f7
Request
```json
{
    "nombre": "Dispositivo166",
    "modelo": "XH5822",
    "almacenamiento": 1000,
    "contrasena": "BBB"
}

```
Response
```json
{
    "_id": "6617681d1a61f8b37f0ae1f7",
    "nombre": "Dispositivo166",
    "modelo": "XH5822",
    "almacenamiento": 1000,
    "contrasena": "3abcbe41a177349543bfe220ceec48d6:39a3e8a3de534ee85aa3bef711a9b4dd",
    "__v": 0
}
```


GET
http://127.0.0.1:3000/dispositivos/6617681d1a61f8b37f0ae1f7
Request
```json

```
Response
```json
{
    "_id": "6617681d1a61f8b37f0ae1f7",
    "nombre": "Dispositivo166",
    "modelo": "XH5822",
    "almacenamiento": 1000,
    "contrasena": "3abcbe41a177349543bfe220ceec48d6:39a3e8a3de534ee85aa3bef711a9b4dd",
    "__v": 0
}
```


DELETE
http://127.0.0.1:3000/dispositivos/6617681d1a61f8b37f0ae1f7
Request
```json

```
Response
```json
{
    "message": "Dispositivo eliminado correctamente"
}
```




## License

MIT

---

> [www.whynotstreet.com](https://www.whynotstreet.com) &nbsp;&middot;&nbsp;
> GitHub [@Orionk999](https://github.com/Orionk999) &nbsp;&middot;&nbsp;

> _Es genial trabajar con ordenadores. No discuten, lo recuerdan todo y no se beben tu cerveza.  Paul Leary_ 





