/* eslint-disable react/react-in-jsx-scope */
import { ChatList } from 'react-chat-elements';

const ChatListComponent = () => {
  return (
    <div className="h-full max-w-72 border-r">
      <ChatList
        className="chat-list"
        id="chat-list"
        lazyLoadingImage="https://example.com/lazy-loading-image.png"
        dataSource={[
          {
            id: 1,
            avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
            alt: 'kursat_avatar',
            title: 'Kursat',
            subtitle: "Why don't we go to the No Way Home movie this weekend ?",
            date: new Date(),
            unread: 3,
          },
          {
            id: 2,
            avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
            alt: 'kursat_avatar',
            title: 'Kursat',
            subtitle: "Why don't we go to the No Way Home movie this weekend ?",
            date: new Date(),
            unread: 3,
          },
          {
            id: 3,
            avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
            alt: 'kursat_avatar',
            title: 'Kursat',
            subtitle: "Why don't we go to the No Way Home movie this weekend ?",
            date: new Date(),
            unread: 3,
          },
        ]}
      />
    </div>
  );
};

export default ChatListComponent;
