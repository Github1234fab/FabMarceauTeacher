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
      .btn-grad {background-image: linear-gradient(to right, #EB3349 0%, #F45C43  51%, #EB3349  100%)}
         .btn-grad {
            margin: 10px;
            padding: 15px 25px;
            text-align: center;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px rgba(37, 37, 37, 0.329);
            border-radius: 10px;
            display: block;
            max-width: 150px;
            border: none;
          }

          .btn-grad:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
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
