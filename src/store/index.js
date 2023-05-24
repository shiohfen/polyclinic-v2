import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from "../firebase"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async registerClinic({ }, clinicData) {
      return new Promise(async (resolve, reject) => {

        const storageRef = fb.storage.ref();
        const imagesRef = storageRef.child("/images/" + clinicData.clinicLogo.name);

        imagesRef.put(data.clinicLogo).then((snapshot) => {
          snapshot.ref.getDownloadURL().then(async (downloadURL) => {
            const dupes = await fb.db.collection("clinics").where("name", "==", clinicData, clinicName).get()

            if (dupes) {
              reject("Clinic already exists")
            } else {
              fb.db.collection("clinics").add({
                name: clinicData.clinicName,
                address: clinicData.address,
                logo: downloadURL,
                phone: clinicData.phone
              })
            }

          })
        })


        // fb.db.collection("clinics")
      })

    },
  },
  modules: {
  }
})
