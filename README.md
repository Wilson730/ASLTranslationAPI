ASl Translation API

In Progress:
OpenCV: For image and video processing.
MediaPipe: For hand tracking and gesture recognition.
TensorFlow/Keras: For ML model.
Backend: For creating API and HTTP requests.

Description:
API Endpoint that receives text input in english and returns a simple JSON response indicating successful translation or not. 

JSON Responses

Successful Response:
{"input": "true", "translation": (Text user entered)}

Error Response for missing text:
{"input": "false", "message": "No text given"}

Error Response for non-english text:
{"input": "false", "message" "Text is not in english"}

Notes:
Server run on Port 3000
Successful input consists of english characters only


