import LayoutDash from "../components/LayoutDash";
import PageTitle from '../components/PageTitle'
import CampaignList from '../components/CampaignList'
const Dashboard = () => {
  return (
    <LayoutDash>
        <PageTitle title="Dashboard" />
        <CampaignList/>
    </LayoutDash>
  );
};
export default Dashboard;
