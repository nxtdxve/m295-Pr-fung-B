# TESTING

## Test Cases

### All of them passed!

1. **Test Case**: Test the login endpoint with valid email and password
    
    **Request**: `POST /login`
    
    **Request Body**: `{"email": "test@example.com", "password": "m295"}`
    
    **Expected Result**: Response status 200
    
2. **Test Case**: Test the login endpoint with an invalid email
    
    **Request**: `POST /login`
    
    **Request Body**: `{"email": "testexample.com", "password": "m295"}`
    
    **Expected Result**: Response status 400
    
3. **Test Case**: Test the login endpoint with an empty email
    
    **Request**: `POST /login`
    
    **Request Body**: `{"email": "", "password": "m295"}`
    
    **Expected Result**: Response status 400
    
4. **Test Case**: Test the login endpoint with an empty password
    
    **Request**: `POST /login`
    
    **Request Body**: `{"email": "test@example.com", "password": ""}`
    
    **Expected Result**: Response status 400
    
5. **Test Case**: Test the login endpoint with an incorrect password
    
    **Request**: `POST /login`
    
    **Request Body**: `{"email": "test@example.com", "password": "wrongpassword"}`
    
    **Expected Result**: Response status 401

6. **Test Case**: Test the verify endpoint while not logged in
    
    **Request**: `GET /verify`
    
    **Expected Result**: Response status 401

7. **Test Case**: Test the verify endpoint while logged in
        
    **Request**: `GET /verify`
        
    **Expected Result**: Response status 200

8. **Test Case**: Test the logout endpoint while not logged in
            
    **Request**: `GET /logout`
            
    **Expected Result**: Response status 401

9. **Test Case**: Test the logout endpoint while logged in
                    
    **Request**: `GET /logout`
                    
    **Expected Result**: Response status 200

10. **Test Case**: Test the tasks endpoint while not logged in
                        
    **Request**: `GET /tasks`
                        
    **Expected Result**: Response status 401

11. **Test Case**: Test the tasks endpoint while logged in

    **Request**: `GET /tasks`
    
    **Expected Result**: Response status 200

12. **Test Case**: Test the tasks endpoint with a valid task id while logged in

    **Request**: `GET /tasks/1`
    
    **Expected Result**: Response status 200

13. **Test Case**: Test the tasks endpoint with an invalid task id while logged in
    
    **Request**: `GET /tasks/100`
        
    **Expected Result**: Response status 404    

14. **Test Case**: Test the tasks endpoint with a a valid body
    
    **Request**: `POST /tasks`
            
    **Request Body**: `{"title": "Test Task}`
            
    **Expected Result**: Response status 201

15. **Test Case**: Test the tasks endpoint with an invalid body
        
    **Request**: `POST /tasks`
                
    **Request Body**: `{"title": ""}`
                
    **Expected Result**: Response status 400

16. **Test Case**: Test the tasks endpoint with a valid task id and body

    **Request**: `PUT /tasks/1`
                    
    **Request Body**: `{"title": "Test Task Updated", "finishedDate": "2023-05-05"}`
                    
    **Expected Result**: Response status 200

17. **Test Case**: Test the tasks endpoint with an invalid task id and valid body

    **Request**: `PUT /tasks/100`
                        
    **Request Body**: `{"title": "Test Task Updated", "finishedDate": "2023-05-05"}`
                        
    **Expected Result**: Response status 404

18. **Test Case**: Test the tasks endpoint with a valid task id and invalid body

    **Request**: `PUT /tasks/1`
                            
    **Request Body**: `{"title": "", "finishedDate": "2023-05-05"}`
                            
    **Expected Result**: Response status 400

19. **Test Case**: Test the tasks endpoint with a valid task id
    
    **Request**: `DELETE /tasks/1`
                                
    **Expected Result**: Response status 200

20. **Test Case**: Test the tasks endpoint with an invalid task id
    
    **Request**: `DELETE /tasks/100`
                                        
    **Expected Result**: Response status 404

