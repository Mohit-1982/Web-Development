import userContext from './UserContext'


const UserContextProvider = ({children}) => {
  return (
    <userContext.Provider>
        {children}
    </userContext.Provider>
  )
}

export default UserContextProvider