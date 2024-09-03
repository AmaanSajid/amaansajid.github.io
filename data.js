export const bio = [
    "Hello! I am Amaan Sajid Shaik, a Computer Science Graduate major.",
    `My skill work is based on Python and SQL, and have honed my skills in developing AI-driven solutions, building Machine learning models, data pipelines, and conducting advanced data analysis`,
    `I'm passionate about solving complex problems in Artificial Intelligence and Data Science and am actively seeking internships and full-time opportunities in these fields. I'm eager to apply my technical expertise and innovative mindset to industry-relevant projects and contribute to transformative solutions.`,
];

export const skills = [
    {
        title: "Languages",
        skillName: "Python, SQL,  R Programming, Javascript ",
        color: "1",
        percentage: "100",
    },
    {
        title: "AI and Cloud",
        skillName: "AWS, Google Cloud Platform, Jupyter Notebook, TensorFlow, PyTorch, Google Colab, HuggingFace, LangChain, HuggingFace",
        color: "6",
        percentage: "100",
    },
    {
        title: "Development",
        skillName: " HTML, CSS, React, FastAPI, Streamlit, Tableau, PowerBI",
        color: "4",
        percentage: "100",
    },
    {
        title: "Version Control",
        skillName: "GitHub",
        color: "7",
        percentage: "100",
    },
    {
        title: "Databases",
        skillName: "MySQL, MSSQL, MongoDB, PostgreSQL",
        color: "5",
        percentage: "100",
    },
    {
        title: "IDE",
        skillName: "VS Code, RStudio, SQL Server Management Studio",
        color: "6",
        percentage: "100",
    },
];

export const projects = {
    LLMProjects: [
        
        {
            projectName: "Project-Prodigy",
            image: "images/project-prodigy.png",
            summary:
                "In this project, I developed a Software Development and Team Management Chatbot using Gemini-1.5 Flash. The chatbot's key features include creating workflows, implementing PDF RAG pipelines, and saving chat messages within the development project. It efficiently stores messages and team member details in MongoDB, streamlining communication and project management.",
            preview: "https://github.com/AmaanSajid/Project-Prodigy",
            techStack: ["GCP-VertexAI", "MongoDB", "SQL", "Python","Streamlit"],
        },
        {
            projectName: "Resume-Smith",
            image: "images/Resume-Smith.jpg",
            summary:
                "Utilized Gemini-1.5 Pro to develop a RAG pipeline that optimizes user resumes based on specific job descriptions. Additionally, the pipeline converts resumes into industry-standard templates using LaTeX, ensuring a professional and tailored presentation. ",
            preview: "https://github.com/AmaanSajid/Embeddings-and-LLMs",
            techStack: ["Python","Latex","Gemini-1.5 Pro","LangChain"],
        },
        {
            projectName: "Interact With Agents",
            image: "images/SQL.png",
            summary:
                "Create SQL Agent and CSV Agent using Langchain, Gemini 1.5 Pro and Azure(OpenAI)[INTERNSHIP PROJECT]to Anaylsis Large amount of data  stored in Google BigQuery for productions and Project insights.[Project Name-AMPLE] ",
            preview: "https://github.com/AmaanSajid/Google-Cloud",
            techStack: ["Python","Azure(OpenAI)","Gemini-1.5 Pro","LangChain","Streamlit","Bigquery"],
        },

    ],
    MLProjects: [
        {
            projectName: "Automated Performance Assessment of Manufactured Automobile Engines",
            image: "images/Automated_project.png",
            summary:
                "Collarabated with Mahindra and Mahindra to create a Machine learning model to reduce there load and testing cost for G20 Engine. Achieved 98 percent accuracy by Data cleaning/visualzation and feature selections methods such as pearson,Select K best,Recursive Feature elimination.",
            preview: "https://github.com/AmaanSajid/4-1-Project",
            techStack: ["Python","Sklearn/Mathplotlib","Machine learning","Feature Selection Methods"],
        },
        {
            projectName: "Surrogate Model for Satellite Torque Optimization",
            image: "https://github.com/AmaanSajid/Surrogate_model_machineLearning",
            summary:
                "In this project, we developed a surrogate model to optimize the magnetic moment for satellite torque control using machine learning. The problem involved calculating the optimal magnetic moments, torque and magnetic field using Gurobi optimizer. Optimize power consumption by Machine learning.",
            preview: "https://github.com/AmaanSajid/Surrogate_model_machineLearning",
            techStack: ["GurobiPy Optimizer", "Machine Learning", "Python"],
        },
        {
            projectName: "Credit Card Frad Detection",
            image: "images/CreditCard.png",
            summary:
                "Developed a credit card fraud detection system using machine learning techniques to identify and prevent fraudulent transactions. The model was trained on historical transaction data, leveraging algorithms to detect anomalies and patterns indicative of fraud.",
            preview: "https://github.com/AmaanSajid/Credit_Card",
            techStack: ["Python", "Machine learning", "Data Anaylsis"],
        },
        {
            projectName: "Fake News Classification Model",
            image: "images/fakenews.webp",
            summary: "In this project, I performed data cleaning & processing using NLP techniques and used ML Algorithms like Logistic Regression, Random Forrest, and SVM to classify Credit  as fake/real.",
            preview: "https://github.com/AmaanSajid/Fake-News-Detection",
            techStack: ["Python", "Machine Learning"],
        },  
    ],
    PythonProjects: [
        {
            projectName: "Event Management for Mahindra University",
            image: "images/Event_management.jpeg",
            summary:
                "Created fully functional Event Management Project for Mahindra University Club to have a Hazzle Free Event Managemetn, Created Features such as Event Calander, Event Budget, Event Blogs and Gallery. ",
            preview: "https://github.com/AmaanSajid/Event_managment_Front_End",
            techStack: ["React","JavaScript","MongoDB","FastAPI","CSS",],
        },
        {
            projectName: "Zomato Analysis",
            image: "images/opti.png",
            summary:
                "Developed a Zomato Analysis for better Analysis of the zomato restaurants.",
            preview: "https://github.com/AmaanSajid/Zomato-Analysis",
            techStack: ["Python", "FastAPI","SQLlite3","React"],
        },
        {
            projectName: "Rise and Fall of Programming Lang",
            image: "images/programing_rise_fall.png",
            summary:
                "Created a simple R file for Analysing the Rise and Fall of Programming Languages Using R visuzalations. Data Scrapping Using SQL on StackOverFlow based on Stack Questions asked for past 15 years.",
            preview: "https://github.com/AmaanSajid/Rise-Fall-Prog_lang",
            techStack: ["R"],
        },
        // {
        //     projectName: "Web Scraping Bot",
        //     image: "images/web-scraping-diagram.png",
        //     summary:
        //         "Using BeautifulSoup to build a Web Scraping Bot; Scraping stock data on a day to day basis & Sending through Mail.",
        //     preview: "https://github.com/medprod/webscraping-bot",
        //     techStack: ["Python", "Web Scraping"],
        // },

    ],
    CloudProjects: [
        {
            projectName: "ETL Using GCP",
            image: "images/ETL.png",
            summary:
                "Created a fully automated and reusable data pipeline using Google Cloud Platform services like Data Fusion,Cloud Functions, BigQuery, Firestore, and Apache Airflow to handle large-scale data processing and analytics, leveraging common design patterns across traditional and big data solutions.",
            preview: "https://github.com/AmaanSajid/ETL-projects",
            techStack: ["Google Cloud Platform", "Python", "SQL",],
        },
        // {
        //     projectName: "Analysis: Flavors of Cacao",
        //     image: "images/cacao.png",
        //     summary: "A thorough analysis and visualization of a dataset that focuses on expert ratings of various types of dark chocolates.",
        //     preview:
        //         "https://github.com/medprod/open-data-proj2",
        //     techStack: ["Python", "Data Analysis", "Data Visualization"],
        // },
        // {
        //     projectName: "Analysis: City of Chicago Salaries",
        //     image: "images/chicago.png",
        //     summary: "A thorough analysis and visualization of the employees, positions, and salaries in Chicago.",
        //     preview:
        //         "https://github.com/medprod/open-data-proj1",
        //     techStack: ["Python", "Data Analysis", "Data Visualization"],
        // },
    ],
};

