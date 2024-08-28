<template>
    <div class="hero">
        <div class="hero-main">
            <div class="intro">
                    <h1>Hy! I Am,<br/>Muhammad Miftahurrahman
                        <p class="desc-profile">
                            {{ majors }} |
                            <span>
                                <span>Front End Web Developer🚀</span>
                                <span>UI/UX Design✨</span>
                                <span>Front End Web Developer🚀</span>
                                <span>UI/UX Design✨</span>
                            </span>
                        </p>
                    </h1>
                <div class="skills">
                    <div class="wrapper-skils">
                        <img src="../components/img/icons8-vue-js-48.png" alt="vue" class="skill1">
                        <img src="../components/img/vuex-1.svg" alt="vue" class="skill1">
                        <img src="../components/img/icons8-react-native-48.png" alt="vue" class="skill1">
                        <img src="../components/img/icons8-c-48.png" alt="vue" class="skill1">
                        <img src="../components/img/new-php-logo.png" alt="vue" class="skill1">
                        <img src="../components/img/icons8-tailwindcss-48.png" alt="vue" class="skill1">
                        <img src="../components/img/icons8-figma-48.png" alt="vue" class="skill1">
                    </div>
            </div>
            <div class="hire-me">
                <button class="buttonHire">
                    <p>Hire Me</p> 
                </button>
            </div>
            </div>
            <div class="profile">
                <img src="../components/img/uiux.png" alt="profile">
            </div>
        </div>
        <div class="about-me">
            <div class="wrapper-about">
                <div class="text"
                    v-motion
                    :initial="{ opacity: 0, y: 10 }"
                    :visibleOnce="{ opacity: 1, y: 0 }"
                > 
                    <h1>About</h1> 
                    <div class="text-content">
                        <p>I am a graduate of SMKS YMIK JAKARTA Vocational High School, majoring in Computer and Network Engineering. During my time at SMK I participated in extracurricular coding as well as the person in charge, and the competitions that I have participated in include :
                        </p>
                        <p>
                            I am a graduate of SMK YMIK JAKARTA Vocational High School majoring in Computer and Network Engineering. While at SMK I participated in extracurricular coding as well as being in charge, and I was active in competitions and training. Now I continue my education at Mercu Buana University Jakarta, and this is the proof that I have been active in programming competitions during my vocational high school years:
                            <br/>
                            🏆 1st place in Algorithm Competition organized by Budi Luhur University for SMA / SMK level using C++ programming language.  
                            <br/>
                            👉🏻 Student Competency Competition (LKS) at Jakarta Barat level with the theme of Information Technology Network Administration System.
                            <br/>
                            👉🏻 Flowgorithm Competition organized by the Faculty of Informatics Engineering, Budi Luhur University for high school/vocational level.
                            <br/>
                            👉🏻 participant of CSS Battle-Esports Competition organized by Pasundan University Bandung and sponsored by Unpas Web Programming.
                            <br/>
                            👉🏻 participants of Fast Track Cyber Security Training organized by Microsoft Teams
                            <br/>
                            👉🏻 participants of AWS Cloud Computing Competition Sagasitas for Tech 2024
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#FCEDE6" fill-opacity="1" d="M0,128L48,144C96,160,192,192,288,218.7C384,245,480,267,576,256C672,245,768,203,864,165.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
        </svg> -->
        <div class="achivment">
            <h1>Achivment</h1>
            <div class="carousel"
                v-motion
                :initial="{ opacity: 0, y: 10 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
            >

                <div v-for="card in cards" :key="card.id" class="card">
                    <img :src="card.imageUrl" alt="Card Image">
                    <div class="card-body">
                        <h3 class="card-title">{{ card.title }}</h3>
                        <p class="card-desc">{{ card.description }}</p>
                    </div>
                </div>
                
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#FCEDE6" fill-opacity="1" d="M0,192L34.3,186.7C68.6,181,137,171,206,181.3C274.3,192,343,224,411,218.7C480,213,549,171,617,160C685.7,149,754,171,823,160C891.4,149,960,107,1029,80C1097.1,53,1166,43,1234,58.7C1302.9,75,1371,117,1406,138.7L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z">
            </path>
        </svg>
        <div class="projects">
            <div class="text">
                <h1>Project</h1>
            </div>
            <div class="carousel">

                <div v-for="cardProject in cardsProject" :key="cardProject.id" class="card">
                    <img :src="cardProject.imageUrl" alt="Card Image">
                    <h3>{{ cardProject.title }}</h3>
                    <p class="card-desc">{{ cardProject.description }}</p>
                </div>

            </div>
        </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FCEDE6" fill-opacity="1" d="M0,64L40,106.7C80,149,160,235,240,234.7C320,235,400,149,480,122.7C560,96,640,128,720,128C800,128,880,96,960,85.3C1040,75,1120,85,1200,85.3C1280,85,1360,75,1400,69.3L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FCEDE6" fill-opacity="1" d="M0,224L40,192C80,160,160,96,240,80C320,64,400,96,480,101.3C560,107,640,85,720,85.3C800,85,880,107,960,128C1040,149,1120,171,1200,197.3C1280,224,1360,256,1400,272L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>

            <div class="contact-container">
                <form action="POST" ref="form" @submit.prevent="sendEmail">
                    <div class="name-fields">
                        <div class="field">
                            <input 
                                type="text" 
                                v-model="firstName" 
                                placeholder="First Name" />
                        </div>
                        <div class="field">
                            <input 
                                type="text" 
                                v-model="subject"
                                placeholder="Subject of message"
                            />
                        </div>
                    </div>
    
                    <div class="email-field field">
                        <input 
                            type="email" 
                            v-model="email"  
                            placeholder="Enter your Email"
                        />
                    </div>
    
                    <div class="field">
                        <textarea
                            type="textarea"
                            v-model="message"
                            placeholder="Enter Message"
                        />
                    </div>
                    <div class="submitbutton field">
                        <button type="submit" value="send">SUBMIT</button>
                    </div>
    
                </form>
            </div>
    </div>
