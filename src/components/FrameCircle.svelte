<script>
        export let icon;
        export let title;
        export let paragraph;
</script>

<div class="frame-circle">
        <div class="circle"><img src={icon} alt="" class="icon" /></div>
        <h1>{title}</h1>
        <p>{paragraph}</p>
</div>

<style>
        .frame-circle {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 20px;
                width: 100vw;
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
                top: 20px;
                color: rgb(31, 29, 29);
                text-align: center;
                font-size: 1.5rem;
                font-weight: 600;
        }
        .frame-circle p {
                top: 150px;
                color: rgb(31, 29, 29);
                text-align: center;
                font-size: 1rem;
                font-weight: 400;
                line-height: 25px;
                width: 70%;
        }
</style>
