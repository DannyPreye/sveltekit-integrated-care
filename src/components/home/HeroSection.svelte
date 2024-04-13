<script>
    import doctorHero from "$lib/assets/doctors.webp";
    import Button from "../shared/Button.svelte";
</script>

<section
    class="relative h-[514px] items-center justify-center flex flex-col gap-4"
>
    <img
        src={doctorHero}
        alt="doctors hero"
        class="absolute top-0 w-full h-full object-cover"
    />
    <div class="relative flex flex-col items-center gap-[56px]">
        <div class="text-center">
            <h1
                class="text-2xl md:text-4xl font-bold text-white font-montserrat"
            >
                Integrated Patient Data for Improved <span
                    class="text-secondary">Healthcare</span
                >
            </h1>
            <p class="md:text-xl text-white">Accessible anywhere, anytime</p>
        </div>
        <Button
            title="Get Started"
            className="bg-secondary px-5 max-w-[240px] w-full h-[40px] font-lato text-base text-white"
        />
    </div>
</section>
