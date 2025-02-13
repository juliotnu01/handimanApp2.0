<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Chats</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <div @click="setIsOpenChat(true)" class="w-full h-20 bg-white rounded-lg flex gap-2 px-1 shadow-lg my-2"
                v-for="n in 14" :key="n">
                <ion-avatar class="relative self-center flex-shrink-0 w-10 h-10">
                    <img src="https://www.gravatar.com/avatar?d=mp" alt="Avatar">
                    <span
                        class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                </ion-avatar>
                <div class=" w-full flex-1 self-center px-1 pt-1 overflow-hidden">
                    <div class=" w-full h-full flex flex-col justify-center my-1 ">
                        <div class="flex justify-between items-center">
                            <p class="text-ellipsis whitespace-nowrap overflow-hidden font-bold text-sm flex-1 mr-2">
                                Juliot nuñez
                            </p>
                            <p class=" text-sm whitespace-nowrap  ">
                                4:16 PM
                            </p>
                        </div>
                    </div>
                    <div class=" w-full h-full flex flex-col justify-center my-1 ">
                        <div class="flex justify-between">
                            <p class="text-ellipsis whitespace-nowrap overflow-hidden text-sm w-10/12">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolore accusamus
                                magnam corrupti, placeat sed nam temporibus, voluptates, consequatur cumque ullam
                                quaerat ipsa laborum. Laboriosam aliquam fuga eum incidunt eius?
                            </p>
                            <span
                                class=" bg-green-700 text-white text-xs font-bold px-1.5 py-0.5 rounded-full mx-auto  ">
                                4
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- modal chat -->
            <ion-modal :is-open="isOpenChatComputed" :initial-breakpoint="1" :breakpoints="[1]"
                :backdropDismiss="false">
                <ion-header class=" ion-padding ">
                    <div class="flex justify-start items-center gap-2">
                        <p class="font-bold text-sm self-center text-sky-600 mr-2 " @click="setIsOpenChat(false)">
                            <svg fill="#000000" version="1.1" baseProfile="tiny" id="Layer_1" width="20px" height="20px"
                                viewBox="0 0 42 42" xml:space="preserve">
                                <polygon fill-rule="evenodd"
                                    points="31,38.32 13.391,21 31,3.68 28.279,1 8,21.01 28.279,41 " />
                            </svg>
                        </p>
                        <div class="flex gap-2 w-full">
                            <ion-avatar class="relative self-center flex-shrink-0 w-10 h-10">
                                <img src="https://www.gravatar.com/avatar?d=mp" alt="Avatar">
                                <span
                                    class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                            </ion-avatar>
                            <div class="flex flex-col justify-start self-center w-fit">
                                <p
                                    class="text-ellipsis whitespace-nowrap overflow-hidden font-bold text-sm flex-1 mr-2">
                                    Juliot nuñez
                                </p>
                                <p class="text-[10px] whitespace-nowrap text-start">
                                    Ultima conexión: 4:16 PM
                                </p>
                            </div>
                            <div class="flex justify-end w-full">
                                <p class="font-bold text-sm self-center text-sky-600 mr-2"
                                    @click="setIsOpenChat(false)">
                                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M5.73268 2.043C6.95002 0.832583 8.95439 1.04804 9.9737 2.40962L11.2347 4.09402C12.0641 5.20191 11.9909 6.75032 11.0064 7.72923L10.7676 7.96665C10.7572 7.99694 10.7319 8.09215 10.76 8.2731C10.8232 8.6806 11.1635 9.545 12.592 10.9654C14.02 12.3853 14.8905 12.7253 15.3038 12.7887C15.4911 12.8174 15.5891 12.7906 15.6194 12.78L16.0274 12.3743C16.9026 11.5041 18.2475 11.3414 19.3311 11.9305L21.2416 12.9691C22.8775 13.8584 23.2909 16.0821 21.9505 17.4148L20.53 18.8273C20.0824 19.2723 19.4805 19.6434 18.7459 19.7119C16.9369 19.8806 12.7187 19.6654 8.28659 15.2584C4.14868 11.144 3.35462 7.556 3.25415 5.78817L4.00294 5.74562L3.25415 5.78817C3.20335 4.89426 3.62576 4.13796 4.16308 3.60369L5.73268 2.043ZM8.77291 3.30856C8.26628 2.63182 7.322 2.57801 6.79032 3.10668L5.22072 4.66737C4.8908 4.99542 4.73206 5.35695 4.75173 5.70307C4.83156 7.10766 5.47286 10.3453 9.34423 14.1947C13.4057 18.2331 17.1569 18.3536 18.6067 18.2184C18.9029 18.1908 19.1975 18.0369 19.4724 17.7636L20.8929 16.3511C21.4704 15.777 21.343 14.7315 20.5252 14.2869L18.6147 13.2484C18.0871 12.9616 17.469 13.0562 17.085 13.438L16.6296 13.8909L16.1008 13.359C16.6296 13.8909 16.6289 13.8916 16.6282 13.8923L16.6267 13.8937L16.6236 13.8967L16.6171 13.903L16.6025 13.9166C16.592 13.9262 16.5799 13.9367 16.5664 13.948C16.5392 13.9705 16.5058 13.9959 16.4659 14.0227C16.3858 14.0763 16.2801 14.1347 16.1472 14.1841C15.8764 14.285 15.5192 14.3392 15.0764 14.2713C14.2096 14.1384 13.0614 13.5474 11.5344 12.0291C10.0079 10.5113 9.41194 9.36834 9.2777 8.50306C9.20906 8.06061 9.26381 7.70331 9.36594 7.43225C9.41599 7.29941 9.47497 7.19378 9.5291 7.11389C9.5561 7.07405 9.58179 7.04074 9.60446 7.01368C9.6158 7.00015 9.6264 6.98817 9.63604 6.9777L9.64977 6.96312L9.65606 6.95666L9.65905 6.95363L9.66051 6.95217C9.66122 6.95146 9.66194 6.95075 10.1908 7.48258L9.66194 6.95075L9.94875 6.66556C10.3774 6.23939 10.4374 5.53194 10.0339 4.99297L8.77291 3.30856Z"
                                            fill="#1C274C" />
                                    </svg>
                                </p>
                            </div>
                        </div>
                    </div>
                </ion-header>
                <ion-content class="ion-padding  ">
                    <div class="border-t border-gray-200">
                        <div class="px-4 py-6 sm:px-6 space-y-4 h-full overflow-y-auto ">
                            <div v-for="message in chatMessages" :key="message.id"
                                :class="{ 'justify-end': message.sender === 'me', 'justify-start': message.sender !== 'me' }"
                                class="flex">
                                <div v-if="message.type === 'serviceRequest'" class="w-full">
                                    <div
                                        class="p-4 bg-white rounded-lg w-full shadow-xl border-solid border-black border-[1px] ">
                                        <div
                                            class="flex justify-start items-center my-1 border-l-black border-l-[5px] rounded-l-md  ">
                                            <div class="w-full  pl-1  h-10 flex items-start flex-col ">
                                                <p class="font-bold border-l-solid   ">Julio Nuñez</p>
                                                <p class="text-xs"> Codigo: 99-123-4124-412412-123</p>
                                            </div>
                                            <ion-avatar class="flex-shrink-0 w-10 h-10">
                                                <img src="https://www.gravatar.com/avatar?d=mp" alt="Avatar">
                                            </ion-avatar>
                                        </div>
                                        <div
                                            class="flex justify-start items-center my-1 border-l-black border-l-[5px] rounded-l-md ">
                                            <div
                                                class="w-full h-fit  pl-1 flex flex-col items-center  justify-between ">
                                                <div class="flex items-center  justify-between  w-full  my-2">
                                                    <div class=" text-xs flex gap-2  ">
                                                        <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none"
                                                            class="self-center">
                                                            <path
                                                                d="M16.1007 13.359L15.5719 12.8272H15.5719L16.1007 13.359ZM16.5562 12.9062L17.085 13.438H17.085L16.5562 12.9062ZM18.9728 12.5894L18.6146 13.2483L18.9728 12.5894ZM20.8833 13.628L20.5251 14.2869L20.8833 13.628ZM21.4217 16.883L21.9505 17.4148L21.4217 16.883ZM20.0011 18.2954L19.4723 17.7636L20.0011 18.2954ZM18.6763 18.9651L18.7459 19.7119H18.7459L18.6763 18.9651ZM8.81536 14.7266L9.34418 14.1947L8.81536 14.7266ZM4.00289 5.74561L3.2541 5.78816L3.2541 5.78816L4.00289 5.74561ZM10.4775 7.19738L11.0063 7.72922H11.0063L10.4775 7.19738ZM10.6342 4.54348L11.2346 4.09401L10.6342 4.54348ZM9.37326 2.85908L8.77286 3.30855V3.30855L9.37326 2.85908ZM6.26145 2.57483L6.79027 3.10667H6.79027L6.26145 2.57483ZM4.69185 4.13552L4.16303 3.60368H4.16303L4.69185 4.13552ZM12.0631 11.4972L12.5919 10.9654L12.0631 11.4972ZM16.6295 13.8909L17.085 13.438L16.0273 12.3743L15.5719 12.8272L16.6295 13.8909ZM18.6146 13.2483L20.5251 14.2869L21.2415 12.9691L19.331 11.9305L18.6146 13.2483ZM20.8929 16.3511L19.4723 17.7636L20.5299 18.8273L21.9505 17.4148L20.8929 16.3511ZM18.6067 18.2184C17.1568 18.3535 13.4056 18.2331 9.34418 14.1947L8.28654 15.2584C12.7186 19.6653 16.9369 19.8805 18.7459 19.7119L18.6067 18.2184ZM9.34418 14.1947C5.4728 10.3453 4.83151 7.10765 4.75168 5.70305L3.2541 5.78816C3.35456 7.55599 4.14863 11.144 8.28654 15.2584L9.34418 14.1947ZM10.7195 8.01441L11.0063 7.72922L9.9487 6.66555L9.66189 6.95073L10.7195 8.01441ZM11.2346 4.09401L9.97365 2.40961L8.77286 3.30855L10.0338 4.99296L11.2346 4.09401ZM5.73263 2.04299L4.16303 3.60368L5.22067 4.66736L6.79027 3.10667L5.73263 2.04299ZM10.1907 7.48257C9.66189 6.95073 9.66117 6.95144 9.66045 6.95216C9.66021 6.9524 9.65949 6.95313 9.659 6.95362C9.65802 6.95461 9.65702 6.95561 9.65601 6.95664C9.65398 6.95871 9.65188 6.96086 9.64972 6.9631C9.64539 6.96759 9.64081 6.97245 9.63599 6.97769C9.62634 6.98816 9.61575 7.00014 9.60441 7.01367C9.58174 7.04072 9.55605 7.07403 9.52905 7.11388C9.47492 7.19377 9.41594 7.2994 9.36589 7.43224C9.26376 7.70329 9.20901 8.0606 9.27765 8.50305C9.41189 9.36833 10.0078 10.5113 11.5343 12.0291L12.5919 10.9654C11.1634 9.54499 10.8231 8.68059 10.7599 8.27309C10.7298 8.07916 10.761 7.98371 10.7696 7.96111C10.7748 7.94713 10.7773 7.9457 10.7709 7.95525C10.7677 7.95992 10.7624 7.96723 10.7541 7.97708C10.75 7.98201 10.7451 7.98759 10.7394 7.99381C10.7365 7.99692 10.7335 8.00019 10.7301 8.00362C10.7285 8.00534 10.7268 8.00709 10.725 8.00889C10.7241 8.00979 10.7232 8.0107 10.7223 8.01162C10.7219 8.01208 10.7212 8.01278 10.7209 8.01301C10.7202 8.01371 10.7195 8.01441 10.1907 7.48257ZM11.5343 12.0291C13.0613 13.5474 14.2096 14.1383 15.0763 14.2713C15.5192 14.3392 15.8763 14.285 16.1472 14.1841C16.28 14.1346 16.3858 14.0763 16.4658 14.0227C16.5058 13.9959 16.5392 13.9704 16.5663 13.9479C16.5799 13.9367 16.5919 13.9262 16.6024 13.9166C16.6077 13.9118 16.6126 13.9073 16.6171 13.903C16.6194 13.9008 16.6215 13.8987 16.6236 13.8967C16.6246 13.8957 16.6256 13.8947 16.6266 13.8937C16.6271 13.8932 16.6279 13.8925 16.6281 13.8923C16.6288 13.8916 16.6295 13.8909 16.1007 13.359C15.5719 12.8272 15.5726 12.8265 15.5733 12.8258C15.5735 12.8256 15.5742 12.8249 15.5747 12.8244C15.5756 12.8235 15.5765 12.8226 15.5774 12.8217C15.5793 12.82 15.581 12.8183 15.5827 12.8166C15.5862 12.8133 15.5895 12.8103 15.5926 12.8074C15.5988 12.8018 15.6044 12.7969 15.6094 12.7929C15.6192 12.7847 15.6265 12.7795 15.631 12.7764C15.6403 12.7702 15.6384 12.773 15.6236 12.7785C15.5991 12.7876 15.501 12.8189 15.3038 12.7886C14.8905 12.7253 14.02 12.3853 12.5919 10.9654L11.5343 12.0291ZM9.97365 2.40961C8.95434 1.04802 6.94996 0.83257 5.73263 2.04299L6.79027 3.10667C7.32195 2.578 8.26623 2.63181 8.77286 3.30855L9.97365 2.40961ZM4.75168 5.70305C4.73201 5.35694 4.89075 4.9954 5.22067 4.66736L4.16303 3.60368C3.62571 4.13795 3.20329 4.89425 3.2541 5.78816L4.75168 5.70305ZM19.4723 17.7636C19.1975 18.0369 18.9029 18.1908 18.6067 18.2184L18.7459 19.7119C19.4805 19.6434 20.0824 19.2723 20.5299 18.8273L19.4723 17.7636ZM11.0063 7.72922C11.9908 6.7503 12.064 5.2019 11.2346 4.09401L10.0338 4.99295C10.4373 5.53193 10.3773 6.23938 9.9487 6.66555L11.0063 7.72922ZM20.5251 14.2869C21.3429 14.7315 21.4703 15.7769 20.8929 16.3511L21.9505 17.4148C23.2908 16.0821 22.8775 13.8584 21.2415 12.9691L20.5251 14.2869ZM17.085 13.438C17.469 13.0562 18.0871 12.9616 18.6146 13.2483L19.331 11.9305C18.2474 11.3414 16.9026 11.5041 16.0273 12.3743L17.085 13.438Z"
                                                                fill="#1C274C" />
                                                        </svg>
                                                        <p>
                                                            +(57)318 4610279
                                                        </p>
                                                    </div>
                                                    <div class="flex gap-2">
                                                        <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none"
                                                            class="self-center">
                                                            <path
                                                                d="M3 8L8.44992 11.6333C9.73295 12.4886 10.3745 12.9163 11.0678 13.0825C11.6806 13.2293 12.3194 13.2293 12.9322 13.0825C13.6255 12.9163 14.2671 12.4886 15.5501 11.6333L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                                                                stroke="#000000" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                        </svg>
                                                        <p class=" text-sm   "> nunezjuliot@gmail.com </p>
                                                    </div>
                                                </div>
                                                <div class="flex items-center  justify-between  w-full  my-2">
                                                    <div class=" text-sm  flex gap-2 ">
                                                        <svg fill="#000000" width="20px" height="20px"
                                                            viewBox="0 0 100 100" class=" flex-shrink-0 self-center ">
                                                            <path
                                                                d="M49,18.92A23.74,23.74,0,0,0,25.27,42.77c0,16.48,17,31.59,22.23,35.59a2.45,2.45,0,0,0,3.12,0c5.24-4.12,22.1-19.11,22.1-35.59A23.74,23.74,0,0,0,49,18.92Zm0,33.71a10,10,0,1,1,10-10A10,10,0,0,1,49,52.63Z" />
                                                        </svg>
                                                        <p class="text-sm flex-1 "> Calle 89 av 110 #109-57, Maracaibo,
                                                            Edo. Zulia, Venezuela</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr class="my-2 border-dashed border-[1px] border-[#d0d0d0] " />
                                        <div class="mt-2">
                                            <div class="flex gap-2 justify-end  ">
                                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                                                    class="flex-shrink-0 self-center">
                                                    <path
                                                        d="M3 9H21M17 13.0014L7 13M10.3333 17.0005L7 17M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                                                        stroke="#000000" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                                <p class="text-sm text-gray-600 self-center ">
                                                    {{ message.serviceDate }} 5:16 AM
                                                </p>
                                            </div>
                                            <p class="font-bold text-sm">Servicio solicitado: {{ message.serviceName }}
                                            </p>
                                            <div class="flex justify-between items-center">
                                                <div class="flex gap-2">
                                                    <p class="text-sm text-gray-600 self-center ">
                                                        Precio propuesto
                                                    </p>
                                                </div>
                                                <ion-item class="w-1/2 h-8   ">
                                                    <ion-input type="number" :value="message.proposedPrice"
                                                        class="text-right h-[10px] ">
                                                        <div slot="start" class="flex items-center text-gray-500">$
                                                        </div>
                                                    </ion-input>
                                                </ion-item>
                                            </div>
                                            <div class="flex justify-between items-center">
                                                <div class="flex gap-2">
                                                    <p class="text-sm text-gray-600 self-center ">
                                                        Costo
                                                    </p>
                                                </div>
                                                <ion-item class="w-1/2 h-8   ">
                                                    <ion-input type="number" :value="message.cost" class="text-right">
                                                        <div slot="start" class="flex items-center text-gray-500">$
                                                        </div>
                                                    </ion-input>
                                                </ion-item>
                                            </div>
                                            <div class="flex justify-between items-center">
                                                <div class="flex gap-2">
                                                    <p class="text-sm text-gray-600 self-center ">
                                                        Comision
                                                    </p>
                                                </div>
                                                <ion-item class="w-1/2 h-8  ">
                                                    <ion-input type="number" :value="message.commission"
                                                        class="text-right">
                                                        <div slot="start" class="flex items-center text-gray-500">$
                                                        </div>
                                                    </ion-input>
                                                </ion-item>
                                            </div>
                                            <div class="flex justify-start mb-3 ">
                                                <div class="w-1/2 h-8 flex  justify-start ">
                                                    <p class=" items-center flex ">
                                                        {{ message.paymentStatus }}
                                                    </p>
                                                    <div class="flex items-center justify-center text-gray-500 ml-2">
                                                        <template v-if="message.paymentStatus === 'Pendiente'">
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
                                                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    stroke-width="2"
                                                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                            </svg>
                                                        </template>
                                                        <template v-if="message.paymentStatus === 'Pagado'">
                                                            <svg fill="#000000" width="24px" height="24px"
                                                                viewBox="0 0 32 32">
                                                                <path
                                                                    d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM22.386 10.146l-9.388 9.446-4.228-4.227c-0.39-0.39-1.024-0.39-1.415 0s-0.391 1.023 0 1.414l4.95 4.95c0.39 0.39 1.024 0.39 1.415 0 0.045-0.045 0.084-0.094 0.119-0.145l9.962-10.024c0.39-0.39 0.39-1.024 0-1.415s-1.024-0.39-1.415 0z">
                                                                </path>
                                                            </svg>
                                                        </template>
                                                    </div>
                                                </div>
                                            </div>

                                        <div class="flex justify-end space-x-2 mt-4">
                                            <button class="bg-gray-700 text-white  p-2 shadow-lg flex items-center rounded-lg ">
                                                <span class="text-sm font-bold ">Aceptar</span>
                                            </button>
                                            <button class="bg-red-500 text-white p-2 shadow-lg flex items-center rounded-lg ">
                                                <span class="text-sm font-bold ">Declinar</span>
                                            </button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-else
                                    :class="{ 'bg-gray-800 text-white': message.sender === 'me', 'bg-gray-200': message.sender !== 'me' }"
                                    class="p-3 rounded-lg max-w-xs">
                                    <p class="text-sm">{{ message.text }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fixed bottom-20 right-4 flex space-x-2">
                        <button @click="toggleSlider"
                            class="bg-blue-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center">
                            <svg fill="currentColor" width="45px" height="45px" viewBox="0 0 100 100"
                                class="mx-auto text-white">
                                <path
                                    d="M57.6,67.4h7.7a1.78,1.78,0,0,0,1.9-1.9v-31a1.78,1.78,0,0,0-1.9-1.9H57.6a1.78,1.78,0,0,0-1.9,1.9v31A1.78,1.78,0,0,0,57.6,67.4Z" />
                                <path
                                    d="M75,67.4h3.9a1.78,1.78,0,0,0,1.9-1.9v-31a1.78,1.78,0,0,0-1.9-1.9H75a1.78,1.78,0,0,0-1.9,1.9v31A1.84,1.84,0,0,0,75,67.4Z" />
                                <path
                                    d="M48.7,67.4h0a1.81,1.81,0,0,0,2-1.9v-31a1.78,1.78,0,0,0-1.9-1.9h-.1a1.78,1.78,0,0,0-1.9,1.9v31A1.73,1.73,0,0,0,48.7,67.4Z" />
                                <path
                                    d="M37.8,67.4h1.9a1.78,1.78,0,0,0,1.9-1.9v-31a1.78,1.78,0,0,0-1.9-1.9H37.8a1.78,1.78,0,0,0-1.9,1.9v31A1.73,1.73,0,0,0,37.8,67.4Z" />
                                <path
                                    d="M21.1,67.4h7.7a1.78,1.78,0,0,0,1.9-1.9v-31a1.78,1.78,0,0,0-1.9-1.9H21.1a1.78,1.78,0,0,0-1.9,1.9v31A1.84,1.84,0,0,0,21.1,67.4Z" />
                            </svg>
                        </button>
                        <button @click="toggleSlider"
                            class="bg-blue-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center">
                            <svg width="30px" height="30px" viewBox="0 0 48 48" fill="currentColor"
                                class="mx-auto text-white">
                                <title>apps-small-solid</title>
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="invisible_box" data-name="invisible box">
                                        <rect width="48" height="48" fill="none" />
                                    </g>
                                    <g id="icons_Q2" data-name="icons Q2">
                                        <path
                                            d="M16,6v8a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V6A2,2,0,0,1,6,4h8A2,2,0,0,1,16,6ZM28,4H20a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V6A2,2,0,0,0,28,4ZM42,4H34a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V6A2,2,0,0,0,42,4ZM14,18H6a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V20A2,2,0,0,0,14,18Zm14,0H20a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V20A2,2,0,0,0,28,18Zm14,0H34a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V20A2,2,0,0,0,42,18ZM14,32H6a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V34A2,2,0,0,0,14,32Zm14,0H20a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V34A2,2,0,0,0,28,32Zm14,0H34a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V34A2,2,0,0,0,42,32Z" />
                                    </g>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <transition name="slide-fade">
                        <div v-if="isSliderOpen"
                            class="fixed bottom-32 left-0 right-0 bg-white shadow-lg rounded-lg p-4 w-full z-[10] ">
                            <div class="flex overflow-x-auto space-x-4">
                                <div v-for="n in 20" :key="n" class="bg-gray-200 p-3 rounded-lg min-w-[200px]">
                                    <p class="text-sm">Card {{ n }} content</p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nisi quasi,
                                    deserunt nobis, laborum quod nesciunt consequuntur nihil, ullam id ipsam
                                    pariatur!
                                    Voluptatibus alias praesentium voluptatem provident, accusamus deleniti eos.
                                </div>
                            </div>
                        </div>
                    </transition>
                </ion-content>
                <ion-footer>
                    <div class="flex items-center p-2 border-t border-gray-200">
                        <button @click="attachFile" class="p-2">
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M7 8.00092L7 17C7 17.5523 6.55228 18 6 18C5.44772 18 5.00001 17.4897 5 16.9374C5 16.9374 5 16.9374 5 16.9374C5 16.937 5.00029 8.01023 5.00032 8.00092C5.00031 7.96702 5.00089 7.93318 5.00202 7.89931C5.00388 7.84357 5.00744 7.76644 5.01426 7.67094C5.02788 7.4803 5.05463 7.21447 5.10736 6.8981C5.21202 6.27011 5.42321 5.41749 5.85557 4.55278C6.28989 3.68415 6.95706 2.78511 7.97655 2.10545C9.00229 1.42162 10.325 1 12 1C13.6953 1 14.9977 1.42162 16.0235 2.10545C17.0429 2.78511 17.7101 3.68415 18.1444 4.55278C18.5768 5.41749 18.788 6.27011 18.8926 6.8981C18.9454 7.21447 18.9721 7.4803 18.9857 7.67094C18.9926 7.76644 18.9961 7.84357 18.998 7.89931C18.9991 7.93286 18.9997 7.96641 19 7.99998C19.0144 10.7689 19.0003 17.7181 19 18.001C19 18.0268 18.9993 18.0525 18.9985 18.0782C18.9971 18.1193 18.9945 18.175 18.9896 18.2431C18.9799 18.3791 18.961 18.5668 18.9239 18.7894C18.8505 19.2299 18.7018 19.8325 18.3944 20.4472C18.0851 21.0658 17.6054 21.7149 16.8672 22.207C16.1227 22.7034 15.175 23 14 23C12.825 23 11.8773 22.7034 11.1328 22.207C10.3946 21.7149 9.91489 21.0658 9.60557 20.4472C9.29822 19.8325 9.14952 19.2299 9.07611 18.7894C9.039 18.5668 9.02007 18.3791 9.01035 18.2431C9.00549 18.175 9.0029 18.1193 9.00153 18.0782C9.00069 18.0529 9.00008 18.0275 9 18.0022C8.99621 15.0044 9 12.0067 9 9.00902C9.00101 8.95723 9.00276 8.89451 9.00645 8.84282C9.01225 8.76155 9.02338 8.65197 9.04486 8.5231C9.08702 8.27011 9.17322 7.91749 9.35558 7.55278C9.53989 7.18415 9.83207 6.78511 10.2891 6.48045C10.7523 6.17162 11.325 6 12 6C12.675 6 13.2477 6.17162 13.7109 6.48045C14.1679 6.78511 14.4601 7.18415 14.6444 7.55278C14.8268 7.91749 14.913 8.27011 14.9551 8.5231C14.9766 8.65197 14.9877 8.76155 14.9936 8.84282C14.9984 8.91124 14.9999 8.95358 15 8.99794L15 17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V9.00902C12.9995 8.99543 12.9962 8.93484 12.9824 8.8519C12.962 8.72989 12.9232 8.58251 12.8556 8.44722C12.7899 8.31585 12.7071 8.21489 12.6015 8.14455C12.5023 8.07838 12.325 8 12 8C11.675 8 11.4977 8.07838 11.3985 8.14455C11.2929 8.21489 11.2101 8.31585 11.1444 8.44722C11.0768 8.58251 11.038 8.72989 11.0176 8.8519C11.0038 8.93484 11.0005 8.99543 11 9.00902V17.9957C11.0009 18.0307 11.0028 18.0657 11.0053 18.1006C11.0112 18.1834 11.0235 18.3082 11.0489 18.4606C11.1005 18.7701 11.2018 19.1675 11.3944 19.5528C11.5851 19.9342 11.8554 20.2851 12.2422 20.543C12.6227 20.7966 13.175 21 14 21C14.825 21 15.3773 20.7966 15.7578 20.543C16.1446 20.2851 16.4149 19.9342 16.6056 19.5528C16.7982 19.1675 16.8995 18.7701 16.9511 18.4606C16.9765 18.3082 16.9888 18.1834 16.9947 18.1006C16.9972 18.0657 16.9991 18.0307 17 17.9956L16.9999 7.99892C16.9997 7.98148 16.9982 7.91625 16.9908 7.81343C16.981 7.67595 16.9609 7.47303 16.9199 7.2269C16.837 6.72989 16.6732 6.08251 16.3556 5.44722C16.0399 4.81585 15.5821 4.21489 14.9141 3.76955C14.2523 3.32838 13.325 3 12 3C10.675 3 9.7477 3.32838 9.08595 3.76955C8.41793 4.21489 7.96011 4.81585 7.64443 5.44722C7.32678 6.08251 7.16298 6.72989 7.08014 7.2269C7.03912 7.47303 7.019 7.67595 7.00918 7.81343C7.0025 7.90687 7.00117 7.9571 7 8.00092Z"
                                    fill="#0F0F0F" />
                            </svg>
                        </button>
                        <input v-model="message" placeholder="Escribe un mensaje..."
                            class="flex-1 p-2 border rounded-lg dark:bg-white  " />
                        <button @click="sendMessage" class="p-2">
                            <svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px"
                                viewBox="0 0 32 32" xml:space="preserve" fill="#0B1719">
                                <path class="stone_een" d="M10.774,23.619l-1.625,5.691C9.06,29.164,9,28.992,9,28.794v-5.57l13.09-12.793L10.774,23.619z
     M10.017,29.786c0.243-0.002,0.489-0.084,0.69-0.285l3.638-3.639l-2.772-1.386L10.017,29.786z M28.835,2.009L3.802,14.326
    c-2.226,1.095-2.236,4.266-0.017,5.375l4.89,2.445L27.464,3.79c0.204-0.199,0.516-0.234,0.759-0.086
    c0.326,0.2,0.396,0.644,0.147,0.935l-16.3,18.976l8.84,4.4c1.746,0.873,3.848-0.128,4.27-2.034l5.071-22.858
    C30.435,2.304,29.588,1.639,28.835,2.009z" />
                            </svg>
                        </button>
                    </div>
                </ion-footer>
            </ion-modal>
            <!-- fin modal chat -->
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonModal, IonFooter, IonItem, IonIcon, IonInput } from '@ionic/vue';
import { computed, ref, watchEffect } from 'vue';
import { useChatStore } from '@/stores/cliente/chatStores';
import { storeToRefs } from 'pinia';

