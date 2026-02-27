import React, { useState } from "react";
import { Box, Button, Heading, Input, Stack, HStack, Text, Card, InputGroup } from "@chakra-ui/react";
import { LuTrash2, LuSearch } from "react-icons/lu";

const ToDo = () => {
  const [tache, setTache] = useState([]); 
  const [newTache, setNewTache] = useState("");
  const [search, setSearch] = useState(""); 

 
  const addTache = () => {
    if (newTache.trim() === "") return;
    setTache([...tache, newTache]); 
    setNewTache("");
  };


  const deleteTache = (texteASupprimer) => {
    
    setTache(tache.filter((t) => t !== texteASupprimer));
  };


  const filteredtache = tache.filter((t) =>
    t.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box maxW="550px" mx="auto" mt="40px" p="4">
      <Card.Root p="6" shadow="xl" borderRadius="xl">
        <Stack gap="6">
          <Heading size="lg" textAlign="center">Ma Liste de taches</Heading>

          <InputGroup flex="1" startElement={<LuSearch color="gray.400" />}>
            <Input 
              placeholder="Rechercher..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>

          <HStack>
            <Input 
              placeholder="Nouvelle tâche..." 
              value={newTache}
              onChange={(e) => setNewTache(e.target.value)}
            />
            <Button colorPalette="blue" onClick={addTache}>Ajouter</Button>
          </HStack>

          <Stack gap="3">
            {filteredtache.map((item, index) => (
              <HStack key={index} p="3" borderWidth="1px" borderRadius="lg" justify="space-between">
                <Text>{item}</Text> 
                <Button variant="ghost" colorPalette="red" size="xs" onClick={() => deleteTache(item)}>
                  <LuTrash2 />
                </Button>
              </HStack>
            ))}
          </Stack>
        </Stack>
      </Card.Root>
    </Box>
  );
};

export default ToDo;