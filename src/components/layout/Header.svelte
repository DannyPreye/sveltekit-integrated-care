<script>
    import { page } from "$app/stores";
    import Button from "../shared/Button.svelte";
    import { goto } from "$app/navigation";

    let pathname = $page.url.pathname;
    let openNav = false;

    const handleOpenNav = () => {
        openNav = !openNav;
    };

    let navItems = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "About Us",
            link: "/about",
        },
        {
            title: "Our Services",
            link: "/service",
        },
        {
            title: "Contact Us",
            link: "/contact",
        },
    ];

    const handleKeyDown = () => {};
</script>

<header class="bg-primary pt-5">
    <div
        class="flex items-center px-4 container mx-auto justify-between bg-white py-6"
    >
        <a href="/" class="font-bold font-montserrat text-2xl"
            >Integrated<span class="text-secondary">Care</span></a
        >
        <div class="hidden md:flex items-center gap-4">
            {#each navItems as item}
                <a
                    class={"font-lato font-[500] hover:text-secondary duration-200 text-[16px] grid gap-[2px] leading-[24px] relative"}
                    href={item.link}
                >
                    <span class={pathname === item.link ? "text-secondary" : ""}
                        >{item.title}</span
                    >
                    <span
                        class={"w-full h-[2px] bg-secondary " +
                            (pathname === item.link ? "block" : "hidden")}
                    ></span>
                </a>
            {/each}
        </div>
        <div class="hidden md:flex gap-4 items-center">
            <Button
                on:click={() => goto("/auth/login")}
                title="Login"
                className="border-2 text-secondary border-secondary"
            />
            <Button
                on:click={() => goto("/auth/register")}
                title="Register"
                className="bg-secondary text-white"
            />
        </div>

        <button
            on:click={handleOpenNav}
            class="py-2 px-4 rounded-md md:hidden hover:shadow-md cursor-pointer duration-500 hover:bg-gray-200"
        >
            <i class="fa-solid fa-bars"></i>
        </button>
    </div>
</header>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<aside
    on:click={handleOpenNav}
    class={"fixed h-screen w-screen duration-500 bg-black/50 backdrop-blur-sm top-0 shadow-md " +
        (openNav ? "leff-0" : " -left-full")}
>
    <div class="flex bg-gray-200 h-full"></div>
</aside>
