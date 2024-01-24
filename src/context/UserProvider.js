import React, { createContext } from "react"
import { useQuery } from "react-apollo";
import { ORDERLIST } from "../Graphql/Orders";
import { ME_QUERY } from "../Graphql";

export const UserContext = createContext(null)

const UserProvider = ({ children }) => {
    // const { loading, error: queryError, data } = useQuery(ORDERLIST);
    const { loading, error,data } = useQuery(ME_QUERY);
console.log({data, loading, error})
  const me = data ? data.me : null;
console.log(me)


    const values = {
        me,
        count:"64584654"
    }
    return (<UserContext.Provider value={values}>
        {children}
    </UserContext.Provider>)
}

export default UserProvider