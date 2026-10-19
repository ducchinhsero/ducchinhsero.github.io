export type Locale = "vi" | "en"
type ProjectId = "zodanang" | "edge-ai" | "sumo"

type Content = {
  name: string
  pageTitle: string
  pageDescription: string
  skip: string
  location: string
  about: string
  bio: string
  download: string
  contactAction: string
  status: string
  availability: string
  featured: string
  experience: string
  workRole: string
  workDescription: string
  contact: string
  email: string
  phone: string
  projects: string
  demo: string
  newTab: string
  projectItems: { id: ProjectId; title: string; role: string; description: string }[]
  skills: string
  skillGroups: string[]
  education: string
  university: string
  degree: string
  awards: string
  awardItems: string[]
  languages: string
  vietnamese: string
  native: string
  english: string
  theme: string
  footer: string
}

export const profileTitle = "Full Stack Developer"
export const profileHighlights = ["React", "TypeScript", "Express", "MongoDB"]
export const cvPath = "/cv/Dang_Duc_Chinh_Full_Stack_Developer_CV_Portfolio.pdf"

export const content: Record<Locale, Content> = {
  vi: {
    name: "Đặng Đức Chính",
    pageTitle: "Đặng Đức Chính | Full Stack Developer",
    pageDescription: "Portfolio của Đặng Đức Chính, lập trình viên Full Stack tại Đà Nẵng, Việt Nam, với các dự án phát triển web, tích hợp AI và hệ thống nhúng.",
    skip: "Đến nội dung chính",
    location: "Đà Nẵng, Việt Nam",
    about: "Giới thiệu",
    bio: "Tôi là Đặng Đức Chính, lập trình viên Full Stack tại Đà Nẵng. Tôi xây dựng ứng dụng web với React, TypeScript, Express và MongoDB, có kinh nghiệm phát triển RESTful API và tích hợp các tính năng AI. Nền tảng Kỹ thuật máy tính của tôi còn bao gồm các dự án Edge AI và hệ thống nhúng.",
    download: "Tải CV (PDF)",
    contactAction: "Liên hệ với tôi",
    status: "Sẵn sàng làm việc",
    availability: "Đang tìm cơ hội làm việc toàn thời gian ở vị trí Full Stack Developer.",
    featured: "Dự án tiêu biểu",
    experience: "Kinh nghiệm",
    workRole: "Thực tập sinh Backend — Trưởng nhóm",
    workDescription: "Dẫn dắt phát triển backend cho nền tảng giao hàng và quản lý đơn hàng, điều phối công việc giữa các thành viên. Thiết kế RESTful API và kiến trúc client–server, tham gia xây dựng luồng đặt hàng và giao hàng.",
    contact: "Kết nối",
    email: "Email",
    phone: "Điện thoại",
    projects: "Dự án tiêu biểu",
    demo: "Xem website",
    newTab: "mở trong thẻ mới",
    projectItems: [
      {
        id: "zodanang",
        title: "ZoDaNang",
        role: "Lập trình viên Full Stack",
        description: "Nền tảng khám phá du lịch với tìm kiếm địa điểm, bộ lọc, bản đồ tương tác, lưu địa điểm và đánh giá cộng đồng. Phát triển RESTful API, tích hợp MongoDB và Cloudinary, cùng trợ lý du lịch dùng Groq AI để gợi ý điểm đến và lập kế hoạch chuyến đi. Triển khai frontend trên Vercel và backend trên Render.",
      },
      {
        id: "edge-ai",
        title: "Giám sát sức khỏe & nhận diện hành vi bằng Edge AI",
        role: "Đồ án tốt nghiệp",
        description: "Hệ thống xử lý dữ liệu cảm biến sinh lý và chạy suy luận học máy trực tiếp trên Raspberry Pi 5. Xử lý dữ liệu ECG và gia tốc kế, trích xuất hơn 40 đặc trưng HRV, triển khai HistGradientBoosting và mô hình kết hợp SVM–Random Forest để phân loại biến cố tim và trạng thái căng thẳng.",
      },
      {
        id: "sumo",
        title: "Robot SUMO tự hành",
        role: "Phụ trách toàn bộ phần mềm nhúng · 2023–2024",
        description: "Độc lập phát triển phần mềm nhúng: thu thập dữ liệu cảm biến, phát hiện đối thủ, điều khiển động cơ, điều hướng tự hành và ra quyết định thời gian thực. Xây dựng logic tìm kiếm, bám đuổi, tấn công và tránh biên; tích hợp cảm biến, mạch điều khiển động cơ và cải thiện hiệu năng qua thử nghiệm.",
      },
    ],
    skills: "Kỹ năng chuyên môn",
    skillGroups: ["Ngôn ngữ lập trình", "Frontend", "Backend & Dữ liệu", "Công cụ & Triển khai", "Tích hợp & Công cụ AI"],
    education: "Học vấn",
    university: "Trường Đại học Bách khoa — Đại học Đà Nẵng (DUT)",
    degree: "Kỹ sư ngành Kỹ thuật máy tính",
    awards: "Giải thưởng",
    awardItems: ["Giải Nhì — Cuộc thi Robot SUMO cấp trường", "Giải Ba — Cuộc thi Robot SUMO cấp trường"],
    languages: "Ngôn ngữ",
    vietnamese: "Tiếng Việt",
    native: "Bản ngữ",
    english: "Tiếng Anh",
    theme: "Đổi giao diện sáng/tối",
    footer: "Lập trình viên Full Stack · Đà Nẵng, Việt Nam",
  },
  en: {
    name: "Dang Duc Chinh",
    pageTitle: "Dang Duc Chinh | Full Stack Developer",
    pageDescription: "Portfolio of Dang Duc Chinh, a Full Stack Developer based in Da Nang, Vietnam, featuring web development, AI integration, and embedded systems projects.",
    skip: "Skip to main content",
    location: "Da Nang, Vietnam",
    about: "About me",
    bio: "I'm Dang Duc Chinh, a Full Stack Developer based in Da Nang, Vietnam. I build web applications with React, TypeScript, Express, and MongoDB, with experience developing RESTful APIs and integrating AI-powered features. My background in Computer Engineering also includes Edge AI and embedded systems projects.",
    download: "Download CV (PDF)",
    contactAction: "Get in touch",
    status: "Open to opportunities",
    availability: "Looking for a full-time opportunity as a Full Stack Developer.",
    featured: "Featured projects",
    experience: "Experience",
    workRole: "Backend Developer Intern — Team Lead",
    workDescription: "Led backend development for a delivery and order-management platform and coordinated development tasks across team members. Designed RESTful APIs and client–server architecture, and contributed to order placement and delivery workflows.",
    contact: "Connect",
    email: "Email",
    phone: "Phone",
    projects: "Selected projects",
    demo: "Visit website",
    newTab: "opens in a new tab",
    projectItems: [
      {
        id: "zodanang",
        title: "ZoDaNang",
        role: "Full Stack Developer",
        description: "A travel discovery platform with location search, filters, interactive maps, saved places, and community reviews. Developed RESTful APIs, integrated MongoDB and Cloudinary, and added a Groq AI-powered assistant for destination recommendations and trip planning. Deployed frontend services on Vercel and backend services on Render.",
      },
      {
        id: "edge-ai",
        title: "Edge AI Health Monitoring & Behavior Recognition",
        role: "Graduation thesis",
        description: "An Edge AI monitoring system that processes physiological sensor data and runs machine-learning inference locally on Raspberry Pi 5. Processed ECG and accelerometer data, extracted 40+ HRV features, and implemented HistGradientBoosting and SVM–Random Forest ensemble models for cardiac-event and stress classification.",
      },
      {
        id: "sumo",
        title: "Autonomous SUMO Robot",
        role: "Sole Embedded Software Developer · 2023–2024",
        description: "Independently developed the robot's embedded software, covering sensor acquisition, opponent detection, motor control, autonomous navigation, and real-time decision-making. Implemented searching, tracking, attacking, and boundary-avoidance logic; integrated sensors and motor drivers, and refined control performance through iterative testing.",
      },
    ],
    skills: "Technical skills",
    skillGroups: ["Languages", "Frontend", "Backend & Data", "Tools & Deployment", "AI Integration & Tools"],
    education: "Education",
    university: "The University of Danang – University of Science and Technology (DUT)",
    degree: "Bachelor of Engineering in Computer Engineering",
    awards: "Honors & awards",
    awardItems: ["Second Prize — University SUMO Robot Competition", "Third Prize — University SUMO Robot Competition"],
    languages: "Languages",
    vietnamese: "Vietnamese",
    native: "Native",
    english: "English",
    theme: "Toggle light/dark theme",
    footer: "Full Stack Developer · Da Nang, Vietnam",
  },
}

export const projectDetails: Record<ProjectId, { technologies: string[]; href?: string }> = {
  zodanang: { technologies: ["React", "TypeScript", "Express", "MongoDB", "Groq AI", "Cloudinary"], href: "https://zodanang.online" },
  "edge-ai": { technologies: ["Python", "Raspberry Pi 5", "Polar H10", "Scikit-learn", "SciPy", "NeuroKit2"] },
  sumo: { technologies: ["ESP32", "Arduino", "C/C++", "Embedded Systems"] },
}

export const skillTechnologies = [
  ["TypeScript", "JavaScript", "Python", "C/C++"],
  ["React", "Vite", "Progressive Web Apps (PWA)"],
  ["Express", "FastAPI", "RESTful APIs", "MongoDB", "MySQL", "Cloudinary"],
  ["Git", "GitHub", "Docker", "Linux", "Vercel", "Render"],
  ["Groq AI API", "ChatGPT", "OpenAI Codex", "Cursor", "Claude", "GitHub Copilot"],
]
