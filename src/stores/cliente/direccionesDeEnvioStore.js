// stores/cliente/direccionesDeEnvioStore.js
import { defineStore } from 'pinia';
import { Loader } from "@googlemaps/js-api-loader";
import { showToast } from '@/utils/toast'
import { api } from '../../common/apiJs';
import { Preferences } from '@capacitor/preferences';
import { useAppStore } from '../appStore'

export const useDireccionesDeEnvioStore = defineStore('Direcciones de envio', {
    state: () => ({
        isLoadingGuardar: false,
        direccionInput: '', // Valor del input vinculado con v-model
        loader: new Loader({
            apiKey: "AIzaSyCnT6JLRBXZfkZKRLhxvdNPyiz0lbUsx5I",
            version: "weekly",
            libraries: ['places']
        }),
        google: null, // Almacenará la API de Google Maps
        autocomplete: null, // Almacenará la instancia del autocompletado
        map: null, // Almacenará la instancia del mapa
        marker: null, // Almacenará el marcador avanzado
        direccionSeleccionada: null, // Almacenará la dirección seleccionada
        direccionesDelUsuario: [], // Almacenará las direcciones del usuario
    }),
    getters: {
        getDireccionSeleccionada: (state) => state.direccionSeleccionada,

    },
    actions: {
        async inicializarAutocompletado(inputElement) {
            try {
                // Cargar la API de Google Maps
                this.google = await this.loader.load();

                // Crear el autocompletado
                this.autocomplete = new this.google.maps.places.Autocomplete(inputElement, {
                    componentRestrictions: { country: ["ve", "mx"] }, // Restringir a Venezuela y México
                    fields: ["address_components", "geometry", "name"],
                });

                // Escuchar cuando el usuario selecciona una dirección
                this.autocomplete.addListener("place_changed", () => {
                    const place = this.autocomplete.getPlace();
                    if (place.geometry) {
                        this.direccionSeleccionada = place;
                        this.direccionInput = place.formatted_address; // Actualizar el input con la dirección seleccionada
                        this.actualizarMapa(place.geometry.location);
                    }
                });

            } catch (error) {
                console.error("Error al inicializar el autocompletado:", error);
            }
        },

        async inicializarMapa(mapElement) {
            try {
                // Cargar la API de Google Maps si aún no está cargada
                if (!this.google) {
                    this.google = await this.loader.load();
                }

                const mapOptions = {
                    center: { lat: 10.6545, lng: -71.6344 }, // Coordenadas iniciales (Maracaibo, Zulia, Venezuela)
                    zoom: 15,
                    disableDefaultUI: true, // Desactivar todos los controles predeterminados
                    zoomControl: false, // Desactivar el control de zoom
                    mapTypeControl: false, // Desactivar el control de tipo de mapa
                    scaleControl: false, // Desactivar el control de escala
                    streetViewControl: false, // Desactivar el control de Street View
                    rotateControl: false, // Desactivar el control de rotación
                    fullscreenControl: false, // Desactivar el control de pantalla completa
                    gestureHandling: 'greedy', // Permitir que el mapa responda a gestos táctiles
                };

                // Crear el mapa
                this.map = new this.google.maps.Map(mapElement, mapOptions);
                // Crear el marcador avanzado
                this.marker = new this.google.maps.Marker({
                    map: this.map,
                    position: { lat: 10.6545, lng: -71.6344 }, // Posición inicial
                    draggable: true,

                });

                // Escuchar cuando el usuario arrastra el marcador
                this.google.maps.event.addListener(this.marker, "dragend", (event) => {
                    this.actualizarDireccionDesdeMarcador(event.latLng);
                });

                // Escuchar clics en el mapa
                this.google.maps.event.addListener(this.map, "click", (event) => {
                    this.actualizarDireccionDesdeMarcador(event.latLng);
                });
            } catch (error) {
                console.error("Error al inicializar el mapa:", error);
            }
        },

        actualizarMapa(location) {
            if (this.map && this.marker) {
                this.map.setCenter(location);
                this.marker.setPosition(location); // Actualizar la posición del marcador
            }
        },

        async actualizarDireccionDesdeMarcador(latLng) {
            try {
                const geocoder = new this.google.maps.Geocoder();
                const result = await geocoder.geocode({ location: latLng });
                if (result.results.length > 0) {
                    const direccion = result.results[0];
                    this.direccionSeleccionada = direccion;
                    this.direccionInput = direccion.formatted_address; // Actualizar el input con la dirección del marcador
                    this.actualizarMapa(latLng); // Centrar el mapa en la nueva ubicación
                }
            } catch (error) {
                console.error("Error al obtener la dirección desde el marcador:", error);
            }
        },
        async guardarDireccion() {
            const { formatted_address } = this.getDireccionSeleccionada;
            const appStore = useAppStore();
            try {
                if (formatted_address) {
                    const { value } = await Preferences.get({ key: 'user' });
                    const { id } = JSON.parse(value); // user id
                    if (id) {
                        await api.post('/store-user-address', {
                            direccion: formatted_address,
                            user_id: id,
                        });
                        await appStore.getUserbyId(id); // Actualizar la información del usuario después de cambiar el estado
                        showToast('Dirección guardada exitosamente.', 1000);
                    } else {
                        showToast('No se pudo obtener el ID del usuario.', 1000);
                    }
                } else {
                    showToast('Por favor, arrastra el marcador en el mapa hasta la dirección deseada.', 1000);
                }
            } catch (error) {
                showToast(`error al guardar la dirrección ${JSON.stringify(error)}`, 1000);
            }
        },
        async obtenerDireccionesDeUsuario() {
            try {
                const { value } = await Preferences.get({ key: 'user' });
                const addresses = (JSON.parse(value)?.addresses) || [];
                this.direccionesDelUsuario = [];
                for (const address of addresses) {
                    this.direccionesDelUsuario.push({
                        ...address,
                        loading: false
                    });
                }
            } catch (error) {
                console.error("Error al obtener las direcciones del usuario:", error);
                this.direccionesDelUsuario = [];
            }
        },
        async actualizarStatusDireccion(direccion, status) {
            try {
                direccion.loading = true; // Establecer el estado de carga en true
                const appStore = useAppStore();
                const { value } = await Preferences.get({ key: 'user' });
                const { id } = JSON.parse(value); // user id
                if (id) {
                    await api.put(`/update-user-address-status/${direccion.id}`, {
                        status: !status, // Invierte el valor booleano de status
                    });
                    await appStore.getUserbyId(id); // Actualizar la información del usuario después de cambiar el estado
                    await showToast('Estado de la dirección actualizado exitosamente.', 1000);
                    await this.obtenerDireccionesDeUsuario(); // Actualizar la lista de direcciones después de cambiar el estado
                    direccion.loading = false; // Restablecer el estado de carga
                } else {
                    direccion.loading = false; // Restablecer el estado de carga
                    showToast('No se pudo obtener el ID del usuario.', 1000);
                }
            } catch (error) {
                direccion.loading = false; // Restablecer el estado de carga
                showToast(`Error al actualizar el estado de la dirección: ${JSON.stringify(error)}`, 1000);
            }
        },
        async elimininarDireccion(direccion) {
            try {
                direccion.loading = true; // Establecer el estado de carga en true
                const appStore = useAppStore();
                const { value } = await Preferences.get({ key: 'user' });
                const { id } = JSON.parse(value); // user id
                if (id) {
                    await api.delete(`/delete-user-address/${direccion.id}`);
                    await appStore.getUserbyId(id);
                    await showToast('Dirección eliminada exitosamente.', 1000);
                    await this.obtenerDireccionesDeUsuario();
                    direccion.loading = false;
                } else {
                    direccion.loading = false;
                    showToast('No se pudo obtener el ID del usuario.', 1000);
                }
            } catch (error) {
                direccion.loading = false;
                showToast(`Error al actualizar el estado de la dirección: ${JSON.stringify(error)}`, 1000);
            }
        },
    },
});