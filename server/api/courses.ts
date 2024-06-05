import storage from '../storage/courses'

export default defineEventHandler(async (event) => {
    console.log('fetch courses')

    // const { data } = readBody(event);
    // console.log(data)

    // return `Data from api: ${data}`;

    // await new Promise(r => {
    //     setTimeout(r, 2000)
    // })
    await new Promise(r => setTimeout(r, 2000))
    return storage.list()
})
