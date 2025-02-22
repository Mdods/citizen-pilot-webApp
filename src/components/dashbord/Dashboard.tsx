import { useEffect } from 'react';
import './Dashboard.css';
import ProposalCard from './Proposals/Proposals';
import NewsComponent from './News/NewsComponent';
import ContactsComponent from './Contacts/ContactsComponent';
import ReportTab from './Reports/reports';
import ProjectTab from './Projects/projects';
import LiveProposals from './LiveProposals/liveProposals';
import { useDispatch } from 'react-redux';
import {
  fetchNews,
  fetchContacts,
  fetchProjects,
  fetchProposals,
  fetchReports,
} from '../../store/actions/Dashboard';

import logo from '../../assets/logo.png';


// TODO: Add logo
// TODO: same font everywhere
// TODO: make all box headers same color
// TODO: spacing on top, left and right
// TODO: bring live projects to the left, make it as long as proposal inbox and contacts combined
// TODO: Add more reports so that the list goes all the way to the end of the page OR add a map underneath reports with pins for all locations
// TODO: live proposals, have little image where it says city park,OR graph/status bar underneath the text
// TODO: Add modals

export default function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    const news = fetchNews();
    dispatch(news);
    const contacts = fetchContacts();
    dispatch(contacts);
    const projects = fetchProjects();
    dispatch(projects);
    const proposals = fetchProposals();
    dispatch(proposals);
    const reports = fetchReports();
    dispatch(reports);
  }, [dispatch])

  return (
    <div className="dash-container">
      <div className="banner">
        <img src={logo} alt="logo" className="logo-pic" />
      </div>
      <div className="content">
        <div className="left-part">
          <div className="first-row">
            <NewsComponent />
            <ProposalCard />
            <ContactsComponent />
          </div>
          <div className="last-row">
            <ProjectTab />
            <LiveProposals />
          </div>
        </div>
        <div className="report-tab-container">
          <ReportTab />
        </div>
      </div>
    </div>
  );
}
