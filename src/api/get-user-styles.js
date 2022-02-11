import userStyles from '../mocks/user-styles.json'

const getUserStyles = () => {
    return new Promise((resolve, reject) => {
        resolve(userStyles)
    })
}

export default getUserStyles