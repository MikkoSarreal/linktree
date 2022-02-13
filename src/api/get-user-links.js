import links from '../mocks/links.json'

const getUserLink = () => {
    return new Promise((resolve, reject) => {
        resolve(links)
    })
}

export default getUserLink