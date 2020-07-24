import React, {ReactNode, useState} from 'react'

interface ContextProps {
    setActiveIndex: (key: string, index: any)=>void,
    getActiveIndex: (key: string)=> any;
}

export const AccordionContext = React.createContext<ContextProps>({
    setActiveIndex: ()=>{},
    getActiveIndex: ()=>{},
});

interface ProviderProps {
    children: ReactNode
}

const AccordionProvider = ({children}: ProviderProps) => {
    const [data, setData] = useState<{[key: string]:  any}>({});
    return (
        <AccordionContext.Provider
            value={{
                setActiveIndex: (key, index)=>{
                    setData({...data, [key]: index})
                },
                getActiveIndex: (key)=>{
                    return data[key];
                }
            }}
        >
            {children}
        </AccordionContext.Provider>
    )
};

export default AccordionProvider;
