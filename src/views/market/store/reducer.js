// import * as Types from './actionTypes'

const initState = {
  bannerImg: 'https://img.smi170.com/upload/advert/23423787-3519-465a-8020-56b6ab3a0c97.jpg',
  navList: []
}

export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state))

  return newState
}
