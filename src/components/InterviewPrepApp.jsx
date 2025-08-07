import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, Calendar, Clock, MapPin, Users } from 'lucide-react';

const InterviewPrepApp = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [completedCards, setCompletedCards] = useState(new Set());

  // Interview questions with suggested STAR responses based on resume
  const flashcards = [
    {
      question: "Tell me about a time when you managed a large budget and how you ensured accountability and performance.",
      situation: "Based on MDS operations, managing ~$3.36M+ in media spend annually requires robust budget control processes and performance tracking.",
      task: "I would need to develop systems that ensure budget accuracy, prevent overspend, and consistently deliver results that exceed performance benchmarks.",
      action: "I would implement a bi-weekly budget control process with automated alerts, create standardized monthly reporting templates for stakeholder visibility, and establish KPI dashboards to track performance against benchmarks in real-time.",
      result: "This systematic approach would ensure consistent delivery of strategic insights, maintain budget accountability, and enable proactive campaign optimization to exceed client expectations."
    },
    {
      question: "Describe a time you had to integrate new technology or platforms into existing workflows.",
      situation: "MDS often needs to expand media offerings by integrating new advertising platforms while maintaining operational efficiency.",
      task: "I would lead cross-functional initiatives to evaluate, integrate, and implement new platforms while resolving technical issues and training teams.",
      action: "I would conduct platform assessments, develop integration roadmaps, create best practice documentation, coordinate with IT and vendor partners, and design training programs for seamless adoption.",
      result: "Successfully expanding media offerings, diversifying revenue streams, and maintaining team productivity during platform transitions while ensuring all technical issues are resolved."
    },
    {
      question: "Tell me about a time when you had to train others and improve processes simultaneously.",
      situation: "At Crystal Clear CC LLC, similar to MDS operations, I needed to improve paid media tactic quality while bringing new team members up to speed.",
      task: "I had to create new workflows, update documentation, and train team members to ensure consistent quality and effectiveness across campaigns.",
      action: "I developed comprehensive training materials, created step-by-step workflow documentation, conducted hands-on training sessions, and established feedback loops to continuously improve both processes and training effectiveness.",
      result: "New hires became productive faster, campaign quality improved across the team, and we established a scalable training system that could adapt to future platform changes."
    },
    {
      question: "Describe a situation where you had to anticipate client needs and be proactive in your approach.",
      situation: "In MDS-style operations, anticipating seasonal trends and client needs is crucial for maintaining high-performing campaigns year-round.",
      task: "I would need to create systems that ensure campaigns remain timely, relevant, and aligned with seasonal business patterns and client objectives.",
      action: "I would develop seasonal keyword calendars based on historical data and industry trends, create offer tracking systems to monitor promotion effectiveness, and establish regular client communication touchpoints for strategic planning.",
      result: "Campaigns would remain consistently relevant and high-performing, clients would receive proactive recommendations, and we'd maintain strong client satisfaction through anticipatory service."
    },
    {
      question: "Tell me about a time when you had to redesign processes to improve operational efficiency.",
      situation: "At Crystal Clear CC LLC, our campaign optimization processes lacked alignment and created workflow inefficiencies, similar to challenges in large-scale MDS operations.",
      task: "I needed to redesign and integrate these processes to enhance operational alignment and streamline team workflows.",
      action: "I mapped existing workflows, identified bottlenecks and misalignments, designed integrated processes that eliminated redundancies, and created standardized templates that improved team-wide adoption.",
      result: "Achieved improved operational alignment, streamlined workflows that reduced task completion time, and enhanced team productivity through better process standardization."
    },
    {
      question: "Describe a time you took initiative.",
      situation: "At Crystal Clear CC LLC, I noticed our marketing campaigns lacked consistent performance tracking and standardized reporting across 15+ concurrent initiatives.",
      task: "Without being explicitly asked, I needed to create a system that would improve data consistency and enable better decision-making.",
      action: "I proactively developed and maintained Excel tracking systems, standardized reporting procedures across teams, and implemented systematic workflows for campaign monitoring.",
      result: "Improved data consistency across all marketing teams, enabled more informed strategic decisions, and was recognized for taking ownership of process improvement."
    },
    {
      question: "Tell me about a time when you had to coordinate with multiple stakeholders to ensure project success.",
      situation: "MDS operations require coordination with vendor partners, internal teams, and clients to ensure campaign success and alignment of media strategies.",
      task: "I would need to manage multiple stakeholder relationships while ensuring campaigns drive client satisfaction and meet strategic objectives.",
      action: "I would establish regular communication cadences with all stakeholders, create shared dashboards for transparency, develop clear escalation processes, and maintain detailed project documentation to ensure alignment.",
      result: "Successful campaign delivery with high client satisfaction, strong vendor partnerships, and seamless internal collaboration that supports strategic media objectives."
    },
    {
      question: "How have you used data to solve a business problem? What steps do you follow when conducting an analysis?",
      situation: "Crystal Clear CC LLC needed to improve paid ad performance and optimize regional targeting for better ROI, similar to MDS campaign optimization needs.",
      task: "I needed to analyze campaign performance data and identify opportunities for improvement while providing strategic insights.",
      action: "My process: 1) Defined clear metrics (CTR, CPC, conversion rates), 2) Collected and cleaned performance data, 3) Conducted A/B testing analysis, 4) Used engagement heatmaps for geographic insights, 5) Validated findings through statistical testing.",
      result: "Improved paid ad conversion by 12% and optimized regional targeting, providing a replicable analytical framework for future campaigns and strategic insights for optimization."
    },
    {
      question: "Tell me about a time when you had to work under very hectic conditions with multiple competing priorities.",
      situation: "During peak season at Crystal Clear CC LLC, similar to managing high-profile MDS campaigns, I was simultaneously coordinating monthly virtual auctions while managing multiple A/B testing campaigns.",
      task: "I needed to maintain quality deliverables across all projects while managing competing deadlines and stakeholder expectations.",
      action: "I prioritized tasks based on business impact, created detailed scheduling matrices, maintained constant communication with stakeholders about progress, and implemented systematic workflow management.",
      result: "Successfully delivered all projects on time, maintained 100% accuracy in coordination, and improved paid ad conversion by 12% despite competing priorities."
    },
    {
      question: "Describe a challenging technical problem you solved and the steps you took to arrive at a solution.",
      situation: "At RELX Technology, I faced challenges with data quality issues in 10,000+ sales records, similar to technical challenges in large-scale MDS campaign data management.",
      task: "I needed to clean and standardize this data to enable accurate predictive modeling and reliable reporting systems.",
      action: "I systematically identified data quality issues, developed cleaning protocols in R, implemented validation checks, created automated processes to prevent future quality problems, and established documentation for repeatability.",
      result: "Successfully cleaned the entire dataset, built reliable analytical models, and established data quality standards that were adopted team-wide for future campaigns."
    },
    {
      question: "Tell me about a project you owned that you are particularly proud of and how you measured its success.",
      situation: "I led the hyper-local digital campaign targeting East LA's Asian community on RedNote platform, similar to specialized MDS campaigns for specific hotel markets.",
      task: "I owned the entire project from strategy development to execution and measurement, needing to drive measurable results and support business expansion.",
      action: "I developed culturally tailored content strategy, leveraged CRM insights for audience targeting, implemented comprehensive A/B testing, used engagement heatmaps for optimization, and established clear KPIs for measurement.",
      result: "Achieved 70% increase in in-store traffic and directly enabled regional expansion - this project became a template for future specialized campaigns and demonstrated strategic impact."
    },
    {
      question: "How do you ensure the accuracy of your analytical results and campaign reporting?",
      situation: "Given that business decisions and client strategies depend on campaign analysis, data accuracy is crucial for MDS operations.",
      task: "I need to implement systematic approaches to validate data quality, analytical accuracy, and ensure reliable reporting for stakeholders.",
      action: "My quality assurance process includes: 1) Data validation and cleaning protocols, 2) Cross-verification with multiple data sources, 3) Sanity checks against industry benchmarks, 4) Peer review of methodologies, 5) Documentation of assumptions and limitations, 6) Regular accuracy audits.",
      result: "Maintained high accuracy standards across all projects and reporting, enabling reliable strategic insights and maintaining stakeholder confidence in analytical recommendations."
    },
    {
      question: "Tell me about a time when you found a better way to complete a job or task.",
      situation: "During the NBA expansion project, our team was struggling with manual data compilation from multiple sources, which was time-consuming and error-prone.",
      task: "I needed to find a more efficient way to synthesize demographic, economic, and sports market data for our analysis.",
      action: "I developed an automated data integration process using Python and created standardized templates for data visualization, reducing manual compilation time by 60%.",
      result: "Our team was able to focus more time on strategic analysis rather than data preparation, ultimately becoming finalists and having our recommendations adopted by Deloitte evaluators."
    },
    {
      question: "Tell me about a time when you did more than what was asked of you in your job.",
      situation: "At RELX Technology, I was asked to conduct basic sales analysis for retail locations, but I noticed an opportunity for deeper insights.",
      task: "Beyond the basic reporting requested, I wanted to provide actionable recommendations for strategic decision-making.",
      action: "I went beyond the initial scope by building K-NN predictive models in R, conducting comprehensive competitor research, and creating visual dashboards that translated complex data into actionable insights.",
      result: "Identified five underperforming zones for targeted resource allocation and enabled senior managers to make pricing decisions with improved accuracy, contributing to 15% YTD customer retention improvement."
    },
    {
      question: "Tell me about a time you had to manage conflict at work.",
      situation: "During the Deloitte NBA project, team members had conflicting opinions about which cities to recommend, with some favoring larger markets while others preferred emerging markets.",
      task: "As a key team member, I needed to help resolve this conflict and ensure we made data-driven decisions rather than opinion-based ones.",
      action: "I facilitated data-driven discussions by presenting objective market analysis, created comparison matrices highlighting pros/cons of each approach, and proposed a hybrid strategy incorporating both perspectives.",
      result: "Team aligned on Nashville and St. Louis recommendations based on data rather than opinions, and our collaborative approach contributed to our finalist status."
    },
    {
      question: "Tell me about a time you had to work with a difficult team member. How did you handle it?",
      situation: "During a group project for my Marketing Research course, one team member consistently missed deadlines and wasn't contributing quality work to our consumer behavior survey project.",
      task: "I needed to address this issue without escalating conflict while ensuring project success.",
      action: "I had a private conversation to understand their challenges, offered to help redistribute tasks based on strengths, and established clear check-in points with specific deliverables and deadlines.",
      result: "The team member became more engaged and reliable, and we successfully completed our 100+ participant survey analysis with strategic recommendations that received top marks."
    },
    {
      question: "Where do you see yourself five years from now?",
      situation: "Building on my current data analytics foundation and growing interest in digital marketing strategy.",
      task: "I want to develop expertise that combines technical skills with strategic business impact in the hospitality/travel industry.",
      action: "I plan to: master advanced analytics tools, gain deep domain expertise in hotel digital marketing, develop leadership skills through cross-functional project management, and stay current with emerging technologies in personalization and customer experience.",
      result: "I envision myself as a Senior Digital Analytics Manager, leading data-driven strategy initiatives that significantly impact guest experience and business performance across Marriott's portfolio."
    },
    {
      question: "Effective communication is an essential part of great team work. Share with me some things you do to communicate with others.",
      situation: "Throughout my projects, I've learned that technical insights are only valuable if stakeholders can understand and act on them.",
      task: "I need to translate complex analytical findings into actionable business recommendations for diverse audiences.",
      action: "I: 1) Tailor communication style to audience expertise level, 2) Use visual dashboards and clear charts, 3) Start with key insights before diving into methodology, 4) Provide specific recommendations with clear next steps, 5) Follow up with written summaries.",
      result: "Consistently received positive feedback on presentation clarity, and my recommendations have been implemented across multiple projects, from the NBA expansion to marketing campaigns."
    },
    {
      question: "Describe a time when you had to learn new tools or technologies quickly for a project.",
      situation: "For my Marketing Research project, I needed to design and analyze a comprehensive consumer behavior survey, similar to learning new MDS platforms.",
      task: "I had to quickly master Qualtrics to design a 25-question survey and analyze responses from 100+ participants.",
      action: "I researched best practices, completed online tutorials, practiced with sample data, designed the survey using Likert-scale metrics, and ran comprehensive cross-tab analysis to identify consumer trends.",
      result: "Successfully completed trend identification analysis and presented findings in a strategic report with targeted messaging strategy recommendations, demonstrating ability to quickly adapt to new tools."
    },
    {
      question: "Tell me about a time when you presented complex data or findings to stakeholders.",
      situation: "At RELX Technology, I needed to present sales analysis and competitive research findings to senior managers for strategic decision-making.",
      task: "I had to translate complex data analysis into actionable insights for pricing and distribution strategies.",
      action: "I generated comprehensive reports using Excel and PowerPoint, conducted trend analysis and competitor research, created visual dashboards to clearly communicate findings, and prepared executive summary with key recommendations.",
      result: "Enabled senior managers to make informed pricing and distribution decisions with improved accuracy, contributing to 15% YTD improvement in customer retention and demonstrating effective stakeholder communication."
    },
    {
      question: "Describe a situation where attention to detail was crucial to your success.",
      situation: "While managing the NBA expansion project financial model and campaign data analysis, accuracy was critical for decision-making and credibility.",
      task: "I needed to ensure data integrity across large datasets including demographic data, financial projections, and campaign performance metrics.",
      action: "I implemented systematic quality checks, conducted thorough data validation, cross-referenced multiple sources, performed sensitivity analysis on financial models, and established peer review processes.",
      result: "Maintained high data quality standards that enabled accurate predictive modeling, reliable financial projections, and a winning consulting recommendation that was adopted by Deloitte evaluators."
    },
    {
      question: "Tell me about a time when you had to adapt quickly to changing priorities or requirements.",
      situation: "During the Crystal Clear CC LLC campaign season, client priorities shifted mid-project due to market changes, requiring rapid campaign adjustments.",
      task: "I needed to pivot our A/B testing strategy and reallocate resources while maintaining campaign performance and client satisfaction.",
      action: "I quickly assessed new requirements, redesigned testing parameters, communicated changes to stakeholders, adjusted budget allocations, and implemented new tracking mechanisms for the revised strategy.",
      result: "Successfully adapted to new priorities while maintaining 12% improvement in paid ad conversion, demonstrating flexibility and maintaining strong client relationships despite significant changes."
    },
    {
      question: "Describe a time when you had to make a decision with incomplete information.",
      situation: "During the RELX Technology analysis, I had to make recommendations about underperforming retail zones while some data sources were still being validated.",
      task: "I needed to provide actionable insights for resource allocation decisions despite having incomplete data coverage for certain regions.",
      action: "I analyzed available data thoroughly, identified confidence levels for different insights, made reasonable assumptions based on industry benchmarks, clearly communicated limitations, and provided phased recommendations.",
      result: "Successfully identified five underperforming zones for immediate attention while flagging areas requiring additional data collection, enabling timely strategic decisions without compromising accuracy."
    },
    {
      question: "Tell me about a time when you had to influence others without having direct authority.",
      situation: "During the Deloitte NBA project, I needed to convince team members to adopt my data-driven approach for city selection without being the project leader.",
      task: "I had to influence the team to base decisions on analytical insights rather than personal preferences or assumptions.",
      action: "I prepared compelling data visualizations, presented clear comparative analysis, facilitated collaborative discussions, acknowledged different perspectives, and demonstrated how data supported strategic objectives.",
      result: "Team adopted the data-driven approach, leading to our finalist status and having our Nashville and St. Louis recommendations accepted by Deloitte evaluators as top strategic choices."
    }
  ];

  const nextCard = () => {
    if (currentCard < flashcards.length - 1) {
      setCurrentCard(currentCard + 1);
      setIsFlipped(false);
    }
  };

  const prevCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
      setIsFlipped(false);
    }
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) {
      setCompletedCards(new Set([...completedCards, currentCard]));
    }
  };

  const resetProgress = () => {
    setCompletedCards(new Set());
    setCurrentCard(0);
    setIsFlipped(false);
  };

  const progress = (completedCards.size / flashcards.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Marriott Digital Analyst Interview Prep
          </h1>
          <p className="text-gray-600 mb-4">STAR Method Practice Flashcards - Enhanced with Mock Interview Questions</p>
          
          {/* Interview Details */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span className="font-medium">Aug 14th, 4pm EST</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-4 h-4 text-green-600" />
                <span className="font-medium">60 minutes</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-4 h-4 text-red-600" />
                <span className="font-medium">MIHQ, Bethesda</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-4 h-4 text-purple-600" />
                <span className="font-medium">3 Interviewers</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-gray-200 rounded-full h-2 mb-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600">
            Progress: {completedCards.size} of {flashcards.length} cards reviewed
          </p>
        </div>

        {/* Flashcard */}
        <div className="relative w-full h-96 mb-8 perspective-1000">
          <div 
            className={`absolute inset-0 w-full h-full transition-transform duration-700 preserve-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}
            onClick={flipCard}
          >
            {/* Front of card - Question */}
            <div className="absolute inset-0 w-full h-full backface-hidden">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-2xl p-8 h-full flex flex-col justify-center items-center text-white">
                <div className="text-6xl mb-4">❓</div>
                <h2 className="text-xl font-semibold mb-4 text-center leading-relaxed">
                  {flashcards[currentCard].question}
                </h2>
                <p className="text-blue-100 text-center">Click to reveal STAR answer</p>
              </div>
            </div>

            {/* Back of card - STAR Answer */}
            <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
              <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-xl shadow-2xl p-6 h-full overflow-y-auto text-white">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-lg mb-2 flex items-center">
                      <span className="bg-white text-green-600 px-2 py-1 rounded text-sm mr-2">S</span>
                      Situation
                    </h3>
                    <p className="text-green-100 text-sm">{flashcards[currentCard].situation}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg mb-2 flex items-center">
                      <span className="bg-white text-green-600 px-2 py-1 rounded text-sm mr-2">T</span>
                      Task
                    </h3>
                    <p className="text-green-100 text-sm">{flashcards[currentCard].task}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg mb-2 flex items-center">
                      <span className="bg-white text-green-600 px-2 py-1 rounded text-sm mr-2">A</span>
                      Action
                    </h3>
                    <p className="text-green-100 text-sm">{flashcards[currentCard].action}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg mb-2 flex items-center">
                      <span className="bg-white text-green-600 px-2 py-1 rounded text-sm mr-2">R</span>
                      Result
                    </h3>
                    <p className="text-green-100 text-sm">{flashcards[currentCard].result}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center">
          <button
            onClick={prevCard}
            disabled={currentCard === 0}
            className="flex items-center space-x-2 px-6 py-3 bg-gray-500 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>

          <div className="flex items-center space-x-4">
            <span className="text-gray-600 font-medium">
              {currentCard + 1} / {flashcards.length}
            </span>
            <button
              onClick={resetProgress}
              className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 text-white rounded-lg font-medium hover:bg-yellow-600 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </button>
          </div>

          <button
            onClick={nextCard}
            disabled={currentCard === flashcards.length - 1}
            className="flex items-center space-x-2 px-6 py-3 bg-blue-500 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
          >
            <span>Next</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Tips */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="font-bold text-lg mb-3 text-gray-800">Interview Tips:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <strong>Key MDS-Relevant Skills:</strong>
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>Budget management (~$3.36M+ experience)</li>
                <li>Cross-functional platform integration</li>
                <li>Workflow optimization & documentation</li>
                <li>Vendor coordination & stakeholder management</li>
              </ul>
            </div>
            <div>
              <strong>Remember:</strong>
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>Be specific with numbers and results</li>
                <li>Connect experiences to MDS role</li>
                <li>Show curiosity about Marriott's digital strategy</li>
                <li>Prepare questions about the team</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewPrepApp;