# Contacts UI Frontend

Simple static web interface for managing contacts (name/email).

## Docker Build
docker build -t frontend-app:v001 .
docker run -d --name frontend -p 80:80 frontend-app:v001
