# ListAll

> This Application lists all the GitHub Repositories to which a user has contributed using GitHub API.

> Demo video: [Link](https://drive.google.com/file/d/1HN1uq6SSNDM9tOK9kH2a6cM2kQ_iFtP1/view?usp=sharing)

## Table of Contents
* [Objective](#objective)
* [General Information about the Project](#general-information-about-the-project)
* [How to start the project locally?](#how-to-start-the-project-locally)
* [Technologies Used](#technologies-used)
* [ScreenShots](#screenshots)


## Objective
- The goal of this project is to get the list of all the repositories to which a user has contributed.

## General Information about the Project?
- This project has been built using [GitHub REST APIs](https://docs.github.com/en/rest/repos?apiVersion=2022-11-28)
- Once the user enters a username, the backend retrieves the username.
- Using the ```fetch()``` method the list of all the public repositories of the user is obtained and stored in an array.
- After that, we filter the repositories of the array to get only those repositories in which the given ```username``` is present in the contributor's list.
- The resultant array containing only the repositories in which the user has contributed, is then used to display the details in the front.

## How to start the project locally?

> Pre-requisite: Make sure you have nodeJs installed in your system.

### Step 1: Clone the repository
Use the below command for the same:- 

```
git clone https://github.com/Shweta2024/ListAll.git

```

### Step 2: Install all the dependencies
Use the below command for the same:-

```
npm i

```

### Step 3: Create a ```.env``` file and add PAT(Personal Access Token) to it.
- You can generate the PAT from GitHub by following this doc : [Managing PAT](https://docs.github.com/en/enterprise-server@3.6/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

### Step 4: Start the Server 

```

node app.js

```


## Technologies Used

- JavaScript
- NodeJs
- ExpressJs
- EJS
- HTML
- CSS

## ScreenShots
![image](https://github.com/Shweta2024/ListAll/assets/75883328/6ca23ad9-5680-4483-a7ac-1192961ef2ac)

![image](https://github.com/Shweta2024/ListAll/assets/75883328/64d92744-d3a3-4226-84fd-e56f880a1a4a)