export const experience = [
    {
        title: "Dr Reddys Labortories",
        duration: "May 2024 - Aug 2024",
        subtitle: "Artifical Intellengence Intern",
        details: [
            `Created various RAG architectures and LLM pipelines for various project. Finalized Tech Stack. Lead Project Vision and AMPLE projects at initial Stages.`,
            `Played a key role in the Project Vision, AMPLE and S2L In-house project, In which S2L had started production and usage by Cooperate employees`,
            `Experienced in GCP, Azure AI API calls, LangChain and Hugging Face to produce End-End products.`,
            `Demonstrated proficiency in Agile principles, collaborating with cross-functional teams using Scrum frameworks to
            deliver high-quality results.`
        ],
        tags: ["GCP", "OpenAI", "Streamlit", "LangChain", "HuggingFace",,"OpenCV","SQL"],
        icon: "briefcase",
    },
    
];

export const education = [
    {
        title: "Masters in Computer Science",
        duration: "Aug 2024 - 2026",
        subtitle: "University of Florida, Florida, USA",
        details: [],
        tags: ["Advanced Data Structures","Analysis of Alogorithm","Software Engineering","Research Methods for HCC","Data Science","Computer Network Security"],
        icon: "graduation-cap",
    },
    {
        title: "CISE Senior Certificate Program",
        duration: "Jan 2024 - May 2024",
        subtitle: "University of Florida, Gainesville, USA",
        details: [],
        tags: [
            "Analysis of Algorithms",
            "Advanced Data Structures",
            "UI/UX Design",
            "Software Engineering",
        ],
        icon: "graduation-cap",
    },
    {
        title: "Computer Science and Engineering (B.Tech)",
        duration: "Aug 2020 - Jun 2024",
        subtitle: "Mahindra University, Hyderabad, India",
        details: [],
        tags: [
            "Data Structures & Algorithms",
            "Machine Learning",
            "Database Management Systems",
            "Natural Language Processing",
            "Database Management Systems",
            "Software Engineering",
            "OOPS with Java",
            "Deep Learning", "Operating Systems"
        ],
        icon: "graduation-cap",
    },

];

export const footer = [
    {
        label: "Dev Profiles",
        data: [
            
            {
                text: "GitHub",
                link: "https://github.com/AmaanSajid",
            },
            
        ],
    },
    {
        label: "Social Profiles",
        data: [
            {
                text: "Linkedin",
                link: "https://www.linkedin.com/in/amaansajid1",
            },
            
        ],
    },
    {
        label: "copyright-text",
        data: [
            "&copy; 2024 All rights reserved by Amaan, Maneesh, Medha",
        ],
    },
];