# KubeCafe

KubeCafe is a simple Kubernetes-based web application that demonstrates a full-stack deployment with a Node.js/Express backend, a static frontend, and a MongoDB database.

## Project Structure

```
backend/    # Node.js Express API server
frontend/   # Static frontend served by Nginx
k8s/        # Kubernetes manifests for deployment
```

## Features

- **Backend**: REST API for menu items using Express and MongoDB ([backend/app.js](backend/app.js))
- **Frontend**: Static HTML page displaying menu items ([frontend/index.html](frontend/index.html))
- **Database**: MongoDB for storing menu items
- **Kubernetes**: Deployments, Services, and Ingress for all components

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- A running Kubernetes cluster (e.g., [Minikube](https://minikube.sigs.k8s.io/))

### Build and Push Docker Images

Build and push the backend and frontend images to your container registry:

```sh
# Backend
cd backend
docker build -t <your-dockerhub-username>/kubecafe-backend:latest .
docker push <your-dockerhub-username>/kubecafe-backend:latest

# Frontend
cd ../frontend
docker build -t <your-dockerhub-username>/kubecafe-frontend:latest .
docker push <your-dockerhub-username>/kubecafe-frontend:latest
```

Update the image names in the Kubernetes manifests if needed.

### Deploy to Kubernetes

Apply all manifests in the `k8s/` directory:

```sh
kubectl apply -f k8s/
```

### Access the Application

- The frontend is exposed via the Ingress at `/`
- The backend API is available at `/api/menu`

If using Minikube, enable the ingress addon and get the Minikube IP:

```sh
minikube addons enable ingress
minikube ip
```

Then access `http://<minikube-ip>/` in your browser.

## API Endpoints

- `GET /api/menu` — List all menu items
- `POST /api/menu` — Add a new menu item
