# @naveen-g09/zod-medium-types

## Overview

`@naveen-g09/zod-medium-types` is an NPM module designed to facilitate the use of Zod types for authentication in both frontend and backend applications. By using this package, you can ensure consistent type validation across your entire application, reducing the risk of mismatched expectations between client and server.

## Features

- Provides Zod types for common authentication scenarios.
- Ensures consistent type validation on both frontend and backend.
- Simplifies the process of maintaining validation logic across your application.

## Installation

To get started with `@naveen-g09/zod-medium-types`, you need to install the package via npm:

```sh
npm install @naveen-g09/zod-medium-types
```

## Usage

### Frontend

Import the inferred types for signing in and signing up:

```javascript
import { SignupInput, signupInput } from "@naveen-g09/zod-medium-types";
```

### Backend

Import the types for signing in and signing up, and use them for validation:

```javascript
import { signInInput, signupInput } from "@naveen-g09/zod-medium-types";

userRouter.post('/signup', async (c) => {
    const body = await c.req.json();
    const { success } = signInInput.safeParse(body);
    if (!success) {
        // Handle validation error
    }
    // Proceed with your signup logic
});
```

## Examples

### Frontend

Here's an example of how you might use the types in a frontend application:

```javascript
import { SignupInput, signupInput } from "@naveen-g09/zod-medium-types";

// Example signup function
const handleSignup = async (data) => {
    const validationResult = signupInput.safeParse(data);
    if (!validationResult.success) {
        // Handle validation error
    } else {
        // Proceed with sending data to backend
    }
};
```

### Backend

An example of using the types in a backend route:

```javascript
import { signInInput, signupInput } from "@naveen-g09/zod-medium-types";

userRouter.post('/signup', async (c) => {
    const body = await c.req.json();
    const { success, error } = signupInput.safeParse(body);
    if (!success) {
        // Handle validation error
        return c.res.status(400).send(error.errors);
    }
    // Proceed with your signup logic
});
```

## Conclusion

`@naveen-g09/zod-medium-types` provides a simple yet powerful way to ensure type-safe authentication across both frontend and backend applications. By using this package, you can reduce the risk of inconsistencies and streamline your validation logic.

For more information and detailed documentation, visit the [NPM page](https://www.npmjs.com/package/@naveen-g09/zod-medium-types).