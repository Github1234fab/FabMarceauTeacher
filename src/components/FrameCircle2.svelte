<script>
        export let icon;
        export let title;
        export let paragraph;
        export let button;
        export let lien;
</script>

<div class="frame-circle">
        <div class="circle"><img src={icon} alt="" class="icon" /></div>
        <h1>{title}</h1>
        <p>{paragraph}</p>
        <a target="_blank" href={lien} class="btn-grad">{button} </a>
</div>

<style>
        .frame-circle {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 50px;
                min-height: 600px;
                border: 1px solid var(--CTA);
                border-radius: 20px;
                padding: 40px;
;        }
             .btn-grad {
                background-color: rgb(140, 140, 241);
        }

        .btn-grad {
                margin: 10px;
                padding: 15px 45px;
                text-align: center;
                transition: 0.5s;
                background-size: 200% auto;
                color: white;
                font-weight: 700;
                box-shadow: 0 0 20px #2b2b2b2f;
                border-radius: 10px;
                display: block;
                border: 1px solid white;
        }

        .btn-grad:hover {
                border-radius: 20px;
        }
        a {
                text-decoration: none;
                color: white;
        }

        .circle {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 80px;
                height: 80px;
                border-radius: 50%;
                border: 1px solid var(--CTA);
        }
        .frame-circle h1 {
                color: rgb(31, 29, 29);
                text-align: center;
                font-size: 1.5rem;
                font-weight: 600;
        }
        .frame-circle p {
                color: rgb(31, 29, 29);
                text-align: center;
                font-size: 1rem;
                font-weight: 400;
                line-height: 25px;
                max-width: 200px;
                min-height: 150px;
        }

        @media screen and (max-width: 768px){
                   .frame-circle {
                gap: 20px;
                min-height: 400px;
        

        }
        }
</style>
