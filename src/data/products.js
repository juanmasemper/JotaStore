const products = [
  { id: '1', name: 'Remera Oversize Negra', description: 'Remera de algodón premium.', price: 12000, category: 'remeras', stock: 10, img: 'https://acdn-us.mitiendanube.com/stores/002/215/740/products/ro-negro-17350bc469ebf2bea517413040455983-1024-1024.jpg' },
  { id: '2', name: 'Remera JotaStore Logo', description: 'Remera básica con logo.', price: 11000, category: 'remeras', stock: 8, img: 'https://scontent.faep9-1.fna.fbcdn.net/v/t39.30808-6/466152506_9450039945010147_554535596070491137_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=iPgBNK4K3fgQ7kNvwGyQitr&_nc_oc=AdlS7pGGl5lkSiE9g6fnLuGoiYcY7Us7PJujY8p-Kwc9rvvegbfZV4A7osmmWydSXPg&_nc_zt=23&_nc_ht=scontent.faep9-1.fna&_nc_gid=P_JPlz8J3mWSlv2czYF52g&oh=00_AfgWUT1rcQIOAz66PKUf9u71nXFaIXvUshDOiL23OejdGA&oe=691966F9' },
  { id: '3', name: 'Buzo Hoodie Lila', description: 'Buzo con capucha y frisa.', price: 22000, category: 'buzos', stock: 6, img: 'https://alitas.com.ar/cdn/shop/files/buzo-myself-lila_20_1.png?v=1710270973' },
  { id: '4', name: 'Buzo Negro Minimal', description: 'Buzo negro liso.', price: 21000, category: 'buzos', stock: 5, img: 'https://marcopololp.com.ar/wp-content/uploads/2023/11/buzo-breder-negro-resuelto-marco-polo-2.jpg' },
  { id: '5', name: 'Gorra Snapback', description: 'Gorra con logo bordado.', price: 8000, category: 'accesorios', stock: 12, img: 'https://i5.walmartimages.com/seo/Classic-Snapback-Hat-Cap-Hip-Hop-Style-Flat-Bill-Blank-Solid-Color-Adjustable-Size-Black_5461d04a-fd0e-4191-9b13-fcf15c45664a_1.9cac2adb9188378d174d0d790fef6d81.jpeg' },
  { id: '6', name: 'Riñonera JotaStore', description: 'Riñonera urbana.', price: 9500, category: 'accesorios', stock: 9, img: 'https://acdn-us.mitiendanube.com/stores/002/330/836/products/2531men-negro-lauti1-39d485ee5fbbecf3d516681111883519-1024-1024.jpeg' }
]

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export async function getProducts() {
  await delay(500)
  return products
}

export async function getProductsByCategory(categoryId) {
  await delay(500)
  return products.filter((p) => p.category === categoryId)
}

export async function getProductById(id) {
  await delay(500)
  return products.find((p) => p.id === id)
}
