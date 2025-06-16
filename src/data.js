import {
  FaBullseye,
  FaUsers,
  FaStar,
  FaLightbulb,
  FaNetworkWired,
  FaDollarSign,
  FaFileInvoiceDollar,
  FaChartLine,
  FaShieldAlt,
  FaUserTie,
  FaUsersSlash,
  FaUserSecret,
  FaHandsHelping,
  FaHourglassStart,
  FaTools,
  FaThumbsUp,
  FaCheckCircle,
  FaListUl,
  FaStarHalfAlt,
  FaCog,
  FaClock,
  FaRocket,
  FaHandshake,
  FaCogs,
  FaSearch,
  FaExclamationTriangle,
  FaCopy,
  FaSyncAlt,
  FaInfoCircle,
  FaBalanceScale,
  FaKey,
} from "react-icons/fa";
import {
  TbTargetOff,
  TbTargetArrow,
  TbViewportWide,
  TbTruckDelivery,
  TbMathOff,
} from "react-icons/tb";
import { RiFocus3Fill } from "react-icons/ri";
import { PiUserFocusFill } from "react-icons/pi";
import {
  FaUsersViewfinder,
  FaPeoplePulling,
  FaPersonCircleQuestion,
  FaScrewdriverWrench,
} from "react-icons/fa6";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { HiUsers } from "react-icons/hi";
import {
  GiMultipleTargets,
  GiChoice,
  GiPerspectiveDiceSixFacesRandom,
  GiJigsawPiece,
} from "react-icons/gi";
import { BsGraphUpArrow, BsGraphDown } from "react-icons/bs";
import { IoLanguage } from "react-icons/io5";
import { MdWrongLocation } from "react-icons/md";
import { BiSupport, BiSolidTrafficBarrier } from "react-icons/bi";
import { LiaMoneyBillAlt } from "react-icons/lia";
import { AiOutlineRise } from "react-icons/ai";
import { VscGistSecret } from "react-icons/vsc";

export const navItems = [
  { to: ".", number: "00", label: "Introduction" },
  { to: "problem", number: "01", label: "Problem" },
  { to: "customers", number: "02", label: "Customer Segments" },
  { to: "uvp", number: "03", label: "Unique Value Proposition" },
  { to: "solution", number: "04", label: "Solution" },
  { to: "channels", number: "05", label: "Channels" },
  { to: "revenue", number: "06", label: "Revenue Streams" },
  { to: "costs", number: "07", label: "Cost Structure" },
  { to: "keymetrics", number: "08", label: "Key Metrics" },
  { to: "unfairadvantage", number: "09", label: "Unfair Advantage" },
  { to: "summary", number: "10", label: "Summary" },
];

export const blocks = [
  {
    icon: FaBullseye,
    label: "Problem",
    description: "The key issues your target customers are facing.",
  },
  {
    icon: FaUsers,
    label: "Customer Segments",
    description:
      "The specific groups of people you're solving the problem for.",
  },
  {
    icon: FaStar,
    label: "Unique Value Proposition",
    description: "The main reason customers will choose your solution.",
  },
  {
    icon: FaLightbulb,
    label: "Solution",
    description: "Your proposed approach to solving the problem.",
  },
  {
    icon: FaNetworkWired,
    label: "Channels",
    description: "How you plan to reach and communicate with your customers.",
  },
  {
    icon: FaDollarSign,
    label: "Revenue Streams",
    description: "How your startup will generate income from customers.",
  },
  {
    icon: FaFileInvoiceDollar,
    label: "Cost Structure",
    description: "The main costs involved in operating your business.",
  },
  {
    icon: FaChartLine,
    label: "Key Metrics",
    description:
      "The numbers that tell you how well your business is performing.",
  },
  {
    icon: FaShieldAlt,
    label: "Unfair Advantage",
    description: "What sets you apart and can't be easily copied or bought.",
  },
];

// PROBLEM
export const startWithProblem = [
  "Guides product design and feature prioritization.",
  "Improves messaging by aligning with customer pain.",
  "Helps in identifying early adopters.",
  "Makes it easier to test assumptions.",
];

