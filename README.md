# faceRecognition
Final project of ZTM course called Face Recognition with React and Node js. This web application will detect the face form the picture which user upload by using face detection model form the clarifai api. 

## Feature

- Member sign in. sign up
- Face detection
- Activity count

## How to run
- Note: you need to install NodeJS and PostgreSQL before run the commands.
 
    https://nodejs.org/en/download/
    
    https://www.postgresql.org/download/

- From the location of face_recognition file that has the package.json inside.
- From the location of smart_brain_api file that has the package.json file inside.
    
    both files, run:
                                                        
        npm install
        npm start
    for the out date problem run:
        
        npm update
 
 ## Demo
 
<div align="center">


![ezgif com-resize (5)](https://user-images.githubusercontent.com/80881226/224990595-0ff2c4f7-7ea1-4197-be8d-b176c1c534f5.gif)
</div>

## Deployment
  
- Backend Deployment (https://pcn-smart-brain-backend.onrender.com)
    
    Smart brain backend use Render platform to deploy NodeJS files and use PostgresSQL of  Render to be the database of the web application. For create the schema inside the database (https://medium.com/geekculture/how-to-create-and-connect-to-a-postgresql-database-with-render-and-pgadmin-577b326fd19d).
    
    ![image](https://user-images.githubusercontent.com/80881226/225684497-a90376e0-b339-4f1a-a111-ba031314465c.png)
    
    ![image](https://user-images.githubusercontent.com/80881226/225684626-26a8225d-8083-4c1a-bc8c-85e29e23f55c.png)



- Frontend Deployment (https://pcn-smartbrain.netlify.app)
    
    Smart brain frontend use Netlify platform to deploy ReactJS files. In the React JS file will fetch directly to the backend web application to send request and get the response with the server. In this React web application is stateful conponent but I didn't use React Hooks, it just normal class component and using face detection model from the Clarifai API to make a plot of the box and send in the json form.
    
    ![image](https://user-images.githubusercontent.com/80881226/225685207-8bee857a-74e5-4b9a-8c55-b2b16d3a7b16.png)
    
    - Clarifai API
    
    I use this for make the detection on the face and send the response in json data then this React web application will use this json to make the plot around the corner of the box and draw the box later. Because this program defind the number of array form json data, this program can detect only one face per one picture. The API that used is 'face-detection-0200' on Clarifai community.
![image](https://user-images.githubusercontent.com/80881226/225722930-d5eca27f-9067-45e4-83f3-d5596e5a3842.png)


