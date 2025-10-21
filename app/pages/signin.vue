<template>
    <div class="h-screen w-screen flex flex-col items-center justify-end">
        <div id="menu"
            class="flex flex-col items-center justify-start h-3/4 w-screen border-2 border-white/60 bg-white/40 rounded-t-xl">
            <h1 class="text-6xl pb-16 pt-8">WELCOME<br>BACK</h1>
            <form id="form" class="w-3/4">
                <input name="email" autocomplete="email" required value="virgile.bigare@gmail.com" readonly type="email"
                    placeholder="Email" class="border-b-2 pb-2 my-4 outline-none w-full placeholder-white">
                <input name="password" autocomplete="password" required type="password" placeholder="Password"
                    class="border-b-2 pb-2 my-4 outline-none w-full placeholder-white">
                <button class="w-full py-2 bg-white text-black rounded-xl">
                    CONTINUER
                </button>
            </form>

        </div>
    </div>
</template>