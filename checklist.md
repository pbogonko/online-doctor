## Tech Stack
Database: MongoDB

Frontend: React + TailwindCSS

Backend: Node.js + Express

Authentication & Secrets: Auth0

Deployment: Nginx, Docker, AWS

## Folder Structure
Code
online-doctor
   |-frontend
     |-public
       |-images
       |-css
     |-src
       |-assets
       |-utils
       |-components
       |-context
       |-hooks
       |-dashboards
       |-layout
       |-routes
       |-pages
       |-services
       |-tests
   |-backend
     |-auth
     |-controllers
     |-models
     |-routes
     |-middleware
     |-services
     |-utils
     |-tests
## Core Features
Appointment booking & rescheduling

Doctor reviews & ratings

Secure payments via M-Pesa and bank integration

OTP-based login security

Medical record review & sharing

Insurance cover verification

Direct doctor–patient messaging

Free consultation via video call or WhatsApp

Admin dashboard for approvals, finances, and patient–doctor assignments

## User Journey
Landing Page: Displays services and product overview.

Authentication: Patients/doctors must log in via Auth0.

## Patient Dashboard:

View available doctors (ratings, availability, hours).

Book appointments (restricted to doctor’s availability).

Payment processing (M-Pesa/bank).

Appointment history, medical records, payment history.

Update personal/medical details.

Option to download/share records with verified practitioners.

## Doctor Dashboard:

Submit medical info for verification.

Limited access until approved by admin.

Full access once verified (appointments, patient monitoring).

Admin Dashboard:

Approve doctors.

Track finances.

Assign patients to qualified doctors.

Visualize system data.

## Development Steps
Backend First:

Build all routes (auth, appointments, payments, messaging).

Implement middleware for security (JWT, OTP, role-based access).

Integrate MongoDB models (users, doctors, appointments, payments).

## Frontend Integration:

Complete static pages and placeholders.

Build dashboards (patient, doctor, admin).

Implement React Router for navigation.

Use TailwindCSS for responsive UI.

Payment Module:

Integrate M-Pesa API.

Add fallback for bank payments.

Ensure transaction logging and error handling.

Messaging & Video Calls:

Implement WebSocket for real-time chat.

Integrate WebRTC for video consultations.

Add WhatsApp API for alternative communication.

## Deployment:

Containerize with Docker.

Configure Nginx reverse proxy.

Deploy on AWS (EC2, S3, RDS).

Set up CI/CD pipeline.

## Security & Compliance
Role-based access control (patient, doctor, admin).

OTP login for enhanced security.

Encrypted medical records (HIPAA/GDPR compliance).

Secure secret management via Auth0.