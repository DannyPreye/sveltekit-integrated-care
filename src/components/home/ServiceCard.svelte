<script>
    /**
     * @type {{ icon: any; title: any; paragraph: any; }}
     */
    export let service;
</script>

<div
    class="px-[20px] py-[30px] rounded-[8px] bg-white w-full max-w-[350px] flex flex-col items-center gap-[8px]"
>
    <div class="grid size-[77px] rounded-full bg-secondary place-items-center">
        <img src={service.icon} alt="" />
    </div>
    <h5 class="font-montserrat font-[600] text-xl text-center">
        {service.title}
    </h5>
    <p class="text-center text-sm font-[500]">{service.paragraph}</p>
</div>
