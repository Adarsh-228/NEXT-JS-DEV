'use client';

import { NextPage } from 'next';
import { Header } from './components/ui/Header';
import { ReactSection } from './components/ui/ReactSection';
import { DnsSection } from './components/ui/DnsSection';
import { Footer } from './components/ui/Footer';
import loading from './loading';

const Home: NextPage = () => {

  const initialData = {
    header: {
      title: 'Web Development Insights',
      subtitle: 'Exploring React and DNS Traffic Management',
    },
    reactSection: {
      title: 'React',
      content: 'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.',
    },
    dnsSection: {
      title: 'Handling Traffic in DNS Server',
      content: 'DNS (Domain Name System) traffic management involves various techniques to distribute incoming traffic among multiple servers. This is crucial for high-availability, low-latency, and cost-effective web services. Some common methods include:',
      items: [
        {
          title: 'Round Robin',
          description: 'Distributes traffic sequentially to each server in a list. It\'s simple but doesn\'t account for server load or health.',
        },
        {
          title: 'Weighted Round Robin',
          description: 'Assigns weights to servers, allowing administrators to distribute more traffic to more capable servers.',
        },
        {
          title: 'Geo-targeting',
          description: 'Directs users to the server geographically closest to them, reducing latency.',
        },
      ],
    },
    footer: {
      text: 'Built with Next.js and a touch of grey magic.',
    },
  };

  return (
    <div
      style={{
        backgroundColor: '#2D2D2D',
        color: '#E0E0E0',
        minHeight: '100vh',
        padding: '4rem 2rem',
        fontFamily: 'sans-serif',
      }}
    >
      <Header title={initialData.header.title} subtitle={initialData.header.subtitle} />
      <main>
        <ReactSection title={initialData.reactSection.title} content={initialData.reactSection.content} />
        <DnsSection
          title={initialData.dnsSection.title}
          content={initialData.dnsSection.content}
          items={initialData.dnsSection.items}
        />
      </main>
      <Footer text={initialData.footer.text} />
    </div>
  );
};

export default Home;

async function Page() {
  const response = await fetch("http://localhost:3000/api/books");
  const books = await response.json();

  return (
    <main>
      <pre>{JSON.stringify(books, null, 2)}</pre>
    </main>
  );
}