export const problemTips = [
  {
    tip: "Interview potential users",
    description:
      "Ask open-ended questions about their day-to-day struggles. Don’t lead them — just listen.",
  },
  {
    tip: "Spot recurring pain points",
    description:
      "If multiple people complain about the same issue, you’ve likely found something worth solving.",
  },
  {
    tip: "Dig beneath the surface",
    description:
      "Separate symptoms from root causes. The real problem is often hiding under what people say.",
  },
  {
    tip: "Be specific",
    description:
      "Avoid vague statements like 'people don’t like budgeting.' Get clear on who, what, and why.",
  },
];

export const problemPitfalls = [
  {
    icon: TbTargetOff,
    label: "Jumping straight to the solution without validating the problem.",
    description:
      "It's tempting to start building right away, especially when you're excited. But if the problem hasn’t been validated with real users, your solution may solve nothing.",
  },
  {
    icon: RiFocus3Fill,
    label: "Listing too many vague or low-priority problems.",
    description:
      "Not all problems are worth solving. If your list is full of unclear or minor pain points, it can dilute your focus and confuse your messaging. Prioritize the top 1–3 urgent problems.",
  },
  {
    icon: PiUserFocusFill,
    label: "Ignoring user research.",
    description:
      "Assumptions aren’t facts. Skipping direct conversations with real users means you risk building something based on guesswork, not insight.",
  },
  {
    icon: FaUsersViewfinder,
    label: "Assuming your own experience represents the market.",
    description:
      "Just because you experienced a problem doesn’t mean everyone else has. Validate broadly — across different users, use cases, and contexts.",
  },
];

// CUSTOMER SEGMENTS
export const customerSegments = [
  {
    icon: WiMoonAltFirstQuarter,
    label: "Early Adopters",
    description:
      "People most eager to try your solution. Vital for feedback and traction.",
  },
  {
    icon: FaUsers,
    label: "Primary Users",
    description: "Your main target audience — those who benefit most.",
  },
  {
    icon: HiUsers,
    label: "Secondary Users",
    description: "Not your main focus, but still affected or involved.",
  },
  {
    icon: FaUserTie,
    label: "Decision Makers",
    description:
      "For B2B solutions, these are the people who make the purchase decision.",
  },
  {
    icon: FaPeoplePulling,
    label: "Influencers",
    description:
      "People who can influence your customers’ decision to use your product.",
  },
];

export const customerSegmentsPitfalls = [
  {
    icon: GiMultipleTargets,
    label: "Targeting too broad an audience",
    description:
      "Saying your product is “for everyone” dilutes its value. A broad focus makes it hard to build traction, craft messaging, or prioritize features. Start with a narrow, well-defined segment.",
  },
  {
    icon: FaPersonCircleQuestion,
    label: "Skipping research and relying on assumptions",
    description:
      "Guessing who your customers are (instead of asking them) can lead to wasted effort. Real conversations and data are critical to avoid building for a non-existent need.",
  },
  {
    icon: FaUsersSlash,
    label: "Confusing users with buyers",
    description:
      "The person using your product isn’t always the one paying for it—especially in B2B. Know the difference so you can appeal to both with the right value proposition.",
  },
  {
    icon: FaUserSecret,
    label: "Ignoring influencers or hidden decision-makers",
    description:
      "In many buying processes, others play a role—like managers, partners, or even online reviews. If you overlook them, your customer journey might fall apart mid-way.",
  },
];

// UNIQUE VALUE PROPOSITION
export const componentsOfUvp = [
  {
    icon: TbTargetArrow,
    label: "Clarity",
    description:
      "Be direct and avoid jargon. Your message should be easily understood in seconds.",
  },
  {
    icon: FaHandsHelping,
    label: "Relevance",
    description:
      "Show how your offering solves a real, important problem for a specific customer segment.",
  },
  {
    icon: GiChoice,
    label: "Differentiation",
    description:
      "Make it clear how you’re different from (and better than) the competition.",
  },
  {
    icon: BsGraphUpArrow,
    label: "Specific Benefits",
    description: "Highlight measurable or tangible value customers can expect.",
  },
];

