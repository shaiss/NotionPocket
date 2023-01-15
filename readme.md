# Notion Pocket

A web app that queries the Pocket APIs, pulls the latest saves, and then adds them to a Notion database item using the Notion.so APIs.

## Table of Contents

- **[Getting Started](https://chat.openai.com/chat/57237850-906d-40e5-aacf-670d26655837#getting-started)**
    - **[Prerequisites](https://chat.openai.com/chat/57237850-906d-40e5-aacf-670d26655837#prerequisites)**
    - **[Installation](https://chat.openai.com/chat/57237850-906d-40e5-aacf-670d26655837#installation)**
- **[Usage](https://chat.openai.com/chat/57237850-906d-40e5-aacf-670d26655837#usage)**
- **[Architecture](https://chat.openai.com/chat/57237850-906d-40e5-aacf-670d26655837#architecture)**
- **[Testing](https://chat.openai.com/chat/57237850-906d-40e5-aacf-670d26655837#testing)**
- **[Attributions](https://chat.openai.com/chat/57237850-906d-40e5-aacf-670d26655837#attributions)**
- **[To Do](https://chat.openai.com/chat/57237850-906d-40e5-aacf-670d26655837#to-do)**

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js v18.12.1 or later
- npm
- A Pocket account and API key
- A Notion account and API key

### Installation

1. Clone the repository

```
Copy code
git clone https://github.com/shaiperednik/NotionPocket.git
```

1. Install dependencies

```
Copy code
npm install
```

1. Create a **`.env`** file in the root directory and add the following variables:

```
Copy code
POCKET_CONSUMER_KEY=your_pocket_consumer_key
NOTION_API_KEY=your_notion_api_key
```

1. Start the server

```
Copy code
npm start
```

## Usage

The app has two routes:

- **`/pocket`**: GET request that queries the Pocket API for the latest saves and returns them in a JSON format.
- **`/notion`**: POST request that takes a JSON object containing a title and a url and adds it to a Notion database.

## Architecture

The app is built with Node.js and uses the Express framework for routing. The Pocket and Notion APIs are accessed using the **`request`** package. Data validation is done using express-validator.

## Testing

Tests are written using Jest and Supertest. To run the tests, use the command:

```
Copy code
npm test
```

## Attributions

This project would not have been possible without the help and guidance of the OpenAI's GPT-3 powered language model, ChatGPT. ChatGPT assisted me with understanding the requirements and architecture of the application, as well as providing suggestions for implementing the necessary functionality.

Throughout the development process, I would provide ChatGPT with specific information about the requirements of the application and it would assist me in coming up with an architecture and code for developing a secure web app with Node.js and React. ChatGPT also helped me troubleshoot and fix errors that arose during the testing phase of the project.

I am incredibly grateful for ChatGPT's assistance and would like to give it credit for its invaluable contributions to this project.

Please note that there are still some errors present in the current version of the project, which are currently being worked on by the development team. If you would like to contribute to the project or have any suggestions for fixing the remaining errors, please feel free to open an issue on the GitHub repository or reach out to me directly.

Thank you for your interest in this project and we hope you find it useful!

## Contributing

If you're interested in contributing to this project, we'd love to have your help! Here are a few ways you can contribute:

- **Report bugs:** If you find any bugs or issues while using the app, please open an issue on the GitHub repository and provide as much detail as possible about the problem and how to reproduce it.
- **Fix bugs:** If you're comfortable with the codebase and would like to help fix bugs, you can take a look at the open issues and submit a pull request with your proposed changes.
- **Add new features:** If you have an idea for a new feature that would be beneficial to the app, you can submit a feature request issue on the GitHub repository. If you're comfortable with the codebase and would like to work on implementing the feature yourself, you can submit a pull request with your proposed changes.
- **Improve documentation:** If you find any areas of the documentation that could be improved, you can submit a pull request with your suggested changes.

All contributions are welcome and appreciated!

# Pocket to Notion Sync node.js Project

Category: Shai - Skunkworks
Created time: January 15, 2023 4:12 AM
Last edited time: January 15, 2023 4:25 AM
Status: Inbound