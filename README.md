### API-URI: http://84.201.151.75:5000

## users

#### `GET` /api/users 
Get all users

#### `GET` /api/users/:user_id  
Get the user by id

#### `POST` /api/users 
Create a New User

#### `PUT` /api/users/:user_id 
Update the User

#### `DELETE` /api/users/:user_id  
Delete the User

---

## tracks

#### `GET` api/users/:user_id/tracks  
Get all tracks by user id

#### `GET` api/users/:user_id/tracks/:track_id 
Get the track by track id

#### `POST` /api/users/:user_id/tracks  
Add a new track by user id

#### `PUT` /api/users/:user_id/tracks/:track_id  
Update the track by track id

#### `DELETE` /api/users/:user_id/tracks/:track_id  
Delete the track by id

---

## days

#### `GET` api/users/:user_id/tracks/:track_id/days
Get all days by track id

#### `GET` api/users/:user_id/tracks/:track_id/days/:day_id
Get the day by day id

#### `POST` /api/users/:user_id/tracks/:track_id/days
Add a new day by track id

#### `DELETE` /api/users/:user_id/tracks/:track_id/days/day_id
Delete the day by day id
