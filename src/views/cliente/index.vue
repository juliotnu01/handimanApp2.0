<template>
    <ion-page>
        <ion-header class="pb-4 shadow-none dark:bg-white " :translucent="true">

            <!-- menu superior -->
            <div class="w-full h-20 p-4 flex justify-between items-center gap-2">
                <div class="flex gap-2">
                    <button @click="openMenuIzquierda"
                        class="bg-gray-200 w-12 h-10 min-w-12 rounded-lg text-center shadow-lg flex justify-center items-center dark:bg-gray-200">
                        <svg width="25px" height="25px" viewBox="0 0 20 20" fill="none" class=" dark:text-black ">
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z" />
                        </svg>
                    </button>
                    <div v-if="!isHomePage">
                        <button @click="goToHome"
                            class="bg-gray-200 w-12 h-10 min-w-12 rounded-lg text-center shadow-lg flex justify-center items-center dark:bg-gray-200">
                            <svg fill="#000000" width="30px" height="30px" viewBox="-4.5 0 32 32">
                                <path
                                    d="M19.469 12.594l3.625 3.313c0.438 0.406 0.313 0.719-0.281 0.719h-2.719v8.656c0 0.594-0.5 1.125-1.094 1.125h-4.719v-6.063c0-0.594-0.531-1.125-1.125-1.125h-2.969c-0.594 0-1.125 0.531-1.125 1.125v6.063h-4.719c-0.594 0-1.125-0.531-1.125-1.125v-8.656h-2.688c-0.594 0-0.719-0.313-0.281-0.719l10.594-9.625c0.438-0.406 1.188-0.406 1.656 0l2.406 2.156v-1.719c0-0.594 0.531-1.125 1.125-1.125h2.344c0.594 0 1.094 0.531 1.094 1.125v5.875z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
                <button @click="openMenuDerecha"
                    class="flex items-center gap-4 p-2 bg-gray-100 rounded-lg shadow-sm  dark:bg-gray-100">
                    <div class="flex flex-col">
                        <span class="text-lg font-semibold dark:text-black ">John Doe</span>
                    </div>
                    <div class="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
                        <img alt="Silhouette of a person's head"
                            src="https://ionicframework.com/docs/img/demos/avatar.svg"
                            class="w-full h-full object-cover" />
                    </div>
                </button>
            </div>
            <!-- fin menu superior -->

            <!-- direccion de envio -->
            <!-- <ion-item class="w-[97%] h-fit self-center rounded-lg shadow-lg border-solid border-[1px] mx-auto  ">
                <ion-select justify="end" label="Dirección de Envio" class="text-xs text-purple-800 font-medium "
                    interface="popover" v-model="selectedDireccion">
                    <ion-select-option v-for="(direccion, d) in direcciones" :key="d" :value="direccion"
                        class="text-xs text-blue-600 hover:bg-purple-100">
                        {{ direccion }}
                    </ion-select-option>
                </ion-select>
            </ion-item> -->
            <!-- fin direccion de envio -->

        </ion-header>

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

        <ion-content class="scrollable  " id="main-content-cliente">
            <ion-router-outlet />
            <!-- modal productos -->
            <ion-modal :is-open="isOpenComputed" :initial-breakpoint="1" :breakpoints="[1]" :backdropDismiss="false">
                <ion-header class="shadow-none">
                    <div>
                        <button class="m-4 border-[1px] border-solid rounded-full w-10 h-10 text-center"
                            @click="closeModal(false)">
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
                                <svg fill="currentColor" width="40px" height="40px" viewBox="0 0 32 32" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg">
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
            <!-- modal filtros -->
            <ion-modal :is-open="isOpenFilterComputed" :initial-breakpoint="0.55" :breakpoints="[0.55]"
                :backdropDismiss="false">
                <ion-header class="shadow-none ion-padding mb-0 pb-0">
                    <div class="flex justify-between">
                        <p class="font-bold">Filtros</p>
                        <p class="font-bold text-sm self-center text-sky-600 " @click="closeModalFilter">Cerrar</p>
                    </div>
                </ion-header>
                <ion-content class="ion-padding  ">
                    <div class="my-4">
                        <div class=" bg-white  flex justify-between">
                            <p class="font-bold">Tipo</p>
                        </div>
                        <ion-segment value="buttons">
                            <ion-segment-button value="default">
                                <ion-label class="text-xs">Productos</ion-label>
                            </ion-segment-button>
                            <ion-segment-button value="segment">
                                <ion-label class="text-xs">Servicios</ion-label>
                            </ion-segment-button>
                            <ion-segment-button value="buttons">
                                <ion-label class="text-xs">Handiman's</ion-label>
                            </ion-segment-button>
                        </ion-segment>
                    </div>
                    <div class="my-4">
                        <div class=" bg-white  flex justify-between">
                            <p class="font-bold">Range de precio</p>
                        </div>
                        <div class="flex justify-between items-center">
                            <!-- Input para el valor mínimo -->
                            <ion-item class="w-1/2">
                                <ion-input type="number" :value="range.lower" @ionInput="handleLowerChange"
                                    class="text-right">
                                    <div slot="start" class="flex items-center text-gray-500">$</div>
                                </ion-input>
                            </ion-item>

                            <!-- Separador -->
                            <span class="text-gray-500 mx-2">-</span>

                            <!-- Input para el valor máximo -->
                            <ion-item class="w-1/2">
                                <ion-input type="number" :value="range.upper" @ionInput="handleUpperChange"
                                    class="text-right">
                                    <div slot="start" class="flex items-center text-gray-500">$</div>
                                </ion-input>
                            </ion-item>
                        </div>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <div class="flex justify-between items-center">
                            <p class="text-gray-800 font-semibold">Descuento de oferta</p>
                            <ion-checkbox :checked="hasOffer" @ionChange="handleOfferChange" color="primary"
                                class=" self-center  "></ion-checkbox>
                        </div>
                        <p class="text-sm text-gray-500">Seleccionar solo si desea productos o servicios con oferta.
                        </p>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <div class="flex justify-between items-center">
                            <p class="text-gray-800 font-semibold">Reseñas</p>
                            <ion-checkbox :checked="hasReview" @ionChange="handleReviewChange" color="primary"
                                class=" self-center  "></ion-checkbox>
                        </div>
                        <p class="text-sm text-gray-500">Mostrar solo que contenga reseñas.</p>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <p class="text-gray-800 font-semibold  ">Valoración</p>
                        <ion-range aria-label="Range with ticks" :ticks="true" :pin="true" :snaps="true" :min="0"
                            :max="5" :pin-formatter="pinFormatter" class="w-full  p-0"></ion-range>
                        <p class="text-sm text-gray-500">Selecciona la valoración mínima deseada.</p>
                    </div>
                </ion-content>
            </ion-modal>
            <!-- fin modal filtros -->
        </ion-content>

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

        <!-- menu inferior -->
        <div
            class="fixed w-8/12 h-[55px] bg-gray-700 bottom-3 left-1/2 transform -translate-x-1/2 rounded-tl-[2em] rounded-bl-[2em] rounded-tr-[2em] rounded-br-[2em] flex justify-center gap-2 ">
            <button
                class="  w-12 h-12 bg-gray-500 bg-opacity-75 rounded-full self-center flex justify-center text-white  relative">
                <svg width="25px" height="25px" viewBox="0 0 1024 1024" class=" self-center   ">
                    <path fill="currentColor"
                        d="M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z" />
                </svg>
                <span
                    class="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                    1
                </span>
            </button>
            <button
                class="w-12 h-12 bg-gray-500 bg-opacity-75 rounded-full self-center  text-white flex justify-center">
                <svg width="25px" height="25px" viewBox="0 0 32 32" fill="none" class=" self-center ">
                    <g clip-path="url(#clip0_901_1004)">
                        <path
                            d="M23.875 25C23.875 25 27.937 29 28.937 30C30.547 31.609 31 31 31 30V8C31 7.447 30.553 7 30 7H8C7.447 7 7 7.447 7 8V26C7 26.553 7.447 27 8 27H22M13 15H25M13 19H18M25 4V2C25 1.437 24.604 1 24 1H2C1.447 1 1 1.447 1 2V20C1 20.553 1.447 21 2 21H7"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_901_1004">
                            <rect width="32" height="32" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </button>
            <button class="w-12 h-12 bg-gray-500 bg-opacity-75 rounded-full self-center text-white flex justify-center">
                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" class=" self-center ">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M3.75 4.5L4.5 3.75H10.5L11.25 4.5V10.5L10.5 11.25H4.5L3.75 10.5V4.5ZM5.25 5.25V9.75H9.75V5.25H5.25ZM13.5 3.75L12.75 4.5V10.5L13.5 11.25H19.5L20.25 10.5V4.5L19.5 3.75H13.5ZM14.25 9.75V5.25H18.75V9.75H14.25ZM17.25 20.25H15.75V17.25H12.75V15.75H15.75V12.75H17.25V15.75H20.25V17.25H17.25V20.25ZM4.5 12.75L3.75 13.5V19.5L4.5 20.25H10.5L11.25 19.5V13.5L10.5 12.75H4.5ZM5.25 18.75V14.25H9.75V18.75H5.25Z"
                        fill="currentColor" />
                </svg>
            </button>
            <button class="w-12 h-12 bg-gray-500 bg-opacity-75 rounded-full self-center flex justify-center text-white">
                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" class=" self-center ">
                    <path
                        d="M8 6H16M8 10H16M8 14H11M6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            <button
                class="w-12 h-12 bg-gray-500 bg-opacity-75 rounded-full self-center flex justify-center text-white relative">
                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" class="self-center ">
                    <path
                        d="M12 5.5C14.7614 5.5 17 7.73858 17 10.5V12.7396C17 13.2294 17.1798 13.7022 17.5052 14.0683L18.7808 15.5035C19.6407 16.4708 18.954 18 17.6597 18H6.34025C5.04598 18 4.35927 16.4708 5.21913 15.5035L6.4948 14.0683C6.82022 13.7022 6.99998 13.2294 6.99998 12.7396L7 10.5C7 7.73858 9.23858 5.5 12 5.5ZM12 5.5V3M10.9999 21H12.9999"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span class="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                    1
                </span>
            </button>
        </div>
        <!-- fin menu inferior -->
    </ion-page>
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
    IonModal,
    IonSelect,
    IonSelectOption,
    IonSearchbar,
    IonSegment,
    IonSegmentButton,
    IonInput,
    IonCheckbox,
    IonRange,
    IonRouterOutlet,
    IonRefresher,
    IonFooter,
} from '@ionic/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { computed } from 'vue';

