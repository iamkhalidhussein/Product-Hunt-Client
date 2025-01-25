# Resource FYI

Welcome to Resource FYI! 🎉

## Overview

Resource FYI is a dynamic platform inspired by Product Hunt, designed to help users discover and share valuable resources. Whether you're looking for the latest tools, apps, or innovative ideas, Resource FYI connects you with the most exciting resources available.

## Features

- **Discover Resources**: Browse and explore a wide range of resources curated by the community.
- **Submit New Resources**: Share your favorite tools and apps with others.
- **User Ratings and Reviews**: Rate and review resources to help others make informed decisions.
- **Search and Filter**: Easily find resources by category or keyword.

## Tech Stack

- **Frontend**: Built with React for a seamless and interactive user experience.
- **Backend**: Powered by Node.js and Express for robust server-side operations.
- **Database**: MongoDB for efficient data storage and retrieval.
- **Deployment**: Hosted on [Vercel](https://vercel.com) for reliable and scalable performance.

## Installation

To run Resource FYI locally, follow these steps:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/resource-fyi.git
    ```

2. **Navigate to the Project Directory**:
    ```bash
    cd resource-fyi
    ```

3. **Install Dependencies**:
    ```bash
    pnpm install
    ```

4. **Start the Development Server**:
    ```bash
    pnpm run dev
    ```

5. **Open your browser** and go to `http://localhost:5173` to view the application.

## Usage

- **Browse**: Navigate through the main page to discover the latest resources.
- **Submit**: Click on the 'Submit' button to add a new resource to the platform.
- **Rate & Review**: Provide feedback on resources you've tried to help others.

## User Roles and Access

This application supports three types of user roles:

### 1. **User**
- **Access**: 
  - Can view public content.
  - Can interact with basic features (e.g., create products post, comment, like).
  - Cannot access administrative or moderation tools.

### 2. **Moderator**
- **Access**:
  - Has all the permissions of a **User**.
  - Can moderate content (e.g., delete inappropriate posts, ban users).
  - Cannot access sensitive admin settings (e.g., delete the entire database, manage other admins).

### 3. **Admin**
- **Access**:
  - Has all the permissions of a **Moderator**.
  - Can manage application settings (e.g., add/remove moderators, update system configurations).
  - Can access and modify all data in the system.

---

## How to Assign Roles

### For Local Development
1. **Admin**:
   - Use the following credentials to log in as an admin:
     - Email: `admindev@gmail.com`
     - Password: `Dev123@@`

2. **Moderator**:
   - Use the following credentials to log in as a moderator:
     - Email: `moderatordev@gmail.com`
     - Password: `Dev123@@`

3. **User**:
   - Register a new account or use the following credentials:
     - Email: `developer@gmail.com`
     - Password: `Dev123@@`

### For Production
- Admins can assign roles to users via the admin dashboard.
- Moderators are assigned by admins.

---

## Role-Based Routing
- **Users** are redirected to `/dashboard` after login.
- **Moderators** are redirected to `/moderator-dashboard`.
- **Admins** are redirected to `/admin-dashboard`.

---

## Permissions Table
| **Feature**            | **User** | **Moderator** | **Admin** |
|-------------------------|----------|---------------|-----------|
| View Public Content     | ✅       | ✅            | ✅        |
| Create Posts            | ✅       | ✅            | ✅        |
| Delete Posts            | ✅       | ✅            | ✅        |
| Ban Users               | ❌       | ✅            | ✅        |
| Manage System Settings  | ❌       | ❌            | ✅        |
| Assign Roles            | ❌       | ❌            | ✅        |

## Backend Repo - https://github.com/iamkhalidhussein/Product-Hunt-Server


## Contributing

We welcome contributions to enhance Resource FYI! If you'd like to contribute, please follow these guidelines:

1. **Fork the Repository**
2. **Create a New Branch**: `git checkout -b feature/your-feature`
3. **Commit Your Changes**: `git commit -am 'Add new feature'`
4. **Push to the Branch**: `git push origin feature/your-feature`
5. **Create a New Pull Request**

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions or feedback, please reach out to us at [mdkhalidhossen10@gmail.com]

Enjoy exploring and sharing valuable resources with Resource FYI!