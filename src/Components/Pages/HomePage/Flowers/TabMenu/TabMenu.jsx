import React, { useState } from "react";
import { Tab, TabItem } from "../FlowersStyle";
import styles from "./TabMenu.module.css";

const TabMenu = () => {
  const [active, setActive] = useState(1);
  const toogleTab = (index) => {
    setActive(index);
  };
  return (
    <Tab>
      <TabItem
        className={active === 1 ? styles.activeTab : ''}
        onClick={() => toogleTab(1)}
      >
        Featured Items
      </TabItem>
      <TabItem
        className={active === 2 ? styles.activeTab : ''}
        onClick={() => toogleTab(2)}
      >
        New Arrival
      </TabItem>
      <TabItem
        className={active === 3 ? styles.activeTab : ''}
        onClick={() => toogleTab(3)}
      >
        Best Sellers
      </TabItem>
    </Tab>
  );
};

export default TabMenu;
