//api url 獨立成設定檔
export const HOST = 'http://localhost:3001'

// GET:全部黑膠商品
export const ALL_VR_DATA = `${HOST}/db-all-vr-album/api`

// GET:黑膠商品
export const PRODUCT_DATA = `${HOST}/product`

// 登入, POST
export const CUS_UPLOAD = `${HOST}/try-upload/api`

// GET:商品頁面(黑膠)
export const vrProd_DATA = `${HOST}/db-product/api`

// GET:商品頁面(唱機)
export const vrPlayer_DATA = `${HOST}/db-recordPlayerAll/api`
