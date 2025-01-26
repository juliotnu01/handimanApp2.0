<template>
    <ion-app>
        <ion-menu menu-id="menu-izquierda" content-id="main-content-cliente">
            <ion-content class="ion-padding">
                <ion-list>
                    <ion-item>
                        <ion-label>Home</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-label>Profile</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-label>Logout</ion-label>
                    </ion-item>
                </ion-list>
            </ion-content>
        </ion-menu>
        <ion-page id="main-content-cliente">
            <ion-content class="scrollable  ">
                <!-- menu superior -->
                <div class="w-full h-20 p-4 flex justify-between items-center gap-2">
                    <button @click="openMenuIzquierda"
                        class="bg-gray-200 w-12 h-10 min-w-12 rounded-lg text-center shadow-lg flex justify-center items-center">
                        <svg width="25px" height="25px" viewBox="0 0 20 20" fill="none">
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z" />
                        </svg>
                    </button>
                    <div class="flex items-center gap-4 p-2 bg-gray-100 rounded-lg shadow-sm">
                        <div class="flex flex-col">
                            <span class="text-lg font-semibold">John Doe</span>
                        </div>
                        <div class="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
                            <img alt="Silhouette of a person's head"
                                src="https://ionicframework.com/docs/img/demos/avatar.svg"
                                class="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
                <ion-item class="w-[97%] h-fit self-center rounded-lg shadow-lg border-solid border-[1px] mx-auto  ">
                    <ion-select justify="end" label="Dirección de Envio" class="text-sm text-purple-800 font-medium" interface="popover">
                        <ion-select-option v-for="i in 3" :key="'address' + i" :value="'address' + i"
                            class="text-xs text-blue-600 hover:bg-purple-100">
                            {{ `Address ${i}: ${Math.floor(Math.random() * 1000)} Main St, City ${i}, Country` }}
                        </ion-select-option>
                    </ion-select>
                </ion-item>
                <div class="w-[97%] h-fit self-center rounded-lg shadow-lg border-solid border-[1px] mx-auto my-4">
                    <input type="text" placeholder="Buscar" class="w-full h-10 p-2 rounded-lg dark:text-white" />
                </div>
                <!-- fin menu superior -->
                <!-- categorias -->
                <div class="flex flex-col gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide p-2">
                    <div class="sticky top-0 left-0 bg-white z-10 px-2 flex justify-between">
                        <p class="font-bold">Categorías</p>
                        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" class=" self-center ">
                            <g id="style=fill">
                                <g id="filter-circle">
                                    <path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M7.75 17.5C7.75 17.0858 7.41421 16.75 7 16.75H2C1.58579 16.75 1.25 17.0858 1.25 17.5C1.25 17.9142 1.58579 18.25 2 18.25H7C7.41421 18.25 7.75 17.9142 7.75 17.5Z"
                                        fill="#000000" />
                                    <path id="vector (Stroke)_2" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M16.25 6.5C16.25 6.08579 16.5858 5.75 17 5.75H22C22.4142 5.75 22.75 6.08579 22.75 6.5C22.75 6.91421 22.4142 7.25 22 7.25H17C16.5858 7.25 16.25 6.91421 16.25 6.5Z"
                                        fill="#000000" />
                                    <path id="vector (Stroke)_3" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M22.75 17.5C22.75 17.0858 22.4142 16.75 22 16.75H13C12.5858 16.75 12.25 17.0858 12.25 17.5C12.25 17.9142 12.5858 18.25 13 18.25H22C22.4142 18.25 22.75 17.9142 22.75 17.5Z"
                                        fill="#000000" />
                                    <path id="vector (Stroke)_4" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M1.25 6.5C1.25 6.08579 1.58579 5.75 2 5.75H11C11.4142 5.75 11.75 6.08579 11.75 6.5C11.75 6.91421 11.4142 7.25 11 7.25H2C1.58579 7.25 1.25 6.91421 1.25 6.5Z"
                                        fill="#000000" />
                                    <path id="vector (Stroke)_5" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M13.75 17.3999C13.75 15.3288 12.0711 13.6499 10 13.6499C7.92893 13.6499 6.25 15.3288 6.25 17.3999C6.25 19.471 7.92893 21.1499 10 21.1499C12.0711 21.1499 13.75 19.471 13.75 17.3999Z"
                                        fill="#000000" />
                                    <path id="vector (Stroke)_6" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M10.25 6.3999C10.25 4.32883 11.9289 2.6499 14 2.6499C16.0711 2.6499 17.75 4.32883 17.75 6.3999C17.75 8.47097 16.0711 10.1499 14 10.1499C11.9289 10.1499 10.25 8.47097 10.25 6.3999Z"
                                        fill="#000000" />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div class="flex space-x-5 my-2">
                        <div v-for="(item, i) in items" :key="i"
                            class="w-14 h-14 rounded-full bg-gray-200 flex flex-col items-center justify-end text-[10px] shrink-0 p-1 relative">
                            <img :src="item.image" alt="" class="w-full h-full object-cover rounded-full">
                            <span
                                class="absolute bg-white -bottom-4 left-1/2 transform -translate-x-1/2 bg-opacity-75 px-1 rounded text-center whitespace-normal w-full break-words">{{
                                    item.title }}</span>
                        </div>
                    </div>
                </div>
                <!-- fin categorias -->
                <!-- productos -->
                <div class="flex flex-col gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide p-2">
                    <div class="sticky top-0 left-0 bg-white z-10 px-2 flex justify-between">
                        <p class="font-bold">Productos</p>
                    </div>
                    <div class="flex space-x-4 mt-2">
                        <div class="bg-gray-200 w-full max-w-60 break-words text-wrap rounded-xl relative"
                            v-for="(item, index) in items" :key="index">
                            <div class="w-60 h-60 bg-gray-400 flex items-center justify-center text-[10px] shrink-0 ">
                                <img :src="item.image" alt="" class="w-full h-full object-cover">
                            </div>
                            <div class="absolute top-2 right-2 flex flex-col gap-2">
                                <button class=" px-2  rounded-lg flex items-center">
                                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="#000">
                                        <circle cx="12" cy="12" r="10" />
                                    </svg>
                                </button>
                                <button class=" px-2 rounded-lg flex items-center" @click="setOpen(true)">
                                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" class="">
                                        <path
                                            d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                                            stroke="currentColor" stroke-width="2" />
                                        <path
                                            d="M6.94975 7.05025C9.68342 4.31658 14.1156 4.31658 16.8492 7.05025L18.9706 9.17157C20.3039 10.5049 20.9706 11.1716 20.9706 12C20.9706 12.8284 20.3039 13.4951 18.9706 14.8284L16.8492 16.9497C14.1156 19.6834 9.68342 19.6834 6.94975 16.9497L4.82843 14.8284C3.49509 13.4951 2.82843 12.8284 2.82843 12C2.82843 11.1716 3.49509 10.5049 4.82843 9.17157L6.94975 7.05025Z"
                                            stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <div class="flex flex-wrap gap-2 p-2">
                                    <span
                                        class="bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-2xl">Nuevo</span>
                                    <span
                                        class="bg-green-200 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-2xl">Oferta</span>
                                    <span
                                        class="bg-red-200 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-2xl">Popular</span>
                                    <span
                                        class="bg-purple-200 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-2xl">Categoría</span>
                                </div>
                            </div>
                            <div class="flex items-center self-center px-1">
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="#000">
                                    <path
                                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                </svg>
                                <span class="ml-1 text-sm font-semibold">4.9 (1.2K+ reviews)</span>
                            </div>
                            <div class="p-2">
                                <p class="font-bold text-wrap">Producto </p>
                                <p class="text-sm line-clamp-3">Lorem ipsum dolor sit amet consectetur, adipisicing
                                    elit...</p>
                            </div>
                            <div class="px-2 flex justify-between gap-2 ">
                                <p class="text-lg font-bold text-gray-800 line-clamp-1">$999.999,99</p>
                                <p class="text-sm line-through text-red-500 self-center line-clamp-1">$199.999,99</p>
                            </div>
                            <div class="flex justify-between items-center p-2">
                                <div class="flex flex-col items-center">
                                    <button class="bg-green-300 py-2 px-[30px] rounded-xl">
                                        <svg width="30px" height="30px" viewBox="0 0 1024 1024"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#000000"
                                                d="M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z" />
                                        </svg>
                                    </button>
                                    <span class="text-[12px] mt-2 font-bold">Agregar al carrito</span>
                                </div>
                                <div class="flex flex-col items-center">
                                    <button class="bg-orange-300 py-2 px-[30px] rounded-xl">
                                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.5 8.25H16.5V7.75C16.5 6.55653 16.0259 5.41193 15.182 4.56802C14.3381 3.72411 13.1935 3.25 12 3.25C10.8065 3.25 9.66193 3.72411 8.81802 4.56802C7.97411 5.41193 7.5 6.55653 7.5 7.75V8.25H4.5C4.16848 8.25 3.85054 8.3817 3.61612 8.61612C3.3817 8.85054 3.25 9.16848 3.25 9.5V18C3.25 18.7293 3.53973 19.4288 4.05546 19.9445C4.57118 20.4603 5.27065 20.75 6 20.75H18C18.7293 20.75 19.4288 20.4603 19.9445 19.9445C20.4603 19.4288 20.75 18.7293 20.75 18V9.5C20.75 9.16848 20.6183 8.85054 20.3839 8.61612C20.1495 8.3817 19.8315 8.25 19.5 8.25ZM9 7.75C9 6.95435 9.31607 6.19129 9.87868 5.62868C10.4413 5.06607 11.2044 4.75 12 4.75C12.7956 4.75 13.5587 5.06607 14.1213 5.62868C14.6839 6.19129 15 6.95435 15 7.75V8.25H9V7.75ZM19.25 18C19.25 18.3315 19.1183 18.6495 18.8839 18.8839C18.6495 19.1183 18.3315 19.25 18 19.25H6C5.66848 19.25 5.35054 19.1183 5.11612 18.8839C4.8817 18.6495 4.75 18.3315 4.75 18V9.75H7.5V12C7.5 12.1989 7.57902 12.3897 7.71967 12.5303C7.86032 12.671 8.05109 12.75 8.25 12.75C8.44891 12.75 8.63968 12.671 8.78033 12.5303C8.92098 12.3897 9 12.1989 9 12V9.75H15V12C15 12.1989 15.079 12.3897 15.2197 12.5303C15.3603 12.671 15.5511 12.75 15.75 12.75C15.9489 12.75 16.1397 12.671 16.2803 12.5303C16.421 12.3897 16.5 12.1989 16.5 12V9.75H19.25V18Z"
                                                fill="#000000" />
                                        </svg>
                                    </button>
                                    <span class="text-[12px] mt-2 font-bold">Comprar</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- fin productos -->
                <!-- servicios -->
                <div class="flex flex-col gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide p-2 ">
                    <div class=" top-0 left-0 bg-white  px-2 flex justify-between">
                        <p class="font-bold">Servicios</p>
                    </div>
                    <div class="flex space-x-4 mt-2">
                        <div class="bg-gray-200 w-full max-w-full flex rounded-xl relative" v-for="service in services"
                            :key="service.id">
                            <div class="w-40 h-46 bg-gray-400 flex items-center justify-center text-[10px] shrink-0">
                                <img :src="service.image" alt="" class="object-cover w-full h-full">
                            </div>
                            <div class="flex flex-col justify-between p-2  max-w-[60%]">
                                <div>
                                    <div class="flex justify-between items-center">
                                        <p class="text-wrap line-clamp-2 font-bold text-[18px]">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </p>
                                        <div
                                            class="bg-purple-200 shadow-sm text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                                            1.8 km
                                        </div>
                                    </div>
                                    <div class="flex items-start my-[5px] self-center text-[12px] ">
                                        <svg width="15px" height="15px" viewBox="0 0 24 24" fill="#000">
                                            <path
                                                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                        </svg>
                                        <span class="ml-1  font-semibold">4.9 (1.2K+ reviews)</span>
                                    </div>
                                    <p class="text-sm line-clamp-3 text-wrap"> Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quas exercitationem fugit deserunt laudantium minima hic
                                        quisquam, quis incidunt optio quo nesciunt repellendus sed. Laboriosam, facere!
                                        Quibusdam recusandae minus delectus nemo.</p>
                                    <div class="flex flex-wrap gap-2 my-1 ">
                                        <span
                                            class="bg-blue-200 text-blue-800 text-xs font-semibold mr-1 px-1.5 py-0.5 rounded-2xl">Nuevo</span>
                                        <span
                                            class="bg-green-200 text-green-800 text-xs font-semibold mr-1 px-1.5 py-0.5 rounded-2xl">Oferta</span>
                                        <span
                                            class="bg-red-200 text-red-800 text-xs font-semibold mr-1 px-1.5 py-0.5 rounded-2xl">Popular</span>
                                        <span
                                            class="bg-purple-200 text-purple-800 text-xs font-semibold mr-1 px-1.5 py-0.5 rounded-2xl">Categoría</span>
                                    </div>
                                </div>
                                <div class="flex  justify-between items-center my-1">
                                    <p class="text-sm font-bold text-gray-800 line-clamp-1">{{ service.price }}</p>
                                    <p class=" text-[12px] line-through text-red-500 self-center line-clamp-1">
                                        $199.999,99</p>
                                </div>
                                <div class="flex justify-end">
                                    <button class="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                                        <svg fill="#fff" width="20px" height="20px" viewBox="0 0 96 96">

                                            <title />

                                            <g>

                                                <path
                                                    d="M43.7578,61.7578a5.9994,5.9994,0,1,0,8.4844,8.4844l18-18a5.9979,5.9979,0,0,0,0-8.4844l-18-18a5.9994,5.9994,0,0,0-8.4844,8.4844L51.5156,42H6A6,6,0,0,0,6,54H51.5156Z" />

                                                <path
                                                    d="M90,0H30a5.9966,5.9966,0,0,0-6,6V18a6,6,0,0,0,12,0V12H84V84H36V78a6,6,0,0,0-12,0V90a5.9966,5.9966,0,0,0,6,6H90a5.9966,5.9966,0,0,0,6-6V6A5.9966,5.9966,0,0,0,90,0Z" />

                                            </g>

                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- fin servicios -->
                <div class="mb-20"></div> <!-- separador inferior-->
                <!-- modal productos -->
                <ion-modal :is-open="isOpen" :initial-breakpoint="1" :breakpoints="[1]" :backdropDismiss="false">
                    <ion-header class="shadow-none">
                        <div>
                            <button class="m-4 border-[1px] border-solid rounded-full w-10 h-10 text-center"
                                @click="closeModal">
                                x
                            </button>
                        </div>
                    </ion-header>
                    <ion-content>
                        <div class="h-fit w-full shadow-2xl rounded-2xl border-solid border-[1px] ">
                            <div class="h-60 rounded-2xl overflow-hidden">
                                <Swiper class="h-full w-full" :slides-per-view="1" :space-between="10"
                                    :pagination="{ clickable: true }">
                                    <SwiperSlide v-for="(item, index) in items" :key="index">
                                        <div class="w-full h-full bg-gray-400 flex items-center justify-center">
                                            <img :src="item.image" alt="" class="w-full h-full object-cover" />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div class="flex gap-2 justify-center p-2 ">
                                <p class="text-xl px-2 line-clamp-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Sed do eiusmod tempor incididunt.
                                </p>
                                <div
                                    class=" h-10 self-center  bg-red-200 text-red-800 text-xs text-center font-bold px-2.5  rounded-2xl flex items-center justify-center">
                                    Descuento 20%
                                </div>
                            </div>
                            <div class="flex items-center self-center p-2">
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="#000">
                                    <path
                                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                </svg>
                                <span class="ml-1 text-lg font-semibold">4.9 (1.2K+ reviews)</span>
                                <div class="border-l border-gray-300 pl-2 ml-2">
                                    <span class="text-sm font-semibold">99 vendidos</span>
                                </div>
                            </div>
                            <div class="px-2 flex justify-start gap-16  ">
                                <p class="text-2xl font-bold text-gray-800 line-clamp-1">$999.999,99</p>
                                <p class="text-sm line-through text-red-500 self-center line-clamp-1">$199.999,99</p>
                            </div>
                            <div class="flex items-center gap-4 p-4">
                                <div
                                    class="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center shadow-lg border-solid border-[1px]">
                                    <img src="https://picsum.photos/200/300" alt="Avatar"
                                        class="w-full h-full object-cover rounded-full">
                                </div>
                                <div>
                                    <p class="text-lg font-bold">John Doe</p>
                                    <p class="text-sm text-gray-500">johndoe@example.com</p>
                                </div>
                            </div>
                            <div class="py-4 px-2">
                                <p class="text-xl font-bold my-2">Descripcion</p>
                                <p class="text-sm tex-wrap">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, eum
                                    necessitatibus accusantium voluptates iure asperiores laudantium officiis cum
                                    commodi magni! Animi vitae fuga nulla sapiente dolore fugiat illum voluptates
                                    possimus?
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, eum
                                    necessitatibus accusantium voluptates iure asperiores laudantium officiis cum
                                    commodi magni! Animi vitae fuga nulla sapiente dolore fugiat illum voluptates
                                    possimus?
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, eum
                                    necessitatibus accusantium voluptates iure asperiores laudantium officiis cum
                                    commodi magni! Animi vitae fuga nulla sapiente dolore fugiat illum voluptates
                                    possimus?
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, eum
                                    necessitatibus accusantium voluptates iure asperiores laudantium officiis cum
                                    commodi magni! Animi vitae fuga nulla sapiente dolore fugiat illum voluptates
                                    possimus?
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, eum
                                    necessitatibus accusantium voluptates iure asperiores laudantium officiis cum
                                    commodi magni! Animi vitae fuga nulla sapiente dolore fugiat illum voluptates
                                    possimus?
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, eum
                                    necessitatibus accusantium voluptates iure asperiores laudantium officiis cum
                                    commodi magni! Animi vitae fuga nulla sapiente dolore fugiat illum voluptates
                                    possimus?
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, eum
                                    necessitatibus accusantium voluptates iure asperiores laudantium officiis cum
                                    commodi magni! Animi vitae fuga nulla sapiente dolore fugiat illum voluptates
                                    possimus?
                                </p>
                            </div>
                            <div class="py-4 px-2">
                                <p class="text-xl font-bold my-2">Preguntas y Respuestas</p>
                                <div class="flex flex-col gap-4" v-for="n in 10" :key="n">
                                    <div class="bg-white p-4 rounded-lg shadow-md">
                                        <div class="flex items-start gap-4">
                                            <div
                                                class="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center shadow-lg border-solid border-[1px]">
                                                <img src="https://picsum.photos/200/300" alt="Avatar"
                                                    class="w-full h-full object-cover rounded-full">
                                            </div>
                                            <div>
                                                <p class="font-bold">Usuario1</p>
                                                <p class="text-sm text-gray-500">¿Este producto es resistente al agua?
                                                </p>
                                            </div>
                                        </div>
                                        <div class="flex items-start gap-4 mt-2 ml-10">
                                            <div
                                                class="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center shadow-lg border-solid border-[1px]">
                                                <img src="https://picsum.photos/200/300" alt="Avatar"
                                                    class="w-full h-full object-cover rounded-full">
                                            </div>
                                            <div>
                                                <p class="font-bold">Vendedor</p>
                                                <p class="text-sm text-gray-500">Sí, el producto es resistente al agua.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="fixed bottom-5 left-1/2 transform -translate-x-1/2 h-[70px] w-11/12 px-3 py-10  rounded-tl-[100px] rounded-bl-[100px] rounded-tr-[100px] rounded-br-[100px] bg-gray-700 ">
                            <div class="w-full h-full  flex justify-around gap-2 ">
                                <button
                                    class="bg-gray-500 text-white w-16 h-16 rounded-full flex items-center justify-center self-center">
                                    <svg width="35px" height="35px" viewBox="0 0 1024 1024" class=" self-center  ">
                                        <path fill="currentColor"
                                            d="M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z" />
                                    </svg>
                                </button>
                                <button
                                    class="bg-gray-500 text-white w-16 h-16 rounded-full flex items-center justify-center self-center">
                                    <svg width="35px" height="35px" viewBox="0 0 32 32" fill="none">
                                        <path
                                            d="M23.875 25C23.875 25 27.937 29 28.937 30C30.547 31.609 31 31 31 30V8C31 7.447 30.553 7 30 7H8C7.447 7 7 7.447 7 8V26C7 26.553 7.447 27 8 27H22M13 15H25M13 19H18M25 4V2C25 1.437 24.604 1 24 1H2C1.447 1 1 1.447 1 2V20C1 20.553 1.447 21 2 21H7"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <button
                                    class="bg-gray-500 text-white w-16 h-16 rounded-full flex items-center justify-center self-center">
                                    <svg fill="currentColor" width="40px" height="40px" viewBox="0 0 32 32"
                                        version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <title>ask</title>
                                        <path d="M10 24h4v4h-4v-4zM10 4v4h8v4h-8v8h4v-4h8v-12h-12z"></path>
                                    </svg>
                                </button>
                                <button
                                    class="bg-gray-800 text-white w-36 h-16 rounded-full flex items-center justify-center self-center  gap-2 ">
                                    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19.5 8.25H16.5V7.75C16.5 6.55653 16.0259 5.41193 15.182 4.56802C14.3381 3.72411 13.1935 3.25 12 3.25C10.8065 3.25 9.66193 3.72411 8.81802 4.56802C7.97411 5.41193 7.5 6.55653 7.5 7.75V8.25H4.5C4.16848 8.25 3.85054 8.3817 3.61612 8.61612C3.3817 8.85054 3.25 9.16848 3.25 9.5V18C3.25 18.7293 3.53973 19.4288 4.05546 19.9445C4.57118 20.4603 5.27065 20.75 6 20.75H18C18.7293 20.75 19.4288 20.4603 19.9445 19.9445C20.4603 19.4288 20.75 18.7293 20.75 18V9.5C20.75 9.16848 20.6183 8.85054 20.3839 8.61612C20.1495 8.3817 19.8315 8.25 19.5 8.25ZM9 7.75C9 6.95435 9.31607 6.19129 9.87868 5.62868C10.4413 5.06607 11.2044 4.75 12 4.75C12.7956 4.75 13.5587 5.06607 14.1213 5.62868C14.6839 6.19129 15 6.95435 15 7.75V8.25H9V7.75ZM19.25 18C19.25 18.3315 19.1183 18.6495 18.8839 18.8839C18.6495 19.1183 18.3315 19.25 18 19.25H6C5.66848 19.25 5.35054 19.1183 5.11612 18.8839C4.8817 18.6495 4.75 18.3315 4.75 18V9.75H7.5V12C7.5 12.1989 7.57902 12.3897 7.71967 12.5303C7.86032 12.671 8.05109 12.75 8.25 12.75C8.44891 12.75 8.63968 12.671 8.78033 12.5303C8.92098 12.3897 9 12.1989 9 12V9.75H15V12C15 12.1989 15.079 12.3897 15.2197 12.5303C15.3603 12.671 15.5511 12.75 15.75 12.75C15.9489 12.75 16.1397 12.671 16.2803 12.5303C16.421 12.3897 16.5 12.1989 16.5 12V9.75H19.25V18Z"
                                            fill="currentColor" />
                                    </svg>
                                    <p class="text-[20px]">Comprar</p>
                                </button>
                            </div>
                        </div>
                    </ion-content>
                </ion-modal>
                <!-- fin modal productos -->
                <div
                    class="fixed w-11/12 h-[70px] bg-gray-700 bottom-3 left-1/2 transform -translate-x-1/2 rounded-tl-[2em] rounded-bl-[2em] rounded-tr-[2em] rounded-br-[2em] flex justify-around gap-2  ">
                    <button
                        class="w-16 h-16 bg-gray-500 bg-opacity-75 rounded-full self-center flex justify-center text-white  relative">
                        <svg width="35px" height="35px" viewBox="0 0 1024 1024" class=" self-center  ">
                            <path fill="currentColor"
                                d="M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z" />
                        </svg>
                        <span
                            class="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                            1
                        </span>
                    </button>
                    <button
                        class="w-16 h-16 bg-gray-500 bg-opacity-75 rounded-full self-center  text-white flex justify-center">
                        <svg width="35px" height="35px" viewBox="0 0 32 32" fill="none" class=" self-center ">
                            <g clip-path="url(#clip0_901_1004)">
                                <path
                                    d="M23.875 25C23.875 25 27.937 29 28.937 30C30.547 31.609 31 31 31 30V8C31 7.447 30.553 7 30 7H8C7.447 7 7 7.447 7 8V26C7 26.553 7.447 27 8 27H22M13 15H25M13 19H18M25 4V2C25 1.437 24.604 1 24 1H2C1.447 1 1 1.447 1 2V20C1 20.553 1.447 21 2 21H7"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_901_1004">
                                    <rect width="32" height="32" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                    <button
                        class="w-16 h-16 bg-gray-500 bg-opacity-75 rounded-full self-center text-white flex justify-center">
                        <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" class=" self-center ">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M3.75 4.5L4.5 3.75H10.5L11.25 4.5V10.5L10.5 11.25H4.5L3.75 10.5V4.5ZM5.25 5.25V9.75H9.75V5.25H5.25ZM13.5 3.75L12.75 4.5V10.5L13.5 11.25H19.5L20.25 10.5V4.5L19.5 3.75H13.5ZM14.25 9.75V5.25H18.75V9.75H14.25ZM17.25 20.25H15.75V17.25H12.75V15.75H15.75V12.75H17.25V15.75H20.25V17.25H17.25V20.25ZM4.5 12.75L3.75 13.5V19.5L4.5 20.25H10.5L11.25 19.5V13.5L10.5 12.75H4.5ZM5.25 18.75V14.25H9.75V18.75H5.25Z"
                                fill="currentColor" />
                        </svg>
                    </button>
                    <button
                        class="w-16 h-16 bg-gray-500 bg-opacity-75 rounded-full self-center flex justify-center text-white">
                        <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" class=" self-center ">
                            <path
                                d="M8 6H16M8 10H16M8 14H11M6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22Z"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <button
                        class="w-16 h-16 bg-gray-500 bg-opacity-75 rounded-full self-center flex justify-center text-white relative">
                        <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" class="self-center ">
                            <path
                                d="M12 5.5C14.7614 5.5 17 7.73858 17 10.5V12.7396C17 13.2294 17.1798 13.7022 17.5052 14.0683L18.7808 15.5035C19.6407 16.4708 18.954 18 17.6597 18H6.34025C5.04598 18 4.35927 16.4708 5.21913 15.5035L6.4948 14.0683C6.82022 13.7022 6.99998 13.2294 6.99998 12.7396L7 10.5C7 7.73858 9.23858 5.5 12 5.5ZM12 5.5V3M10.9999 21H12.9999"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span
                            class="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                            1
                        </span>
                    </button>

                </div>
            </ion-content>
        </ion-page>
        <ion-menu menu-id="menu-derecha" content-id="main-content-cliente" side="end">
            <ion-header>
            </ion-header>
            <ion-content class="ion-padding">
                <ion-list>
                    <ion-item>
                        <ion-label>Home</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-label>Profile</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-label>Logout</ion-label>
                    </ion-item>
                </ion-list>
            </ion-content>
        </ion-menu>
    </ion-app>