export const uvpQuestions = [
  {
    question: "What unique solution are you offering?",
    answer:
      "Describe the core problem you solve in a way that’s hard to find elsewhere.",
  },
  {
    question: "What value do customers get immediately?",
    answer:
      "Focus on the primary benefit users notice or gain as soon as they engage.",
  },
  {
    question: "Why should customers trust you?",
    answer:
      "Highlight your credibility — experience, results, testimonials, or social proof.",
  },
  {
    question: "How is your product different from existing options?",
    answer:
      "Point out what sets you apart — your approach, features, price, or experience.",
  },
];

export const uvpPitfalls = [
  {
    icon: GiPerspectiveDiceSixFacesRandom,
    label: "Making vague claims (“best quality!”) with no proof",
    description:
      "Claims like 'best' or '#1' are meaningless unless backed by evidence. Customers want specifics — testimonials, results, or stats — not buzzwords.",
  },
  {
    icon: FaScrewdriverWrench,
    label: "Focusing on features instead of benefits",
    description:
      "Listing features doesn't show how your product improves the user's life. Focus on the outcomes your product delivers — time saved, pain avoided, money gained.",
  },
  {
    icon: IoLanguage,
    label: "Using technical language the customer doesn’t understand",
    description:
      "If your message is full of jargon, most users will tune out. Keep your language simple, clear, and relatable to your audience’s everyday experience.",
  },
  {
    icon: FaUsersSlash,
    label: "Trying to appeal to everyone",
    description:
      "A UVP that tries to reach everyone ends up resonating with no one. Be specific about who your product is for and why it matters to them.",
  },
];

// SOLUTION
export const solutionStructure = [
  {
    title: "1. Match Each Problem with a Core Solution",
    description:
      "Show alignment: each solution should tie directly to one of your listed problems. Use one sentence per problem-solution pair.",
    example: `Problem 1 → Solution 1  
  Problem 2 → Solution 2  
  Problem 3 → Solution 3`,
  },
  {
    title: "2. Keep It Simple (MVP Thinking)",
    description:
      "Focus on the Minimum Viable Product (MVP). Your MVP is the simplest version of your solution that still solves the core problem for early users. It helps you launch faster, learn quickly, and avoid building unnecessary features. Focus on delivering value — not perfection. What’s the simplest feature set that solves the core problems?",
    example:
      "Problem: Small business owners can’t track daily expenses.\nSolution: A mobile app that lets users log and categorize expenses in under 30 seconds.",
  },
  {
    title: "3. Optional: Visual Summary or Icons",
    description:
      "You can use checkmarks, icons, or a flow diagram to make the section more engaging and easier to scan.",
    example:
      "✅ Use visuals to show steps or flow: Problem → Solution → Outcome",
  },
];

export const solutionPitfalls = [
  {
    icon: FaHourglassStart,
    label: "Adding too many features too early",
    description:
      "Focus on solving the core problem first. More features can add complexity and distract from the main value.",
  },
  {
    icon: TbTargetOff,
    label: "Creating solutions that don’t directly tie to a problem",
    description:
      "Every solution should clearly address a problem you've identified. Avoid building for problems that don’t exist.",
  },
  {
    icon: FaScrewdriverWrench,
    label: "Describing features, not solutions",
    description:
      "Features are tools. Customers care more about what those tools help them accomplish — the outcome or benefit.",
  },
  {
    icon: GiJigsawPiece,
    label: "Getting too technical too soon",
    description:
      "Avoid overwhelming users with technical details. Lead with the value, not the inner workings.",
  },
];

// CHANNELS
export const channelTypes = [
  {
    title: "Awareness Channels",
    description: "Used to make potential customers aware of your product:",
    items: [
      "Social media (Instagram, Twitter, LinkedIn)",
      "Content marketing (blogs, YouTube)",
      "Paid ads (Google Ads, Facebook Ads)",
      "SEO/organic search",
      "Influencer marketing",
    ],
  },
  {
    title: "Evaluation Channels",
    description: "Help customers learn more and decide:",
    items: [
      "Product demos",
      "Webinars",
      "Landing pages or free trials",
      "Testimonials and reviews",
    ],
  },
  {
    title: "Purchase Channels",
    description: "Where customers actually buy:",
    items: [
      "E-commerce website",
      "App stores",
      "Direct sales (in-person or online)",
    ],
  },
  {
    title: "Delivery Channels",
    description: "How the product/service is delivered:",
    items: [
      "Digital download",
      "Shipping",
      "In-app access",
      "Onboarding emails or walkthroughs",
    ],
  },
  {
    title: "Support Channels",
    description: "After-purchase assistance:",
    items: [
      "Help desk or live chat",
      "Email support",
      "Community forums or FAQs",
    ],
  },
];

