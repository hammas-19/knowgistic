<style scoped>
@keyframes progress {
    0% {
        --percentage: 0;
    }

    100% {
        --percentage: var(--value);
    }
}

@property --percentage {
    syntax: "<number>";
    inherits: true;
    initial-value: 0;
}

[role="progressbar"] {
    --percentage: var(--value);
    --primary: #5F30E2;
    --secondary: #e5e5e5ae;
    /* --size: 180px; */
    animation: progress 2s 0.5s forwards;
    width: var(--size);
    aspect-ratio: 1;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    display: grid;
    place-items: center;
}

[role="progressbar"]::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: conic-gradient(#5F30E2, #d4cbf1 calc(var(--percentage) * 1%),
            var(--secondary) 0);
    mask: radial-gradient(white 55%, transparent 0);
    mask-mode: alpha;
    -webkit-mask: radial-gradient(#0000 55%, #000 0);
    -webkit-mask-mode: alpha;
}

[role="progressbar"]::after {
    counter-reset: percentage var(--value);
    content: counter(percentage) "%";
}

</style>
<template>
        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" style="--value: 67" class="max-h-44 text-4xl"></div>
</template>