# Newsletter Signup

Project from Udemy's The Compete 2020 Web Development Bootcamp

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

```
npm install body-parser
npm install dotenv
npm install express
npm install request
```

### Installing

A step by step series of examples that tell you how to get a development env running

## Clone

Clone this repo to your local machine using * (https://github.com/jsmit032/Newsletter-Signup.git)

> update and install this package first
```
brew update
```

> now install npm
```
npm install
```

> now install npm packages
```
npm install body-parser
npm install dotenv
npm install express
npm install request
```

## Create a Mail Chimp Account & copy your API Key & your list ID

For API key, from Account Dashboard:
Account >> Extras >> API keys
Scroll to your API Keys
Copy Key or click 'Create A Key' and copy once created

For list ID, from Account Dashboard:
Account >> View Audiences >> Click dropdown, select 'Settings'
Scroll to bottom of page
Copy unique id for 'Audience's Name'

## Create .env file in root folder of Project

In the root folder of the project, create an .env file

Within the .env file paste the values of your API key & list ID, like so:

```
MYAPIKEY=xxx
MYLISTID=xxx
```

## Make sure .env is listed in your .gitignore file before pushing to github

```
// .gitignore

#secrets
.env
```

## Built With

* [Mail Chimp](https://mailchimp.com/developer/) - The e-mail list builder
* [Heroku](https://www.heroku.com/) - Server Hosting site
* [NPM](https://www.npmjs.com/) - Use to install packages
* [NodeJS](https://nodejs.org/api/) - App server


## Authors

* **Jennifer McGoldrick** - *Initial work* - [jsmit032](https://github.com/jsmit032)