</template>

<script setup>
import {
    IonApp,
    IonContent,
    IonPage,
    IonMenu,
    IonHeader,
    IonList,
    IonItem,
    IonLabel,
    menuController,
    IonButton,
    IonModal,
    IonSelect,
    IonSelectOption
    // IonTitle,
    // IonToolbar,
} from '@ionic/vue';
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Thumbs } from 'swiper/modules';

const services = Array.from({ length: 10 }, (_, i) => ({
    title: `Item ${i + 1}`,
    description: `Description ${i + 1}`,
    image: `https://picsum.photos/200/300?random=${i + 1}`,
    price: `$${Math.floor(Math.random() * 10000)}.${Math.floor(Math.random() * 100)}`,
}));

const items = Array.from({ length: 10 }, (_, i) => ({
    title: Array.from({ length: Math.floor(Math.random() * 1) + 1 }, () => Math.random().toString(36).substring(2, 7)).join(' '),
    description: `Description ${i + 1}`,
    image: `https://picsum.photos/200/300?random=${i + 1}`,
}));

// Modal and Swiper logic
const isOpen = ref(false); // State for modal visibility
const setOpen = (open) => (isOpen.value = open);
const closeModal = () => {
    isOpen.value = false;
};

const openMenuIzquierda = async () => {
    await menuController.open('menu-izquierda');
};
const openMenuDerecha = async () => {
    await menuController.open('menu-derecha');
};
const handleBackdropTap = () => {
    // No hacer nada para evitar que el modal se cierre al hacer clic fuera
};
</script>