<script>
        import Guitar from "../assets/stratocastorFour.png";

        let date = new Date().getFullYear();
</script>

<footer>
        <img src={Guitar} alt="logo" class="img" />
        <h3>Tous droits réservés fabien Marceau {date}</h3>
        <a href="https://www.ecole-musique-lyon-issetys.com/">École de musique issétys</a>
        <a href="https://www.ecole-guitare-lyon.fr/">École de guitare de lyon</a>
        <a href="https://gralypho.com/">Gralypho</a>
</footer>

<style>
        footer {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background-color: #151523;
                color: white;
                height: auto;
                padding: 40px;
        }
        footer h3 {
                font-size: 1rem;
                font-weight: 300;
                margin-top: 20px;
                text-align: center;
                margin-bottom: 30px;
        }
        .img {
                height: 70px;
                width: 70px;
        }
        a {
                color: rgb(205, 205, 238);
          
        }
</style>