export const channelQuestions = [
  {
    question: "Where does my audience spend time online or offline?",
    description:
      "Go where your ideal users already hang out — not just where you want them to be.",
  },
  {
    question: "What channels do they trust?",
    description:
      "Use platforms or methods that already have credibility with your audience.",
  },
  {
    question: "Which channels are cost-effective at my current stage?",
    description:
      "Focus on affordable, high-impact options, especially if you're still early-stage.",
  },
  {
    question: "Can I use existing relationships or partnerships?",
    description:
      "Sometimes your network can be your strongest first channel — don’t overlook it.",
  },
];

export const channelPitfalls = [
  {
    icon: TbViewportWide,
    label: "Spreading too thin across too many channels",
    description:
      "Trying to be everywhere at once can dilute your message and drain resources.",
  },
  {
    icon: MdWrongLocation,
    label: "Choosing channels based on trends, not your customer",
    description:
      "Just because a platform is popular doesn’t mean it’s where your audience is.",
  },
  {
    icon: BiSupport,
    label: "Neglecting support or delivery experience",
    description:
      "Getting customers is important — but keeping them requires good follow-through.",
  },
  {
    icon: TbTruckDelivery,
    label: "Ignoring offline channels (when relevant)",
    description:
      "Face-to-face or print channels can be powerful depending on your audience.",
  },
];

// REVENUE
export const revenueTypes = [
  {
    title: "One-Time Sales",
    description:
      "Customers pay once to purchase your product. This is common for physical products, software licenses, or downloadable resources.",
    items: [
      "E-commerce transactions",
      "Digital downloads",
      "Licensed software (lifetime access)",
    ],
  },
  {
    title: "Subscription",
    description:
      "Recurring revenue model where customers pay periodically (e.g. monthly, yearly) for continued access to your service or product.",
    items: [
      "SaaS products",
      "Streaming services",
      "Membership-based platforms",
    ],
  },
  {
    title: "Freemium + Premium",
    description:
      "Offer a free basic version and charge for access to premium features or content.",
    items: [
      "Mobile apps with in-app purchases",
      "Productivity tools with feature upgrades",
      "Cloud storage limits and tiers",
    ],
  },
  {
    title: "Usage-Based",
    description:
      "Customers pay based on how much they use — perfect for services that scale with demand.",
    items: [
      "Cloud hosting (e.g. AWS, Azure)",
      "API call pricing",
      "SMS or email-based platforms",
    ],
  },
  {
    title: "Licensing or Royalties",
    description:
      "Earn revenue by allowing others to use your intellectual property, content, or brand.",
    items: [
      "Technology licensing",
      "Media/music royalties",
      "Franchise agreements",
    ],
  },
  {
    title: "Commission or Brokerage",
    description:
      "Earn a fee for facilitating or referring a transaction between two parties.",
    items: [
      "Marketplaces (e.g. Etsy, Airbnb)",
      "Affiliate marketing",
      "Real estate or recruitment agents",
    ],
  },
  {
    title: "Advertising",
    description:
      "Generate revenue from placing ads within your platform or content.",
    items: [
      "Banner ads on blogs or websites",
      "Sponsored posts",
      "Video ads in free apps",
    ],
  },
];

export const revenueQuestions = [
  {
    question: "What are customers already used to paying for in this space?",
    description:
      "Study competitors and customer behavior to align your model with what people already expect — or improve on it.",
  },
  {
    question: "Can your revenue model scale with growth?",
    description:
      "Choose a model that grows with you — recurring or usage-based streams tend to scale better than one-off sales.",
  },
  {
    question: "Will pricing feel fair and aligned with the value delivered?",
    description:
      "Pricing should reflect the value your product brings. Customers need to feel the exchange is worth it.",
  },
  {
    question: "Are there multiple revenue streams you can explore?",
    description:
      "Think beyond one approach — primary and secondary streams (like ads or upgrades) can diversify your income.",
  },
];

