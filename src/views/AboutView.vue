<template>
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
</template>

<style scoped>
        .about-me{
            text-align: center;
            width: 100%;
            height: 100%;
            padding: 4rem;
            color: #000000;
            /* background-image: url('/src/components/img/bg-white.png'); */
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }
        .about-me .wrapper-about{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 3rem;
            margin-top: 7rem;
        }
        .about-me h1{
            text-align: center;
        }
        .about-me .text{
            width: 800px;
            font-size: 20px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

</style>