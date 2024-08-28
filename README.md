# CareerLink - Job Listing Portal

CareerLink is a comprehensive job listing portal built with the MERN stack (MongoDB, Express.js, React.js, and Node.js). This platform allows users to post job openings, apply for jobs, and manage their profiles. It also features a user-friendly interface with responsive design and interactive elements.

## Features

- **User Authentication:** Secure login and registration for users.
- **Job Posting:** Employers can post new job openings with detailed descriptions.
- **Job Applications:** Users can apply for jobs and track their applications.
- **Profile Management:** Users can manage their profiles and view their application history.
- **Responsive Design:** Accessible on various devices with a modern, interactive UI.

### Key Sections:

1. **Project Description:** Brief overview of what the project does.
2. **Features:** List of key functionalities.
3. **Technology Stack:** Technologies used in the project.
4. **Installation:** Steps to set up the project locally.
5. **Usage:** Basic instructions on how to use the application.
6. **Contributing:** Guidelines for contributing to the project.
7. **License:** Information about the project's licensing.
8. **Contact:** Your contact details for queries or feedback.

## Technology Stack

- **Frontend:** React.js, Ant Design
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Version Control:** Git

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher)
- npm (v6 or higher) or Yarn

### Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/gracygulati7/Job-listing-portal.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd Job-listing-portal
   ```

3. **Install Dependencies:**

   For the server:

   ```bash
   cd server
   npm install
   ```

   For the client:

   ```bash
   cd ../client
   npm install
   ```

4. **Set Up Environment Variables:**

   Create a `.env` file in the `server` directory and add your environment variables. Example:

   ```env
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

5. **Run the Project:**

   Start the backend server:

   ```bash
   cd server
   npm start
   ```

   Start the frontend client:

   ```bash
   cd ../client
   npm start
   ```

   The application should now be running on `http://localhost:3000` (client) and `http://localhost:5000` (server).

## Usage

1. **User Registration and Login:**
   - Navigate to `/register` to create a new account.
   - Navigate to `/login` to log in.

2. **Posting a Job:**
   - After logging in, navigate to `/postjob` to submit a new job listing.

3. **Applying for Jobs:**
   - Browse job listings and apply for positions that interest you.

4. **Managing Your Profile:**
   - Access your profile at `/profile` to update personal information and view your application history.

## Contributing

1. **Fork the Repository:**
   - Click the "Fork" button at the top-right corner of this page.

2. **Create a Branch:**
   - Create a new branch for your feature or bug fix:

     ```bash
     git checkout -b feature/your-feature
     ```

3. **Commit Your Changes:**
   - Add and commit your changes:

     ```bash
     git add .
     git commit -m "Add feature/bug fix"
     ```

4. **Push to Your Fork:**
   - Push your changes:

     ```bash
     git push origin feature/your-feature
     ```

5. **Create a Pull Request:**
   - Open a pull request from your forked repository to the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact the team members:

- **Gunn Arora**
  - **Email:** gunn333.be22@chitkara.edu.in
  - **GitHub:** [gunn333](https://github.com/gunn333)

- **Gracy Gulati**
  - **Email:** gracy331.be22@chitkara.edu.in
  - **GitHub:** [gracygulati7](https://github.com/gracygulati7)

---

Thank you for checking out CareerLink! We hope you find this job listing portal useful and intuitive. We welcome any suggestions or contributions!
```
