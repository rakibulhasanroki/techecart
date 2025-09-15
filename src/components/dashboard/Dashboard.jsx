import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function Dashboard() {
  return (
    <div className="mt-10 bg-purple-700 text-center">
      <h1>DashBoard</h1>
      <p>
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      <div>
        <Tabs>
          <TabList>
            <Tab>Cart</Tab>
            <Tab>WishList</Tab>
          </TabList>

          <TabPanel>
            <h2 className="bg-white">Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2 className="bg-white">Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default Dashboard;
