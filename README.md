
# API-rate-limiter

API rate limiter that tracks and enforces limits on requests made by individual clients within specific time windows and on a monthly basis. Additionally, you need to enforce system-wide limits to prevent excessive requests across the entire system.


## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)
[![Build](https://github.com/Nkbtemmy/-API-rate-limiter-/actions/workflows/build.ci.yaml/badge.svg)](https://github.com/Nkbtemmy/-API-rate-limiter-/actions/workflows/build.ci.yaml)


## Tech Stack

**Server:** Node, Express

**Deployment:** Docker, Docker-compose

**Dependencies:** Nodemailer, Telesignal, Vonage, express-rate-limit, apicache, morgan 


## Run Locally
make project directory

```bash
  mkdir API-rate-limit
```
Go to the project directory

```bash
  cd API-rate-limit
```

Clone the project

```bash
  git clone https://github.com/Nkbtemmy/-API-rate-limiter-.git .
```



Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`HOST`

`TELESIGNAL_CUSTOMER_ID`

`TELESIGNAL_API_KEY`

`TELESIGNAL_END_POINT`

`VONAGE_API_KEY`

`VONAGE_API_SECRET`

`VONAGE_BRAND_NAME`


## Deployment

To deploy this project run

```bash
  docker-compose up --build
```


## Documentation

[Documentation](https://api-rate-limiter-0pqt.onrender.com/api-docs)


## Features

- Send SMS Notification
- Send Email Notification



## 🚀 About Me
I'm a full stack developer who is currently working in the software engineering industry, where my daily responsibilities include collaborating with a team of engineers to design, build, and implement high-quality software products.


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://imanzi.netlify.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/emmanuel-nkubito-36b242155/)


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

