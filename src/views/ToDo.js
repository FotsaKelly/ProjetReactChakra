import React, { useState } from "react";
import { Box, Button, Heading, Input, Stack, HStack, Text, Card, InputGroup, Checkbox } from "@chakra-ui/react";
import { LuTrash2, LuSearch, LuCircleCheck } from "react-icons/lu";

const ToDo = () => {
  const [tache, setTache] = useState([]); 
  const [newTache, setNewTache] = useState("");
  const [search, setSearch] = useState(""); 
  const [checkedItems, setCheckedItems] = useState([]); 
  const [tachesTermines, setTachesTermines] = useState([]);
  const addTache = () => {
    if (newTache.trim() === "") return;
    setTache([...tache, newTache]); 
    setNewTache("");
  };
  const tachesCohees = (item) => {
    setCheckedItems([...checkedItems, item]);
    
  };

  const terminerSelection = () => {
    setTachesTermines([...tachesTermines, ...checkedItems]);
    setCheckedItems([]); 
  };

  const supprimerSelection = () => {
    setTache(tache.filter((t) => !checkedItems.includes(t)));
    setTachesTermines(tachesTermines.filter((c) => !checkedItems.includes(c)));
    setCheckedItems([]); 
  };

  const filteredTaches = tache.filter((t) =>
    t.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box maxW="550px" mx="auto" mt="40px" p="4">
      <Card.Root p="6" shadow="2xl" borderRadius="xl" borderTop="6px solid" borderColor="blue.500">
        <Stack gap="6">
          <Heading size="lg" textAlign="center">Ma Liste de tâches</Heading>

          <InputGroup flex="1" startElement={<LuSearch color="gray.400" />}>
            <Input 
              placeholder="Rechercher..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>

          <Stack gap="4">
            <HStack>
              <Input 
                placeholder="Nouvelle tâche..." 
                value={newTache}
                onChange={(e) => setNewTache(e.target.value)}
              />
              <Button colorPalette="blue" onClick={addTache}>Ajouter</Button>
            </HStack>

            <HStack justify="center" gap="4">
              <Button 
                size="sm" 
                colorPalette="green" 
                variant="subtle" 
                onClick={terminerSelection} 
                disabled={checkedItems.length === 0}
              >
                <LuCircleCheck style={{marginRight: "5px"}}/> Terminerz
              </Button>
              <Button 
                size="sm" 
                colorPalette="red" 
                variant="subtle" 
                onClick={supprimerSelection} 
                disabled={checkedItems.length === 0}
              >
                <LuTrash2 style={{marginRight: "5px"}}/> Supprimer ({checkedItems.length})
              </Button>
            </HStack>
          </Stack>

          <Stack gap="3">
            {filteredTaches.map((item, index) => {
              const isCompleted = tachesTermines.includes(item);
              const isChecked = checkedItems.includes(item);

              return (
                <HStack 
                  key={index} 
                  p="3" 
                  borderWidth="1px" 
                  borderRadius="lg" 
                  justify="space-between"
                  bg={isCompleted ? "green.50" : "white"}
                  borderColor={isCompleted ? "green.200" : "gray.200"}
                >
                  <Checkbox.Root 
                    checked={isChecked} 
                    onCheckedChange={() => tachesCohees(item)}
                  >
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Text 
                      textDecoration={isCompleted ? "line-through" : "none"}
                      color={isCompleted ? "green.700" : "black"}
                    >
                      {item}
                    </Text>
                  </Checkbox.Root>
                </HStack>
              );
            })}
          </Stack>
        </Stack>
      </Card.Root>
    </Box>
  );
};

export default ToDo;