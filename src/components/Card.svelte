<script>
        export let title;
</script>

<div class="wrapper-card">
        <h1>{title}</h1>
</div>

<style>
        .wrapper-card {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 10px;
                box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.711);
                padding: 10px;
                border: 1px solid rgb(223, 198, 198);
                border-radius: 8px;
                max-width: 200px;
                min-width: 170px;
                min-height: 100px;
                flex: 1 1 10%;
                background-color: transparent;
        }

        .wrapper-card h1 {
                color: var(--bgHeader);
                text-align: center;
                color: var(--white);
                font-size: 0.97rem;
                font-weight: 600;
                text-transform: uppercase;
                font-family: "DM sans";
        }

        @media screen and (max-width: 1375px) {
                .wrapper-card {
                        max-width: 170px;
                        min-width: 170px;
                        min-height: 100px;
                        flex: 1 1 20%;
                }
        }

        @media screen and (max-width: 768px) {
                .wrapper-card {
                        min-width: 250px;
                        max-height: 200px;
                }
        }
</style>
