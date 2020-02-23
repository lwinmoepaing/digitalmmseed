require('dotenv').config()

const { BASE_API_URL, PORT } = process.env

module.exports = {
  env: {
    BASE_API_URL: BASE_API_URL || 'default route',
    PORT,
  },

  // Exporting Static
  exportTrailingSlash: true,
  async exportPathMap() {
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/user': { page: '/user' },
    }
    const data = await Array.from({ length: 10 }, (_, i) => i + 1)

    data.forEach((id) => {
      paths[`/user/${id}`] = { page: '/user/[id]', query: { id } }
    })

    return paths
  },
}
