<script>
        import Guitar from "../assets/stratocastorThree.png";

        let date = new Date().getFullYear();
</script>

<footer>
        <div class="footer">
                <img src={Guitar} alt="logo" class="img" />
                <h3>Tous droits réservés fabien Marceau @ {date}</h3>
                <!-- <div class="footer__links">
                        <a class="link" href="/">Mentions légales</a>
                        <a class="link" href="/">CGV</a>
                        <a class="link" href="/">Contact</a>
                </div>
                <div class="footer__social">
                        <a href="/"><i class="fab fa-facebook-f"></i></a>
                        <a href="/"><i class="fab fa-instagram"></i></a>
                        <a href="/"><i class="fab fa-twitter"></i></a>
                </div> -->
        </div>
</footer>

<style>
        footer {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 50px;
                background-color: #49494c;
                color: white;
        }
        .footer h3 {
                font-size: 1rem;
                font-weight: 300;
                margin-top: 20px;
                text-align: center;
        }
        .img {
                height: 200px;
                align-self: center;
                justify-self: center;
                margin-left: 55px;
        }
        /* .footer__links {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 20px;
        }
        .link {
                text-decoration: none;
                color: white;
                font-weight: 400;
                font-size: 1rem;
                transition: 0.4s ease-in-out;
        } */
</style>