import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const isHomePage = computed(() => route.path === '/cliente/home');

const goToHome = () => {
    router.push('/cliente/home');
};


// stores 
import { useClienteStore } from '@/stores/cliente/clienteStore';
import { useHomeStore } from '@/stores/cliente/homeStore';
import { storeToRefs } from 'pinia';
const clienteStore = useClienteStore();
const homeStore = useHomeStore();

// cliente
const { openMenuIzquierda,
    openMenuDerecha,
    setOpenFilter,
    pinFormatter,
    handleUpperChange,
    handleReviewChange,
    handleLowerChange,
    handleOfferChange } = clienteStore;
const {
    direcciones,
    selectedDireccion,
    range,
    hasOffer,
    hasOfferReseña,
    hasReview,
} = storeToRefs(clienteStore);


// home
const { closeModalFilter, closeModal } = homeStore;
const { isOpenFilter, isOpen, services, items, } = storeToRefs(homeStore);

const isOpenFilterComputed = computed({
    get() { return isOpenFilter.value; },
    set(value) { isOpenFilter.value = value; }
});

const isOpenComputed = computed({
    get() { return isOpen.value; },
    set(value) { isOpen.value = value; }
});



</script>
<style scoped>
/* cliente */
/* Estilos adicionales para los inputs */
ion-item {
    --padding-start: 0;
    --inner-padding-end: 0;
    --background: transparent;
    /* Fondo transparente */
}

ion-input {
    --padding-start: 8px;
    --padding-end: 8px;
    --background: #f9fafb;
    /* Fondo gris claro */
    --border-radius: 8px;
    /* Bordes redondeados */
    --border: 1px solid #e2e8f0;
    /* Borde gris */
}
</style>