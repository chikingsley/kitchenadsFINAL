import React from 'react'

const jobs = [
  {
    title: 'Brand Account Manager',
    description: 'As a Brand Account Manager at KitchenAds, you\'ll be the master chef of client relationships, cooking up strategies to help our partners achieve their goals. You\'ll blend your expertise in digital marketing with a dash of crypto knowledge to create the perfect recipe for success.',
    requirements: [
      'Minimum 3 years of experience in digital marketing or account management',
      'Strong understanding of the cryptocurrency and blockchain industry',
      'Excellent communication and presentation skills',
      'Ability to analyze data and make data-driven decisions',
    ],
  },
  {
    title: 'Affiliate Manager',
    description: 'Our Affiliate Managers are the sous chefs of our operation, expertly preparing and managing our network of affiliates. You\'ll be responsible for sourcing high-quality traffic ingredients and ensuring they\'re perfectly seasoned to meet our clients\' needs.',
    requirements: [
      'Proven experience in affiliate marketing, preferably in the crypto space',
      'Strong negotiation and relationship-building skills',
      'Analytical mindset with the ability to interpret performance metrics',
      'Familiarity with affiliate tracking platforms and tools',
    ],
  },
  {
    title: 'Data Analyst',
    description: 'As a Data Analyst at KitchenAds, you\'ll be our kitchen scientist, experimenting with data to uncover insights that will help us serve up the best possible results for our clients. You\'ll dive deep into the numbers to identify trends, optimize campaigns, and ensure we\'re always using the freshest ingredients in our marketing recipes.',
    requirements: [
      'Bachelor\'s degree in Statistics, Mathematics, Computer Science, or related field',
      'Proficiency in SQL, Python, or R for data analysis',
      'Experience with data visualization tools (e.g., Tableau, PowerBI)',
      'Strong problem-solving skills and attention to detail',
    ],
  },
]

const Careers: React.FC = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Join Our Kitchen Crew</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          At KitchenAds, we're always looking for talented individuals to join our team of crypto culinary experts. If you're passionate about digital marketing, cryptocurrency, and creating delicious results for our clients, we want to hear from you!
        </p>
        <div className="space-y-12">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">{job.title}</h2>
              <p className="text-gray-600 mb-6">{job.description}</p>
              <h3 className="text-xl font-semibold mb-4">Requirements:</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                {job.requirements.map((req, reqIndex) => (
                  <li key={reqIndex}>{req}</li>
                ))}
              </ul>
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Careers