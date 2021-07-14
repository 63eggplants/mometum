# Momentum
Momentum is a web application with a personal dashboard featuring to-do, weather, watch and quotes.
</br>

## Technology Stack
* HTML
* CSS
* VanilaJS

## Key Features
* Enter username and track your username 
* Enter to-do and track your to-dos
* See the weather and forecast by your location 
* See the present time
* Give random background image and quote

## Problem Solving 
* Want to track a username and to-do list
  * Using local storage, keep track the username and to-do list, even a page is refreshed
  * Using JSON object, save a stringfied array data and get that data after parsing

* Give weather information by user's location information,
  * Using navigator.geolocaiton.getCurrentPosition method, get user's location
  * And using fetch API, get weather information (https://openweathermap.org/)
  
* Update present time every second
  * Using setInterval API, call new Date() every second 

## What I learned from this project
* Using classList property, remove and toggle CSS classes on an element. Classname like 'invisible', this name's display is none. So if 'invisible' is added on the element, that element is not shown
```css
.invisible { 
  display: none;
 }
```
* Using localStorage.setItem, getItem, removeItem method CRUD localStorage
* Using Math.random method, randomly load array's element
```javascript
const img = document.getElementById('bgImg');
const images = ['0.jpg', '1.jpg', '2.jpg'];
const choosenImg = images[Math.floor(Math.random() * images.length)];
``` 
* Using Date.now() method, create an unique id
```javascript
const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
```
* Using navigator.geolocation.geolocation.getCurrentPosition method, get user's location information 
```javascript
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
```
## Screenshot / GIF of the application 
<img src="https://user-images.githubusercontent.com/78864112/124853286-93c8a280-dfe0-11eb-8772-2664df9fa725.png" width="" height="" title="Main Page" alt="Main Page"></img><br/>
![2](https://user-images.githubusercontent.com/78864112/124853560-06398280-dfe1-11eb-84a8-010791b7e61e.png)
![3](https://user-images.githubusercontent.com/78864112/124853572-0df92700-dfe1-11eb-81a4-eeb14d7c82ab.png)
