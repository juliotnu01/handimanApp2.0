<template>
    <ion-page>
        <ion-header>
            <ion-toolbar class="px-4 py-2">
                <button @click="goTotHome"
                    class="bg-gray-200 w-12 h-10 min-w-12 rounded-lg text-center shadow-lg flex justify-center items-center dark:bg-gray-200">
                    <svg fill="#000000" width="30px" height="30px" viewBox="-4.5 0 32 32">
                        <path
                            d="M19.469 12.594l3.625 3.313c0.438 0.406 0.313 0.719-0.281 0.719h-2.719v8.656c0 0.594-0.5 1.125-1.094 1.125h-4.719v-6.063c0-0.594-0.531-1.125-1.125-1.125h-2.969c-0.594 0-1.125 0.531-1.125 1.125v6.063h-4.719c-0.594 0-1.125-0.531-1.125-1.125v-8.656h-2.688c-0.594 0-0.719-0.313-0.281-0.719l10.594-9.625c0.438-0.406 1.188-0.406 1.656 0l2.406 2.156v-1.719c0-0.594 0.531-1.125 1.125-1.125h2.344c0.594 0 1.094 0.531 1.094 1.125v5.875z">
                        </path>
                    </svg>
                </button>
            </ion-toolbar>
        </ion-header>
        <ion-content class="mb-10">
            <div class="w-full h-fit relative">
                <img :src="basic_information?.banner_photo_url" alt="Header Image" class="w-full h-36  object-cover">
                <img :src="avatar_user" alt="Avatar"
                    class="w-20 h-20 rounded-full absolute bottom-0 left-4 transform translate-y-1/2 border-4 border-black">
            </div>
            <div class="w-full h-10  pl-4 flex  justify-end px-4 gap-4 mt-2">
                <button class="bg-gray-200 p-1 rounded-full w-10 h-10">
                    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" class=" self-center mx-auto ">
                        <path
                            d="M3 8L8.44992 11.6333C9.73295 12.4886 10.3745 12.9163 11.0678 13.0825C11.6806 13.2293 12.3194 13.2293 12.9322 13.0825C13.6255 12.9163 14.2671 12.4886 15.5501 11.6333L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                            stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <button class="bg-gray-200 p-1 rounded-full w-10 h-10">
                    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" class=" self-center mx-auto ">
                        <path
                            d="M2.01394 6.87134C1.34749 10.0618 3.85967 13.8597 7.01471 17.0147C10.1698 20.1698 13.9676 22.682 17.1581 22.0155C19.782 21.4674 21.1215 20.0697 21.8754 18.8788C22.1355 18.4678 22.0042 17.9344 21.6143 17.6436L17.9224 14.8897C17.5243 14.5928 16.9685 14.633 16.6174 14.9842L14.6577 16.9438C14.6577 16.9438 12.7529 16.3246 10.2288 13.8006C7.70482 11.2766 7.08564 9.37175 7.08564 9.37175L9.04529 7.4121C9.39648 7.06091 9.43671 6.5052 9.13975 6.10709L6.38585 2.4151C6.09505 2.02525 5.56163 1.89395 5.15068 2.15407C3.9597 2.90794 2.56203 4.24747 2.01394 6.87134Z"
                            stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
            <div class="w-10/12 h-10  px-1 ml-2 flex mt-2 ">
                <p class="line-clamp-1 text-black font-bold bg-[#cecece] w-fit px-2 self-center rounded-lg   ">
                    {{ basic_information?.title_user }}
                </p>
            </div>
            <div class="w-full h-fit  pl-4 flex  text-start mb-2 ">
                <p class="line-clamp-1 text-black font-bold  w-fit px-2 self-center rounded-lg text-2xl">
                    {{ user_name }}
                </p>
                <div class="flex gap-1">
                    <svg  v-if="hasAllVerifications"   width="25px" height="25px" viewBox="0 0 24 24" fill="none" class=" self-center ">
                        <path
                            d="M9 12L11 14L15 10M12 3L13.9101 4.87147L16.5 4.20577L17.2184 6.78155L19.7942 7.5L19.1285 10.0899L21 12L19.1285 13.9101L19.7942 16.5L17.2184 17.2184L16.5 19.7942L13.9101 19.1285L12 21L10.0899 19.1285L7.5 19.7942L6.78155 17.2184L4.20577 16.5L4.87147 13.9101L3 12L4.87147 10.0899L4.20577 7.5L6.78155 6.78155L7.5 4.20577L10.0899 4.87147L12 3Z"
                            stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg  v-if=" hasApprovedCertifications "   fill="#000000" width="25px" height="25px" viewBox="0 0 24 24" class=" self-center ">
                        <path
                            d="M15.38,15.61c-0.02-0.07-0.03-0.15-0.04-0.22c-0.05-0.33-0.12-0.82-0.51-1.21c-0.39-0.39-0.88-0.47-1.21-0.52  c-0.08-0.01-0.15-0.02-0.21-0.03c-0.06-0.03-0.11-0.08-0.17-0.12C12.97,13.3,12.57,13,12,13s-0.97,0.3-1.24,0.5  c-0.06,0.04-0.11,0.09-0.15,0.11c-0.07,0.02-0.15,0.03-0.22,0.04c-0.33,0.05-0.82,0.13-1.21,0.52c-0.39,0.39-0.46,0.88-0.51,1.21  c-0.01,0.08-0.02,0.16-0.04,0.21c-0.03,0.06-0.08,0.11-0.12,0.17C8.31,16.04,8,16.44,8,17.01s0.3,0.97,0.5,1.24  c0.04,0.06,0.09,0.11,0.11,0.16c0.02,0.07,0.03,0.15,0.04,0.22c0.05,0.33,0.12,0.82,0.51,1.21c0.39,0.39,0.88,0.47,1.21,0.52  c0.08,0.01,0.15,0.02,0.21,0.04c0.06,0.03,0.11,0.08,0.17,0.12c0.27,0.2,0.67,0.5,1.24,0.5s0.97-0.3,1.24-0.5  c0.06-0.04,0.11-0.09,0.16-0.11c0.07-0.02,0.15-0.03,0.22-0.04c0.33-0.05,0.82-0.12,1.21-0.52c0.39-0.39,0.46-0.88,0.51-1.21  c0.01-0.08,0.02-0.16,0.04-0.21c0.03-0.06,0.08-0.11,0.12-0.17c0.2-0.27,0.5-0.67,0.5-1.24s-0.3-0.97-0.5-1.24  C15.45,15.71,15.41,15.66,15.38,15.61z M13.89,17.06c-0.12,0.16-0.26,0.35-0.36,0.59c-0.1,0.25-0.14,0.49-0.17,0.69  c0,0.01,0,0.03-0.01,0.04c-0.01,0-0.03,0-0.04,0c-0.2,0.03-0.44,0.07-0.68,0.17c-0.24,0.1-0.44,0.25-0.59,0.36  c-0.01,0.01-0.03,0.02-0.04,0.03c-0.01-0.01-0.03-0.02-0.04-0.03c-0.16-0.12-0.35-0.26-0.59-0.36c-0.25-0.1-0.49-0.14-0.69-0.17  c-0.01,0-0.03,0-0.04,0c0-0.01,0-0.03-0.01-0.04c-0.03-0.19-0.07-0.44-0.17-0.68c-0.1-0.24-0.24-0.44-0.36-0.59  c-0.01-0.02-0.02-0.03-0.04-0.05c0.01-0.02,0.02-0.03,0.04-0.05c0.12-0.16,0.26-0.35,0.36-0.59c0.1-0.25,0.14-0.49,0.17-0.69  c0-0.01,0-0.03,0.01-0.04c0.01,0,0.03,0,0.04-0.01c0.19-0.03,0.44-0.07,0.68-0.17c0.24-0.1,0.44-0.25,0.59-0.36  c0.01-0.01,0.03-0.02,0.04-0.03c0.01,0.01,0.03,0.02,0.04,0.03c0.16,0.12,0.35,0.26,0.59,0.36c0.25,0.1,0.49,0.14,0.68,0.17  c0.01,0,0.03,0,0.04,0.01c0,0.01,0,0.03,0.01,0.04c0.03,0.2,0.07,0.44,0.17,0.69c0.1,0.24,0.24,0.44,0.36,0.59  c0.01,0.02,0.02,0.03,0.04,0.05C13.91,17.02,13.9,17.04,13.89,17.06z" />
                        <polygon
                            points="12,16.02 11.75,16.54 11.06,16.65 11.59,17.02 11.38,17.59 12,17.32 12.62,17.59 12.41,17.02 12.94,16.65   12.25,16.54 " />
                        <path
                            d="M21,5c-0.55,0-1-0.45-1-1c0-0.55-0.45-1-1-1H5C4.45,3,4,3.45,4,4c0,0.55-0.45,1-1,1C2.45,5,2,5.45,2,6v9c0,0.55,0.45,1,1,1  c0.55,0,1,0.45,1,1c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1s-0.45-1-1-1H5.83c-0.3-0.85-0.98-1.53-1.83-1.83V6.83  C4.85,6.53,5.53,5.85,5.83,5h12.34c0.3,0.85,0.98,1.53,1.83,1.83v7.34c-0.85,0.3-1.53,0.98-1.83,1.83H18c-0.55,0-1,0.45-1,1  s0.45,1,1,1h1c0.55,0,1-0.45,1-1c0-0.55,0.45-1,1-1c0.55,0,1-0.45,1-1V6C22,5.45,21.55,5,21,5z" />
                        <path d="M14,9c0.55,0,1-0.45,1-1s-0.45-1-1-1h-4C9.45,7,9,7.45,9,8s0.45,1,1,1H14z" />
                        <path d="M6,11c0,0.55,0.45,1,1,1h10c0.55,0,1-0.45,1-1s-0.45-1-1-1H7C6.45,10,6,10.45,6,11z" />
                    </svg>
                    <svg   v-if=" hasActivePaymentMethods"  fill="#000000" width="25px" height="25px" viewBox="0 0 32 32" class="self-center">
                        <path
                            d="M30,15.18V11a3,3,0,0,0-3-3H25.5L19.8.4A1,1,0,0,0,18.41.19L13.35,3.88A6,6,0,0,0,3,8a3,3,0,0,0-3,3V29a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V24.82A3,3,0,0,0,32,22V18A3,3,0,0,0,30,15.18ZM18.79,2.39,23,8H11.08ZM9,4a4,4,0,0,1,2.71,1.06L7.67,8H5A4,4,0,0,1,9,4ZM27,30H3a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1H27a1,1,0,0,1,1,1v4H25a5,5,0,0,0,0,10h3v4A1,1,0,0,1,27,30Zm3-8a1,1,0,0,1-1,1H25a3,3,0,0,1,0-6h4a1,1,0,0,1,1,1Z" />

                        <path d="M25,19h0a1,1,0,1,0,1,1A1,1,0,0,0,25,19Z" />

                        <path d="M5,12a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V13A1,1,0,0,0,5,12Z" />

                        <path d="M5,18a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V19A1,1,0,0,0,5,18Z" />

                        <path d="M5,24a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V25A1,1,0,0,0,5,24Z" />
                    </svg>
                </div>
            </div>
            <div class="flex items-center pl-4 my-3">
                <div class="flex flex-col">
                    <div class="flex gap-1">
                        <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z"
                                fill="#000000" />
                            <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z"
                                fill="#000000" />
                        </svg>
                        <span class="ml-1 text-[14px] text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
                            {{ fullName }}
                        </span>
                    </div>
                    <div class="flex gap-1">
                        <svg fill="#000000" width="20px" height="20px" viewBox="-6 0 32 32">
                            <path
                                d="M16.32 14.12c-1.56-0.44-3.56-0.72-5.72-0.76v-0.96c0-0.48-0.36-0.84-0.84-0.84s-0.84 0.36-0.84 0.84v0.96c-2.12 0.040-4.12 0.28-5.68 0.76-2.16 0.6-3.24 1.48-3.24 2.6v7.72c0 1.12 1.080 2 3.24 2.64 1.76 0.52 4.080 0.8 6.56 0.8s4.8-0.28 6.56-0.8c2.12-0.6 3.24-1.52 3.24-2.64v-7.72c-0.040-1.12-1.080-2-3.28-2.6zM8.92 15v1.72c0 0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84v-1.72c4.36 0.12 7.040 1.16 7.24 1.72-0.080 0.12-0.32 0.32-1.24 0.8-1.2 0.6-1.56 1.6-1.8 2.24-0.040 0.12-0.12 0.32-0.16 0.4-0.080-0.080-0.16-0.24-0.24-0.32-0.36-0.56-1-1.52-2.36-1.44-1.4 0.080-1.8 1.56-2.080 2.6-0.12 0.4-0.32 1.16-0.48 1.24-0.36 0-0.44-0.080-0.72-0.6-0.36-0.6-0.92-1.56-2.44-1.6-0.44-0.040-0.44-0.040-0.6-0.44-0.24-0.56-0.6-1.44-2.12-1.88-1.4-0.4-1.84-0.88-1.88-0.96 0.16-0.56 2.84-1.64 7.2-1.76zM9.76 26.2c-4.92 0-7.92-1.16-8.080-1.76v-5.68c0.36 0.2 0.84 0.36 1.4 0.52 0.76 0.24 0.88 0.52 1.040 0.92 0.24 0.56 0.6 1.4 2.080 1.44 0.64 0.040 0.8 0.28 1.080 0.8 0.36 0.56 0.84 1.44 2.16 1.44 1.44 0 1.8-1.44 2.080-2.52 0.12-0.44 0.36-1.36 0.56-1.36 0.36-0.040 0.48 0.12 0.88 0.68 0.32 0.48 0.8 1.24 1.8 1.16 1-0.12 1.36-0.96 1.56-1.56 0.2-0.56 0.4-1.040 1-1.36 0.16-0.080 0.32-0.16 0.48-0.24v5.72c-0.080 0.64-3.12 1.8-8.040 1.8zM9.76 10.36c1.28 0 2.28-1.040 2.28-2.28 0-0.72-0.6-3.96-2.28-3.96s-2.28 3.28-2.28 3.96c0 1.24 1.040 2.28 2.28 2.28zM9.76 5.96c0.28 0.48 0.6 1.56 0.6 2.12 0 0.32-0.28 0.6-0.6 0.6s-0.6-0.28-0.6-0.6c0-0.56 0.32-1.6 0.6-2.12z">
                            </path>
                        </svg>
                        <span class="ml-1 text-[14px] text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
                            {{ basic_information?.birthdate }}
                        </span>
                    </div>
                    <div class="flex gap-1">
                        <svg fill="#000000" width="20px" height="20px" viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M49,18.92A23.74,23.74,0,0,0,25.27,42.77c0,16.48,17,31.59,22.23,35.59a2.45,2.45,0,0,0,3.12,0c5.24-4.12,22.1-19.11,22.1-35.59A23.74,23.74,0,0,0,49,18.92Zm0,33.71a10,10,0,1,1,10-10A10,10,0,0,1,49,52.63Z" />
                        </svg>
                        <span class="ml-1 text-[14px] text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis w-10/12">
                            {{ basic_information?.main_address }}
                        </span>
                    </div>
                    <div class="flex gap-1">
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11 18H13M9.2 21H14.8C15.9201 21 16.4802 21 16.908 20.782C17.2843 20.5903 17.5903 20.2843 17.782 19.908C18 19.4802 18 18.9201 18 17.8V6.2C18 5.0799 18 4.51984 17.782 4.09202C17.5903 3.71569 17.2843 3.40973 16.908 3.21799C16.4802 3 15.9201 3 14.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.07989 6 6.2V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z"
                                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span class="ml-1 text-[14px] text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
                            {{ basic_information?.user_mobile }}
                        </span>
                    </div>
                    <div class="flex  items-center gap-2 ">
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M3 8L8.44992 11.6333C9.73295 12.4886 10.3745 12.9163 11.0678 13.0825C11.6806 13.2293 12.3194 13.2293 12.9322 13.0825C13.6255 12.9163 14.2671 12.4886 15.5501 11.6333L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span class="ml-1 text-[14px] text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
                            {{ email_user }}
                        </span>
                    </div>
                    <div class="flex  items-center gap-2 ">
                        <svg fill="#000000" width="20px" height="20px" viewBox="0 0 512 512" id="_x30_1" version="1.1"
                            xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path
                                d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M418.275,146h-46.667  c-5.365-22.513-12.324-43.213-20.587-61.514c15.786,8.776,30.449,19.797,43.572,32.921C403.463,126.277,411.367,135.854,418.275,146  z M452,256c0,17.108-2.191,33.877-6.414,50h-64.034c1.601-16.172,2.448-32.887,2.448-50s-0.847-33.828-2.448-50h64.034  C449.809,222.123,452,238.892,452,256z M256,452c-5.2,0-21.048-10.221-36.844-41.813c-6.543-13.087-12.158-27.994-16.752-44.187  h107.191c-4.594,16.192-10.208,31.1-16.752,44.187C277.048,441.779,261.2,452,256,452z M190.813,306  c-1.847-16.247-2.813-33.029-2.813-50s0.966-33.753,2.813-50h130.374c1.847,16.247,2.813,33.029,2.813,50s-0.966,33.753-2.813,50  H190.813z M60,256c0-17.108,2.191-33.877,6.414-50h64.034c-1.601,16.172-2.448,32.887-2.448,50s0.847,33.828,2.448,50H66.414  C62.191,289.877,60,273.108,60,256z M256,60c5.2,0,21.048,10.221,36.844,41.813c6.543,13.087,12.158,27.994,16.752,44.187H202.404  c4.594-16.192,10.208-31.1,16.752-44.187C234.952,70.221,250.8,60,256,60z M160.979,84.486c-8.264,18.301-15.222,39-20.587,61.514  H93.725c6.909-10.146,14.812-19.723,23.682-28.593C130.531,104.283,145.193,93.262,160.979,84.486z M93.725,366h46.667  c5.365,22.513,12.324,43.213,20.587,61.514c-15.786-8.776-30.449-19.797-43.572-32.921C108.537,385.723,100.633,376.146,93.725,366z   M351.021,427.514c8.264-18.301,15.222-39,20.587-61.514h46.667c-6.909,10.146-14.812,19.723-23.682,28.593  C381.469,407.717,366.807,418.738,351.021,427.514z" />
                        </svg>
                        <span class="line-clamp-1 w-10/12 px-2 self-center  ">
                            <a :href="basic_information?.website">
                                {{ basic_information?.website }}
                            </a>
                        </span>
                    </div>
                    <div class="flex items-center self-center w-full gap-2 ">
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="#000">
                            <path
                                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                        <span class=" text-sm font-semibold">4.9 (1.2K+ reviews)</span>
                    </div>
                </div>
            </div>
            <div class="px-[10px]">
                <segment :segments="['General', 'Recientes', 'Ordenes', 'Reviews']" class="mx-auto">
                    <template #segment-0>
                        <div class="w-full h-full ">
                            <p class="font-bold">Especialista en:</p>
                            <div class="flex flex-wrap gap-2 mt-2">
                                <span class="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">Plumbing</span>
                                <span class="bg-green-200 text-green-800 px-3 py-1 rounded-full">Electrical</span>
                                <span class="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full">Carpentry</span>
                                <span class="bg-red-200 text-red-800 px-3 py-1 rounded-full">Painting</span>
                                <span class="bg-purple-200 text-purple-800 px-3 py-1 rounded-full">Cleaning</span>
                            </div>
                        </div>
                        <div class="w-full h-full ">
                            <p class="font-bold">Acerca de mí:</p>
                            <p class="mt-2">{{ basic_information?.abount_user }}</p>
                        </div>
                    </template>
                    <template #segment-1>
                        <div v-for="i in 10" :key="i"
                            class="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4">
                            <div class="flex items-center p-4">
                                <img src="https://picsum.photos/200/300" alt="AC Installation"
                                    class="w-16 h-16  object-cover">
                                <div class="ml-4">
                                    <h2 class="text-xs font-semibold">AC Installation {{ i }}</h2>
                                    <div class="text-gray-600 text-xs ">
                                        <div class="flex items-center gap-2 mt-1">
                                            <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7"
                                                    stroke="#000000" stroke-width="2" stroke-linecap="round" />
                                                <rect x="6" y="12" width="3" height="3" rx="0.5" fill="#000000" />
                                                <rect x="10.5" y="12" width="3" height="3" rx="0.5" fill="#000000" />
                                                <rect x="15" y="12" width="3" height="3" rx="0.5" fill="#000000" />
                                            </svg>
                                            <span class="text-[10px]">30 May, 2024</span>
                                        </div>
                                        <div class="flex items-center mt-1 gap-2">
                                            <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5" />
                                                <path d="M12 8V12L14.5 14.5" stroke="#1C274C" stroke-width="1.5"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <span class="text-[10px]">08:00 AM - 10:00 AM</span>
                                        </div>
                                    </div>
                                </div>
                                <button @click="toggleSection(i)" class="ml-auto  px-4 py-2 rounded-lg">
                                    <svg v-if="isVisible[i]" width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 15L12 9L6 15" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <svg v-else width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <transition name="fade">
                                <div v-if="isVisible[i]" class="p-4 border-t border-gray-200">
                                    <div class="flex items-center">
                                        <img src="https://picsum.photos/200/300" alt="John Doe"
                                            class="w-12 h-12 rounded-full object-cover">
                                        <div class="ml-4 w-10/12">
                                            <h3 class="text-lg font-semibold">John Doe</h3>
                                            <div class="flex gap-2">
                                                <svg fill="#000000" width="15px" height="15px" viewBox="0 0 100 100"
                                                    class=" self-center ">
                                                    <path
                                                        d="M49,18.92A23.74,23.74,0,0,0,25.27,42.77c0,16.48,17,31.59,22.23,35.59a2.45,2.45,0,0,0,3.12,0c5.24-4.12,22.1-19.11,22.1-35.59A23.74,23.74,0,0,0,49,18.92Zm0,33.71a10,10,0,1,1,10-10A10,10,0,0,1,49,52.63Z" />
                                                </svg>
                                                <p class="text-gray-600 text-sm ">Full address, Benin City</p>
                                            </div>
                                            <div class="flex gap-2 items-center justify-between w-full ">
                                                <div class="flex gap-2">
                                                    <svg width="15px" height="15px" viewBox="0 0 24 24" fill="#000"
                                                        class=" self-center ">
                                                        <path
                                                            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                                    </svg>
                                                    <span class="text-sm ">4.9 (1.2K+ reviews)</span>
                                                </div>
                                                <span class="text-green-500 text-sm font-semibold">Active</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex justify-between mt-4">
                                        <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex gap-2">
                                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                                                class=" self-center ">
                                                <path id="Vector"
                                                    d="M16 8H20C20.5523 8 21 8.44772 21 9V20L17.667 17.231C17.4875 17.0818 17.2608 17 17.0273 17H9C8.44771 17 8 16.5523 8 16V13M16 8V5C16 4.44772 15.5523 4 15 4H4C3.44772 4 3 4.44772 3 5V16.0003L6.33301 13.2308C6.51255 13.0817 6.73924 13 6.97266 13H8M16 8V12C16 12.5523 15.5523 13 15 13H8"
                                                    stroke="#000000" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            Chat
                                        </button>
                                        <button class="bg-black text-white px-4 py-2 rounded-lg flex gap-2">
                                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                                                class="self-center">
                                                <path
                                                    d="M16.1007 13.359L15.5719 12.8272H15.5719L16.1007 13.359ZM16.5562 12.9062L17.085 13.438H17.085L16.5562 12.9062ZM18.9728 12.5894L18.6146 13.2483L18.9728 12.5894ZM20.8833 13.628L20.5251 14.2869L20.8833 13.628ZM21.4217 16.883L21.9505 17.4148L21.4217 16.883ZM20.0011 18.2954L19.4723 17.7636L20.0011 18.2954ZM18.6763 18.9651L18.7459 19.7119H18.7459L18.6763 18.9651ZM8.81536 14.7266L9.34418 14.1947L8.81536 14.7266ZM4.00289 5.74561L3.2541 5.78816L3.2541 5.78816L4.00289 5.74561ZM10.4775 7.19738L11.0063 7.72922H11.0063L10.4775 7.19738ZM10.6342 4.54348L11.2346 4.09401L10.6342 4.54348ZM9.37326 2.85908L8.77286 3.30855V3.30855L9.37326 2.85908ZM6.26145 2.57483L6.79027 3.10667H6.79027L6.26145 2.57483ZM4.69185 4.13552L4.16303 3.60368H4.16303L4.69185 4.13552ZM12.0631 11.4972L12.5919 10.9654L12.0631 11.4972ZM16.6295 13.8909L17.085 13.438L16.0273 12.3743L15.5719 12.8272L16.6295 13.8909ZM18.6146 13.2483L20.5251 14.2869L21.2415 12.9691L19.331 11.9305L18.6146 13.2483ZM20.8929 16.3511L19.4723 17.7636L20.5299 18.8273L21.9505 17.4148L20.8929 16.3511ZM18.6067 18.2184C17.1568 18.3535 13.4056 18.2331 9.34418 14.1947L8.28654 15.2584C12.7186 19.6653 16.9369 19.8805 18.7459 19.7119L18.6067 18.2184ZM9.34418 14.1947C5.4728 10.3453 4.83151 7.10765 4.75168 5.70305L3.2541 5.78816C3.35456 7.55599 4.14863 11.144 8.28654 15.2584L9.34418 14.1947ZM10.7195 8.01441L11.0063 7.72922L9.9487 6.66555L9.66189 6.95073L10.7195 8.01441ZM11.2346 4.09401L9.97365 2.40961L8.77286 3.30855L10.0338 4.99296L11.2346 4.09401ZM5.73263 2.04299L4.16303 3.60368L5.22067 4.66736L6.79027 3.10667L5.73263 2.04299ZM10.1907 7.48257C9.66189 6.95073 9.66117 6.95144 9.66045 6.95216C9.66021 6.9524 9.65949 6.95313 9.659 6.95362C9.65802 6.95461 9.65702 6.95561 9.65601 6.95664C9.65398 6.95871 9.65188 6.96086 9.64972 6.9631C9.64539 6.96759 9.64081 6.97245 9.63599 6.97769C9.62634 6.98816 9.61575 7.00014 9.60441 7.01367C9.58174 7.04072 9.55605 7.07403 9.52905 7.11388C9.47492 7.19377 9.41594 7.2994 9.36589 7.43224C9.26376 7.70329 9.20901 8.0606 9.27765 8.50305C9.41189 9.36833 10.0078 10.5113 11.5343 12.0291L12.5919 10.9654C11.1634 9.54499 10.8231 8.68059 10.7599 8.27309C10.7298 8.07916 10.761 7.98371 10.7696 7.96111C10.7748 7.94713 10.7773 7.9457 10.7709 7.95525C10.7677 7.95992 10.7624 7.96723 10.7541 7.97708C10.75 7.98201 10.7451 7.98759 10.7394 7.99381C10.7365 7.99692 10.7335 8.00019 10.7301 8.00362C10.7285 8.00534 10.7268 8.00709 10.725 8.00889C10.7241 8.00979 10.7232 8.0107 10.7223 8.01162C10.7219 8.01208 10.7212 8.01278 10.7209 8.01301C10.7202 8.01371 10.7195 8.01441 10.1907 7.48257ZM11.5343 12.0291C13.0613 13.5474 14.2096 14.1383 15.0763 14.2713C15.5192 14.3392 15.8763 14.285 16.1472 14.1841C16.28 14.1346 16.3858 14.0763 16.4658 14.0227C16.5058 13.9959 16.5392 13.9704 16.5663 13.9479C16.5799 13.9367 16.5919 13.9262 16.6024 13.9166C16.6077 13.9118 16.6126 13.9073 16.6171 13.903C16.6194 13.9008 16.6215 13.8987 16.6236 13.8967C16.6246 13.8957 16.6256 13.8947 16.6266 13.8937C16.6271 13.8932 16.6279 13.8925 16.6281 13.8923C16.6288 13.8916 16.6295 13.8909 16.1007 13.359C15.5719 12.8272 15.5726 12.8265 15.5733 12.8258C15.5735 12.8256 15.5742 12.8249 15.5747 12.8244C15.5756 12.8235 15.5765 12.8226 15.5774 12.8217C15.5793 12.82 15.581 12.8183 15.5827 12.8166C15.5862 12.8133 15.5895 12.8103 15.5926 12.8074C15.5988 12.8018 15.6044 12.7969 15.6094 12.7929C15.6192 12.7847 15.6265 12.7795 15.631 12.7764C15.6403 12.7702 15.6384 12.773 15.6236 12.7785C15.5991 12.7876 15.501 12.8189 15.3038 12.7886C14.8905 12.7253 14.02 12.3853 12.5919 10.9654L11.5343 12.0291ZM9.97365 2.40961C8.95434 1.04802 6.94996 0.83257 5.73263 2.04299L6.79027 3.10667C7.32195 2.578 8.26623 2.63181 8.77286 3.30855L9.97365 2.40961ZM4.75168 5.70305C4.73201 5.35694 4.89075 4.9954 5.22067 4.66736L4.16303 3.60368C3.62571 4.13795 3.20329 4.89425 3.2541 5.78816L4.75168 5.70305ZM19.4723 17.7636C19.1975 18.0369 18.9029 18.1908 18.6067 18.2184L18.7459 19.7119C19.4805 19.6434 20.0824 19.2723 20.5299 18.8273L19.4723 17.7636ZM11.0063 7.72922C11.9908 6.7503 12.064 5.2019 11.2346 4.09401L10.0338 4.99295C10.4373 5.53193 10.3773 6.23938 9.9487 6.66555L11.0063 7.72922ZM20.5251 14.2869C21.3429 14.7315 21.4703 15.7769 20.8929 16.3511L21.9505 17.4148C23.2908 16.0821 22.8775 13.8584 21.2415 12.9691L20.5251 14.2869ZM17.085 13.438C17.469 13.0562 18.0871 12.9616 18.6146 13.2483L19.331 11.9305C18.2474 11.3414 16.9026 11.5041 16.0273 12.3743L17.085 13.438Z"
                                                    fill="#fff" />
                                            </svg>
                                            Llamar
                                        </button>
                                    </div>
                                </div>
                            </transition>
                        </div>
                    </template>
                    <template #segment-2>
                        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                            <div class="p-4">
                                <div class="flex justify-between items-center">
                                    <div>
                                        <h2 class="text-lg font-bold">Order #925</h2>
                                        <p class="text-sm">Dine-In</p>
                                    </div>
                                    <span
                                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Ready
                                        to serve</span>
                                </div>
                                <div class="mt-4">
                                    <p class="text-xl font-bold">$87.34 USD</p>
                                    <p class="text-sm text-gray-500">Ariel Hikmat</p>
                                </div>
                                <div class="mt-4 text-sm text-gray-500">
                                    <p>Wednesday, July 12, 2023, 06:12 PM</p>
                                </div>
                                <button
                                    class="mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-700"
                                    @click="toggleDetails">
                                    See Details
                                </button>
                                <button
                                    class="mt-2 px-4 py-2 bg-gray-500 text-white text-sm font-medium rounded-lg hover:bg-gray-700">
                                    Pay Bills
                                </button>
                                <div v-if="showDetails" class="mt-4 text-sm text-gray-500">
                                    <ul>
                                        <li>Scrambled eggs with toast: 1 - $16.99</li>
                                        <li>Smoked Salmon Bagel: 1 - $18.49</li>
                                        <li>Belgian Waffles: 2 - $38.98</li>
                                        <li>Classic Lemonade: 1 - $12.49</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </template>
                    <template #segment-3>
                        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                            <!-- User Review Card -->
                            <div class="p-4 border-b border-gray-200" v-for="(review, index) in reviews" :key="index">
                                <div class="flex justify-between items-center">
                                    <div>
                                        <h3 class="text-lg font-bold">{{ review.userName }}</h3>
                                        <p class="text-sm text-gray-500">{{ review.duration }}</p>
                                    </div>
                                    <span
                                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        {{ review.rating }}
                                    </span>
                                </div>
                                <div class="mt-2">
                                    <p class="text-sm text-gray-600">{{ review.reviewText }}</p>
                                </div>
                                <button
                                    class="mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-700"
                                    @click="toggleDetails2(index)">
                                    Toggle Details
                                </button>
                                <div v-if="review.showDetails" class="mt-4 text-sm text-gray-500">
                                    <!-- Aquí irían los detalles adicionales -->
                                    <p>Detalle adicional del recibo...</p>
                                </div>
                            </div>
                        </div>
                    </template>
                </segment>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import { useClienteStore } from '@/stores/cliente/clienteStore'
