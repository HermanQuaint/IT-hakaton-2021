import {api} from "@/helpers/api"

 class PosterService {

     async getAll() {
         // eslint-disable-next-line no-useless-catch
         try {
             //const res = await api.get('/api/posters/')
             const res = await api.get('/HermanQuaint/IT-hakaton-2021/master/public/movies.json')
             return res
         } catch (e) {throw e}
     }

     /*async getById(id) {
         try {
             const res = await api.get(`/api/posters/${id}/`)
             return res.data
         } catch (e) {throw e}
     }*/


 }

 export default new PosterService()