</template>

<script>
import emailjs from '@emailjs/browser';
    export default{
        data() {
            return {
                firstName: '',
                subject: '',
                email: '',
                message: '',
                
                cards: [
                    { id: 1, imageUrl: '/public/achivment/achiv.jpeg',title: 'Juara 1 Algoritma Kompetisi Pemrograman C/C++', description: 'Universitas Budi Luhur' },
                    { id: 2, imageUrl: '/public/achivment/achiv2.jpg',title: 'Peserta Lomba CSS E-Sports Battle WPU EVENT OF THE YEAR', description: 'Universitas Pasundan Bandung' },
                    { id: 3, imageUrl: '/public/achivment/achiv4.jpg',title: 'AWS Cloud Competition For Sagasitas Tech 2024', description: 'AWS Sagasitas For Tech 2024' },
                    { id: 4, imageUrl: '/public/achivment/achiv5.jpg',title: 'Praktik Kerja Lapangan Komisi Pemilihan Umum', description: 'Komisi Pemilihan Umum'},
                    { id: 5, imageUrl: '/public/achivment/achiv3.jpg',title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software', description: 'Dicoding Indonesia' },
                    { id: 6, imageUrl: '/public/achivment/achiv9.jpg',title: 'Belajar Dasar Structured Query Language ( SQL )' , description: 'Dicoding Indonesia'},
                    { id: 7, imageUrl: '/public/achivment/achiv7.jpg',title: 'Belajar Dasar AI (Artificial Intelligence)', description: 'Dicoding Indonesia' },
                    { id: 8, imageUrl: '/public/achivment/achiv8.jpg',title: 'Memulai Pemrograman dengan Python', description: 'Dicoding Indonesia' },
                    { id: 9, imageUrl: '/public/achivment/achiv11.jpg',title: 'Memulai Pemrograman dengan C', description: 'Dicoding Indonesia'},
                    { id: 10, imageUrl:'/public/achivment/achiv6.jpg',title: 'Dicoding Developer Coaching #103', description: 'Dicoding Indonesia'},
                    { id: 11, imageUrl:'/public/achivment/achiv10.jpg',title: 'Javascript 10 Projects for Beginner', description: 'Udemy Course'},
                ],
                cardsProject: [
                    {
                        id: 1, imageUrl: '../src/components/img/anggabwa.png', description: 'Laravel 11, DBeaver, Spatie, MySQL, TailwindCSS',
                    },
                    {
                        id: 2, imageUrl: '../src/components/img/project3.png', title: 'Website Property Villa', description: 'Vue JS 3 & TypeScript',
                    },
                    {
                        id: 3, imageUrl: '../src/components/img/project2.png', title: 'Starbuck Coffee Company Clone', description: 'HTML & CSS'
                    },
                    {
                        id: 4, imageUrl: '../src/components/img/project1.png', title: 'Toko Buah Super Murah', description: 'HTML & CSS'
                    },
                ],
                majors: "Student Informatics Enginering",
            };
        },
        methods: {
            sendEmail() {
                const templateParams = {
                    from_name: this.firstName,
                    email_id: this.email,
                    subject: this.subject,
                    message: this.message,
                };

                console.log(templateParams);

                emailjs.send(
                    'service_7fq8172', 'template_eo3d7z9', templateParams,
                ).then((res) => {
                        console.log('SUCCESS!' +  res.status);
                    },
                    (error) => {
                        console.log('FAILED...'+ error.text);
                    },
                );
            },
        },
        mounted() {
        // Inisialisasi EmailJS
         emailjs.init('FcLpyFVMcEm-ZbcwR');
        }
    };


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        *,
        ::before,
        ::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
        }

        .contact-container{
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
            height: 70vh;
            width: 60%;
            margin: 10px auto;
            margin-bottom: 10rem;
            padding: 10%;
            color: black;
        }
        .field{
            margin: 10px 0;
        }
        input,
        textarea{
            height: 50px;
            width: 100%;
            margin: 20px;
            border-top: none;
            border-right: none;
            border-left: none;
            outline: none;
        }
        textarea{
            height: 100px;
            border-bottom: 2px solid rgb(133, 133, 133);
        }
        .submitbutton button{
            height: 50px;
            width: 200px;
            margin: 0 auto;
            text-align: center;
            font-weight: 300;
            border-radius: 30px;
            border: 2px solid rgb(133, 133, 133);
            color: #000;
            font-weight: 600;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .submitbutton button:hover{
            background-color: #7C00FE;
            border: none;
            color: #fff;
            font-weight: 600;
            transition: .3s all ease;
        }
        .contact-title{
            text-align: center;
        }

        /* Hero Main */
        .hero{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: #fff;
            text-align: center;
            /* margin-top: 4rem; */
        }
        .hero .hero-main{
            width: 100%;
            height: 100vh;
            background-color: #FCEDE6;
            background-image: url('/src/components/img/desktop-2.png');
            background-position: center;
            background-repeat: no-repeat; 
            background-size: cover;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            padding-top: 10rem;
        }
        .hero .hero-main .intro{
            padding: 2rem;
            text-align: justify;
        }
        .hero .hero-main .intro h1{
            font-family: "Poppins", sans-serif;
            font-weight: bold;
            font-size: 40px;
            margin-bottom: 10px;
            color: #fff;
        }

        .hero .intro .desc-profile{
            font-size: 1.25rem;
            color: #ffffffac;
            font-weight: bold;
            letter-spacing: 1px;
            font-family: 'Poppins', sans-serif;

              :is(span) {
                position: relative;
                display: inline-block;
                color: #f3f93a;
                height: 2rem;
                vertical-align: bottom;
                overflow: hidden;
                font-weight: bold;

                :is(span) {
                    display: block;
                    animation: animateWords 5s infinite ease;
                }
            }
        }

        @keyframes animateWords{
            0%{
                transform: translateY(0%);
            }

            25%{
                transform: translateY(-100%);
            }

            50%{
                transform: translateY(-200%);
            }

            75%{
                transform: translateY(-300%);
            }

            100%{
                transform: translateY(-400%);
            }
        }
        .hero .profile img{
            width: 550px;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
        }
        .hero .hero-main .intro > .skills .wrapper-skils{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: start;
            gap: 1rem;
            width: 100%;
            height: 100%;
            margin-top: 1rem;
            transition: 0.2s;
        }
        .hero .hero-main .intro > .skills .wrapper-skils img{
            width: 55px;
            height: 56px;
            object-fit: contain;
        }
        .hero .hero-main .intro > .skills .skill1:hover,
        .hero .hero-main .intro > .skills .skill2:hover,
        .hero .hero-main .intro > .skills .skill3:hover,
        .hero .hero-main .intro > .skills .skill4:hover,
        .hero .hero-main .intro > .skills .skill5:hover{
            transform: scale(1.3);
            transition: 0.3s all ease;
            cursor: pointer;
        }
        .hero .hero-main .intro > .skills .skill2{
            animation: putaran 5s infinite;
        }
        .hero .hire-me{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 145px;
            height: 49px;
            margin-top: 56px;
            border-radius: 5px;
            text-align: center;
        }
        
        .hero .hire-me button {
            border: none;
            width: 140px;
            height: 50px;
            color: #fff;
            z-index: 1;
            display: flex;
            background: #000;
            position: relative;
            cursor: pointer;
            text-align: center;
            }

        .hero .hire-me button p {
            margin: 0 auto;
            align-self: center;
            font-size: 17px;
            font-weight: bold;
            text-align: center;
            }

        .hero .hire-me button::after {
            position: absolute;
            content: "";
            width: 100%;
            z-index: -1;
            height: 10%;
            bottom: 0;
            clip-path: polygon(
                0% 74%,
                4% 75%,
                8% 76%,
                11% 77%,
                15% 78%,
                20% 78%,
                25% 77%,
                32% 77%,
                37% 75%,
                40% 74%,
                43% 74%,
                46% 73%,
                52% 72%,
                57% 72%,
                65% 74%,
                66% 75%,
                71% 78%,
                75% 82%,
                81% 86%,
                83% 88%,
                88% 91%,
                90% 94%,
                94% 96%,
                98% 98%,
                100% 100%,
                82% 100%,
                0 100%
            );
            background: #8792eb;
            transition: 0.2s ease;
            }

        .hero .hire-me button::before {
            position: absolute;
            content: "";
            /*   bottom: 80%; */
            transform: rotate(180deg);
            width: 100%;
            height: 10%;
            transition: 0.2s ease;
            /*   bottom:; */
            z-index: -1;
            clip-path: polygon(
                0% 74%,
                4% 75%,
                8% 76%,
                11% 77%,
                15% 78%,
                20% 78%,
                25% 77%,
                32% 77%,
                37% 75%,
                40% 74%,
                43% 74%,
                46% 73%,
                52% 72%,
                57% 72%,
                65% 74%,
                66% 75%,
                71% 78%,
                75% 82%,
                81% 86%,
                83% 88%,
                88% 91%,
                90% 94%,
                94% 96%,
                98% 98%,
                100% 100%,
                82% 100%,
                0 100%
            );
            background: #8792eb;
            }

            .hero .hire-me button:hover::after {
            clip-path: polygon(
                0 30%,
                9% 34%,
                7% 39%,
                11% 43%,
                13% 33%,
                17% 30%,
                24% 34%,
                25% 35%,
                30% 31%,
                30% 38%,
                39% 33%,
                35% 43%,
                43% 45%,
                55% 46%,
                65% 74%,
                67% 66%,
                81% 57%,
                75% 82%,
                81% 86%,
                83% 88%,
                88% 91%,
                90% 94%,
                94% 96%,
                98% 98%,
                100% 100%,
                82% 100%,
                0 100%
            );
            height: 80%;
            }

            .hero .hire-me button:hover::before {
            clip-path: polygon(
                0 30%,
                9% 34%,
                7% 39%,
                11% 43%,
                13% 33%,
                17% 30%,
                24% 34%,
                25% 35%,
                30% 31%,
                30% 38%,
                39% 33%,
                35% 43%,
                43% 45%,
                55% 46%,
                65% 74%,
                67% 66%,
                81% 57%,
                75% 82%,
                81% 86%,
                83% 88%,
                88% 91%,
                90% 94%,
                94% 96%,
                98% 98%,
                100% 100%,
                82% 100%,
                0 100%
            );
            height: 80%;
        }

        /* About Me */
        .hero .about-me{
            text-align: center;
            width: 100%;
            height: 100%;
            padding: 4rem;
            color: #000000;
            background-image: url('/src/components/img/bg-baru.png');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }
        .hero .about-me .wrapper-about{
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 3rem;
        }
        .hero .about-me h1{
            text-align: center;
            font-weight: bold;
        }
        .hero .about-me .text{
            width: 800px;
            font-size: 20px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .hero .achivment{
            background-color: #FCEDE6;
            color: #fff;
            width: 100%;
            height: 100%;
            padding: 4rem;
        }
        
        .hero .achivment h1,
        .hero .projects h1{
            margin-bottom: 1.5rem;
            text-align: center;
            color: #000;
            font-weight: bold
        }
        .hero .achivment .text p{
            font-family: 'Nunito', sans-serif;
            color: gainsboro;
        }
        .hero .achivment .carousel,
        .hero .projects .carousel{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            color: #000;
            gap: 1rem;
        }
        .hero .achivment .carousel .card,
        .hero .projects .carousel .card{
            width: 300px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
            overflow: hidden;
            transition: transform 0.3s ease-in-out;
            z-index: 1;
            background-color: #fff;
        }
        .hero .achivment .carousel .card .card-title,
        .hero .projects .carousel .card .card-title{
            width: 100%;
            font-size: 15px;
            padding: 20px;
            font-weight: 400;
        }
        .hero .achivment .carousel .card .card-desc,
        .hero .projects .carousel .card .card-desc{
            padding: 10px;
            font-weight: 500;
        }
        .hero .achivment .carousel .card:hover,
        .hero .projects .carousel .card:hover{
            transform: scale(1.1);
            transition: 0.3s all ease;
            z-index: 1;
        }
        .hero .projects .carousel .card{
            background-color: #EBE3D5;
        }
        .hero .achivment .carousel .card img,
        .hero .projects .carousel .card img{
            width: 300px;
            height: 200px;
            object-fit: cover;
        }

        @keyframes putaran{
            100%{
                transform: rotate(360deg);
            }
        }

@media only screen and (max-width: 1028px){
    .hero{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: #000;
            /* margin-top: 4rem; */
        }
        .hero .hero-main{
            width: 100%;
            height: 100%;
            background-color: #FCEDE6;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            padding-top: 10rem;
        }
        .hero .hero-main .intro{
            padding: 2rem;
            text-align: justify;
        }
        .hero .hero-main .intro h2{
            font-weight: bold;
            /* font-size: 40px; */
            color: #F0E5CF;
        }
        .hero .intro p{
            font-size: 15px;
            color: #F0E5CF;
            letter-spacing: 1px;
        }
        .hero .intro p > span{
            color: #f0e5cfc7;
        }
        .hero .profile img{
            width: 450px;
            height: 320px;
            object-fit: cover;
            border-radius: 10px;
        }
        .hero .hero-main .intro > .skills{
            display: flex;
            align-items: center;
            gap: 1rem;
            width: 100%;
            height: 100%;
            margin-top: 1rem;
        }
        .hero .about-me{
            text-align: center;
            width: 100%;
            height: 100%;
            padding: 4rem;
            color: #000000;
            background-image: url('/src/components/img/bg-white.png');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }
        .hero .about-me .text p{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            padding: 0 1.5rem;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .hero .achivment{
            background-color: #FCEDE6;
            color: #fff;
            width: 100%;
            height: 100%;
        }
        .hero .achivment h1{
            margin-bottom: 1.5rem;
        }
        .hero .achivment .text p{
            font-family: 'Nunito', sans-serif;
            color: gainsboro;
        }
        .hero .achivment .carousel,
        .hero .projects .carousel{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 1rem;
        }
        .hero .achivment .carousel .card,
        .hero .projects .carousel .card{
            padding: 10px;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
        }
        .hero .achivment .carousel .card p{
            color: #000;
        }
        .hero .projects .carousel .card p{
            color: #000;
        }
        .hero .achivment .carousel .card img,
        .hero .projects .carousel .card img{
            width: 300px;
            height: 200px;
            object-fit: cover;
            border-radius: 10px;
        }
        .hero .projects .carousel .card img{
            object-fit: contain;
        }
}

/* BREAKPOINTS 992px */
@media only screen and (max-width: 992px){
    .hero{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            color: #000;
            padding: 0;
            margin: 0;
            overflow: hidden;
        }

        .hero .skills img{
            width: 15px;
            height: 15px;
        }
    .hero .intro .desc-profile{
            font-size: 1.25rem;
            color: #000;
            font-weight: bold;
            letter-spacing: 1px;
            font-family: 'Poppins', sans-serif;

              :is(span) {
                position: relative;
                display: inline-block;
                color: #f3f93a;
                height: 2rem;
                vertical-align: bottom;
                overflow: hidden;
                font-weight: bold;

                :is(span) {
                    display: block;
                    animation: animateWords 5s infinite ease;
                }
            }
        }

        @keyframes animateWords{
            0%{
                transform: translateY(0%);
            }

            25%{
                transform: translateY(-100%);
            }

            50%{
                transform: translateY(-200%);
            }

            75%{
                transform: translateY(-300%);
            }

            100%{
                transform: translateY(-400%);
            }
        }
}

@media only screen and (max-width: 768px){
        .hero{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            color: #000;
            padding: 0;
            margin: 0;
            overflow: hidden;
        }
        .hero .hero-main{
            width: 100%;
            height: 100%;
            background-color: #FCEDE6;
            display: flex;
            flex-direction: column;
            padding-top: 6rem;
        }
        .hero .hero-main .intro{
            padding: 2rem;
            text-align: justify;
        }
        .hero .hero-main .intro h2{
            font-weight: bold;
            color: #F0E5CF;
        }
        .hero .intro p{
            font-size: 15px;
            color: #F0E5CF;
            letter-spacing: 1px;
        }
        .hero .intro p > span{
            color: #f0e5cfc7;
        }
        .hero .profile img{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 320px;
            height: 250px;
            object-fit: contain;
            border-radius: 10px;
            margin-bottom: 1rem;
            z-index: 1;
        }
        .hero .skills{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 1rem;
        }
        .hero .skills img{
            width: 15px;
            height: 15px;
        }
        .hero .about-me{
            width: 100%;
            height: 100vh;
            padding: 1.5rem;
            color: #000;
        }
        .hero .about-me .text p{
            font-size: 10px;
            font-weight: bold;
            font-family: 'Nunito', sans-serif; 
        }
        .hero .achivment{
            background-color: #FCEDE6;
            color: #fff;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            flex-direction: column;
        }
        .hero .achivment h1{
            margin-bottom: 1.5rem;
        }
        .hero .achivment .text p{
            font-family: 'Nunito', sans-serif;
            color: gainsboro;
        }

        .contact-container{
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
            height: 70vh;
            width: 60%;
            margin: 10px auto;
            margin-bottom: 10rem;
            padding: 10%;
            color: black;
        }
        .field{
            margin: 10px 0;
        }
        input,
        textarea{
            height: 50px;
            width: 100%;
            margin: 20px;
            border-top: none;
            border-right: none;
            border-left: none;
            outline: none;
        }
        textarea{
            height: 100px;
            border-bottom: 2px solid rgb(133, 133, 133);
        }
        .submitbutton button{
            height: 50px;
            width: 200px;
            margin: 0 auto;
            text-align: center;
            font-weight: 300;
            border-radius: 30px;
            border: 2px solid rgb(133, 133, 133);
            color: #000;
            font-weight: 600;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .submitbutton button:hover{
            background-color: #7C00FE;
            border: none;
            color: #fff;
            font-weight: 600;
            transition: .3s all ease;
        }
        .contact-title{
            text-align: center;
        }
}
</style>