import { Input, InputGroup, Box, Table, NativeSelect } from "@chakra-ui/react"
import { useState } from "react"
import { LuSearch } from "react-icons/lu" 







const SearchBar = () => {

    const produit = [
  
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  
  
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];
    const[elmt, setElmt]= useState("")
    const handleChange = (e) =>{
        setElmt(e.target.value)
    }

    
  return (
    <Box maxW="2xl" mb={4}>
      <InputGroup 
        flex="1" 
        startElement={<LuSearch color="gray.500"  />} 
        endElement={<DomainSelect  />}
      
      >
        <Input 
            placeholder="Rechercher une tâche..." 
            value={elmt}
            onChange={handleChange}
        />
      </InputGroup>
    <Table.ScrollArea h="500px" borderWidth="1px" rounded="md" maxW="2xl" mt={4} >
      <Table.Root
        size="sm">
        <Table.Header> 
          <Table.Row>
            <Table.ColumnHeader >
              Category
            </Table.ColumnHeader>
            <Table.ColumnHeader >Name</Table.ColumnHeader>
             <Table.ColumnHeader textAlign="end">
              Price
            </Table.ColumnHeader>
            
           
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {produit.filter((item) => item.name.toLowerCase().includes(elmt.toLowerCase())).map((item) => (
            <Table.Row key={item.id}>
             <Table.Cell>{item.category}</Table.Cell>
             <Table.Cell >
                {item.name}
              </Table.Cell>
             <Table.Cell textAlign="end">{item.price}</Table.Cell>
              
             
              
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
    </Box>
  )
}



const DomainSelect = () => (
  <NativeSelect.Root size="xs" variant="plain" width="auto" me="-1">
    <NativeSelect.Field defaultValue=".com" fontSize="sm">
      <option value="">Category</option>
      <option value="">Name</option>
      <option value="">Price</option>
      <option value="">stocked</option>
    </NativeSelect.Field>
    <NativeSelect.Indicator />
  </NativeSelect.Root>
)
export default SearchBar;