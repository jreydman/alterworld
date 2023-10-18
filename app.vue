<template lang="pug">
div(class=`bg-main-wallpaper bg-no-repeat bg-cover bg-center w-full h-screen fixed place-content-center grid grid-cols-5 gap-5`)
  div(class=`col-start-2 col-span-3 flex flex-col items-center`)
    - const logotypeText = 'ALTERWORLD'
    div(before=`${logotypeText}` after="" class=`text-4xl font-semibold z-10 text-white 
      before:absolute before:content-[attr(before)] before:-mt-[1px] before:bg-logotype-overlay before:bg-no-repeat before:bg-cover before:bg-clip-text before:text-transparent
      after:absolute after:content-[attr(after)] after:opacity-10 after:bg-white after:w-3 after:h-10 after:-ml-2`) #{logotypeText}
    div test
    div(class=`w-full h-3/5 absolute m-auto inset-0 bg-white blur-[200px] opacity-10 mix-blend-color-white rounded-full animate-bright-flicker`)
</template>

<style lang="scss" scoped>
</style>