/* eslint-disable camelcase, no-console */

// eslint-disable-next-line no-unused-vars
function decodeToBase64(base64String) {
  return Buffer.from(base64String, 'base64').toString('ascii')
}
// eslint-disable-next-line no-unused-vars
function encodeToBase64(data) {
  return Buffer.from(data).toString('base64')
}

function getTheMovieDBConfigEnv() {
  // const theMovieDBConfigEnv = process.env.ESTRENOSCINEHOY_THEMOVIEDB_CONFIG
  const theMovieDBConfigEnv = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWUzMTJmMzMwZTkwOTk0OWZiNmIwNDViN2VhYmE2NSIsInN1YiI6IjVlNmJkMmMyY2VkYWM0MDAxNzQ5NjJlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YEVmEFcunK4clG1KuUXQm9msRV70n5hF1e9ozfIMjbc'
  if (theMovieDBConfigEnv === undefined || theMovieDBConfigEnv == null) {
    console.error(
      '(Estrenos cine hoy) theMovieDBConfigEnv... empty!!. Setup environment vars ESTRENOSCINEHOY_THEMOVIEDB_CONFIG...'
    )
  }
  console.log('getTheMovieDBConfigEnv... loading with sucess!!!')
  return theMovieDBConfigEnv
}

const theMovieDBConfigEnv = getTheMovieDBConfigEnv()

export { theMovieDBConfigEnv }
