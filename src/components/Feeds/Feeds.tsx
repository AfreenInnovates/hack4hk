import { useEffect, useState } from "react";
import { getFeeds } from "./api/getFeeds";

/* eslint-disable react/react-in-jsx-scope */
const Feeds = () => {
  const [feeds, setFeeds] = useState<Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    author: string;
    date: string;
  }>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resp = await getFeeds();
        console.log("REsa", resp);
        if (resp.status === 200) {
          console.log("Feeds data", resp);
          setFeeds(resp.data);
        }
      }
      catch (error) {
        console.log("Error fetching feeds", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-primary-dark">Project Feeds</h1>
          <p className="text-gray-700 mt-4">
            Stay updated on the latest activities, announcements, and progress from our projects.
          </p>
        </div>

        {/* Feeds List */}
        <div className="space-y-6">
          {
            loading && (
              <div className="text-center">
                <p className="text-gray-600">Loading feeds...</p>
              </div>
            )
          }
          {feeds && feeds.map((feed) => (
            <div
              key={feed.id}
              className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden"
            >
              {/* Feed Image */}
              <img
                src={feed.image}
                alt={feed.title}
                className="w-full h-48 object-cover"
              />
              {/* Feed Details */}
              <div className="p-4">
                <h1 className="text-sm text-gray-500">{feed.author}</h1>
                <h3 className="text-lg font-semibold text-primary-dark">{feed.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{feed.description}</p>
                <p className="text-xs text-gray-500 mt-4">{feed.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feeds;
