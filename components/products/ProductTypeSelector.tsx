import { Box, Button } from "@mui/material";
import { FC, useState } from "react"

interface Props { selectedType: string;  types: string[] }

export const ProductTypeSelector: FC<Props> = ( { selectedType, types } ) => {

    const [ selected, setSelected ] = useState(selectedType)

    return (
        <Box>
            {
                types.map( type => (
                    <Button
                        key={type} size="small" 
                        color={ selected == type ? 'primary' : 'info' }
                        onMouseDown={ () => setSelected(type) }
                    >{type}</Button>
                ) )
            }
        </Box>
    )
}
