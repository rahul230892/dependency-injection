import React, {useContext} from "react";
import { AlertLogger, ConsoleLogger } from "../Dependencies/logger";


const DependencyContext = React.createContext()


export function useDependency() {
    return useContext(DependencyContext)
}

const loggerImplementations = {
    'console': ConsoleLogger,
    'alert': AlertLogger
}

export function DependencyProvider({myService, children}){
    const loggerImplementation = loggerImplementations[process.env.REACT_APP_LOGGER_TYPE]
    const logger = new loggerImplementation()
    
    return (
        <DependencyContext.Provider value={{myService, logger}}>
            {children}
        </DependencyContext.Provider>
    )
}