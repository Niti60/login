# Login Page

A simple login and registration page built using HTML, CSS, and JavaScript. This project demonstrates client-side form validation, usage of localStorage for saving user credentials, and dynamic content switching between registration, login, and welcome views.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project provides two main interfaces:
1. **Login Page:** Allows users to log in by entering a username and password. It validates input fields and checks for user existence via localStorage.
2. **Registration Page:** Enables new users to register by providing a username, email, phone number, password, and confirm password. Basic validation is performed for empty fields, password matching, and email format (checks if the "@" symbol is included).

After successful registration, the user is redirected to the login page, and upon login, a welcome screen is shown.

## Features

- **Client-Side Validation:**  
  Validates input fields to ensure that they are not empty, that the email contains an "@", and that the password and confirm password match.

- **Dynamic View Switching:**  
  Uses simple DOM manipulation (via JavaScript) to switch between the registration form, login form, and welcome screen.

- **Local Storage:**  
  Stores user credentials in the browser’s localStorage to simulate user registration and persistence.
