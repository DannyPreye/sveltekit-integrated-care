<script>
    import streamline from "$lib/assets/no-access.webp";
    import connected from "$lib/assets/connection.webp";
    import informedDecision from "$lib/assets/decision.webp";
    import enhanced from "$lib/assets/efficiency.webp";
    import ServiceCard from "./ServiceCard.svelte";
    let services = [
        {
            icon: streamline,
            title: "Streamlined Access",
            paragraph:
                "Instant access to comprehensive patient information for healthcare professionals.",
        },
        {
            icon: connected,
            title: "Connected Care",
            paragraph:
                "Bridging the gaps between hospitals to ensure a unified and collaborative approach.",
        },
        {
            icon: informedDecision,
            title: "Informed Decision-Making",
            paragraph:
                "Empowering doctors with the data they need for precise and timely decisions.",
        },
        {
            icon: enhanced,
            title: "Enhanced Efficiency",
            paragraph:
                "Streamlining processes for improved healthcare delivery.",
        },
    ];
</script>

<section class="bg-[#F5F7FA]">
    <div class="container mx-auto gap-14 p-4 py-12 flex flex-col items-center">
        <div class="text-center">
            <h4 class="text-secondary font-montserrat font-[600] text-lg">
                What we offer
            </h4>
            <h2 class="text-3xl font-[600] text-primary-gray">
                Improved Quality of Healthcare
            </h2>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-[33px]">
            {#each services as service, index}
                <ServiceCard {service} />
            {/each}
        </div>
    </div>
</section>
