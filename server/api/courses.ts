import storage from '../storage/courses'

export default defineEventHandler(async (event) => {
    console.log('fetch courses')
    await new Promise(r => setTimeout(r, 2000))
    return storage.list()
})
