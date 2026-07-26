# CodeAlpha Task 3 - Secure Coding Review

## Project Overview

This project is developed as part of the CodeAlpha Cyber Security Internship.

The purpose of this task is to perform a secure coding review of a simple User Management Application. The project identifies common security vulnerabilities in code and provides a secure implementation with recommended security practices.

The review focuses on improving application security by finding coding mistakes and applying secure coding techniques.

## Objectives

- Perform manual code review to identify security vulnerabilities.
- Analyze insecure coding practices.
- Implement security improvements.
- Apply secure coding best practices.
- Document vulnerabilities and remediation steps.

## Tools & Technologies Used

- JavaScript
- Node.js
- Express.js
- bcrypt
- Manual Code Review

## Project Structure
Task_3_Secure_Coding_Review
│
├── Vulnerable_Code.js
├── Secure_Code.js
├── README.md
└── Report.pdf

## Vulnerabilities Identified

### 1. Hardcoded Password

**Issue:**
Sensitive credentials were stored directly inside the source code.

**Risk:**
Attackers or unauthorized users can access exposed credentials.

**Solution:**
Remove hardcoded passwords and use secure authentication methods.

---

### 2. SQL Injection Risk

**Issue:**
User input was directly used in database queries.

**Risk:**
Attackers may manipulate queries and access unauthorized data.

**Solution:**
Use parameterized queries and secure database operations.

---

### 3. Plain Text Password Storage

**Issue:**
Passwords were stored without encryption.

**Risk:**
Exposed passwords can be misused if data is leaked.

**Solution:**
Use password hashing techniques such as bcrypt.

---

### 4. Missing Input Validation

**Issue:**
User input was not properly checked before processing.

**Risk:**
Malicious or incorrect data can affect application behavior.

**Solution:**
Implement input validation and sanitization.

---

### 5. Information Leakage Through Errors

**Issue:**
Detailed error messages were displayed to users.

**Risk:**
Sensitive application information may be exposed.

**Solution:**
Use proper error handling and logging.

---

## Security Improvements Implemented

The secure version includes:

- Password hashing using bcrypt.
- Input validation.
- Secure authentication process.
- Improved error handling.
- Removal of hardcoded credentials.
- Safer coding practices.

## Secure Coding Best Practices

Recommended practices:

- Never store passwords in plain text.
- Validate all user inputs.
- Use secure authentication methods.
- Keep dependencies updated.
- Avoid exposing sensitive information.
- Perform regular security reviews.

## Conclusion

This project demonstrates the importance of secure coding practices. By identifying vulnerabilities and applying proper security measures, applications can become more resistant to common cyber threats.

Secure coding helps protect user data and improves overall application reliability.

## Author

Nida Kanwal

Cyber Security Internship - CodeAlpha
