import React from 'react';
import { Card, Typography } from 'antd';
import { FileTextTwoTone } from '@ant-design/icons';
import './admindashboard.scss';

const { Title, Text } = Typography;

const mockNotifications = [
  { id: 1, message: 'User “john” created project “AITracker”' },
  { id: 2, message: 'updated project “Voting system” finished' },
];

function Dashboard() {
  return (
    <div className="dashboard">
      <Title level={3} className="dashboard-title">ADMIN DASHBOARD</Title>

      <div className="activity-log">
        <div className="log-header">
          <FileTextTwoTone className="log-icon" />
          <Text className="log-title">Recent activity log</Text>
        </div>

        <Card className="log-card">
          {mockNotifications.map(note => (
            <p key={note.id} className="log-entry">{note.message}</p>
          ))}
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
