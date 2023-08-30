# Raspberry Pi Relay Control API

![Raspberry Pi](https://www.crowdsupply.com/img/59f5/powered-by-raspberry-pi-logo-outline-colour-screen_png_md-xl.jpg)

The Raspberry Pi Relay Control API is a simple project that allows you to control relays connected to a Raspberry Pi using a web API. This can be useful for home automation, remote control of devices, and various other applications where you need to toggle relays programmatically.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Starting the API Server](#starting-the-api-server)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project provides a RESTful API that allows you to control relays connected to your Raspberry Pi. It uses the [RPi.GPIO](https://pypi.org/project/RPi.GPIO/) Python library to interface with the GPIO pins on the Raspberry Pi.

## Getting Started

### Prerequisites

Before you begin, make sure you have the following:

- A Raspberry Pi with Raspbian OS installed
- Python 3.x installed on the Raspberry Pi
- Basic knowledge of working with GPIO pins on Raspberry Pi
- Relays connected to the GPIO pins (make sure to connect them properly)

### Installation

1. Clone this repository to your Raspberry Pi:

   ```bash
   git clone https://github.com/faisalbhatti10/raspberry-pi-relay-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd raspberry-pi-relay-api
   ```

## Usage

### Starting the API Server

1. In the project directory, start the API server:

   ```bash
   node server.js
   ```

2. The API server will start running, and you'll see output indicating the server is up and listening. And in the browser open following URL

    ```bash
     http://localhost:8080/
     ```

## Contributing

Contributions are welcome! If you have any ideas, enhancements, or bug fixes, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to customize this README according to your project's specifics. Make sure to update the URLs, project description, and instructions to accurately represent your project. Good luck and happy coding!
