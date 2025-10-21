<template>
    <div class="h-screen w-screen flex flex-col items-center justify-end">
        <div id="menu"
            class="flex flex-col items-center justify-start h-3/4 w-screen border-2 border-white/60 bg-white/40 rounded-t-xl">
            <h1 class="text-4xl pb-16 pt-8">WELCOME</h1>
            <form id="form" class="w-3/4">
                <input name="email" autocomplete="email" type="email" placeholder="Email"
                    class="border-b-2 pb-2 my-4 outline-none w-full placeholder-white"></input>
                <button class="w-full py-2 bg-white text-black rounded-xl">
                    CONTINUE
                </button>
            </form>
            <div class="w-3/4 py-8 flex flex-row items-center justify-between">
                <span class="border-b-2 border-white/60 w-1/3"></span>
                <span class="w-1/3 text-center">OR</span>
                <span class="border-b-2 border-white/60 w-1/3"></span>
            </div>
            <button class="w-3/4 py-2 bg-white text-black rounded-xl flex items-center justify-center gap-2">
                <nuxt-img src="/img/google-icon.png" alt="Google" class="w-6 h-6" />
                CONTINUE WITH GOOGLE
            </button>
        </div>
    </div>
</template>