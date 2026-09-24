# online doctor project overview
online doctor is a web project designed to give patients and inquirers any medical assistance they may need.
instead of one having to visit a  doctor, he/she can make an appointment through this platiform and get connected to the available doctor. this ensures that one can get medical help 24/7
this site will allow doctors to have access to their clients and monitor them in real time 
## tech stack
- mongodb-->database
- frontend -->react+tailwind
- backend --> nodejs + express
- nginx ,docker and aws ---> deployment server
- auth0-->secret management


## folder structure
 online-doctor
   |-frontend
     |-public
       |-images
       |-css
     |-src
       |-utils
       |-components
       |-context
       |-hooks
       |-Dashboards
       |-layout
       |-routes
       |-pages
   |-backend
     |-auth
     |-controllers
     |-models
     |-routes
 some of the folders are missing, feel free to include them whenever necessary   

 ## features
 - appointment booking
 - doctor review
 - payment via mpesa
 - OTP during login
 - appointment rescheduling
 - medical record review
 - insurance cover review
 - direct doctor patient messaging
-  free consultation through a video call or whatsapp.
 ## journey
 when the user vist the sit for the first time he/she is  taken to the landing page which contains all the products overed and othe information. after that if he need to access a doctor, he need to log in first,then he can see the available doctors(that is when he log in as a patient). he can view the doctor, details , eg rating availability hours etc from there if he need to make an appointment with that doctor he can make it when the doctor i available.(if doctor will be available lets say from wednesday 8 am, that i the earliest he can make an appointment.) from there he is directed to the payment screen where payment information are processed(mpesa,or bank) on successful he is taken to the page where he can view his appointments and history.
 on the way the patient dashboard, contain also some features like:
    - appointment history
    - medical records(a doctor can also see thi information)
    - payment history and to what services
    - update his details(which is required before any appointment processing this include medical records)
    - option to download his/her info or shared to a verified practitioner
as a doctor, he is required to enter medical info which will be procesed on the background before he is approved to the site. he can have access to some limited access to the site but he can never take patients until the status move from pending to verified(he will be emailed upon verification).
there will also exist an admin dashboard which is not exposed to the public for internal use . this is where or admission are handled and all data is visualized.for a patient to be admitted to a certain doctor, all these infomation has to be captured.
role of an admin include: 
     - approvining a doctor
     - tracking finances
     - assigning patient to the available qualified doctor



## steps
1. start with the backend, build all the routes and ensure each endpoint and security is handled.
2. connect with the frontend. it has been partially build what is needs to be handled is all those static pages,add remaining pages(some of the pages are pointing to the same page as place holders).
3. intergrate the payment module 

> refer to `checklist.md` for a simplified journey.and `.env.example` for variables which may be needed. 
## FRONTEND IS MOSTLY STATIC. IT SERVED AS STYLE GUIDANCE. FOLLOWING THE PATTERN EVERYTHING SHOULD BE MODELLED AS REQUIRED. FOR IMAGES, AN EXCEPTION MAY BE ALLOWED FOR THEM TO COME UP FROM STATIC FOLDER BUT THIS IS NOT THE INTENDED PURPOSE.
> THE PROVIDED SCHEMA SHOULD NOT BE TAKEN COMPLETE. THERE ARE SO MANY THING S MISSING FOR IT TO BE PRODUCTION READY.IT JUST SERVES AS A GUIDE 
> ONE THING WORTH METIONING IS THE USER CAN BE ABLE TO REVIEW A DOCTOR AND TOP FIVE REVIES SHOULD APPEAR ON THE MAIN PAGE
> THERE IS ROOM FOR IMPROVEMENT IF YOU FEEL SOMETHING  NEED TO BE ADDED BUT NOT COVERED HERE, FEEL FREE TO DO SO