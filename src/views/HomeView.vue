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
                        <img src="/public/img/icons8-vue-js-48.png" alt="vue" class="skill1">
                        <img src="/public/img/vuex-1.svg" alt="vue" class="skill1">
                        <img src="/public/img/icons8-react-native-48.png" alt="vue" class="skill1">
                        <img src="/public/img/icons8-c-48.png" alt="vue" class="skill1">
                        <img src="/public/img/new-php-logo.png" alt="vue" class="skill1">
                        <img src="/public/img/icons8-tailwindcss-48.png" alt="vue" class="skill1">
                        <img src="/public/img/icons8-figma-48.png" alt="vue" class="skill1">
                    </div>
            </div>
            <div class="hire-me">
                <button class="buttonHire">
                    <p>Hire Me</p> 
                </button>
            </div>
            </div>
            <div class="profile">
                <img src="/public/img/uiux.png" alt="profile">
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
        <div class="achivment">
            <h1>Achivment</h1>
            <div class="carousel"
                v-motion
                :initial="{ opacity: 0, y: 10 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
            >

                <div class="card">
                    <img src="/public/achivment/achiv.jpeg" />
                    <div class="card-body">
                        <h3>Juara 1 Algoritma Kompetisi Pemrograman C/C++</h3>
                        <p>Universitas Budi Luhur</p>
                    </div>
                </div>
                <div class="card">
                    <img src="/public/achivment/achiv2.jpg" />
                    <div class="card-body">
                        <h3>Peserta Lomba CSS E-Sports Battle WPU EVENT OF THE YEAR</h3>
                        <p>Universitas Pasundan Bandung</p>
                    </div>
                </div>
                <div class="card">
                    <img src="/public/achivment/achiv4.jpg" />
                    <div class="card-body">
                        <h3>AWS Cloud Competition For Sagasitas Tech 2024</h3>
                        <p>AWS Sagasitas For Tech 2024</p>
                    </div>
                </div>
                <div class="card">
                    <img src="/public/achivment/achiv5.jpg" />
                    <div class="card-body">
                        <h3>Praktik Kerja Lapangan Komisi Pemilihan Umum</h3>
                        <p>Komisi Pemilihan Umum</p>
                    </div>
                </div>
                <div class="card">
                    <img src="/public/achivment/achiv3.jpg" />
                    <div class="card-body">
                        <h3>Memulai Dasar Pemrograman untuk Menjadi Pengembang Software</h3>
                        <p>Dicoding Indonesia</p>
                    </div>
                </div>
                <div class="card">
                    <img src="/public/achivment/achiv9.jpg" />
                    <div class="card-body">
                        <h3>Belajar Dasar Structured Query Language ( SQL )</h3>
                        <p>Dicoding Indonesia</p>
                    </div>
                </div>
                <div class="card">
                    <img src="/public/achivment/achiv7.jpg" />
                    <div class="card-body">
                        <h3>Belajar Dasar AI (Artificial Intelligence)</h3>
                        <p>Dicoding Indonesia</p>
                    </div>
                </div>
                <div class="card">
                    <img src="/public/achivment/achiv8.jpg" />
                    <div class="card-body">
                        <h3>Memulai Pemrograman dengan Python</h3>
                        <p>Dicoding Indonesia</p>
                    </div>
                </div>
                <div class="card">
                    <img src="/public/achivment/achiv11.jpg" />
                    <div class="card-body">
                        <h3>Memulai Pemrograman dengan C</h3>
                        <p>Dicoding Indonesia</p>
                    </div>
                </div>
                <div class="card">
                    <img src="/public/achivment/achiv6.jpg" />
                    <div class="card-body">
                        <h3>Dicoding Developer Coaching #103</h3>
                        <p>Dicoding Indonesia</p>
                    </div>
                </div>
                <div class="card">
                    <img src="/public/achivment/achiv10.jpg" />
                    <div class="card-body">
                        <h3>Javascript 10 Projects for Beginner</h3>
                        <p>Udemy Course</p>
                    </div>
                </div>

            </div>
        </div>

        <div class="experience">
            <div class="text">
                    <h1>Experience</h1>
                </div>
            <div class="wrapper-experience">
                <div class="content-experience">
                    <div class="expert-skill">
                            <img src="/public/img/icons8-vue-js-48.png" alt="vue" class="skill1">
                            <img src="/public/img/vuex-1.svg" alt="vue" class="skill1">
                            <img src="/public/img/icons8-react-native-48.png" alt="vue" class="skill1">
                            <img src="/public/img/icons8-c-48.png" alt="vue" class="skill1">
                            <img src="/public/img/new-php-logo.png" alt="vue" class="skill1">
                            <img src="/public/img/icons8-tailwindcss-48.png" alt="vue" class="skill1">
                            <img src="/public/img/icons8-figma-48.png" alt="vue" class="skill1">
                            <img src="https://brandlogo.org/wp-content/uploads/2024/02/MySQL-Logo-300x300.png.webp" alt="vue" class="skill1">
                    </div>
                    <div class="expert-cards">
    
                        <div class="card">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/KPU_Logo.svg/925px-KPU_Logo.svg.png" />
                            <div class="title">
                                <h2>IT SUPPORT, KPU Jakarta Barat</h2>
                                <p>Oct, 2022 - Nov, 2022</p>
                                <li>Staff Financial Data Input</li>
                                <li>fix printer sharing issues</li>
                                <li>fix printer sharing issues</li>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>
        </div>

        <div class="projects">
            <div class="text">
                <h1>Project</h1>
            </div>
            <div class="carousel">

                <div class="card">
                    <img src="/public/img/project1.png" />
                    <div class="card-body">
                        <h3>E-Commerce Toko Buah Super Murah</h3>
                        <p>Build with HTML and CSS</p>
                    </div>
                </div>
                <div class="card">
                    <img src="/public/img/project2.png" />
                    <div class="card-body">
                        <h3>Cloning website Starbucks Company</h3>
                        <p>Build with HTML and CSS</p>
                    </div>
                </div>
                <div class="card">
                    <img src="/public/img/project3.png" />
                    <div class="card-body">
                        <h3>Project client website property villa</h3>
                        <p>Build with Vue JS 3</p>
                    </div>
                </div>
                <div class="card">
                    <img src="/public/img/project4.png" />
                    <div class="card-body">
                        <h3>Design website property, villa, warehouse</h3>
                        <p>Build with Figma</p>
                    </div>
                </div>
                <div class="card">
                    <img src="/public/img/project5.png" />
                    <div class="card-body">
                        <h3>Design website home furniture</h3>
                        <p>Build with Figma</p>
                    </div>
                </div>
                <div class="card">
                    <img src="/public/img/project6.png" />
                    <div class="card-body">
                        <h3>Design website home furniture</h3>
                        <p>Build with Figma</p>
                    </div>
                </div>

            </div>
        </div>

            <div class="contact-container">
                <form action="POST" ref="form" @submit.prevent="sendEmail">
                    <div class="name-fields">
                        <div class="field">
                            <input 
                                type="text" 
                                v-model="firstName" 
                                placeholder="First Name" 
                                required
                            />
                        </div>
                        <div class="field">
                            <input 
                                type="text" 
                                v-model="subject"
                                placeholder="Subject of message"
                                required
                            />
                        </div>
                    </div>
    
                    <div class="email-field field">
                        <input 
                            type="email" 
                            v-model="email"  
                            placeholder="Enter your Email"
                            required
                        />
                    </div>
    
                    <div class="field">
                        <textarea
                            type="textarea"
                            v-model="message"
                            placeholder="Enter Message"
                            required
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
            background-image: url('/public/img/desktop-2.png');
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
            background-image: url('/public/img/bg-baru.png');
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
            background-image: url('/public/img/bg-baru.png');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            color: #fff;
            width: 100%;
            height: 100%;
            padding: 4rem;
        }
        .hero .projects{
            color: #fff;
            width: 100%;
            height: 100%;
            padding: 4rem;
            background-image: url('/public/img/bg-baru.png');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }
        
        .hero .achivment h1,
        .hero .projects h1,
        .hero .experience h1{
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
        .hero .achivment .carousel .card .card-body,
        .hero .projects .carousel .card .card-body{
            padding: 10px;
            font-weight: 500;
        }

        .hero .achivment .carousel .card .card-body p,
        .hero .projects .carousel .card .card-body p{
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

        .hero .experience {
            padding: 10rem;
            width: 100%;
            height: 100%;
            background-image: url('/public/img/bg-baru.png');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }
        .hero .wrapper-experience{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .hero .experience .content-experience{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            width: 100%;
            height: 100%;
            margin-top: 1rem;
        }
        .hero .experience .content-experience .expert-skill{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 1rem;
        }
        .hero .experience .content-experience .expert-skill img{
            width: 80px;
            height: 80px;
            object-fit: contain;
            background: rgb(11, 29, 109);
            border-radius: 50%;
            padding: 10px;
        }
        .hero .experience .content-experience .expert-cards {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            margin-left: 20rem;
            gap: 1rem;
        }
        .hero .experience .content-experience .expert-cards .card{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            text-align: left;
            gap: 17px;
            background: #19376b;
            background: linear-gradient(90deg, #19376b 100%, rgba(25, 55, 100, 0) 100%);
            border-radius: 10px;
            padding: 24px;
            min-width: 500px;
        }
        .hero .experience .content-experience .expert-cards .card img {
            margin: 20px;
            width: 60px;
            height: 60px;
            object-fit: contain;
        }
        .hero .experience .content-experience .expert-cards .card .desc{
            display: flex;
            align-items: center;
            flex-direction: column;
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
            background-image: url('/public/img/bg-baru.png');
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
            background-image: url('/public/img/bg-baru.png');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
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
            display: flex;
            flex-direction: column;
            padding-top: 6rem;
        }
        .hero .hero-main .intro{
            padding: 2rem;
            text-align: justify;
        }
        .hero .hero-main .intro h1{
            font-family: "Poppins", sans-serif;
            font-weight: bold;
            font-size: 30px;
            margin-bottom: 10px;
            color: #fff;
        }
        .hero hero-main .intro p{
            font-size: 10px;
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
            background-image: url('/public/img/bg-baru.png');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }
        .hero .about-me .text p{
            font-size: 10px;
            font-weight: bold;
            font-family: 'Nunito', sans-serif; 
        }
        .hero .achivment{
            background-image: url('/public/img/bg-baru.png');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
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