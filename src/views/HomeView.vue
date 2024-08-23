<template>
    <div class="hero">
        <div class="hero-main">
            <div class="intro">
                    <h1>Hy! I Am,<br/>Muhammad Miftahurrahman</h1>
                    <p class="desc-profile">{{ majors }}<span> | {{ jobTitle }}</span></p>
                <div class="skills">
                    <div class="wrapper-skils">
                        <img src="../components/img/icons8-vue-js-48.png" alt="vue" class="skill1">
                        <img src="../components/img/icons8-react-native-48.png" alt="vue" class="skill1">
                        <img src="../components/img/icons8-c-48.png" alt="vue" class="skill1">
                        <img src="../components/img/icons8-tailwindcss-48.png" alt="vue" class="skill1">
                        <img src="../components/img/icons8-figma-48.png" alt="vue" class="skill1">
                    </div>
            </div>
            <div class="hire-me">
                <button  href="mailto:your.email@example.com" class="buttonHire" @click="openEmail">
                    Hire Me  
                </button>
            </div>
            </div>
            <div class="profile">
                <img src="../components/img/Frame 11.png" alt="profile">
            </div>
        </div>
        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#FCEDE6" fill-opacity=                     "1" d="M0,288L48,250.7C96,213,192,139,288,122.7C384,107,480,149,576,165.3C672,181,768,171,864,154.7C960,139,1056,117,1152,117.3C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
            </path>
        </svg> -->
        <div class="about-me">
            <div class="wrapper-about">
                <div class="text"> 
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#FCEDE6" fill-opacity="1" d="M0,128L48,144C96,160,192,192,288,218.7C384,245,480,267,576,256C672,245,768,203,864,165.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
        </svg>
        <div class="achivment">
            <h1>Achivment</h1>
            <div class="carousel">

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
    </div>
</template>

