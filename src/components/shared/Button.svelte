<script>
    /**
     * @type {string}
     */
    export let title;
    /**
     * @type {string}
     */
    export let className;
</script>

<button
    class={"rounded-[8px] font-poppins text-xs hover:scale-95 duration-300 h-[32px] px-[15px] grid place-items-center " +
        className}
    on:click
>
    {title}
</button>