const chatSotre = useChatStore();
const { isOpenChat } = storeToRefs(chatSotre);
const { setIsOpenChat } = chatSotre;

const isOpenChatComputed = computed(() => isOpenChat.value);

const message = ref('');

const sendMessage = () => {
    if (message.value.trim() !== '') {
        // Logic to send the message
        console.log('Message sent:', message.value);
        message.value = '';
    }
};

const attachFile = () => {
    // Logic to attach a file
    console.log('Attach file');
};

const isSliderOpen = ref(false);

const toggleSlider = () => {
    isSliderOpen.value = !isSliderOpen.value;
};
const chatMessages = ref([
    { id: 1, text: 'Hola, ¿cómo estás?', sender: 'other' },
    { id: 2, text: '¡Hola! Estoy bien, gracias. ¿Y tú?', sender: 'me' },
    { id: 3, text: 'También estoy bien, gracias por preguntar. ¿Qué has estado haciendo últimamente?', sender: 'other' },
    { id: 4, text: 'He estado trabajando en un nuevo proyecto de desarrollo. ¿Y tú?', sender: 'me' },
    { id: 5, text: 'Eso suena interesante. Yo he estado aprendiendo nuevas tecnologías.', sender: 'other' },
    { id: 6, text: '¡Genial! ¿Qué tecnologías has estado aprendiendo?', sender: 'me' },
    { id: 7, text: 'He estado aprendiendo Vue.js y Tailwind CSS. ¿Tú has trabajado con ellas?', sender: 'other' },
    { id: 8, text: 'Sí, de hecho, las estoy usando en mi proyecto actual. Son muy útiles.', sender: 'me' },
    { id: 9, text: '¡Qué coincidencia! ¿Tienes algún consejo para alguien que está empezando?', sender: 'other' },
    { id: 10, text: 'Claro, te recomendaría que practiques mucho y que leas la documentación oficial. También hay muchos tutoriales en línea.', sender: 'me' },
    { id: 11, text: 'Gracias por el consejo. ¿Tienes algún recurso favorito?', sender: 'other' },
    { id: 12, text: 'Me gusta mucho el sitio oficial de Vue.js y el canal de YouTube de Traversy Media.', sender: 'me' },
    { id: 13, text: 'Voy a echarles un vistazo. ¿Qué más has estado haciendo?', sender: 'other' },
    { id: 14, text: 'He estado trabajando en mejorar mis habilidades de diseño. ¿Tú tienes algún hobby?', sender: 'me' },
    { id: 15, text: 'Sí, me gusta mucho la fotografía. ¿Y a ti?', sender: 'other' },
    { id: 16, text: 'A mí también me gusta la fotografía. Es una gran manera de capturar momentos.', sender: 'me' },
    { id: 17, text: 'Totalmente de acuerdo. ¿Tienes algún lugar favorito para tomar fotos?', sender: 'other' },
    { id: 18, text: 'Me encanta tomar fotos en la naturaleza. ¿Y tú?', sender: 'me' },
    { id: 19, text: 'A mí me gusta tomar fotos en la ciudad, especialmente de la arquitectura.', sender: 'other' },
    { id: 20, text: 'Eso suena genial. La arquitectura puede ser muy inspiradora.', sender: 'me' },
    { id: 21, text: 'Sí, definitivamente. ¿Tienes algún proyecto de fotografía en mente?', sender: 'other' },
    { id: 22, text: 'Estoy pensando en hacer una serie de fotos sobre la vida urbana. ¿Tú tienes algún proyecto?', sender: 'me' },
    { id: 23, text: 'Estoy planeando un viaje para tomar fotos de diferentes ciudades. ¿Alguna recomendación?', sender: 'other' },
    { id: 24, text: 'Te recomendaría visitar Barcelona y Tokio. Son ciudades muy fotogénicas.', sender: 'me' },
    { id: 25, text: 'Gracias por la recomendación. Definitivamente las agregaré a mi lista.', sender: 'other' },
    { id: 26, text: 'De nada. ¡Espero que disfrutes tu viaje!', sender: 'me' },
    { id: 27, text: '¡Gracias! Estoy seguro de que lo haré.', sender: 'other' },
    {
        id: 28,
        type: 'serviceRequest', // Nuevo tipo de mensaje
        serviceName: 'Limpieza de hogar',
        serviceDate: '25/10/2023',
        proposedPrice: '50', // Precio propuesto
        cost: '50', // Costo del servicio
        commission: '5', // Comisión
        paymentStatus: 'Pendiente', // Estado de pago: Pendiente, Pagado, etc.
        sender: 'other' // o 'me' dependiendo de quién envía la solicitud
    },
]);
const addMessage = (text, sender) => {
    chatMessages.value.push({ id: chatMessages.value.length + 1, text, sender });
};

const anotherAction = () => {
    // Logic for another action
    console.log('Another action');
};

watchEffect(() => {
    console.log('Chat messages updated:', chatMessages.value);
});
</script>


<style scoped>
ion-content {
    --padding-bottom: 70px;
}
</style>