import {defineStore} from 'pinia'

export const useAppAtore = defineStore('counter', {
    state: () => ({
        isAuth: 'false',
        data:{},
        pilih: '',
        jenjang: ["Pendidikan PraSekolah", "Pendidikan Dasar", "Pendidikan Menengah", "Pendidikan Tinggi"],
        praSekolah: ['PAUD', 'TK', 'RA'],
        dasar:["SD", "MI", 'SMP', "MTs"],
        menengah:["SMA", "MA", "SMK"],
        tinggi: ["D3", "S1", 'S2', 'S3']
    }),
    actions: {
        async login(email, password) {
            try {
                if (email) {
                    if (password) {
                        this.router.push('/about')
                        this.isAuth = 'true'
                    }
                    else{
                        console.log("email/password");
                    }
                }
                else {
                    console.log("email/password");
                }
                
            } catch (error) {
                console.log(error);
            }
        },
        async pilihJenjang(i){
            try {
                this.pilih = i
            } catch (error) {
                console.log(error);
            }
        },
        async pilihTInhkat(){
            try {
                if (this.pilih === this.jenjang[0]) {
                    this.data= this.praSekolah
                    console.log(data);
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
})