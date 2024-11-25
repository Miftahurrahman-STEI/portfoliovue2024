<template>
     <div class="achivment">
            <h1>Achievement</h1>
            <div class="carousel"
                v-motion
                :initial="{ opacity: 0, y: 10 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
            >

                <div class="card">
                    <img src="/dist/achivment/achiv.jpeg" />
                    <div class="card-body">
                        <h3>Juara 1 Algoritma Kompetisi Pemrograman C/C++</h3>
                        <p>Universitas Budi Luhur</p>
                    </div>
                </div>
                <div class="card">
                    <img src="/dist/achivment/achiv2.jpg" />
                    <div class="card-body">
                        <h3>Peserta Lomba CSS E-Sports Battle WPU EVENT OF THE YEAR</h3>
                        <p>Universitas Pasundan Bandung</p>
                    </div>
                </div>
                <div class="card">
                    <img src="/dist/achivment/achiv4.jpg" />
                    <div class="card-body">
                        <h3>AWS Cloud Competition For Sagasitas Tech 2024</h3>
                        <p>AWS Sagasitas For Tech 2024</p>
                    </div>
                </div>
                <div class="card">
                    <img src="/dist/achivment/achiv5.jpg" />
                    <div class="card-body">
                        <h3>Praktik Kerja Lapangan Komisi Pemilihan Umum</h3>
                        <p>Komisi Pemilihan Umum</p>
                    </div>
                </div>
                <div class="card">
                    <img src="/dist/achivment/achiv3.jpg" />
                    <div class="card-body">
                        <h3>Memulai Dasar Pemrograman untuk Menjadi Pengembang Software</h3>
                        <p>Dicoding Indonesia</p>
                    </div>
                </div>
                <div class="card">
                    <img src="/dist/achivment/achiv9.jpg" />
                    <div class="card-body">
                        <h3>Belajar Dasar Structured Query Language ( SQL )</h3>
                        <p>Dicoding Indonesia</p>
                    </div>
                </div>
                <div class="card">
                    <img src="/dist/achivment/achiv7.jpg" />
                    <div class="card-body">
                        <h3>Belajar Dasar AI (Artificial Intelligence)</h3>
                        <p>Dicoding Indonesia</p>
                    </div>
                </div>
                <div class="card">
                    <img src="/dist/achivment/achiv8.jpg" />
                    <div class="card-body">
                        <h3>Memulai Pemrograman dengan Python</h3>
                        <p>Dicoding Indonesia</p>
                    </div>
                </div>
                <div class="card">
                    <img src="/dist/achivment/achiv11.jpg" />
                    <div class="card-body">
                        <h3>Memulai Pemrograman dengan C</h3>
                        <p>Dicoding Indonesia</p>
                    </div>
                </div>
                <div class="card">
                    <img src="/dist/achivment/achiv6.jpg" />
                    <div class="card-body">
                        <h3>Dicoding Developer Coaching #103</h3>
                        <p>Dicoding Indonesia</p>
                    </div>
                </div>
                <div class="card">
                    <img src="/dist/achivment/achiv10.jpg" />
                    <div class="card-body">
                        <h3>Javascript 10 Projects for Beginner</h3>
                        <p>Udemy Course</p>
                    </div>
                </div>

            </div>
        </div>
</template>

<style scoped>
         .achivment{
            color: #fff;
            width: 100%;
            height: 100%;
            padding-top: 10rem;
        }
        
         .achivment h1{
            margin-bottom: 1.5rem;
            text-align: center;
            color: #000;
            font-weight: bold
        }
         .achivment .text p{
            font-family: 'Nunito', sans-serif;
            color: gainsboro;
        }
         .achivment .carousel{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            color: #000;
            gap: 1rem;
        }
         .achivment .carousel .card{
            width: 300px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
            overflow: hidden;
            transition: transform 0.3s ease-in-out;
            z-index: 1;
            background-color: #fff;
        }
        .achivment .carousel .card .card-body,
        .projects .carousel .card .card-body{
            padding: 10px;
            font-weight: 500;
        }
        .achivment .carousel .card .card-body p,
        .projects .carousel .card .card-body p{
            padding: 10px;
            font-weight: 500;
        }
         .achivment .carousel .card .card-desc{
            padding: 10px;
            font-weight: 500;
        }
         .achivment .carousel .card:hover{
            transform: scale(1.1);
            transition: 0.3s all ease;
            z-index: 1;
        }
         .achivment .carousel .card img{
            width: 300px;
            height: 200px;
            object-fit: cover;
        }
</style>