<script>
    export default{
        data() {
            return {
                cards: [
                    { id: 1, imageUrl: '/src/assets/achivment/achiv.jpeg',title: 'Juara 1 Algoritma Kompetisi Pemrograman C/C++', description: 'Universitas Budi Luhur' },
                    { id: 2, imageUrl: '/src/assets/achivment/achiv2.jpg',title: 'Peserta Lomba CSS E-Sports Battle WPU EVENT OF THE YEAR', description: 'Universitas Pasundan Bandung' },
                    { id: 3, imageUrl: '/src/assets/achivment/achiv4.jpg',title: 'AWS Cloud Competition For Sagasitas Tech 2024', description: 'AWS Sagasitas For Tech 2024' },
                    { id: 4, imageUrl: '/src/assets/achivment/achiv5.jpg',title: 'Praktik Kerja Lapangan Komisi Pemilihan Umum Kota Jakarta Barat', description: 'Komisi Pemilihan Umum'},
                    { id: 5, imageUrl: '/src/assets/achivment/achiv3.jpg',title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software', description: 'Dicoding Indonesia' },
                    { id: 6, imageUrl: '/src/assets/achivment/achiv9.jpg',title: 'Belajar Dasar Structured Query Language ( SQL )' , description: 'Dicoding Indonesia'},
                    { id: 7, imageUrl: '/src/assets/achivment/achiv7.jpg',title: 'Belajar Dasar AI (Artificial Intelligence)', description: 'Dicoding Indonesia' },
                    { id: 8, imageUrl: '/src/assets/achivment/achiv8.jpg',title: 'Memulai Pemrograman dengan Python', description: 'Dicoding Indonesia' },
                    { id: 9, imageUrl: '/src/assets/achivment/achiv11.jpg',title: 'Memulai Pemrograman dengan C', description: 'Dicoding Indonesia'},
                    { id: 10, imageUrl: '/src/assets/achivment/achiv6.jpg',title: 'Dicoding Developer Coaching #103', description: 'Dicoding Indonesia'},
                    { id: 11, imageUrl: '/src/assets/achivment/achiv10.jpg',title: 'Javascript 10 Projects for Beginner', description: 'Udemy Course'},
                ],
                cardsProject: [
                    {
                        id: 1, imageUrl: 'https://cdn.dribbble.com/userupload/13287466/file/original-37cac061a902e46f613274d1c66aa66c.jpg?resize=1200x600', title: 'Ujian Online CBT Learning', description: 'Laravel 11, DBeaver, Spatie, MySQL, TailwindCSS',
                    },
                    {
                        id: 2, imageUrl: 'https://cdn.dribbble.com/userupload/9774668/file/original-17872dfe619a5ddc812b614df4653b6c.png?resize=1200x900', title: 'Website Property Villa', description: 'Vue JS 3 & TypeScript',
                    },
                    {
                        id: 3, imageUrl: 'https://cdn.dribbble.com/userupload/13294171/file/original-15a575519b3e219911ca1fb3cc98c331.png?resize=1200x900', title: 'Card Project 1',
                    },
                    {
                        id: 4, imageUrl: 'https://cdn.dribbble.com/users/7677055/screenshots/17943042/media/d6581004b0dab170bce063b915c3930a.png?resize=1000x750&vertical=center', title: 'Card Project 1',
                    },
                    {
                        id: 5, imageUrl: 'https://cdn.dribbble.com/userupload/4789690/file/original-8942e8d954dfa13fca253e26ec8527d6.png?resize=1200x900', title: 'Card Project 1'
                    },
                ],
                majors: "Student Informatics Enginering",
                jobTitle: "Front End Web Developer"
            }
        },
        methods: {
            openEmail() {
                alert('tstests')
            },
        }
    }
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
            height: 100vh;
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
        .hero .hero-main .intro h1{
            font-family: "Poppins", sans-serif;
            font-weight: bold;
            font-size: 40px;
            margin-bottom: 10px;
            color: #000;
        }
        .hero .intro .desc-profile{
            font-size: 20px;
            color: #000;
            font-weight: 700;
            letter-spacing: 1px;
            font-family: sans-serif;
        }
        .hero .intro p > span{
            color: #00000098;
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
            height: 56px
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
        }
        .hero .hire-me button{
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            border-radius: 5px;
            font-weight: 600;
            color: #fff;
            font-size: 17px;
            background-color: #E56712;
            cursor: pointer;
        }
        .hero .about-me{
            text-align: center;
            width: 100%;
            padding: 1.5rem;
            color: #000;
        }
        .hero .about-me .wrapper-about{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 3rem
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
            width: 100%;
            padding: 1.5rem;
            color: #000;
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
        .container {
        width: 650px;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        position: relative;
        border-radius: 3px;
        border: 1px solid #3586ff;
        background: linear-gradient(to right, #005c97, #363795);
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }

        .container form{
            display: flex;
        }

        .container form .descr {
        font-size: 20px;
        font-weight: 500;
        color: #e8e8e8;
        margin-bottom: 25px;
        margin-top: 25px;
        text-align: center;
        }

        .container .form-image{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .container .form-image img{
            width: 100px;
            height: 100px;
        }

        .form {
        display: flex;
        flex-direction: column;
        }

        .input, textarea {
        margin: 1em 0 1em 0;
        width: 300px;
        position: relative;
        }

        .input input, textarea {
        font-size: 100%;
        padding: 0.7em;
        outline: none;
        color: #e8e8e8;
        border: none;
        border-bottom: 2px solid #e8e8e8;
        background: transparent;
        border-radius: none;
        width: 100%;
        resize: none;
        }

        .input label {
        font-size: 100%;
        position: absolute;
        left: 0;
        color: #e8e8e8;
        padding: 0.7em;
        margin-left: 0.1em;
        pointer-events: none;
        transition: all 0.5s ease;
        text-transform: uppercase;
        }

        .input :is(input:focus, input:valid)~label {
        transform: translateY(-50%) scale(.9);
        margin: 0em;
        padding: 0.4em;
        background: transparent;
        }

        .input textarea:focus ~ label,
        .input textarea:valid ~ label {
        transform: translateY(-50%) scale(.9);
        margin: 0em;
        padding: 0.4em;
        background: transparent;
        }

        .inputGroup :is(input:focus, input:valid) {
        border-color: rgb(37, 37, 211);
        }

        .form button {
        color: #e8e8e8;
        font-size: 15px;
        align-self: flex-start;
        padding: 0.6em;
        border: none;
        cursor: pointer;
        margin-bottom: 50px;
        background: transparent;
        transition: all 0.3s ease-in-out;
        position: relative;
        overflow: hidden;
        }

        .form button:before {
        content: "";
        position: absolute;
        bottom: 100%;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #e8e8e8;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        }

        .form button:hover:before {
        opacity: 0.2;
        }

        .form button:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
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
            width: 20px;
            height: 20px;
        }
        .hero .about-me{
            width: 100%;
            padding: 1.5rem;
            color: #000;
        }
        .hero .about-me .text p{
            font-family: 'Nunito', sans-serif; 
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
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 1rem;
        }
        .hero .achivment .carousel .card,
        .hero .projects .carousel .card{
            width: 300px;
            max-width: 300px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
            overflow: hidden;
            transition: transform 0.3s ease-in-out;
            z-index: 1;
            background-color: #fff;
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
</style>