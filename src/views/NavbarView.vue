    <template>
    <div class="header">
        <div class="banner">
            <img src="../components/img/tkj.png" alt="logo" id="home">
        </div>
        <nav>
            <RouterLink to="/">Home</RouterLink >
            <RouterLink to="/about">About me</RouterLink >
            <RouterLink to="/achivment">Achivment</RouterLink >
            <RouterLink to="/portfolio">Portfolio</RouterLink >
            <RouterLink to="/contact">Contact us</RouterLink>
        </nav>
    </div>
    </template>

<style scoped>
    .header{
        width: 100%;
        height: 66px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ffffff;
        border-bottom: 2px solid #3887BE;
        position: fixed;
        top: 0;
        z-index: 99999;
    }
    .header nav{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 1rem;
        cursor: pointer;
    }
    .header nav a{
        color: black;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 12px;
        font-weight: 400;
        padding: 20px;
        text-decoration: none;
    }
    .header nav a:hover{
        color: rgb(32, 32, 176);
    }
    .header .banner{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
    }
        .header .banner img{
        width: 55px;
        height: 55px;
        object-fit: cover;
    }

@media only screen and (max-width: 728px){
    .header{
        width: 100%;
        height: 66px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ffffff;
        border-bottom: 2px solid #0000008f;
        position: fixed;
        top: 0;
        z-index: 99999;
    }
    .header nav{
        display: none;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 50px;
        flex-direction: column;
        gap: 1rem;
        cursor: pointer;
    }
    .header nav a{
        width: 100%;
        height: 100%;
        padding: 15px;
        color: black;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 18px;
        font-weight: 400;
        text-decoration: none;
    }
    .header nav a:hover{
        color: rgb(32, 32, 176);
    }
    .header .banner{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
    }
    .header .banner img{
        width: 55px;
        height: 55px;
        object-fit: cover;
    }
}
</style>
