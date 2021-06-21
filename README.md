# string-cut

## Introduction

String cut is a web application with a frontend that accepts a user input or POST request to the route "/test" with a "string_to_cut" argument. The application returns a response with a JSON object containing a key "return_string" and a string containing every third letter from the original string.

## Instructions

Step by step guide to download repo and start the app.

1. Clone the project to your selected directory:

> git clone https://github.com/martin-ng/string-cut.git

2. Install the NPM modules

> yarn or npm install

3. Bundle the files using Webpack into the dist directory

> yarn build or npm run build

4. Start up the server.

> yarn start

5. Input a string and hit the cut button!

6. Alternatively, create a POST request with the following object to the API http://localhost:1337/test

> {
    "string_to_cut": "enter your string here"
}

## cutString Function

The main objective of this application is to create a server and frontend UI that returns a string containing every third letter from the original string. Several assumptions were made to create this 'cutString' function, including:

1. The function's input string must have a length greater than 3 or it will return a message.

2. An empty string is a valid case, hence the resulting string could have white space. I.e. 'this app rocks' will return 'ia c'.

3. The function will always return a string type.

Unit test cases were also created. To run the jest test cases:

> yarn test

## Extras

cutString was created with extensibility in mind. A parameter, 'nthChar' has a default value of 3 for the purpose of this exercise. This parameter allows for flexibility if the developer chooses to give the user the option to get a string containing every 'nth' character.