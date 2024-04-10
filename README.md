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
    "nombre": "Dispositivo",
    "modelo": "X2014789",
    "almacenamiento": 35769,
    "contrasena": "AAAAB"
}
```
Response
```json
{
    "id": "a8214da0-75f4-4e2b-8b32-baebc254d7b2",
    "nombre": "Dispositivo",
    "modelo": "X2014789",
    "almacenamiento": 35769,
    "contrasena": "25c6bd441dcc605bebe114af98165d1b:a73470e09c022efe364b243ba5ff9c77"
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


PUT
http://127.0.0.1:3000/dispositivos/a8214da0-75f4-4e2b-8b32-baebc254d7b2
Request
```json
{
    "nombre": "Dispositivoo",
    "modelo": "X201478",
    "almacenamiento": 3576,
    "contrasena": "AAAA"
}

```
Response
```json
{
    "id": "a8214da0-75f4-4e2b-8b32-baebc254d7b2",
    "nombre": "Dispositivoo",
    "modelo": "X201478",
    "almacenamiento": 3576,
    "contrasena": "6a9784bf44bb588c8ed4e1ff609fc261:f5d6ec0a80e9d29fc2f5d930c5386e7f"
}
```


GET
http://127.0.0.1:3000/dispositivos/a8214da0-75f4-4e2b-8b32-baebc254d7b2
Request
```json

```
Response
```json
{
    "id": "a8214da0-75f4-4e2b-8b32-baebc254d7b2",
    "nombre": "Dispositivoo",
    "modelo": "X201478",
    "almacenamiento": 3576,
    "contrasena": "6a9784bf44bb588c8ed4e1ff609fc261:f5d6ec0a80e9d29fc2f5d930c5386e7f"
}
```


DELETE
http://127.0.0.1:3000/dispositivos/a8214da0-75f4-4e2b-8b32-baebc254d7b2
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





