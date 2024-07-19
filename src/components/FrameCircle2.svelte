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
        <a target="_blank" href={lien} class="button">{button} </a>
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
        .button {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: var(--CTA);
                padding: 20px;
                border-radius: 10px;
                transition: 0.3s ease-in-out;
                color: white;
                box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.215);
                min-width: 150px;
                font-weight: 500;
           
        }
        .button:hover {
                background-color: var(--CTA);
                transform: scale(1.1);
        }
        .button:active {
               border: 2px solid  lightGrey;
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
