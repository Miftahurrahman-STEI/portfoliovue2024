<template>
    <footer class="footer">
        <div class="waves">
            <div class="wave" id="wave1"></div>
            <div class="wave" id="wave2"></div>
            <div class="wave" id="wave3"></div>
            <div class="wave" id="wave4"></div>
        </div>
        <ul class="social_icon">
            <li><a href="#https://github.com/Miftahurrahman-STEI"><ion-icon name="logo-github"></ion-icon></a></li>
            <li><a href="#https://www.linkedin.com/in/muhammad-miftahurrahman-708633259/"><ion-icon name="logo-linkedin"></ion-icon></a></li>
            <li><a href="#https://www.instagram.com/mippvue/"><ion-icon name="logo-instagram"></ion-icon></a></li>
        </ul>
        <p>@2024 Miftahurrahman | All Rights Reserved</p>
    </footer>
</template>

<style setup>
        footer{
            position: relative;
            width: 100%;
            background: #3586ff;
            min-height: 100px;
            padding: 20px 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 7rem;
            flex-direction: column;
            justify-content: flex-end;
            z-index: -1;
        }
        footer .social_icon{
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 10px 0;
        }
        footer .social_icon li{
            list-style: none;
        }
        footer .social_icon li a{
            font-size: 2em;
            color: #fff;
            margin: 0 10px;
            display: inline-block;
            transition: 0.5s;
            cursor: pointer;
        }
        footer .social_icon li a:hover{
            transform: translateY(-10px);
        }
        footer .menu li a{
            font-size: 1.2em;
            color: #fff;
            margin: 0 10px;
            display: inline-block;
            text-decoration: none;
        }
        footer .menu li a:hover{
            opacity: 1;
        }
        footer p{
            color: #fff;
            text-align: center;
            margin-top: 15px;
            margin-bottom: 10px;
            font-size: 1.1em;
        }
        footer .wave{
            position: absolute;
            top: -100px;
            left: 0;
            width: 100%;
            height: 100px;
            background: url('public/img/wave.png');
            background-size: 1000px 100px;
        }
        footer .wave#wave1{
            z-index: 1000;
            opacity: 1;
            bottom: 0;
            animation: animateWave 4s linear infinite;
        }
        footer .wave#wave2{
            z-index: 999;
            opacity: 0.5;
            bottom: 10px;
            animation: animateWave_02 4s linear infinite;
        }
        footer .wave#wave3{
            z-index: 1000;
            opacity: 1;
            bottom: 0;
            animation: animateWave 4s linear infinite;
        }
        footer .wave#wave4{
            z-index: 999;
            opacity: 0.5;
            bottom: 10px;
            animation: animateWave_02 4s linear infinite;
        }
        @keyframes animateWave{
            0%{
                background-position-x: 1000px;
            }
            100%{
                background-position-x: 0px;
            }
        }
        @keyframes animateWave_02{
            0%{
                background-position-x: 0px;
            }
            100%{
                background-position-x: 1000px;
            }
        }
</style>
