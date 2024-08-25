<template>
    <div class="achivment">
            <div class="carousel">

                <div v-for="card in cards" :key="card.id" class="card">
                    <img :src="card.imageUrl" alt="Card Image">
                    <div class="card-body">
                        <h3>{{ card.title }}</h3>
                        <p>{{ card.description }}</p>
                    </div>
                </div>
                
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#FCEDE6" fill-opacity="1" d="M0,192L34.3,186.7C68.6,181,137,171,206,181.3C274.3,192,343,224,411,218.7C480,213,549,171,617,160C685.7,149,754,171,823,160C891.4,149,960,107,1029,80C1097.1,53,1166,43,1234,58.7C1302.9,75,1371,117,1406,138.7L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z">
            </path>
        </svg>
</template>

<script>
    export default{
        data() {
            return {
                cards: [
<<<<<<< HEAD
                    { id: 1, imageUrl: '../src/components/img/achivment/achiv.jpeg',title: 'Juara 1 Algoritma Kompetisi Pemrograman C/C++', description: 'Universitas Budi Luhur' },
                    { id: 2, imageUrl: '../src/components/img/achivment/achiv2.jpg',title: 'Peserta Lomba CSS E-Sports Battle WPU EVENT OF THE YEAR', description: 'Universitas Pasundan Bandung' },
                    { id: 3, imageUrl: '../src/components/img/achivment/achiv3.jpg',title: 'AWS Cloud Competition For Sagasitas Tech 2024', description: 'AWS Sagasitas For Tech 2024' },
                    { id: 4, imageUrl: '../src/components/img/achivment/achiv4.jpg',title: 'Praktik Kerja Lapangan Komisi Pemilihan Umum Kota Jakarta Barat', description: 'Komisi Pemilihan Umum'},
                    { id: 5, imageUrl: '../src/components/img/achivment/achiv5.jpg',title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software', description: 'Dicoding Indonesia' },
                    { id: 6, imageUrl: '../src/components/img/achivment/achiv6.jpg',title: 'Belajar Dasar Structured Query Language ( SQL )' , description: 'Dicoding Indonesia'},
                    { id: 7, imageUrl: '../src/components/img/achivment/achiv7.jpg',title: 'Belajar Dasar AI (Artificial Intelligence)', description: 'Dicoding Indonesia' },
                    { id: 8, imageUrl: '../src/components/img/achivment/achiv8.jpg',title: 'Memulai Pemrograman dengan Python', description: 'Dicoding Indonesia' },
                    { id: 9, imageUrl: '../src/components/img/achivment/achiv9.jpg',title: 'Memulai Pemrograman dengan C', description: 'Dicoding Indonesia'},
                    { id: 10, imageUrl:'../src/components/img/achivment/achiv10.jpg',title: 'Dicoding Developer Coaching #103', description: 'Dicoding Indonesia'},
                    { id: 11, imageUrl:'../src/components/img/achivment/achiv11.jpg',title: 'Javascript 10 Projects for Beginner', description: 'Udemy Course'},
=======
                    { id: 1, imageUrl: './src/assets/achivment/achiv.jpeg',title: 'Card 1', description: 'Deskripsi card 1' },
                    { id: 2, imageUrl: './src/assets/achivment/achiv2.jpg',title: 'Card 2', description: 'Deskripsi card 2' },
                    { id: 3, imageUrl: './src/assets/achivment/achiv4.jpg',title: 'Card 3', description: 'Deskripsi card 3' },
                    { id: 4, imageUrl: './src/assets/achivment/achiv5.jpg',title: 'Card 4', description: 'Deskripsi card 4' },
                    { id: 5, imageUrl: './src/assets/achivment/achiv3.jpg',title: 'Card 5', description: 'Deskripsi card 5' },
                    { id: 6, imageUrl: './src/assets/achivment/achiv6.jpg',title: 'Card 6', description: 'Deskripsi card 6' },
                    { id: 7, imageUrl: './src/assets/achivment/achiv7.jpg',title: 'Card 7', description: 'Deskripsi card 7' },
                    { id: 8, imageUrl: './src/assets/achivment/achiv8.jpg',title: 'Card 8', description: 'Deskripsi card 8' },
                    { id: 9, imageUrl: './src/assets/achivment/achiv9.jpg',title: 'Card 9', description: 'Deskripsi card 8' },
                    { id: 10, imageUrl: './src/assets/achivment/achiv10.jpg',title: 'Card 10', description: 'Deskripsi card 8' },
>>>>>>> 31a45e598fc25d911232e12b6467f46766ba9d15
                ],
            }
        }
    }
</script>

<style scoped>
     .achivment{
            background-color: #FCEDE6;
            color: #fff;
            width: 100%;
            height: 100%;
            padding-top: 10rem;
        }
         .achivment h1{
            margin-bottom: 1.5rem;
        }
         .achivment .text p{
            font-family: 'Nunito', sans-serif;
            color: gainsboro;
        }
         .achivment .carousel,
         .projects .carousel{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            color: #000;
            gap: 1rem;
        }
         .achivment .carousel .card,
         .projects .carousel .card{
            width: 300px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
            overflow: hidden;
            transition: transform 0.3s ease-in-out;
            z-index: 1;
            background-color: #fff;
        }
        .achivment .carousel .card .card-title,
        .projects .carousel .card .card-title{
            width: 100%;
            font-size: 15px;
            padding: 20px;
            font-weight: 400;
        }
        .achivment .carousel .card .card-desc,
        .projects .carousel .card .card-desc{
            padding: 10px;
            font-weight: 500;
        }
         .achivment .carousel .card:hover,
         .projects .carousel .card:hover{
            transform: scale(1.1);
            transition: 0.3s all ease;
            z-index: 1;
        }
         .projects .carousel .card{
            background-color: #EBE3D5;
        }
         .achivment .carousel .card img,
         .projects .carousel .card img{
            width: 300px;
            height: 200px;
            object-fit: cover;
        }
</style>