
# Tasks List: m295-Prüfung-B

Dieses Projekt stellt eine REST-API für eine einfache Verwaltung von Tasks mit Authentifizierung zur verfügung.


## Installation

Node.js is required to run this project.

```bash
  git clone https://github.com/nxtdxve/m295-Pr-fung-B
  npm install
  npm run start
```
## API Reference

#### **Authentifizierung**

- **`POST /login`**: Loggt dich ein mit parameter: **`email`**, **`password`**.
- **`GET /verify`**: Überprüft ob man angemeldet ist
- **`DELETE /logout`**: Loggt dich aus der session aus.

#### **Aufgaben**

- **`GET /tasks`**: Abrufen einer Liste aller Tasks.
- **`POST /tasks`**: Erstellen einer neuen Aufgabe. Erforderliches Feld: **`title`**.
- **`GET /tasks/:id`**: Abrufen einer Aufgabe anhand ihrer ID.
- **`PUT /tasks/:id`**: Aktualisieren einer Aufgabe anhand ihrer ID. Erforderliches Feld: **`title`**.
- **`DELETE /tasks/:id`**: Löschen einer Aufgabe anhand ihrer ID.

## Authors

- [@David Zettler](https://www.github.com/nxtdxve)