export const revenuePitfalls = [
  {
    icon: BsGraphDown,
    label: "Pricing Too Low",
    description:
      "Setting prices too low can attract customers, but may not cover your costs or allow your business to grow.",
  },
  {
    icon: TbMathOff,
    label: "Overcomplicating the Model",
    description:
      "If it takes too long to explain how you make money, customers — and even your team — might get confused or lose interest.",
  },
  {
    icon: BiSolidTrafficBarrier,
    label: "Ignoring Payment Barriers",
    description:
      "If checkout is slow or confusing, people will leave before paying. Make it easy for users to complete a purchase.",
  },
  {
    icon: LiaMoneyBillAlt,
    label: "Relying on One Revenue Source",
    description:
      "Depending on a single income stream (like ads) is risky. If that stream fails, your business could be in trouble.",
  },
];

export const costStructure = [
  {
    title: "1. List Major Cost Categories",
    description:
      "Break your expenses into key areas needed to run and grow your business. Use general groupings at this stage.",
    example: `💻 Product Development: Tools, software, infrastructure
  🧑‍💼 People: Salaries, freelancers, support staff
  📣 Marketing & Sales: Ads, tools, commissions
  🏢 Operations: Office, logistics, admin
  🚪 Customer Support: Helpdesk tools, training, returns`,
  },
  {
    title: "2. Distinguish Between Fixed and Variable Costs",
    description:
      "Identify which costs stay constant and which scale with usage. This helps you estimate your break-even point.",
    example: `📋 Fixed Costs: Hosting, software licenses, salaries
  🚚 Variable Costs: Shipping, transaction fees, contractor pay`,
  },
];

export const costPitfalls = [
  {
    icon: AiOutlineRise,
    label: "Underestimating Scaling Costs",
    description:
      "You may plan for early growth but forget how expensive things can get as usage increases — support, servers, staff, and more.",
  },
  {
    icon: FaTools,
    label: "Forgetting One-Time Startup Expenses",
    description:
      "Initial costs like equipment, setup fees, and legal paperwork can add up — don’t leave them out of your cost estimate.",
  },
  {
    icon: VscGistSecret,
    label: "Ignoring Hidden Costs",
    description:
      "Taxes, payment processor fees, and licensing costs can eat into revenue if they aren’t factored in early.",
  },
];

//KEY METRICS
export const keyMetrics = [
  {
    label: "Customer Acquisition Rate",
    description: "How many new users/customers you're getting.",
  },
  {
    label: "Retention Rate",
    description: "How many people keep coming back or using your product.",
  },
  {
    label: "Churn Rate",
    description:
      "The percentage of users or customers who stop using your product.",
  },
  {
    label: "Revenue Growth",
    description: "Are your earnings increasing month-over-month?",
  },
  {
    label: "Conversion Rate",
    description:
      "Percentage of visitors who take a desired action (sign up, buy, etc.)",
  },
  {
    label: "Cost per Acquisition (CPA)",
    description: "How much it costs to gain a new customer.",
  },
  {
    label: "Customer Lifetime Value (LTV)",
    description: "How much a customer brings in over their lifetime.",
  },
];

export const metricComparisons = [
  {
    vanity: {
      label: "Website Visits",
      reason:
        "Lots of traffic, but no clue if people are signing up or buying.",
      icon: FaThumbsUp,
    },
    actionable: {
      label: "Conversion Rate",
      reason: "Shows how many visitors take action like signing up or buying.",
      icon: FaCheckCircle,
    },
  },
  {
    vanity: {
      label: "Social Followers",
      reason: "Looks popular, but doesn’t reflect real customers.",
      icon: FaThumbsUp,
    },
    actionable: {
      label: "Churn Rate",
      reason: "Reveals if users are sticking around or dropping off.",
      icon: FaCheckCircle,
    },
  },
];

