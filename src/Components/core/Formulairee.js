import { Button, Field, Input, Checkbox, Stack } from "@chakra-ui/react";
import React, { useState } from "react"; 

const Formulairee = () => {
    const [firsName, setFirsName] = useState('')
    const [isTermAccepted, setIsTermAccepted] = useState(false)

    const handChange = (e) => {
        setFirsName(e.target.value)
    }

    return (
        <Stack gap={4} maxW="sm" mx="auto" mt={10}>
            <Field.Root>
                <Field.Label>Prénom</Field.Label>
                <Input onChange={handChange} placeholder="Votre prénom" />
            </Field.Root>

           
            <Ccheck checked={isTermAccepted} onCheck={setIsTermAccepted} />

            <Button disabled={!isTermAccepted} colorPalette="blue">
                Envoyer
            </Button>
        </Stack>
    )
}

const Ccheck = ({ checked, onCheck }) => {
    return (
        <Checkbox.Root 
            checked={checked} 
           
            onCheckedChange={(e) => onCheck(e.checked)}
        >
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
        </Checkbox.Root>
    )
}

export default Formulairee;