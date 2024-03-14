import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import Groups from "./Groups";

function Home() {
  return (
    <div>
      <Tabs mt={3} width={'100%'} variant="soft-rounded" colorScheme="green">
        <TabList width={'100%'}>
          <Tab width={'50%'}>Groupe Vice</Tab>
          <Tab width={'50%'}>Advance Search</Tab>
        </TabList>
        <TabPanels mt={4}>
          <TabPanel>
            <Groups/>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Home;
