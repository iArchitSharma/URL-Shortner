# URL Shortener

URL Shortener is a simple web application that allows users to create shortened URLs for long links, making them more manageable and easier to share. This project is built using Express.js, a fast and minimalist web framework for Node.js, and utilizes MongoDB with Mongoose to store and manage URL data efficiently. The front-end of the application is developed with EJS (Embedded JavaScript) for dynamic HTML rendering.

## Installation

1. Clone the repository:
``` git clone https://github.com/your-username/url-shortener.git ```
``` cd url-shortener ```

2. Install the dependencies:
``` npm install ```

3. Start the server:
``` npm run devStart ```

## Usage

1. Open your web browser and go to `http://localhost:5000`.
2. Paste the long URL you want to shorten into the input field.
3. Click the "Shorten URL" button to generate the shortened link.
4. The shortened URL will be displayed on the page and can be copied and shared.

## Dependencies

- Express: Version 4.18.2
- EJS: Version 3.1.9
- Mongoose: Version 7.4.0
- Shortid: Version 2.2.16

## Acknowledgements

- [Express.js](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [Mongoose](https://mongoosejs.com/)
- [Shortid](https://www.npmjs.com/package/shortid)

## Overview

URL Shortener is a convenient and efficient tool to create short links that redirect to longer URLs. Users can paste their long URLs into the input field, and the application will generate a shortened version that can be easily shared on social media, emails, or any other platform. The backend of the application is powered by Express.js, which handles the routing and logic, while Mongoose manages the interaction with the MongoDB database for seamless data storage. The use of Shortid ensures unique and compact identifiers for each shortened URL, making it reliable and user-friendly. The application's user interface is designed using EJS, providing dynamic content rendering for a smooth user experience.

Whether you want to share a lengthy article link, a blog post, or any web content, URL Shortener simplifies the process, making it more accessible and visually appealing for recipients. The simplicity and effectiveness of this project make it an excellent addition to any web developer's toolkit, providing a valuable service to users seeking to optimize their URL sharing experience.