export const keyMetricsPitfalls = [
  {
    icon: FaListUl,
    label: "Tracking too many metrics",
    description:
      "Having too many numbers can be overwhelming. Focus on a few that clearly show how your business is doing.",
  },
  {
    icon: FaStarHalfAlt,
    label: "Using ‘feel-good’ metrics",
    description:
      "Likes, followers, or traffic look nice but don’t tell you if your business is growing or making money.",
  },
  {
    icon: FaChartLine,
    label: "Ignoring trends over time",
    description:
      "A single spike means little. Look for consistent growth or warning signs in patterns.",
  },
  {
    icon: FaCog,
    label: "Not linking metrics to actions",
    description:
      "Metrics should lead to decisions. If you’re not changing anything based on data, it’s just noise.",
  },
  {
    icon: FaClock,
    label: "Not updating what you track",
    description:
      "What matters now might not matter later. As you grow, review and refine your key metrics.",
  },
];

export const unfairAdvantages = [
  {
    icon: FaUserSecret,
    type: "Insider Knowledge",
    example: "Experience in the field",
    description: "Comes from deep exposure and understanding.",
  },
  {
    icon: FaStar,
    type: "Unique Personal Brand",
    example: "A loyal online community",
    description: "Built over time through trust and content.",
  },
  {
    icon: FaHandshake,
    type: "Exclusive Partnerships",
    example: "Agreements with key suppliers",
    description: "Hard to replicate or replace.",
  },
  {
    icon: FaCogs,
    type: "Proprietary Technology",
    example: "Custom software or tools",
    description: "Takes time, expertise, and effort to build.",
  },
  {
    icon: FaSearch,
    type: "Customer Insight",
    example: "Deep understanding of a niche",
    description: "Gained through direct exposure or research.",
  },
  {
    icon: FaRocket,
    type: "Early Traction",
    example: "Media buzz or loyal users",
    description: "Gives you a head start others don’t have.",
  },
  {
    icon: FaUsers,
    type: "Community or Network",
    example: "Access to mentors or investors",
    description: "Built through long-term relationships.",
  },
];

export const unfairAdvantagePitfalls = [
  {
    icon: FaExclamationTriangle,
    label: "Overstating Your Advantage",
    description:
      "Claiming an edge without clear evidence or traction can undermine credibility.",
  },
  {
    icon: FaCopy,
    label: "Easily Copied Advantage",
    description:
      "If others can buy, build, or replicate it quickly, it’s not truly unfair.",
  },
  {
    icon: FaShieldAlt,
    label: "Not Protecting It",
    description:
      "Strong advantages should be defensible — through IP, contracts, or strategic barriers.",
  },
  {
    icon: FaSyncAlt,
    label: "Ignoring Market Changes",
    description:
      "What’s an advantage today may become irrelevant if the landscape shifts.",
  },
  {
    icon: FaInfoCircle,
    label: "Confusing Strength with Uniqueness",
    description:
      "Being good at something is not the same as having an unfair edge others can’t match.",
  },
];

// SUMMARY
export const leanCanvasBlocks = [
  {
    title: "Problem",
    icon: FaExclamationTriangle,
    summary: "A quick recap of the main customer problems you've identified.",
  },
  {
    title: "Customer Segments",
    icon: FaUsers,
    summary:
      "Who you're solving the problem for — your target users or customers.",
  },
  {
    title: "Unique Value Proposition",
    icon: FaLightbulb,
    summary:
      "What sets your solution apart and makes it worth paying attention to.",
  },
  {
    title: "Solution",
    icon: FaRocket,
    summary:
      "The simplest version of your product or service that solves the problem.",
  },
  {
    title: "Channels",
    icon: FaChartLine,
    summary:
      "How you'll reach your customers and deliver your value proposition.",
  },
  {
    title: "Revenue Streams",
    icon: FaDollarSign,
    summary: "How your business will make money from each segment.",
  },
  {
    title: "Cost Structure",
    icon: FaBalanceScale,
    summary: "Your major expenses to build and operate the business.",
  },
  {
    title: "Key Metrics",
    icon: FaChartLine,
    summary: "The numbers that tell you how well your business is doing.",
  },
  {
    title: "Unfair Advantage",
    icon: FaKey,
    summary:
      "Something that can't easily be copied or bought — your lasting edge.",
  },
];