import { useUserViewStore } from '@/stores/cliente/userViewStore';
import { useRouter } from 'vue-router';
import segment from '@/components/segment.vue';
import { ref, onMounted, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { Preferences } from '@capacitor/preferences';

const clienteStore = useClienteStore();
const hasActivePaymentMethods = ref(false);
const hasAllVerifications = ref(false);
const hasApprovedCertifications = ref(false);

const { user_name,
    email_user,
    avatar_user, basic_information } = storeToRefs(clienteStore)

const fullName = computed(() => `${basic_information.value?.first_name} ${basic_information.value?.second_name} ${basic_information.value?.first_last_name} ${basic_information.value?.second_last_name}`);

const { loadBasicInformationUser } = clienteStore


const userViewStore = useUserViewStore();
const router = useRouter();
const goTotHome = () => {
    return router.push({ name: 'cliente-home' });
}

const isVisible = ref(Array(10).fill(false));

const toggleSection = (index) => {
    isVisible.value[index] = !isVisible.value[index];
};

const showDetails = ref(false);

const toggleDetails = () => {
    showDetails.value = !showDetails.value;
}

const reviews = ref([
    {
        userName: 'Jamal Abdul',
        duration: 'new user on Doorin',
        rating: '5.0',
        reviewText: 'A game-changer, easy to use, with tons of options and amazing deals. Highly recommended for all travel plans.',
        showDetails: false
    },
    {
        userName: 'Kamila Kabelo',
        duration: 'using Doorin for 8 months',
        rating: '4.9',
        reviewText: 'Simplifies hotel bookings with a user-friendly interface and great prices. Never disappoints!',
        showDetails: false
    },
    {
        userName: 'Shena Kerren',
        duration: 'using Doorin for 3 months',
        rating: '4.8',
        reviewText: 'Loves the app for finding the best hotels, smooth transactions, accurate listings, and excellent customer service.',
        showDetails: false
    }
]);

const toggleDetails2 = (index) => {
    reviews.value[index].showDetails = !reviews.value[index].showDetails;
}




const loadUserPreferences = async () => {
    const { value } = await Preferences.get({ key: 'user' });
    if (value) {
        const user = JSON.parse(value);
        hasActivePaymentMethods.value = user.has_active_payment_methods;
        hasAllVerifications.value = user.has_all_verifications;
        hasApprovedCertifications.value = user.has_approved_certifications;
    }
};

onMounted(() => {
    loadUserPreferences();
});

onMounted(() => {
    loadBasicInformationUser()
})
</script>

<style scoped>
ion-content {
    --padding-bottom: 100px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
    {
    opacity: 0;
}
</style>