# API Reference

### Generiert von ChatGPT

### Login

```
  POST /login
```

| Parameter | Type | Description | Validation |
| --- | --- | --- | --- |
| email | string | Required. User email | Must be a valid email format |
| password | string | Required. User password | - |

Rückgabewert:

- HTTP Status 200: Success message with user email
- HTTP Status 400: Error message for missing or invalid email/password
- HTTP Status 401: Error message for invalid credentials

### Verify login status

```
  GET /verify
```

No parameters required.

Rückgabewert:

- HTTP Status 200: Success message with user email
- HTTP Status 401: Error message for not being logged in

### Logout

```
  DELETE /logout
```

No parameters required.

Rückgabewert:

- HTTP Status 204: No content, successful logout
- HTTP Status 401: Error message for not being logged in

### Get all tasks

```
  GET /tasks
```

No parameters required.

Rückgabewert:

- HTTP Status 200: Array of tasks

### Create a new task

```
  POST /tasks
```

| Parameter | Type | Description | Validation |
| --- | --- | --- | --- |
| title | string | Required. Title of task | Must not be empty |

Rückgabewert:

- HTTP Status 201: Created task object
- HTTP Status 406: Error message for empty title

### Get a task by ID

```
  GET /tasks/${id}
```

| Parameter | Type | Description | Validation |
| --- | --- | --- | --- |
| id | number | Required. Id of task to fetch | - |

Rückgabewert:

- HTTP Status 200: Task object
- HTTP Status 404: Error message for task not found

### Update a task by ID

```
  PUT /tasks/${id}
```

| Parameter | Type | Description | Validation |
| --- | --- | --- | --- |
| id | number | Required. Id of task to update | - |
| title | string | Required. New title of task | Must not be empty |
| finishedDate | string | Optional. Finished date of task (YYYY-MM-DD format) | - |

Rückgabewert:

- HTTP Status 200: Updated task object
- HTTP Status 404: Error message for task not found
- HTTP Status 406: Error message for empty title

### Delete a task by ID

```
  DELETE /tasks/${id}
```

| Parameter | Type | Description | Validation |
| --- | --- | --- | --- |
| id | number | Required. Id of task to delete | - |

Rückgabewert:

- HTTP Status 204: No content, successful task deletion
- HTTP Status 404: Error message for task not found