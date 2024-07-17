<script>
        import Guitar from "../assets/stratocastorFour.png";

        let date = new Date().getFullYear();
</script>

<footer>
        <img src={Guitar} alt="logo" class="img" />
        <h3>Tous droits réservés fabien Marceau {date}</h3>
</footer>

<style>
        footer {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background-color: #49494c;
                color: white;
                height: 200px;
        }
        footer h3 {
                font-size: 1rem;
                font-weight: 300;
                margin-top: 20px;
                text-align: center;
        }
        .img {
                height: 70px;
                width: 70px;
        }
</style>
