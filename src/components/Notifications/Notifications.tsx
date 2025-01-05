/* eslint-disable react/react-in-jsx-scope */

import { useState } from 'react';
import { FaEnvelope, FaCalendarAlt, FaBell, FaTasks, FaUserFriends, FaKey, FaComment, FaExclamationCircle, FaHandshake } from 'react-icons/fa';
import { AppBar } from '../AppBar';

const Notifications = () => {
  // Hardcoded notifications with isNew property
  const [notifications, setNotifications] = useState([
    { title: 'New Message', content: 'You have a new message from John.', time: '10:30 AM', icon: <FaEnvelope />, isNew: true },
    { title: 'Meeting Reminder', content: 'Your meeting with the team starts in 30 minutes.', time: '9:00 AM', icon: <FaCalendarAlt />, isNew: true },
    { title: 'System Update', content: 'System maintenance is scheduled for tonight.', time: '8:00 AM', icon: <FaBell />, isNew: true },
    { title: 'Task Assigned', content: 'You have been assigned a new task: "Prepare Presentation".', time: '7:45 AM', icon: <FaTasks />, isNew: true },
    { title: 'Event Invitation', content: 'You are invited to the quarterly company meeting.', time: 'Yesterday', icon: <FaCalendarAlt />, isNew: false },
    { title: 'Password Changed', content: 'Your password was successfully changed.', time: 'Yesterday', icon: <FaKey />, isNew: false },
    { title: 'Comment on Post', content: 'Sarah commented on your post.', time: '2 days ago', icon: <FaComment />, isNew: false },
    { title: 'Deadline Reminder', content: 'Your project submission deadline is tomorrow.', time: '3 days ago', icon: <FaExclamationCircle />, isNew: false },
    { title: 'New Connection', content: 'Alex has sent you a connection request.', time: '3 days ago', icon: <FaHandshake />, isNew: false },
    { title: 'Welcome!', content: 'Welcome to the platform! Let’s get started.', time: '1 week ago', icon: <FaUserFriends />, isNew: false },
  ]);

  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications((prevNotifications) => prevNotifications.map((notification) => ({ ...notification, isNew: false })));
  };

  return (
    <div className="min-h-screen bg-white px-8">
      {/* Header Section */}

      <div className="mb-6 flex items-center justify-between">
        <AppBar title="Notifications" description="Stay updated with the latest notifications." />
        <button className="rounded-md bg-green-500 px-4 py-2 text-sm font-semibold text-white hover:bg-green-600" onClick={markAllAsRead}>
          Mark all as read
        </button>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {notifications.map((notification, index) => (
          <div key={index} className="flex items-start rounded-md border border-gray-200 bg-white p-4 shadow-md transition-shadow hover:shadow-lg">
            {/* Icon with green background */}
            <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-xl text-white">{notification.icon}</div>
            {/* Notification Details */}
            <div className="flex-1">
              {/* Title and Time */}
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">{notification.title}</h3>
                <p className="text-xs text-gray-400">{notification.time}</p>
              </div>
              {/* Content */}
              <p className="mt-2 text-sm text-gray-600">{notification.content}</p>
            </div>
            {/* New Badge */}
            {notification.isNew && <span className="ml-4 rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">New</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
