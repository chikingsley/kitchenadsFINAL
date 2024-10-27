import React, { useEffect, useState } from 'react'
import { getUnsplashImage } from '../lib/unsplash'
import { Helmet } from 'react-helmet-async'

interface Job {
  title: string
  imageQuery: string
  imageUrl?: string
  description: string
  requirements: string[]
}

const jobData: Job[] = [
  {
    title: 'Senior Affiliate Manager',
    imageQuery: 'sales girl',
    description: 'Lead our affiliate marketing initiatives as a Senior Affiliate Manager in the dynamic cryptocurrency space. Youll be responsible for developing and executing strategic partnership programs, managing a team of junior managers, and driving significant revenue growth through innovative affiliate campaigns. Your role will be crucial in expanding our market presence and establishing KitchenAds as a leader in crypto marketing.',
    requirements: ['5+ years of experience in affiliate marketing, with at least 2 years in the cryptocurrency or fintech sector',
      'Proven track record of successfully scaling affiliate programs and achieving revenue targets',
      'Experience managing and mentoring junior team members',
      'Deep understanding of cryptocurrency markets, blockchain technology, and DeFi concepts',
      'Strong analytical skills with experience in data-driven decision making',
      'Excellent relationship management and negotiation skills',
      'Proficiency with affiliate tracking platforms and marketing analytics tools',
      'Bachelors degree in Marketing, Business, or related field; MBA is a plus',
      'Experience with international markets and multi-language campaigns',
      'Knowledge of regulatory compliance in crypto marketing'],
  },
  {
    title: 'Junior Affiliate Manager',
    imageQuery: 'digital marketing office',
    description: 'Join our dynamic team as a Junior Affiliate Manager, where youll learn to navigate the exciting intersection of cryptocurrency and affiliate marketing. Youll work closely with senior team members to develop and maintain affiliate relationships, analyze campaign performance, and contribute to the growth of our crypto-focused marketing initiatives.',
    requirements: [
      'Bachelor\'s degree in Marketing, Business, or related field',
      'Understanding of cryptocurrency and blockchain technology',
      '1-2 years of experience in digital marketing or affiliate marketing',
      'Strong communication and relationship-building skills',
      'Analytical mindset with attention to detail',
      'Proficiency in Excel and data analysis tools',
      'Ability to learn new technologies and adapt quickly',
      'Experience with affiliate networks and tracking platforms is a plus'
    ],
  },
  // Add more jobs as needed
]

const Careers: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>(jobData)

  useEffect(() => {
    const loadImages = async () => {
      const updatedJobs = await Promise.all(
        jobData.map(async (job) => {
          const imageUrl = await getUnsplashImage(job.imageQuery)
          return {
            ...job,
            imageUrl: imageUrl || '/fallback-image.jpg',
          }
        })
      )
      setJobs(updatedJobs)
    }

    loadImages()
  }, []) // The effect will only run once when the component mounts

  return (
    <>
      <Helmet>
        <title>Join Our Team | KitchenAds</title>
        <meta name="description" content="Build your career at KitchenAds. We're hiring talented affiliate managers and marketing professionals in the cryptocurrency industry." />
      </Helmet>
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Join Our Kitchen Crew</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            At KitchenAds, we're always looking for talented individuals to join our team of crypto culinary experts. If you're passionate about digital marketing, cryptocurrency, and creating delicious results for our clients, we want to hear from you!
          </p>
          <div className="space-y-12">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8">
                {job.imageUrl && (
                  <img 
                    src={job.imageUrl} 
                    alt={job.title}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                )}
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
    </>
  )
}

export default Careers
